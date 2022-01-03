import React from 'react';
import '../contact/contact.css';
import { List, ListItem } from '@mui/material';
import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Divider from '@material-ui/core/Divider';
import { Chip } from '@mui/material';

function MyCardPage() {


    return (
        <div className='mycardheader'>
            <div className="contact_main">



                <Card className="card_style">
                    <CardMedia style={{ height: 370 }} image="./profile.jpg">
                        <div className='contact_header'>
                            <Chip className="cancel_button" label="Go Back" color="primary" component={Link} to="/contacts" style={{ marginTop: 15, marginLeft: 4 }} >

                            </Chip>

                        </div>
                    </CardMedia>
                </Card>

                <div className="content2">
                    <p>Ajith Kumar</p>
                </div>


                <Divider sx={{ borderBottomWidth: 5 }} style={{ marginTop: 15 }} />

                <div className='content3'>
                    <p>Details</p>
                </div>

                <div className='content4'>
                    <List>
                        <ListItem>
                            Email - ajithkumar@gmail.com
                        </ListItem>
                        <ListItem>
                            Company - PNC
                        </ListItem>
                        <ListItem>
                            Phone - +91 7332546789
                        </ListItem>
                    </List>
                </div>

            </div>
        </div>

    );
}
export default MyCardPage;