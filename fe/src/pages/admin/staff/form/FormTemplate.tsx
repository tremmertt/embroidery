import { useForm, Controller, useFieldArray } from "react-hook-form";
import {
  Autocomplete,
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  Radio,
  RadioGroup,
  TextField,
  Slider,
  Select,
  MenuItem,
} from "@mui/material";

const options = ["A", "B", "C", "D"];
const objOptions = [
  { value: 65, label: "A" },
  { value: 66, label: "B" },
  { value: 67, label: "C" },
];
const myHelper = {
  email: {
    required: "Email is Required",
    pattern: "Invalid Email Address",
  },
};

export default function FormCreateUser() {
  const { control, handleSubmit } = useForm({
    reValidateMode: "onBlur",
  });
  const {
    fields: members,
    append: appendMemberRow,
    remove: removeMemberRow,
  } = useFieldArray({
    control,
    name: "members",
  });

  console.count("app rerender");

  const handleOnSubmit = (evt: any) => {
    console.log(evt);
  };

  const addNewMemeber = () => appendMemberRow({ email: "", role: "user" });

  return (
    <div>
      <Box component="form" onSubmit={handleSubmit(handleOnSubmit)}>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <Controller
              control={control}
              name="username"
              defaultValue=""
              render={({ field }) => <TextField {...field} fullWidth variant="filled" label="username" />}
            />
          </Grid>
          <Grid item xs={6}>
            <Controller
              control={control}
              name="selection"
              defaultValue=""
              render={({ field }) => (
                <Select {...field} fullWidth>
                  <MenuItem value="A">Select 1</MenuItem>
                  <MenuItem value="B">Select 2</MenuItem>
                  <MenuItem value="C">Select 3</MenuItem>
                  <MenuItem value="D">Select 4</MenuItem>
                </Select>
              )}
            />
          </Grid>
          <Grid item xs={6}>
            <Controller
              control={control}
              name="auto-complete"
              defaultValue={options[0]}
              render={({ field: { ref, onChange, ...field } }) => (
                <Autocomplete
                  options={options}
                  onChange={(_, data: any) => onChange(data.value)}
                  defaultValue={options[0]}
                  renderInput={(params) => (
                    <TextField {...params} {...field} fullWidth inputRef={ref} variant="filled" label="Auto-Complete" />
                  )}
                />
              )}
            />
          </Grid>
          <Grid item xs={6}>
            <Controller
              control={control}
              name="object-component"
              defaultValue={[objOptions[0]]}
              render={({ field: { ref, onChange, ...field } }) => (
                <Autocomplete
                  multiple
                  options={objOptions}
                  defaultValue={[objOptions[0]]}
                  getOptionLabel={(option) => option.label}
                  onChange={(_, data) => onChange(data)}
                  renderInput={(params) => (
                    <TextField
                      {...field}
                      {...params}
                      fullWidth
                      inputRef={ref}
                      variant="filled"
                      label="object-complete"
                    />
                  )}
                />
              )}
            />
          </Grid>
          <Grid item xs={6}>
            <Controller
              control={control}
              name="check-box"
              defaultValue={false}
              render={({ field: { value, onChange, ...field } }) => (
                <FormControlLabel
                  control={<Checkbox onChange={onChange} checked={value} {...field} />}
                  label="checkbox"
                />
              )}
            />
          </Grid>
          <Grid item xs={6}>
            <Controller
              control={control}
              name="radio-group"
              defaultValue=""
              render={({ field }) => (
                <RadioGroup {...field}>
                  <FormControlLabel value="choice-1" control={<Radio />} label="A" />
                  <FormControlLabel value="choice-2" control={<Radio />} label="B" />
                  <FormControlLabel value="choice-3" control={<Radio />} label="C" />
                  <FormControlLabel value="choice-4" control={<Radio />} label="D" />
                </RadioGroup>
              )}
            />
          </Grid>
          <Grid item xs={6}>
            <Controller
              control={control}
              name="slider"
              defaultValue={50}
              render={({ field: { value, ...field } }) => (
                <Slider {...field} marks max={100} min={0} step={5} value={value} />
              )}
            />
          </Grid>
          <Grid item xs={6}>
            <Controller
              control={control}
              name="slider-range"
              defaultValue={[0, 50]}
              render={({ field: { value, ...field } }) => (
                <Slider {...field} marks max={100} min={0} step={5} value={value} />
              )}
            />
          </Grid>
          <Grid item xs={6}>
            <Controller
              control={control}
              name="email"
              defaultValue=""
              rules={{
                required: true,
                pattern: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
              }}
              render={({ field, fieldState: { error } }) => (
                <TextField
                  {...field}
                  type="email"
                  fullWidth
                  label="Email With Validation"
                  error={error !== undefined}
                  helperText={error ? (myHelper as any).email[error.type] : ""}
                />
              )}
            />
          </Grid>
          <Grid item xs={12}>
            {members.map((field, index) => (
              <Grid container key={field.id} spacing={1} alignItems="center">
                <Grid item xs={6}>
                  <Controller
                    control={control}
                    // must use . for the object key!!!
                    name={`members.${index}.email`}
                    defaultValue=""
                    render={({ field }) => <TextField {...field} type="email" fullWidth />}
                  />
                </Grid>
                <Grid item xs={4}>
                  <Controller
                    control={control}
                    // must use . for the object key!!!
                    name={`members.${index}.role`}
                    defaultValue="user"
                    render={({ field }) => (
                      <Select {...field} fullWidth>
                        <MenuItem value="user">Member</MenuItem>
                        <MenuItem value="admin">Admin</MenuItem>
                      </Select>
                    )}
                  />
                </Grid>
                <Grid item xs={2}>
                  <Button color="error" variant="text" onClick={() => removeMemberRow(index)}>
                    Delete
                  </Button>
                </Grid>
              </Grid>
            ))}
            <Button variant="contained" onClick={addNewMemeber}>
              Add
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Button type="submit">Submit</Button>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
