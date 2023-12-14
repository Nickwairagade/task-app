import { IconButton, Typography, Box } from "@mui/material";
import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import CloseIcon from "@mui/icons-material/Close";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import InputAdornment from "@mui/material/InputAdornment";
import MenuItem from "@mui/material/MenuItem";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import {collection, addDoc, getDocs} from "firebase/firestore";
import {db} from "../../firebase-config";
import swal from 'sweetalert';
import { useAppStore } from "../../appStore";

const AddTask = ({ CloseEvent }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState(0);
  const [duedate, setDuedate] = useState("");
  const [status, setStatus] = useState("");
  const setRows = useAppStore((state) => state.setRows);
  const empCollectionRef = collection(db, "tasks");
  // const Swal = require('sweetalert2')


  const handleChangeTitle = (event) => {
    setTitle(event.target.value);
  };
  const handleChangeDescription = (event) => {
    setDescription(event.target.value);
  };
  const handleChangeDuedate = (event) => {
    setDuedate(event.target.value);
  };
  const handleChangeStatus = (event) => {
    setStatus(event.target.value);
  };

  const createTask = async() => {
    await addDoc(empCollectionRef, {
        title :title,
        description: description,
        duedate: String(new Date()),
        status: status,
    });
    getTasks();
    CloseEvent();
    swal({
      title: "Good job!",
      text: "You clicked the button!",
      icon: "success",
      button: "Aww yiss!",
    }); 
  }


  const getTasks = async () => {
    const data = await getDocs(empCollectionRef);
    setRows(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  const currencies = [
    {
      value: "don",
      label: "Don",
    },
    {
      value: "pending",
      label: "Pending",
    },
  ];
  return (
    <>
      <Box sx={{ m: 2 }} />
      <Typography style={{ fontWeight: "bold" }}>Add Product</Typography>
      <hr />
      <IconButton
        style={{ position: "absolute", top: "0", right: "0" }}
        onClick={CloseEvent}
      >
        <CloseIcon />
      </IconButton>
      <Grid container spacing={2} style={{ marginTop: 10 + "px" }}>
        <Grid item xs={6}>
          <TextField
            id="standard-basic"
            label="Title"
            variant="standard"
            name={title}
            onChange={handleChangeTitle}
            size="small"
            sx={{ minWidth: "100%" }}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            id="standard-basic"
            label="Description"
            variant="standard"
            name={description}
            onChange={handleChangeDescription}
            size="small"
            sx={{ minWidth: "100%" }}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            id="standard-basic"
            // label="DueDate"
            variant="standard"
            name={duedate}
            type="date"
            onChange={handleChangeDuedate}
            size="small"
            sx={{ minWidth: "100%" }}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            id="standard-basic"
            select
            label="Status"
            variant="standard"
            name={status}
            onChange={handleChangeStatus}
            size="small"
            sx={{ minWidth: "100%" }}
          >
            {currencies.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h5" align="center">
            <Button variant="contained" onClick={createTask}>
              Submit
            </Button>
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default AddTask;
