import React from 'react';
import './list.css';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import { useNavigate } from 'react-router-dom';

function ContactList({ contacts }) {

    const navigate = useNavigate();

    const handleClickOpen = (contact) => {
        navigate('/contact', { state: contact });
    };

    return (
        <div>
            <div className="dataResult">
                {contacts.map(contact => (
                    <List className="dataItem">
                        <ListItemButton onClick={() => handleClickOpen(contact)}>
                            <p>{contact.first}</p>
                        </ListItemButton>
                    </List>
                ))}
            </div>
        </div>
    )

}
export default ContactList;