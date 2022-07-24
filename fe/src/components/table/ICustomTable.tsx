import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { ThemeCustomContext } from "../../settings/theme-context";
import { IconButton, Stack, TableSortLabel } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import ModeEditOutlineSharpIcon from "@mui/icons-material/ModeEditOutlineSharp";
import { Box } from "@mui/system";
import { visuallyHidden } from "@mui/material/node_modules/@mui/utils";
import { IStaff } from "../../service/StaffService";
import { IProduct } from "../../service/ProductService";

export interface IColumn {
  id: string;
  label: string;
  minWidth?: number;
  align?: "right" | "left" | "center";
  alignHeader?: "right" | "left" | "center";
  sortable?: boolean;
  format?: (value: string | number | undefined) => string;
  actions?: string[];
}

export interface IData<T> {
  isPagination?: boolean;
  rows: T[];
  columns: IColumn[];
  defaultOrder?: keyof T;
}

function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

type Order = "asc" | "desc";

function getComparator<Key extends keyof any>(
  order: Order,
  orderBy: Key
): (a: { [key in Key]: number | string }, b: { [key in Key]: number | string }) => number {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

// This method is created for cross-browser compatibility, if you don't
// need to support IE11, you can use Array.prototype.sort() directly
function stableSort<T>(array: readonly T[], comparator: (a: T, b: T) => number) {
  const stabilizedThis = array.map((el, index) => [el, index] as [T, number]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

interface EnhancedTableProps<T> {
  onRequestSort: (event: React.MouseEvent<unknown>, property: keyof T) => void;
  order: Order;
  orderBy: string;
  headCells: IColumn[];
}

function EnhancedTableHead<T>(props: EnhancedTableProps<T>) {
  const { theme } = React.useContext(ThemeCustomContext);
  const { order, orderBy, onRequestSort, headCells } = props;
  const createSortHandler = (property: keyof T) => (event: React.MouseEvent<unknown>) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            sortDirection={orderBy === headCell.id && headCell.sortable ? order : false}
            className="uppercase"
            align={headCell.alignHeader}
            style={{ backgroundColor: theme.backgroundColor, color: theme.colorMint, minWidth: headCell.minWidth }}
          >
            {headCell.sortable ? (
              <TableSortLabel
                active={orderBy === headCell.id}
                direction={orderBy === headCell.id ? order : "asc"}
                onClick={createSortHandler(headCell.id as keyof T)}
              >
                {headCell.label}
                {orderBy === headCell.id ? (
                  <Box component="span" sx={visuallyHidden}>
                    {order === "desc" ? "sorted descending" : "sorted ascending"}
                  </Box>
                ) : null}
              </TableSortLabel>
            ) : (
              headCell.label
            )}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

export default function ICustomTable({ data }: { data: IData<IProduct> | IData<IStaff> }) {
  const { theme } = React.useContext(ThemeCustomContext);
  const { columns, rows, defaultOrder } = data;
  const isPagination = data.isPagination || !Object.keys(data).includes("isPagination") ? true : false;
  const isHasSort = columns.find((i) => i.sortable) ? true : false;

  const [order, setOrder] = React.useState<Order>("asc");
  const [orderBy, setOrderBy] = React.useState<keyof typeof rows[0]>(defaultOrder as keyof typeof rows[0]);
  const [defaultOrderPass, setDefaultOrderPass] = React.useState(defaultOrder);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleRequestSort = (event: React.MouseEvent<unknown>, property: keyof typeof rows[0]) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
    setDefaultOrderPass(property);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const renderButton = (column: IColumn) => {
    return (
      <Stack direction="row" spacing={1}>
        {column.actions?.includes("edit") ? (
          <IconButton aria-label="edit item" style={{ color: theme.color }}>
            <ModeEditOutlineSharpIcon />
          </IconButton>
        ) : (
          <></>
        )}

        {column.actions?.includes("delete") ? (
          <IconButton aria-label="delete item" style={{ color: theme.color }}>
            <DeleteIcon />
          </IconButton>
        ) : (
          <></>
        )}
      </Stack>
    );
  };

  return (
    <Paper
      elevation={0}
      style={{ backgroundColor: theme.backgroundColor, color: theme.color }}
      sx={{ width: "100%", overflow: "hidden" }}
    >
      <TableContainer>
        <Table stickyHeader aria-label="sticky table">
          <EnhancedTableHead order={order} orderBy={orderBy} onRequestSort={handleRequestSort} headCells={columns} />
          <TableBody className="h-full">
            {isHasSort && defaultOrderPass
              ? stableSort(rows as any, getComparator(order, orderBy))
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => {
                    return (
                      <TableRow className="h-full" hover role="checkbox" tabIndex={-1} key={(row as any).id.toString()}>
                        {columns.map((column) => {
                          const value = row[column.id as keyof typeof rows[0]];
                          return (
                            <TableCell
                              key={column.id}
                              align={column.align}
                              style={{
                                backgroundColor: theme.backgroundColor,
                                color: theme.color,
                                minWidth: column.minWidth,
                                border: "0px",
                              }}
                            >
                              {column.id === "action"
                                ? renderButton(column)
                                : column.format
                                ? column.format(value)
                                : value}
                            </TableCell>
                          );
                        })}
                      </TableRow>
                    );
                  })
              : rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                  return (
                    <TableRow className="h-full" hover role="checkbox" tabIndex={-1} key={row.id}>
                      {columns.map((column) => {
                        const value = row[column.id as keyof typeof rows[0]];
                        return (
                          <TableCell
                            key={column.id}
                            align={column.align}
                            style={{
                              backgroundColor: theme.backgroundColor,
                              color: theme.color,
                              minWidth: column.minWidth,
                              border: "0px",
                            }}
                          >
                            {column.id === "action"
                              ? renderButton(column)
                              : column.format
                              ? column.format(value)
                              : value}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
            {emptyRows > 0 && (
              <TableRow
                style={{
                  height: 53 * emptyRows,
                }}
              >
                <TableCell colSpan={6} />
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
      {isPagination ? (
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          style={{ backgroundColor: theme.backgroundColor, color: theme.color }}
        />
      ) : (
        <></>
      )}
    </Paper>
  );
}
