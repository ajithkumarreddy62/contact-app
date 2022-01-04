import React from 'react';
import './header.css';
import { Link } from 'react-router-dom';
import Chip from '@mui/material/Chip';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { Button } from '@mui/material';

function Header() {
    return (
        <div className='root'>

            <div className='header'>
                <div>
                    <Button className="new_button" variant="contained" component={Link} to="/add">
                        New

                    </Button>
                </div>

                <div>
                    <IconButton className='search_icon' component={Link} to="/search">
                        <SearchIcon />
                    </IconButton>
                </div>
            </div>

            <div>
                <Typography className='contacts_icon'>
                    Contacts
                </Typography>
            </div>

        </div>




    );
}
export default Header;