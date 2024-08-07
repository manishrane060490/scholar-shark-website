import React, { useContext, useState, useMemo } from "react";
import Lighthouse from "../Components/Lighthouse/Lighthouse";
import { Link } from "react-router-dom";
import { PlansContext } from "../Context";
import { useNavigate } from 'react-router-dom';
import { CognitoUserAttribute, CognitoUser } from 'amazon-cognito-identity-js';
import axios from 'axios';
import Userpool from "../Userpool";
import { Button, TextField, Select, MenuItem } from '@mui/material';
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import Layout from "./Layout";

// const useStyles = makeStyles((theme: any) => ({
//   input: {
//     background: "rgb(232, 241, 250)"
//   }
// }));

function RegisterPage() {
    const { plans, setInfo } = useContext(PlansContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');
    const [code, setCode] = useState('');
    const [name, setName] = useState('');
    const [emailErr, setEmailErr] = useState('');
    const [passwordErr, setPasswordErr] = useState('');
    const [phoneErr, setPhoneErr] = useState('');
    const [codeErr, setCodeErr] = useState('');
    const [nameErr, setNameErr] = useState('');
    const [validEmail, setValidEmail] = useState(false);
    const [showCode, setShowCode] = useState(false);
    const navigate = useNavigate();
    const [value, setValue] = useState('')
    const [phoneValue, setPhoneValue] = useState();
    const [verifyCode, setVerifyCode] = useState(false);
    const [checkPassword, setCheckPassword] = useState(true);

    var pattern = new RegExp(
        "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[-+_!@#$%^&*.,?]).+$"
      );

    const changeHandler = (value: any) => {
        setValue(value)
    }

    const updatePlanInDB = (userId: string) => {
        let data = JSON.stringify({
            userId: userId,
            profilePictureURL: "https://scholarsharks.in/assets/images/logos/shark.png",
            email: email,
            name: name,
            phoneNumber: phone,
            createdOn: Date.now().toString()
        })

        let config = {
            method: "post",
            maxBosyLength: Infinity,
            url: "https://iy5ispsidmfhpzojalaofamqiq0nerep.lambda-url.ap-south-1.on.aws/updateuserdetails",
            headers: {
                'Content-Type': 'application/json'
            },
            data: data
        }

        axios.request(config)
            .then(response => {
                console.log(JSON.stringify(response.data))
                // handleRazorpayScreen(response.data.amount)
            })
            .catch(error => {
                console.log("error at", error)
            })
    }

    const verifyAccount = (e: any) => {
        e.preventDefault();
        const user = new CognitoUser({
            Username: email,
            Pool: Userpool,
        });
        console.log(user);
        user.confirmRegistration(code, true, (err, data) => {
            if (err) {
                console.log(err);
                // alert("Couldn't verify account");
                setShowCode(false);
                // navigate('/login');
            } else {
                console.log(data);
                // alert('Account verified successfully');
                // window.location.href = '/login';
                setShowCode(false);
                navigate('/login');
            }
        });
    };

    const resendCode = (e: any) => {
        const user = new CognitoUser({
            Username: email,
            Pool: Userpool,
        });
        user.resendConfirmationCode((err, data) => {
            if (err) {
                console.log(err);
                // alert("Couldn't verify account");
                // setShowCode(false);
                // navigate('/login');
            } else {
                console.log(data);
                setShowCode(true);
                setVerifyCode(false);
                // alert('Account verified successfully');
                // window.location.href = '/login';
                // setShowCode(false);
                // navigate('/login');
            }
        })
    }

    const handleClick = () => {
        setInfo({
            name,
            email,
            phone
        })

        setEmailErr("");
        setPasswordErr("");
        validation()
            .then((res: any) => {
                if (res.email === '' && res.password === '') {
                    const attributeList = [
                        new CognitoUserAttribute({
                            Name: 'email',
                            Value: email
                        }),
                        new CognitoUserAttribute({
                            Name: 'phone_number',
                            Value: phone
                        }),
                        new CognitoUserAttribute({
                            Name: 'name',
                            Value: name
                        }),
                        new CognitoUserAttribute({
                            Name: 'custom:plan',
                            Value: 'gold'
                        }),
                        new CognitoUserAttribute({
                            Name: 'picture',
                            Value: 'https://scholarsharks.in/assets/images/logos/shark.png'
                        })
                    ];
                    // attributeList.push(

                    // );
                    // let email=email;
                    // userpool.signUp('',password, )
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    // @ts-ignore
                    Userpool.signUp(email, password, attributeList, null, (err: any, data: any) => {
                        if (err) {
                            console.log(err);
                            alert("Please try again, facing some issue");
                        } else {
                            console.log(data);
                            setShowCode(true);
                            updatePlanInDB(data.userSub);

                        }
                    });
                }
            }, err => console.log(err))
            .catch(err => console.log(err));


    }

    const formInputChange = (formField: string, value: string) => {
        if (formField === "email") {
            setEmail(value);
        }
        if (formField === "password") {
            setCheckPassword(false);
            const checkPass = pattern.test(password);
            setCheckPassword(checkPass)
            setPassword(value);
        }
        if (formField === "phone") {
            setPhone(`${value}`);
        }
        if (formField === "code") {
            setCode(value);
        }
        if (formField === "name") {
            setName(value);
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
            else if (password.length < 8) {
                setPasswordErr("must be 6 character")
                resolve({ email: "", password: "must be 6 character" });
            }
            else {
                resolve({ email: "", password: "" });
            }
            reject('')
        });
    };

    console.log((phone));
    return (
        <Layout>
            <div className='panel register-page'>
                <div className='panel-left'>
                    <h2>Welcome Shark &#128075;</h2>
                    {/* <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p> */}

                    <div className="register-form">
                        {
                            !showCode && !verifyCode && 
                            <div className='form'>
                                <div className="formfield">
                                    <TextField
                                        value={name}
                                        onChange={(e) => formInputChange("name", e.target.value)}
                                        label="Name"
                                        helperText={nameErr}
                                        fullWidth
                                        variant="filled"
                                        margin="dense"
                                        className="textfield"
                                    />
                                </div>
                                <div className="formfield">
                                    <TextField
                                        value={email}
                                        onChange={(e) => formInputChange("email", e.target.value)}
                                        label="Email"
                                        helperText={emailErr}
                                        variant="filled"
                                        margin="dense"
                                        fullWidth
                                        className="textfield"
                                    />
                                </div>
                                <div className='formfield'>
                                    <TextField
                                        value={password}
                                        onChange={(e) => { formInputChange("password", e.target.value) }}
                                        type="password"
                                        label="Password"
                                        helperText={passwordErr}
                                        variant="filled"
                                        margin="dense"
                                        fullWidth
                                        className="textfield"
                                    />
                                    {
                                        !checkPassword && 
                                        <div className="passwordHint">
                                            <ul>
                                                <li>Password must contain Capital letter</li>
                                                <li>Password must contain Number</li>
                                                <li>Password length must be 8 character</li>
                                            </ul>
                                        </div>
                                    }
                                    
                                </div>
                                <div className='formfield'>
                                    {/* <select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={value}
                                        label="Country code"
                                        onChange={changeHandler}
                                    >
                                        
                                        {
                                            options.map((opt:any) => {
                                                <op value={opt.value}>{opt.label}</MenuItem>
                                            })
                                        }
                                        
                                    </select> */}
                                    {/* <select options={options} value={value} onChange={changeHandler} /> */}
                                    {/* <TextField
                                        value={phone}
                                        onChange={(e) => { formInputChange("phone", e.target.value) }}
                                        type="text"
                                        label="Phone"
                                        helperText={phoneErr}
                                        variant="filled"
                                        margin="dense"
                                        fullWidth
                                        className="textfield"
                                    /> */}

                                    <PhoneInput
                                        placeholder="Enter phone number"
                                        defaultCountry="IN"
                                        country="US"
                                        value={phone}
                                        // @ts-ignore
                                        onChange={setPhone} />
                                </div>
                                <div className='formfield'>
                                    <Button type='submit' variant='contained' fullWidth onClick={handleClick}>Signup</Button>
                                </div>
                                <a className="verifyAcc" href="#" onClick={(e) => {e.preventDefault();setVerifyCode(true); setShowCode(false)}}>Verify Account</a>

                                {/* <div className='formfield'>
                                <Button type='submit' variant='contained' onClick={verifyAccount}>Signup</Button>
                            </div> */}
                            </div>
                        }

                        {
                            showCode && !verifyCode &&
                            <div className="form">
                                <div className='formfield'>
                                    <TextField
                                        value={code}
                                        onChange={(e) => { formInputChange("code", e.target.value) }}
                                        type="text"
                                        label="Code"
                                        helperText={codeErr}
                                        variant="filled"
                                        margin="dense"
                                        fullWidth
                                        className="textfield"
                                    />
                                </div>
                                <div className='formfield'>
                                    <Button type='submit' variant='contained' fullWidth onClick={verifyAccount}>Verify Account</Button>
                                </div>
                                
                            </div>
                        }

                        {
                            verifyCode && 
                            <div className="form">
                                <div className="formfield">
                                    <TextField
                                        value={email}
                                        onChange={(e) => formInputChange("email", e.target.value)}
                                        label="Email"
                                        helperText={emailErr}
                                        variant="filled"
                                        margin="dense"
                                        fullWidth
                                        className="textfield"
                                    />
                                    <div className='formfield'>
                                        <Button type='submit' variant='contained' fullWidth onClick={resendCode}>Resend</Button>
                                    </div>
                                </div>
                            </div>
                        }

                    </div>
                    <Link to='/login' className="linkDisplay">If you are register member click here</Link>
                    {/* {
                        <button onClick={handleSummary} className={`register-btn ${(email.length > 0 && phone.length > 0 && name.length > 0) === true ? '' : 'disabled'}`}>
                            Summary
                        </button>

                        // <Link to='/summary' className={`register-btn ${(email.length > 0 && mobileNumber.length > 0 && name.length > 0) === true ? '' : 'disabled'}`}>

                        // </Link>
                    } */}

                </div>
                <div className='panel-right'>
                    <h1>Unleash your <br /> knowledge</h1>
                    <p>Where Learning Takes a Dive!</p>
                </div>
            </div>
        </Layout>
    )
}

export default RegisterPage;