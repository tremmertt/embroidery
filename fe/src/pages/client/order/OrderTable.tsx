// import React, { useEffect, useState } from "react";
// import Table from "@mui/material/Table";
// import TableBody from "@mui/material/TableBody";
// import TableCell from "@mui/material/TableCell";
// import TableContainer from "@mui/material/TableContainer";
// import TableHead from "@mui/material/TableHead";
// import TableRow from "@mui/material/TableRow";
// import Paper from "@mui/material/Paper";
// import OrderDialog from "./OrderDialog";
// import DeleteIcon from "@mui/icons-material/Delete";
// import { IconButton } from "@mui/material";
// import { useDispatch, useSelector } from "react-redux";
// import OrderAction from "redux/actions/OrderAction";
// import { IOrder } from "redux/reducers/OrderReducer";

// const OrderBasicTable = (props: any) => {
//   const { isViewOnly } = props;
//   const dispatch = useDispatch();
//   const { listOrder } = useSelector((state: any) => state.OrderReducer);

//   const handleDeleteItem = (index: number) => {
//     dispatch(OrderAction.deleteOrderItem((index + 1).toString()));
//   };

//   return (
//     <TableContainer component={Paper} className="shadow-none rounded-none">
//       <Table sx={{ minWidth: 650 }} aria-label="simple table">
//         <TableHead>
//           <TableRow>
//             <TableCell align="center">No.</TableCell>
//             <TableCell align="center">Name</TableCell>
//             <TableCell align="center">Size&nbsp;</TableCell>
//             <TableCell align="center">Quantity&nbsp;</TableCell>
//             <TableCell align="center">Output Type&nbsp;</TableCell>
//             <TableCell align="center">Image&nbsp;</TableCell>
//             {isViewOnly ? <></> : <TableCell align="center"></TableCell>}
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {listOrder && listOrder.length !== 0 ? (
//             listOrder.map((row: any, index: number) => (
//               <TableRow
//                 key={`${index}-${row.name}-order-item`}
//                 className="break-all"
//                 sx={{ "&:last-child td, &:last-child th": { border: 0 }, padding: 14 }}
//               >
//                 <TableCell align="center">{index + 1}</TableCell>
//                 <TableCell align="center">{row.name}</TableCell>
//                 <TableCell align="center">{row.size}</TableCell>
//                 <TableCell align="center">{row.quantity}</TableCell>
//                 <TableCell align="center">{row.type}</TableCell>
//                 <TableCell align="center">
//                   <div className="flex flex-row flex-wrap items-center justify-center">
//                     <img style={{ maxWidth: 300, maxHeight: 100 }} src={row.image} alt={row.name} />
//                   </div>
//                 </TableCell>
//                 {isViewOnly ? (
//                   <></>
//                 ) : (
//                   <TableCell align="center">
//                     <IconButton aria-label="delete" size="small" onClick={() => handleDeleteItem(index)}>
//                       <DeleteIcon />
//                     </IconButton>
//                   </TableCell>
//                 )}
//               </TableRow>
//             ))
//           ) : (
//             <TableRow>
//               <TableCell colSpan={isViewOnly ? 6 : 7} align="center" style={{ color: "gray" }}>
//                 There'is no item. Please click button Add to add new order item
//               </TableCell>
//             </TableRow>
//           )}
//         </TableBody>
//       </Table>
//     </TableContainer>
//   );
// };
// const OrderTable = (props: any) => {
//   const dispatch = useDispatch();
//   const { listOrder } = useSelector((state: any) => state.OrderReducer);
//   const addItem = (item: IOrder) => {
//     dispatch(
//       OrderAction.addOrderItem({
//         ...item,
//         id: (listOrder.length + 1).toString(),
//       })
//     );
//   };

//   return (
//     <div className="w-full h-full">
//       <OrderDialog addItem={addItem} />
//       <OrderBasicTable />
//     </div>
//   );
// };

// const Order = { OrderTable, OrderBasicTable };
// export default Order;
