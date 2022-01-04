import React, { useState, useEffect } from 'react';
import './contacts.css';
import { useNavigate } from 'react-router-dom';

//pages
import Header from '../../components/header/header'
import MyCard from '../../components/mycard/mycard';

//List
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

//helper file for random color generator
import { randomColor } from '../../utilities/helper';


function Contacts() {

    const navigate = useNavigate();

    const storedContacts = JSON.parse(localStorage.getItem("contacts")) || [];

    const [contacts, setContacts] = useState(storedContacts);

    const handleClickOpen = (contact) => {
        navigate('/contact', { state: contact });
    };

    return (

        <div className="spacing">

            <Header />

            <MyCard />

            <Divider className="dividerstyle" sx={{ borderBottomWidth: 2 }} />

            <div className='content'>
                {contacts &&
                    (contacts.map(contact => (
                        <List>

                            <ListItem className="listitem" onClick={() => handleClickOpen(contact)}>

                                <ListItemAvatar>
                                    <Avatar sx={{ width: 38, height: 38 }} style={{
                                        backgroundColor: randomColor()
                                    }} />
                                </ListItemAvatar>
                                <ListItemText primary={contact.first} />
                                <ChevronRightIcon />

                            </ListItem>
                            <Divider />

                        </List>
                    )))
                }
            </div>

        </div>

    );
}

export default Contacts;
