import React, { useState, useEffect } from 'react';
import './contact.css';
import InputField from '../../reusable_components/inputfield';
import Button from '@mui/material/Button';
import { Avatar, List, ListItem } from '@mui/material';
import SmsIcon from '@material-ui/icons/Sms';
import CallIcon from '@material-ui/icons/Call';
import VideoCamIcon from '@material-ui/icons/Videocam';
import MailIcon from '@material-ui/icons/Mail';
import { useLocation, Link } from 'react-router-dom';
import Divider from '@material-ui/core/Divider';
import { Chip } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

function ContactPage() {

    const location = useLocation();

    //original data

    const [contacts, setContacts] = useState(() => {

        const contacts = localStorage.getItem("contacts");

        if (contacts) {
            return JSON.parse(contacts);
        } else {
            return [];
        }

    });

    //dialog
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    //del dialog
    const [delOpen, setDelOpen] = React.useState(false);

    //current contact
    const [currentContact, setCurrentContact] = useState({});

    //error states
    const [firstError, setFirstError] = useState("");
    const [lastError, setLastError] = useState("");
    const [companyError, setCompanyError] = useState("");
    const [phoneError, setPhoneError] = useState("");
    const [emailError, setEmailError] = useState("");


    useEffect(() => {
        setCurrentContact(location.state);
    }, [location.state])

    //Editing fumctionality

    const handleEditFirstInputChange = (e) => {
        setCurrentContact({ ...currentContact, first: e.target.value });
    }

    const handleEditLastInputChange = (e) => {
        setCurrentContact({ ...currentContact, last: e.target.value });
    }

    const handleEditCompanyInputChange = (e) => {
        setCurrentContact({ ...currentContact, company: e.target.value });
    }

    const handleEditPhoneInputChange = (e) => {
        setCurrentContact({ ...currentContact, phone: e.target.value });
    }

    const handleEditEmailInputChange = (e) => {
        setCurrentContact({ ...currentContact, email: e.target.value });
    }

    const handleEditFormSubmit = (e) => {
        e.preventDefault();
        const isValid = handleValidate();
        if (isValid) {
            handleUpdateContact(currentContact.id, currentContact);
        }
    }

    const handleValidate = (e) => {
        const re = /^[A-Za-z]+$/;
        const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        let firsterror = "";
        let lasterror = "";
        let companyerror = "";
        let phoneerror = "";
        let emailerror = "";

        if (!re.test(currentContact.first)) {
            firsterror = "*Only characters are allowed";
            setFirstError(firsterror);
        } else {
            setFirstError("");
        }

        if (!re.test(currentContact.last)) {
            lasterror = "*Only characters are allowed";
            setLastError(lasterror);
        } else {
            setLastError("");
        }

        if (!re.test(currentContact.company)) {
            companyerror = "*Only characters are allowed";
            setCompanyError(companyerror);
        } else {
            setCompanyError("");
        }

        if (currentContact.phone.length < 10 || currentContact.phone.length > 10) {
            phoneerror = "*Phone number should consist of 10 digits";
            setPhoneError(phoneerror);
        } else {
            setPhoneError("");
        }


        if (!regex.test(currentContact.email)) {
            emailerror = "*Please enter a valid email";
            setEmailError(emailerror);
        } else {
            setEmailError("");
        }

        if (firsterror || lasterror || companyerror || phoneerror || emailerror) {
            return false;
        } else {
            return true;
        }

    }


    const handleUpdateContact = (id, updatedContact) => {


        const updatedItem = contacts.map((contact) => {
            return contact.id === id ? updatedContact : contact;
        });
        setContacts(updatedItem);
        setOpen(false);

    }


    const handleDeleteClick = (id) => {
        const removeItem = contacts.filter((contact) => {
            return contact.id !== id;
        })
        setContacts(removeItem);
        setDelOpen(true);
    }


    useEffect(() => {
        localStorage.setItem("contacts", JSON.stringify(contacts));
    }, [contacts])







    return (
        <div className="contact_main">

            <div className='contact_header' >
                <Chip className="cancel_button" label="Contacts" color="primary" component={Link} to="/contacts" style={{ marginTop: 15, marginLeft: 4 }} />
                <Chip className="cancel_button" label="Edit" onClick={() => handleClickOpen(currentContact)} color="primary" style={{ marginTop: 15, marginLeft: 4 }} />
            </div>



            <div className='contact_avatar'>

                <Avatar src="/profile.jpg" sx={{ width: 90, height: 90, backgroundColor: 'blue', color: 'white' }} />



            </div >

            <div className="content2">
                <p>{currentContact.first}</p>
            </div>

            <div className='icons_group'>
                <div>
                    <Avatar sx={{ bgcolor: '#bcdfeb', width: 50, height: 50 }}>
                        <CallIcon style={{ fill: "blue" }} />
                    </Avatar>

                </div>
                <div>
                    <Avatar sx={{ bgcolor: '#bcdfeb', width: 50, height: 50 }}>
                        <VideoCamIcon style={{ fill: "blue" }} />
                    </Avatar>

                </div>
                <div>
                    <Avatar sx={{ bgcolor: '#bcdfeb', width: 50, height: 50 }}>
                        <SmsIcon style={{ fill: "blue" }} />
                    </Avatar>

                </div>
                <div>
                    <Avatar sx={{ bgcolor: '#bcdfeb', width: 50, height: 50 }}>
                        <MailIcon style={{ fill: "blue" }} />
                    </Avatar>

                </div>
            </div>
            <Divider sx={{ borderBottomWidth: 5 }} style={{ marginTop: 15 }} />

            <div className='content3'>
                <p>Details</p>
            </div>

            <div className='content4'>
                <List>
                    <ListItem>
                        Email - {currentContact.email}
                    </ListItem>
                    <ListItem>
                        Company - {currentContact.company}
                    </ListItem>
                    <ListItem>
                        Phone - {currentContact.phone}
                    </ListItem>
                </List>
            </div>

            <div className='content5'>
                <Button variant="contained" onClick={() => handleDeleteClick(currentContact.id)} fullWidth style={{ textTransform: 'none', backgroundColor: 'blue' }}>
                    Delete Contact
                </Button>
            </div>

            <Dialog fullWidth maxWidth="sm" open={open} onClose={handleClose}>
                <DialogTitle>
                    Edit Contact Details
                </DialogTitle>
                <DialogContent>
                    <form id="edit_form" onSubmit={handleEditFormSubmit}>
                        <div className="input_sizing">
                            <InputField className="input_width" value={currentContact.first} onChange={handleEditFirstInputChange} id="firstname" type="text" variant="outlined" label="First Name" autoComplete='off' />
                            {firstError ? (<div style={{ fontSize: 15, color: 'red' }}>{firstError}</div>
                            ) : null}
                        </div>

                        <div className="input_sizing">
                            <InputField className="input_width" value={currentContact.last} onChange={handleEditLastInputChange} id="lastname" type="text" variant="outlined" label="Last Name" autoComplete='off' />
                            {lastError ? (<div style={{ fontSize: 15, color: 'red' }}>{lastError}</div>
                            ) : null}
                        </div>

                        <div className="input_sizing">
                            <InputField className="input_width" value={currentContact.company} onChange={handleEditCompanyInputChange} id="company" type="text" variant="outlined" label="Company" autoComplete='off' />
                            {companyError ? (<div style={{ fontSize: 15, color: 'red' }}>{companyError}</div>
                            ) : null}
                        </div>

                        <div className="input_sizing">
                            <InputField className="input_width" value={currentContact.phone} onChange={handleEditPhoneInputChange} id="phone" type="number" variant="outlined" label="Phone" autoComplete='off' />
                            {phoneError ? (<div style={{ fontSize: 15, color: 'red' }}>{phoneError}</div>
                            ) : null}
                        </div>

                        <div className="input_sizing">
                            <InputField className="input_width" value={currentContact.email} onChange={handleEditEmailInputChange} id="email" type="text" variant="outlined" label="Email" autoComplete='off' />
                            {emailError ? (<div style={{ fontSize: 15, color: 'red' }}>{emailError}</div>
                            ) : null}
                        </div>

                        <div>
                            <Button variant="contained" type="submit" style={{ backgroundColor: 'blue' }} >Save</Button>
                        </div>

                    </form>
                </DialogContent>
                <DialogActions>

                    <Button variant="contained" onClick={handleClose} style={{ backgroundColor: 'blue' }}>
                        Cancel
                    </Button>
                </DialogActions>
            </Dialog>

            <Dialog fullWidth maxWidth="sm" open={delOpen}>
                <DialogTitle>
                    Contact deleted sucessfully
                </DialogTitle>
                <DialogActions>
                    <Button variant="contained" component={Link} to="/contacts" style={{ backgroundColor: 'blue' }}>
                        Ok
                    </Button>

                </DialogActions>
            </Dialog>






        </div >
    );
}

export default ContactPage;