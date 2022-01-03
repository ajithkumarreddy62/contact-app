import React from 'react';
//List
import { ListItem, ListItemText, ListItemAvatar } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import { Link } from 'react-router-dom';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

function MyCard() {
    return (

        <div className="cardstyle">
            <ListItem component={Link} to="/mycard">
                <ListItemAvatar>
                    <Avatar src="/profile.jpg" sx={{ width: 55, height: 55, backgroundColor: 'blue', color: 'white' }} />
                </ListItemAvatar>
                <ListItemText primary="Ajith Kumar" secondary="My Card" style={{ paddingLeft: 10 }} />
                <ChevronRightIcon />
            </ListItem>
        </div>

    );

}
export default MyCard;