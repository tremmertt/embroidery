import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import AddIcon from "@mui/icons-material/Add";

export interface ItemOrder {
  name: string;
  size: string;
  image: string;
}

export default function FormDialog(props: any) {
  const [item, setItem] = useState<ItemOrder>({
    name: "",
    size: "",
    image: "",
  });
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleCapture = ({ target }: any) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(target.files[0]);
    fileReader.onload = (e) => {
      if (e.target && e.target.result && typeof e.target.result === "string" && e.target.result.includes("image")) {
        setItem({
          name: item.name,
          size: item.size,
          image: e.target.result as string,
        });
      }
    };
  };

  const handleAddItem = (e: any) => {
    props.addItem(item);
    handleClose();
    setItem({ name: "", size: "", image: "" });
  };

  return (
    <div className="flex justify-end py-4">
      <Button
        variant="outlined"
        style={{ width: 136, height: 43, border: "none" }}
        className="rounded-full box-button-2"
        onClick={handleClickOpen}
        startIcon={<AddIcon />}
      >
        Add order
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add order item</DialogTitle>
        <DialogContent style={{ width: 500 }} className="flex flex-col justify-center gap-4">
          <DialogContentText>Please fill information of the item on the order</DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            className="my-4"
            id="name-item"
            label="Name"
            type="text"
            fullWidth
            value={item.name}
            variant="standard"
            onChange={(evt) =>
              setItem({
                name: evt.target.value,
                size: item.size,
                image: item.image,
              })
            }
          />
          <TextField
            margin="dense"
            className="my-4"
            id="size-item"
            label="Size"
            type="text"
            fullWidth
            value={item.size}
            variant="standard"
            onChange={(evt) =>
              setItem({
                name: item.name,
                size: evt.target.value,
                image: item.image,
              })
            }
          />
          <div className="my-4">
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
