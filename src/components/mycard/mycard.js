import React from 'react';
import './mycard.css';
//List
import { ListItem, ListItemText, ListItemAvatar } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import { Link } from 'react-router-dom';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

function MyCard() {
    return (

        <div className="card_style">
            <ListItem component={Link} to="/mycard">
                <ListItemAvatar>
                    <Avatar className="mycard_avatar" src="/profile.jpg" sx={{ width: 55, height: 55 }} />
                </ListItemAvatar>
                <ListItemText className="mycard_avatartext" primary="Ajith Kumar" secondary="My Card" />
                <ChevronRightIcon />
            </ListItem>
        </div>

    );

}
export default MyCard;