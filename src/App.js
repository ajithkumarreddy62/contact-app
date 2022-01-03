import React, { useState, useEffect } from 'react';
import './App.css';
//pages
import Header from './components/header/header';
import MyCard from './components/mycard/mycard';
import { useNavigate } from 'react-router-dom';
//List
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
//images


function App() {
  const navigate = useNavigate();

  function randomColor() {
    let hex = Math.floor(Math.random() * 0xFFFFFF);
    let color = "#" + hex.toString(16);
    return color;
  }


  const [contacts, setContacts] = useState(() => {

    const contacts = localStorage.getItem("contacts");

    if (contacts) {
      return JSON.parse(contacts);
    } else {
      return [];
    }

  });


  const handleClickOpen = (contact) => {
    navigate('/contact', { state: contact });
  };


  return (

    <div className="spacing">
      <Header />
      <MyCard />

      <Divider sx={{ borderBottomWidth: 2 }} style={{ marginTop: 7 }} />




      <div className='content'>
        {contacts.map(contact => (


          <List >
            <ListItem className="listitem" onClick={() => handleClickOpen(contact)}>

              <ListItemAvatar>
                <Avatar sx={{ width: 38, height: 38 }} style={{
                  backgroundColor: randomColor()
                }} />
              </ListItemAvatar>
              <ListItemText primary={contact.first} style={{ paddingLeft: 6 }} />
              <ChevronRightIcon />

            </ListItem>
            <Divider />

          </List>
        ))}
      </div>

    </div>

  );
}

export default App;
