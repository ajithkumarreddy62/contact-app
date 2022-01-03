import React from 'react';
import './header.css';
import { Link } from 'react-router-dom';
import Chip from '@mui/material/Chip';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

function Header() {
    return (


        <div className='root'>
            <div className='header'>
                <div>
                    <Chip className="new_button" label="New" color="primary" component={Link} to="/add" />

                </div >

                <div className='search_icon'>
                    <IconButton component={Link} to="/search">
                        <SearchIcon />
                    </IconButton>
                </div>

            </div >

            <div className='contacts_icon'>

                <Typography style={{ color: "black", fontSize: 30 }}>
                    Contacts
                </Typography>


            </div>
        </div>




    );
}
export default Header;