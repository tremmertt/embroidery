import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import OrderDialog from "./OrderDialog";
import DeleteIcon from "@mui/icons-material/Delete";
import { ItemOrder } from "./OrderDialog";
import { IconButton } from "@mui/material";

function createData(name: string, calories: number, fat: number, carbs: number, protein: number) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

const BasicTable = (props: any) => {
  const { rows } = props;
  const handleDeleteItem = (index: number) => {
    rows.splice(index, 1);
    props.updateItems(rows);
  };
  return (
    <TableContainer component={Paper} className="shadow-none rounded-none">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">No.</TableCell>
            <TableCell align="center">Name</TableCell>
            <TableCell align="center">Size&nbsp;</TableCell>
            <TableCell align="center">Image&nbsp;</TableCell>
            <TableCell align="center"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows && rows.length != 0 ? (
            rows.map((row: any, index: number) => (
              <TableRow
                key={`${index}-${row.name}-order-item`}
                className="break-all"
                sx={{ "&:last-child td, &:last-child th": { border: 0 }, padding: 14 }}
              >
                <TableCell align="center">{index + 1}</TableCell>
                <TableCell align="center">{row.name}</TableCell>
                <TableCell align="center">{row.size}</TableCell>
                <TableCell align="center">
                  <div className="flex flex-row flex-wrap items-center justify-center">
                    <img style={{ maxWidth: 300, maxHeight: 100 }} src={row.image} alt={row.name} />
                  </div>
                </TableCell>
                <TableCell align="center">
                  <IconButton aria-label="delete" size="small" onClick={() => handleDeleteItem(index)}>
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={5} align="center" style={{ color: "gray" }}>
                There'is no item. Please click button Add to add new order item
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
const OrderTable = (props: any) => {
  const [rows, setRows] = useState<ItemOrder[]>([]);

  const addItem = (item: ItemOrder) => {
    setRows([...rows, item]);
  };

  const updateItems = (items: ItemOrder[]) => {
    setRows([...items]);
  };

  console.log("rows", rows);

  useEffect(() => {}, [rows]);

  return (
    <div className="w-full h-full">
      <OrderDialog addItem={addItem} />
      <BasicTable rows={rows} updateItems={updateItems} />
    </div>
  );
};

export default OrderTable;
