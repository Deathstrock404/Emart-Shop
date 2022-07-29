
import React from 'react'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import InboxIcon from '@mui/icons-material/Inbox';
import Grid from '@mui/material/Grid';



function Contact() {
  return (
   <>
 <Grid container justifyContent="center" pt={20} m={10}  >
 <List sx={{ width: '100%', maxWidth: 500, bgcolor: 'background.paper' }} >
      <ListItem sx={{  color: 'success.main'}}>
        <ListItemAvatar>
          <Avatar>
          <InboxIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="KUMAR KANDARP MISHRA" secondary="kumar.mishra@globallogic.com" />
      </ListItem>
      <ListItem sx={{  color: 'success.main'}}>
        <ListItemAvatar>
          <Avatar>
          <InboxIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="HARDIK JAIN" secondary="hardik.jain@globallogic.com" />
      </ListItem>
      <ListItem sx={{  color: 'success.main'}}>
        <ListItemAvatar>
          <Avatar>
          <InboxIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="UDAY KUMAR" secondary="uday.kumar3@globallogic.com" />
      </ListItem>
      <ListItem sx={{  color: 'success.main'}}>
        <ListItemAvatar>
          <Avatar>
          <InboxIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="KAMALJOT SINGH" secondary="kamaljot.singh@globallogic.com" />
      </ListItem>
    </List>
     
 
   
   </Grid>
   
   </>
  )
}

export default Contact;