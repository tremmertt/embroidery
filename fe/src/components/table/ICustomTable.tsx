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

export interface IColumn {
  id: string;
  label: string;
  minWidth?: number;
  align?: "right" | "left" | "center";
  alignHeader?: "right" | "left" | "center";
  format?: (value: number) => string;
}

interface IData {
  isPagination?: boolean;
  rows: any[];
  columns: IColumn[];
}

export default function ICustomTable({ data }: { data: IData }) {
  const { theme } = React.useContext(ThemeCustomContext);
  const { columns, rows } = data;
  const isPagination = data.isPagination || !Object.keys(data).includes("isPagination") ? true : false;
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper
      elevation={0}
      style={{ backgroundColor: theme.backgroundColor, color: theme.color }}
      sx={{ width: "100%", overflow: "hidden" }}
    >
      <TableContainer>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.alignHeader}
                  className="uppercase"
                  style={{ backgroundColor: theme.backgroundColor, color: theme.colorMint, minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody className="h-full">
            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
              return (
                <TableRow className="h-full" hover role="checkbox" tabIndex={-1} key={row.code}>
                  {columns.map((column) => {
                    const value = row[column.id];
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
                        {column.format ? column.format(value) : value}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
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
