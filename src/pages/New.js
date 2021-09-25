import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import IconLabelButtons from '../components/Submit'
import BlogLogo from '../img/blok.7e6674a5.png'

export default function FormPropsTextFields() {
  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 3, width: "50ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
          <div style={{border:"1px solid #046582", borderRadius:"100px", marginTop:"15px", backgroundColor:"#046582"}}>
              <img src={BlogLogo} alt="" />  
            </div>
            <h2 style={{fontSize:"50px", color:"#046582", fontWeight:"bold"}}>──── New Blog ────</h2>
        <TextField
          required
          id="outlined-required"
          label="Title"
          defaultValue="Hello World"
        />
        <TextField
          required
          id="outlined-required"
          label="Url"
          defaultValue="Url"
        />
        <TextField
          required
          id="outlined-required"
          label="Content"
          defaultValue="Content"
          
        />
        <IconLabelButtons/>
      </div>
    </Box>
  );
}
