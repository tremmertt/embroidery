import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import AddIcon from "@mui/icons-material/Add";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { IOrder } from "redux/reducers/OrderReducer";

export interface ItemOrder extends IOrder {}

export default function OrderFormDialog(props: any) {
  const typeDefault = ["JPEG", "JPG", "PNG", "PDF", "DST", "EMB", "PES", "CNS", "EXP", "VP3", "JEF", "HUS", "ART"];
  const [item, setItem] = useState<ItemOrder>({
    id: "",
    name: "",
    size: "",
    type: "PDF",
    quantity: "",
    image: "",
  });
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setItem({ id: "", name: "", size: "", quantity: "", type: "PDF", image: "" });
  };

  const handleCapture = ({ target }: any) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(target.files[0]);
    fileReader.onload = (e) => {
      if (e.target && e.target.result && typeof e.target.result === "string" && e.target.result.includes("image")) {
        setItem({
          id: "",
          name: item.name,
          size: item.size,
          quantity: item.quantity,
          type: item.type,
          image: e.target.result as string,
        });
      }
    };
  };

  const handleAddItem = (e: any) => {
    props.addItem(item);
    handleClose();
  };

  return (
    <div className="flex justify-end py-4 mt-8">
      <Button
        variant="outlined"
        style={{ width: 136, height: 43, border: "none" }}
        className="rounded-full box-button-2"
        onClick={handleClickOpen}
        startIcon={<AddIcon />}
      >
        Add order
      </Button>
      <Dialog open={open}>
        <DialogTitle marginTop={2}>Add order item</DialogTitle>
        <DialogContent style={{ width: 500 }} className="flex flex-col justify-center gap-4">
          <DialogContentText>Please fill information of the item on the order</DialogContentText>

          <TextField
            autoFocus
            margin="dense"
            style={{ marginTop: 14 }}
            id="name-item"
            label="Name"
            type="text"
            fullWidth
            value={item.name}
            variant="standard"
            onChange={(evt) =>
              setItem({
                id: "",
                name: evt.target.value,
                size: item.size,
                type: item.type,
                quantity: item.quantity,
                image: item.image,
              })
            }
          />
          <TextField
            margin="dense"
            style={{ marginTop: 14 }}
            id="size-item"
            label="Size (height x width)"
            type="text"
            fullWidth
            value={item.size}
            variant="standard"
            onChange={(evt) =>
              setItem({
                id: "",
                name: item.name,
                size: evt.target.value,
                type: item.type,
                quantity: item.quantity,
                image: item.image,
              })
            }
          />
          <div style={{ marginTop: 14 }}>
            <FormControl variant="standard" fullWidth>
              <InputLabel variant="standard" htmlFor="select-type">
                Type
              </InputLabel>
              <Select
                fullWidth
                id="select-type"
                margin="dense"
                value={item.type}
                label="Type"
                labelId="Type"
                variant="standard"
                onChange={(evt) =>
                  setItem({
                    id: "",
                    name: item.name,
                    size: item.size,
                    type: evt.target.value as
                      | "JPEG"
                      | "JPG"
                      | "PNG"
                      | "PDF"
                      | "DST"
                      | "EMB"
                      | "PES"
                      | "CNS"
                      | "EXP"
                      | "VP3"
                      | "JEF"
                      | "HUS"
                      | "ART",
                    quantity: item.quantity,
                    image: item.image,
                  })
                }
              >
                {typeDefault.map((option, key) => (
                  <MenuItem value={option} key={key}>
                    {option}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>

          <TextField
            margin="dense"
            style={{ marginTop: 14 }}
            id="size-item"
            label="Quantity"
            type="number"
            fullWidth
            value={item.quantity}
            variant="standard"
            onChange={(evt) =>
              setItem({
                id: "",
                name: item.name,
                size: item.size,
                type: item.type,
                quantity: evt.target.value,
                image: item.image,
              })
            }
          />
          <div style={{ marginTop: 14 }}>
            <br />
            <div>
              {" "}
              <b>Upload image</b>
            </div>
            <input accept="image/*" type="file" className="py-4" onChange={handleCapture} />
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleAddItem}>Add</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
