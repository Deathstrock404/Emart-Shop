import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

export default function ImageAvatars() {
  return (

    <>
    <h1 style={{textAlign:"center", padding:40}}>FOUNDERS</h1>
    <hr/>
<Stack direction="row" spacing={40} style={{padding:40}}>

      <Avatar alt="Remy Sharp" src= {require('./Kandarp.jpg')}      sx={{ width: 200, height: 200 }}/>
      <Avatar alt="Remy Sharp" src={require("./hardik.jpeg")}   sx={{ width: 200, height: 200 }}/>
     <Avatar alt="Remy Sharp" src={require("./Kamaljot.jpeg")}   sx={{ width: 200, height: 200 }}/>
     <Avatar alt="Remy Sharp" src={require("./Uday.jpeg")}   sx={{ width: 200, height: 200 }}/>
</Stack>

      
       

     
    
    </>
  );
}