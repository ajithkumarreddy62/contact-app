import React, { useState } from 'react';
import './search.css';
import ContactList from '../list/list';
import { Link } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';

function SearchPage() {

    const [contacts] = useState(() => {

        const contacts = localStorage.getItem("contacts");

        if (contacts) {
            return JSON.parse(contacts);
        } else {
            return [];
        }

    });



    const [initialContact] = useState([]);

    const [search, setSearch] = useState('');

    const filteredContacts = search.length === 0 ? initialContact : contacts.filter(contact => contact.first.toLowerCase().includes(search.toLowerCase()));

    return (
        <div className="search_main">


            <div className="header">
                <Chip className="header_button" label="Go Back" color="primary" component={Link} to="/contacts" />
            </div>


            <div className="search_label">
                <Typography style={{ color: "black", fontSize: 30 }}>
                    Search
                </Typography>
            </div>


            <div className="search">
                <div>
                    <input autoFocus className="search_input" type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search" style={{ backgroundColor: 'white' }} />
                </div>
                <ContactList contacts={filteredContacts} />
            </div>

        </div>
    )

}
export default SearchPage;