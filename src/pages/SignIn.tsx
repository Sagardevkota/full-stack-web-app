import React, {useState} from "react";

import { InputAdornment, TextField} from "@material-ui/core";
import './SignIn.css';
import AccountCircle from '@material-ui/icons/AccountCircleOutlined';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import {Alert} from "@material-ui/lab";
import {UserAPI} from "../api/UserAPI";
import {JsonResponse} from "../models/JsonResponse";


export const SignIn =() =>{

    const [userName,setUserName] = useState("");
    const [password,setPassword] = useState("");
    const [signInSuccess,setsignInSuccess] = useState(false);
    const [signInFailure,setSignInFailure] = useState(false);
    let userAPI:UserAPI = new UserAPI();


    function validateInput(){
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        return userName.length >5 &&re.test(String(userName).toLowerCase()) && password.length >5;
    }


    function handleClick(event: React.MouseEvent<HTMLButtonElement>){
        event.preventDefault();

        userAPI.login(userName,password,(Res:JsonResponse)=>{
            console.log(Res);
            if (Res.message === "Login successfull")
                setsignInSuccess(true);
            else
                setSignInFailure(true);
        })
    }

        return (<div>

            {signInSuccess?(<Alert severity="success">
                Logged In Successfully — <strong>All Set!</strong>
            </Alert>):null}

            {signInFailure?(<Alert severity="error">
                Couldnt Sign In — <strong>Check your userName or password!</strong>
            </Alert>):null}

            <br/><br/>

        <header>
            <h1>Sign In</h1>
        </header>
            <br/>

        <form noValidate autoComplete="off">
            <TextField id="standard-basic" label="Enter your username"
                       type="email"
                       variant={"outlined"}
                       onChange={(e)=>setUserName(e.target.value)}
                       InputProps={{
                           startAdornment: (
                               <InputAdornment position="start">
                                   <AccountCircle />
                               </InputAdornment>
                           ),
                       }}
            /> <br/><br/>
            <TextField id="standard-basic"  label="Enter your password" variant={"outlined"}
                       type="password"
                       onChange={(e)=>setPassword(e.target.value)}

                       InputProps={{
                           startAdornment: (
                               <InputAdornment position="start">
                                   <LockOutlinedIcon/>
                               </InputAdornment>
                           ),
                       }}

            /> <br/><br/>
            <button className="btn" color="primary"
                    disabled={!validateInput()}
                    onClick={(event)=>handleClick(event)} >Login</button>

        </form>


    </div>)

}