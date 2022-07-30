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
import { IconButton, Stack, TableSortLabel, TextField } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import ModeEditOutlineSharpIcon from "@mui/icons-material/ModeEditOutlineSharp";
import { Box } from "@mui/system";
import { visuallyHidden } from "@mui/material/node_modules/@mui/utils";
import { IStaff } from "../../service/StaffService";
import { IProduct } from "../../service/ProductService";
import { Link } from "react-router-dom";
import { useState } from "react";

export interface IActionTable {
  path: string;
  action: "edit" | "delete";
}
export interface IColumn {
  id: string;
  label: string;
  minWidth?: string | number;
  width?: string | number;
  align?: "right" | "left" | "center";
  alignHeader?: "right" | "left" | "center";
  sortable?: boolean;
  searchable?: boolean;
  placeholder?: string;
  format?: (value: string | number | undefined) => string;
  actions?: IActionTable[];
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
  isHasSearch: boolean;
  headCells: IColumn[];
  onFilter: Function;
  onRefreshFilter: Function;
}

function EnhancedTableHead<T>(props: EnhancedTableProps<T>) {
  const { theme } = React.useContext(ThemeCustomContext);
  const { order, orderBy, onRequestSort, headCells, isHasSearch, onFilter, onRefreshFilter } = props;
  const createSortHandler = (property: keyof T) => (event: React.MouseEvent<unknown>) => {
    onRequestSort(event, property);
  };

  const handleFilter = (e: any, key: any) => {
    if (e.target.value) onFilter(key, e.target.value);
    else onRefreshFilter(key);
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
            {isHasSearch ? (
              !["id", "no", "action"].includes(headCell.id) && headCell.searchable ? (
                <TextField
                  onKeyUp={(e) => handleFilter(e, headCell.id)}
                  className="h-12 py-2 shadow-sm"
                  size="small"
                  placeholder={headCell.placeholder || headCell.id}
                  variant="outlined"
                  InputProps={{
                    style: {
                      color: theme.color,
                      backgroundColor: theme.backgroundColor,
                      borderColor: theme.color + " !important",
                      borderWidth: "1px",
                    },
                  }}
                ></TextField>
              ) : (
                <div className="h-12"></div>
              )
            ) : (
              <></>
            )}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

export default function ICustomTable({
  data,
  removeComponent,
}: {
  data: IData<IProduct> | IData<IStaff>;
  removeComponent?: {
    DeleteComponent: any;
    isOpenDeleteDialog: boolean;
    setIsOpenDeleteDialog: Function;
  };
}) {
  const { theme } = React.useContext(ThemeCustomContext);
  const { columns, rows, defaultOrder } = data;
  const [filterRows, setFilterRows] = React.useState<IProduct[] | IStaff[]>(rows);
  const isPagination = data.isPagination || !Object.keys(data).includes("isPagination") ? true : false;
  const isHasSort = columns.find((i) => i.sortable) ? true : false;
  const isHasSearch = columns.find((i) => i.searchable) ? true : false;

  const [order, setOrder] = React.useState<Order>("asc");
  const [orderBy, setOrderBy] = React.useState<keyof typeof rows[0]>(defaultOrder as keyof typeof rows[0]);
  const [defaultOrderPass, setDefaultOrderPass] = React.useState(defaultOrder);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [filter, setFilter] = useState({});

  React.useEffect(() => {
    setFilterRows(rows);
  }, [rows]);

  const toLower = (s: string) => {
    return s.toString().toLowerCase();
  };

  const onFilter = (key: keyof typeof rows[0], value: string) => {
    const filterNew = JSON.parse(JSON.stringify(filter));
    filterNew[key] = value;
    let result = rows as any;
    for (const filterKey of Object.keys(filterNew)) {
      result = result.filter((i: any) => i[filterKey] && toLower(i[filterKey]).includes(toLower(filterNew[filterKey])));
    }
    setFilterRows(result);
    setFilter(filterNew);
  };

  const onRefreshFilter = (key: string) => {
    const filterNew = JSON.parse(JSON.stringify(filter));
    delete filterNew[key];
    let result = rows as any;
    for (const filterKey of Object.keys(filterNew)) {
      result = result.filter((i: any) => i[filterKey] && toLower(i[filterKey]).includes(toLower(filterNew[filterKey])));
    }
    setFilter(filterNew);
    if (Object.keys(filterNew).length === 0) {
      setFilterRows(result);
    } else {
      setFilterRows(rows);
    }
  };

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

  const renderButton = (column: IColumn, row: any, setIsOpenDeleteDialog?: Function) => {
    const editAction = column.actions?.find((i) => i.action === "edit");
    const deleteAction = column.actions?.find((i) => i.action === "delete");

    return (
      <Stack direction="row" spacing={0}>
        {editAction ? (
          <Link to={editAction.path + `/${row.id}`}>
            <IconButton aria-label="edit item" style={{ color: theme.color }}>
              <ModeEditOutlineSharpIcon />
            </IconButton>
          </Link>
        ) : (
          <></>
        )}

        {deleteAction ? (
          <div onClick={() => (setIsOpenDeleteDialog ? setIsOpenDeleteDialog(true) : "")}>
            <IconButton aria-label="delete item" style={{ color: theme.color }}>
              <DeleteIcon />
            </IconButton>
          </div>
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
      {removeComponent ? removeComponent.DeleteComponent : <></>}
      <TableContainer>
        <Table stickyHeader aria-label="sticky table">
          <EnhancedTableHead
            onFilter={onFilter}
            onRefreshFilter={onRefreshFilter}
            isHasSearch={isHasSearch}
            order={order}
            orderBy={orderBy}
            onRequestSort={handleRequestSort}
            headCells={columns}
          />
          <TableBody className="h-full">
            {isHasSort && defaultOrderPass
              ? stableSort(filterRows as any, getComparator(order, orderBy))
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
                                wordBreak: "break-all",
                                width: column.minWidth,
                                border: "0px",
                              }}
                            >
                              {column.id === "action"
                                ? renderButton(
                                    column,
                                    row,
                                    removeComponent ? removeComponent.setIsOpenDeleteDialog : () => {}
                                  )
                                : column.format
                                ? column.format(value)
                                : value}
                            </TableCell>
                          );
                        })}
                      </TableRow>
                    );
                  })
              : filterRows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
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
                              wordBreak: "break-all",
                              width: column.minWidth,
                              border: "0px",
                            }}
                          >
                            {column.id === "action"
                              ? renderButton(
                                  column,
                                  row,
                                  removeComponent ? removeComponent.setIsOpenDeleteDialog : () => {}
                                )
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
          count={filterRows.length}
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
