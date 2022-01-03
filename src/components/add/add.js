import React, { useState, useEffect } from 'react';
import './add.css';
import InputField from '../../reusable_components/inputfield';
import { Link } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Chip } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';

function AddPage() {

    const [contacts, setContacts] = useState([]);
    const [firstname, setFirst] = useState("");
    const [lastname, setLast] = useState("");
    const [company, setCompany] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    //error states
    const [firstError, setFirstError] = useState("");
    const [lastError, setLastError] = useState("");
    const [companyError, setCompanyError] = useState("");
    const [phoneError, setPhoneError] = useState("");
    const [emailError, setEmailError] = useState("");

    //add dialog
    const [addOpen, setAddOpen] = React.useState(false);


    const handleValidate = (e) => {
        const re = /^[A-Za-z]+$/;
        const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        let firsterror = "";
        let lasterror = "";
        let companyerror = "";
        let phoneerror = "";
        let emailerror = "";

        if (!re.test(firstname)) {
            firsterror = "*Only characters are allowed";
            setFirstError(firsterror);
        } else {
            setFirstError("");
        }

        if (!re.test(lastname)) {
            lasterror = "*Only characters are allowed";
            setLastError(lasterror);
        } else {
            setLastError("");
        }

        if (!re.test(company)) {
            companyerror = "*Only characters are allowed";
            setCompanyError(companyerror);
        } else {
            setCompanyError("");
        }

        if (phone.length < 10 || phone.length > 10) {
            phoneerror = "*Phone number should consist of 10 digits";
            setPhoneError(phoneerror);
        } else {
            setPhoneError("");
        }


        if (!regex.test(email)) {
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

    const handleSubmit = (e) => {
        e.preventDefault();
        const isValid = handleValidate();
        if (isValid) {

            setContacts([
                ...contacts,
                {
                    id: contacts.length + 1,
                    first: firstname.trim(),
                    last: lastname.trim(),
                    company: company.trim(),
                    phone: phone.trim(),
                    email: email.trim()
                }
            ]);
            setFirst("");
            setLast("");
            setCompany("");
            setPhone("");
            setEmail("");
            setAddOpen(true);
        }
    }

    //reset form functionality
    const resetForm = (e) => {
        setFirst("");
        setLast("");
        setCompany("");
        setPhone("");
        setEmail("");
    };

    //For accessing data from local storage to state concurrently
    useEffect(() => {
        if (contacts) {
            setContacts(JSON.parse(window.localStorage.getItem("contacts")));
        }
    }, []);


    //For storing the data in local storage
    useEffect(() => {
        localStorage.setItem("contacts", JSON.stringify(contacts));
    }, [contacts])


    return (
        <div className='add_class'>

            <div className='add_header'>
                <div>
                    <Chip className="cancel_button" label="Cancel" color="primary" component={Link} to="/contacts" />

                </div>

                <div>
                    <Button className="done_button" variant="contained" onClick={resetForm}>
                        Clear
                    </Button>


                </div>


            </div>

            <div className='new_contact'>

                <Typography style={{ color: "black", fontSize: 30 }}>
                    New Contact
                </Typography>


            </div>





            <form id='my-form' onSubmit={handleSubmit}>
                <div className="object">

                    <div className="object2">
                        <div className="input_sizing">
                            <InputField className="input_width" value={firstname} id="firstname" type="text" variant="outlined" label="First Name*" autoComplete='off' onChange={(e) => setFirst(e.target.value)} />
                            {firstError ? (<div style={{ fontSize: 15, color: 'red' }}>{firstError}</div>
                            ) : null}
                        </div>


                        <div className="input_sizing">
                            <InputField className="input_width" value={lastname} id="lastname" type="text" variant="outlined" label="Last Name*" autoComplete='off' onChange={(e) => setLast(e.target.value)} />
                            {lastError ? (<div style={{ fontSize: 15, color: 'red' }}>{lastError}</div>
                            ) : null}
                        </div>


                        <div className="input_sizing">
                            <InputField className="input_width" value={company} id="company" type="text" variant="outlined" label="Company*" autoComplete='off' onChange={(e) => setCompany(e.target.value)} />
                            {companyError ? (<div style={{ fontSize: 15, color: 'red' }}>{companyError}</div>
                            ) : null}
                        </div>


                        <div className="input_sizing">
                            <InputField className="input_width" value={phone} id="phone" type="number" variant="outlined" label="Phone*" autoComplete='off' onChange={(e) => setPhone(e.target.value)} />
                            {phoneError ? (<div style={{ fontSize: 15, color: 'red' }}>{phoneError}</div>
                            ) : null}
                        </div>


                        <div className="input_sizing">
                            <InputField className="input_width" value={email} id="email" type="text" variant="outlined" label="Email*" autoComplete='off' onChange={(e) => setEmail(e.target.value)} />
                            {emailError ? (<div style={{ fontSize: 15, color: 'red' }}>{emailError}</div>
                            ) : null}
                        </div>

                        <div className="input_sizing">
                            <Button variant="contained" type="submit" disabled={!firstname || !lastname || !email || !company || !phone} >Submit</Button>
                        </div>

                    </div>

                </div>

            </form >

            <Dialog fullWidth maxWidth="sm" open={addOpen}>
                <DialogTitle>
                    Contact created sucessfully
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

export default AddPage;