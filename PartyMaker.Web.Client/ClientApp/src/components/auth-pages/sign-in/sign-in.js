import { TextField } from '@mui/material'
import Divider from '@mui/material/Divider';
import React , {useState}from 'react'
import GoogleButton from '../../ui/GoogleButton';
import SampleButton from '../../ui/SampleButton'
import './sign-in.css'

const SignInPage = () => {
    const [login,setLogin] = useState({
        email : "",
        password : ""   
    });

    function signIn(e){
        e.preventDefault();
        console.log(login);
        // request to backend
    }
  return (
    <div className = "sign-in-container">
        <form className = "sign-in-form" onSubmit = {signIn}>
        <div className="sign-in-content">
            <div className="text">
                <h1>Welcome back to PartyMaker</h1>
                <h3>Log in to your existing account</h3>
            </div>
        </div>
            <TextField variant = "standard" className = "field" label ="Email or user name" required onChange = {(e)=>setLogin({...login, email:e.target.value})}/>
            <TextField variant = "standard" className = "field" label ="Password" required onChange = {(e)=>setLogin({...login, password:e.target.value})} type = "password"/>
            <SampleButton type = "submit">Sign In</SampleButton>
            <div className="or">
                <Divider>or</Divider>
            </div>
            <GoogleButton/>
        </form>
        
    </div>
  )
}

export default SignInPage