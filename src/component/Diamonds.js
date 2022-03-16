import * as React from "react";
import Card from "@mui/material/Card";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import SendIcon from "@mui/icons-material/Send";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import ListSubheader from "@mui/material/ListSubheader";
import Select from "@mui/material/Select";

export default function Diamonds() {
  return (
    <div
      style={{
        display: "flex",
        height: "auto",
        marginTop: "5px",
        marginBottom: "50px",
        justifyContent: "center",
      }}
    >
      <Card sx={{ maxWidth: 475 }} color="dark">
        <Stack
          component="form"
          sx={{
            width: "35ch",
          }}
          spacing={2}
          noValidate
          autoComplete="off"
        >
          <TextField
            hiddenLabel
            id="filled-hidden-label-small"
            defaultValue="Small"
            variant="filled"
            size="small"
          />

          <div style={{ display: "flex", justifyContent: "center" }}>
            <Select
              sx={{
                width: "18ch",
                height: "5ch",
              }}
              defaultValue=""
              id="grouped-select"
              label="Grouping"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={1}>Option 1</MenuItem>
              <MenuItem value={2}>Option 2</MenuItem>
              <ListSubheader>Category 2</ListSubheader>
              <MenuItem value={3}>Option 3</MenuItem>
              <MenuItem value={4}>Option 4</MenuItem>
            </Select>

            <Select
              sx={{
                width: "18ch",
                height: "5ch",
              }}
              defaultValue=""
              id="grouped-select"
              label="Grouping"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <ListSubheader>Category 1</ListSubheader>
              <MenuItem value={1}>Option 1</MenuItem>
              <MenuItem value={2}>Option 2</MenuItem>
              <ListSubheader>Category 2</ListSubheader>
              <MenuItem value={3}>Option 3</MenuItem>
              <MenuItem value={4}>Option 4</MenuItem>
            </Select>
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Select
              sx={{
                width: "18ch",
                height: "5ch",
              }}
              defaultValue=""
              id="grouped-select"
              label="Grouping"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={1}>Option 1</MenuItem>
              <MenuItem value={2}>Option 2</MenuItem>
              <ListSubheader>Category 2</ListSubheader>
              <MenuItem value={3}>Option 3</MenuItem>
              <MenuItem value={4}>Option 4</MenuItem>
            </Select>

            <Select
              sx={{
                width: "18ch",
                height: "5ch",
              }}
              defaultValue=""
              id="grouped-select"
              label="Grouping"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <ListSubheader>Category 1</ListSubheader>
              <MenuItem value={1}>Option 1</MenuItem>
              <MenuItem value={2}>Option 2</MenuItem>
              <ListSubheader>Category 2</ListSubheader>
              <MenuItem value={3}>Option 3</MenuItem>
              <MenuItem value={4}>Option 4</MenuItem>
            </Select>
          </div>

          <TextField
            hiddenLabel
            id="filled-hidden-label-small"
            defaultValue="Small"
            variant="filled"
            size="small"
          />
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Select
              sx={{
                width: "18ch",
                height: "5ch",
              }}
              defaultValue=""
              id="grouped-select"
              label="Grouping"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={1}>Option 1</MenuItem>
              <MenuItem value={2}>Option 2</MenuItem>
              <ListSubheader>Category 2</ListSubheader>
              <MenuItem value={3}>Option 3</MenuItem>
              <MenuItem value={4}>Option 4</MenuItem>
            </Select>

            <Select
              sx={{
                width: "18ch",
                height: "5ch",
              }}
              defaultValue=""
              id="grouped-select"
              label="Grouping"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <ListSubheader>Category 1</ListSubheader>
              <MenuItem value={1}>Option 1</MenuItem>
              <MenuItem value={2}>Option 2</MenuItem>
              <ListSubheader>Category 2</ListSubheader>
              <MenuItem value={3}>Option 3</MenuItem>
              <MenuItem value={4}>Option 4</MenuItem>
            </Select>
          </div>
          <Button variant="contained" endIcon={<SendIcon />}>
            submit
          </Button>
        </Stack>
      </Card>
    </div>
  );
}
