import React, { useContext, useState, ChangeEvent } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { SketchPicker } from "react-color";
import {
  Card,
  CardActions,
  CardContent,
  Divider,
  FormControl,
  InputLabel,
  List,
  ListItem,
  ListItemText,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import { IOrder } from "../../../redux/reducers/OrderReducer";
import { ThemeCustomContext } from "settings/theme-context";
export interface ItemOrder extends IOrder {}

export default function OrderFormDialog(props: any) {
  const { theme } = useContext(ThemeCustomContext);

  const [fileList, setFileList] = useState<FileList | null>(null);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFileList(e.target.files);
  };

  const typeDefault = ["JPEG", "JPG", "PNG", "PDF", "DST", "EMB", "PES", "CNS", "EXP", "VP3", "JEF", "HUS", "ART"];
  const unitDefault = ["inches", "mm"];
  const [item, setItem] = useState<ItemOrder>({
    id: "",
    name: "",
    size: {
      width: "",
      height: "",
      unit: "mm",
    },
    type: "PDF",
    quantity: "",
    image: "",
  });

  const handleRefresh = () => {
    setItem({
      id: "",
      name: "",
      size: {
        width: "",
        height: "",
        unit: "mm",
      },
      quantity: "",
      type: "PDF",
      image: "",
    });
  };

  // const handleCapture = ({ target }: any) => {
  //   const fileReader = new FileReader();
  //   fileReader.readAsDataURL(target.files[0]);
  //   fileReader.onload = (e) => {
  //     if (e.target && e.target.result && typeof e.target.result === "string" && e.target.result.includes("image")) {
  //       setItem({
  //         id: "",
  //         name: item.name,
  //         size: item.size,
  //         quantity: item.quantity,
  //         type: item.type,
  //         image: e.target.result as string,
  //       });
  //     }
  //   };
  // };

  const files = fileList ? [...fileList] : [];
  return (
    <div className="flex justify-end py-4 mt-8">
      {/* <Button
        variant="outlined"
        style={{ width: 136, height: 43, border: "none" }}
        className="rounded-full box-button-2"
        onClick={handleClickOpen}
        startIcon={<AddIcon />}
      >
        Add order
      </Button> */}
      <Card variant="outlined" style={{ width: "100%" }}>
        <CardContent style={{ width: "100%" }} className="flex flex-col justify-center gap-4">
          <Typography color={theme.primaryTextColor}>Please tell us some information on your order</Typography>

          <TextField
            autoFocus
            margin="dense"
            style={{ marginTop: 14 }}
            id="name-item"
            label="Name (*)"
            type="text"
            fullWidth
            value={item.name}
            variant="outlined"
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

          <Divider variant="middle" />
          <Typography variant="h6" color={theme.primaryTextColor} component="h6">
            Size(*){" "}
          </Typography>
          <Typography>
            Please enter only the height or the width and we will create the design proportional to the original artwork
            and the dimension specified below. Recommended Size: CAP FRONT - height between 2" and 2.3"; LEFT CHEST -
            either width or height between 3" and 4".
          </Typography>
          <div className="flex items-center justify-start gap-4">
            <TextField
              margin="dense"
              id="size-item"
              label="Width"
              type="text"
              style={{ width: 600 }}
              value={item.size.width}
              variant="outlined"
              onChange={(evt) =>
                setItem({
                  id: "",
                  name: item.name,
                  size: {
                    width: evt.target.value,
                    height: item.size.height,
                    unit: item.size.unit,
                  },
                  type: item.type,
                  quantity: item.quantity,
                  image: item.image,
                })
              }
            />
            <TextField
              margin="dense"
              id="size-item"
              label="Height"
              type="text"
              style={{ width: 600 }}
              value={item.size.height}
              variant="outlined"
              onChange={(evt) =>
                setItem({
                  id: "",
                  name: item.name,
                  size: {
                    width: item.size.width,
                    height: evt.target.value,
                    unit: item.size.unit,
                  },
                  type: item.type,
                  quantity: item.quantity,
                  image: item.image,
                })
              }
            />
            <FormControl style={{ marginTop: 4 }} variant="outlined" fullWidth>
              <InputLabel variant="outlined" htmlFor="select-type">
                Unit
              </InputLabel>
              <Select
                fullWidth
                id="select-unit"
                margin="dense"
                value={item.size.unit}
                label="Unit"
                labelId="Unit"
                variant="outlined"
                onChange={(evt) =>
                  setItem({
                    id: "",
                    name: item.name,
                    size: {
                      ...item.size,
                      unit: evt.target.value as "mm" | "inches",
                    },
                    type: item.type,
                    quantity: item.quantity,
                    image: item.image,
                  })
                }
              >
                {unitDefault.map((option, key) => (
                  <MenuItem value={option} key={key}>
                    {option}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
          {/* <div style={{ marginTop: 14 }}>
            <FormControl variant="outlined" fullWidth>
              <InputLabel variant="outlined" htmlFor="select-type">
                Type
              </InputLabel>
              <Select
                fullWidth
                id="select-type"
                margin="dense"
                value={item.type}
                label="Type"
                labelId="Type"
                variant="outlined"
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
          </div> */}

          <TextField
            margin="dense"
            style={{ marginTop: 14 }}
            id="size-item"
            label="Quantity"
            type="number"
            fullWidth
            value={item.quantity}
            variant="outlined"
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
          <Divider variant="middle" />
          <Typography variant="h6" color={theme.primaryTextColor} component="h6">
            Artwork Files(*)
          </Typography>
          <Typography>
            We only accept the following files to be uploaded: Image files such as GIF, JPG, JPEG, PNG, BMP, TIF, TIFF,
            AI, EPS; Microsoft office documents such as DOC, DOCX; Adobe PDF files.
          </Typography>
          <div>
            <br />
            <div>
              {" "}
              <b>Upload image</b>
            </div>
            {/* accept="image/*"  */}
            <input type="file" className="py-4" onChange={handleFileChange} multiple />
            <List sx={{ width: "100%", bgcolor: "background.paper" }}>
              <div>Total Files:{files.length}</div>
              {/* {files.map((file, i) => (
                <ListItem key={`${i}-file-upload`}>
                  <ListItemText primary="Name" secondary={file.name} />
                  <ListItemText primary="Photos" secondary={file.type} />
                </ListItem>
              ))} */}
              {files.map((file, i) => (
                <li key={i}>
                  {file.name} - {file.type}
                </li>
              ))}
            </List>
          </div>
          <SketchPicker />
        </CardContent>
        <CardActions>
          <Button onClick={handleRefresh}>Refresh</Button>
        </CardActions>
      </Card>
    </div>
  );
}
