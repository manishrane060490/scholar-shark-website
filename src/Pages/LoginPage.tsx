import React, { useState } from "react";
import Lighthouse from "../Components/Lighthouse/Lighthouse";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { authenticate } from "../authenticate";
import { Button, TextField, Typography } from "@mui/material";

function LoginPage() {
    const Navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailErr, setEmailErr] = useState('');
    const [passwordErr, setPasswordErr] = useState('');
    const [loginErr, setLoginErr] = useState('');

    const formInputChange = (formField: string, value: string) => {
        if (formField === "email") {
            setEmail(value);
        }
        if (formField === "password") {
            setPassword(value);
        }
    };

    const validation = () => {
        return new Promise((resolve, reject) => {
            if (email === '' && password === '') {
                setEmailErr("Email is Required");
                setPasswordErr("Password is required")
                resolve({ email: "Email is Required", password: "Password is required" });
            }
            else if (email === '') {
                setEmailErr("Email is Required")
                resolve({ email: "Email is Required", password: "" });
            }
            else if (password === '') {
                setPasswordErr("Password is required")
                resolve({ email: "", password: "Password is required" });
            }
            else if (password.length < 6) {
                setPasswordErr("must be 6 character")
                resolve({ email: "", password: "must be 6 character" });
            }
            else {
                resolve({ email: "", password: "" });
            }
        });
    };

    const handleClick = () => {
        setEmailErr("");
        setPasswordErr("");
        validation()
            .then((res: any) => {
                if (res.email === '' && res.password === '') {
                    authenticate(email, password)
                        .then((data) => {
                            setLoginErr('');
                            Navigate('/dashboard');
                        }, (err) => {
                            console.log(err);
                            setLoginErr(err.message)
                        })
                        .catch(err => console.log(err))
                }
            }, err => console.log(err))
            .catch(err => console.log(err));
    }


    return (
        <>
            <Lighthouse light={false} />
            <div className='panel register-page'>
                <div className='panel-left'>
                    <h2>Welcome Shark &#128075;</h2>
                    <p>Welcome to Scholar shark, Unlesh your knowledge Where learning takes a dive </p>

                    <div className="register-form form">
                        <div className="formfield">
                            <TextField
                                value={email}
                                onChange={(e) => formInputChange("email", e.target.value)}
                                label="Email"
                                helperText={emailErr}
                                className="textfield"
                                fullWidth
                                variant="filled"
                                margin="dense"
                            />
                        </div>
                        <div className='formfield'>
                            <TextField
                                value={password}
                                onChange={(e) => { formInputChange("password", e.target.value) }}
                                type="password"
                                label="Password"
                                helperText={passwordErr}
                                className="textfield"
                                fullWidth
                                variant="filled"
                                margin="dense"
                            />
                        </div>
                        <div className='formfield'>
                            <Button type='submit' fullWidth variant='contained' onClick={handleClick}>Login</Button>
                        </div>
                        <Typography variant="body1">{loginErr}</Typography>
                    </div>
                </div>
                <div className='panel-right'>
                </div>

            </div>
        </>
    )
}

export default LoginPage;