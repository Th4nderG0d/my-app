import React,{useState} from 'react'
import {useHistory,Link} from 'react-router-dom'
import authService from '../services/authService'
import './login.css'

function Login(props) {
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [message,setMessage]=useState('')
    const [loggedIn,setLoggedIn]=useState(true)
    const history=useHistory();




    async function submit(e){
        e.preventDefault();
   
          authService.login(email,password).then(()=>{
            //   if(email===props.email && password===props.password){
          history.push("/profile")
        window.location.reload()
        // setLoggedIn(true)
    },
            //   },
          (error)=>{
              const message=error.message;
              setMessage(message)
        setLoggedIn(false)

          }
          )

    }
   
    return (
        <div id="login">
        {loggedIn &&
        <form className="loginForm" onSubmit={submit}>
            <input type="email" className="loginInpt" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Enter your email" required/><br/>
            <input type="password" className="loginInpt" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Enter your password"/><br/>
            <button type="submit" className="loginBtn">LOGIN</button>
            <div className="loginTxt">
                <span className="txt">Dont have an account?</span>
                <br/>
                <Link className="links" to='/register'><button className="loginBtn2" type="submit">Create account</button></Link>
            </div>
            </form>
        }
            {message && (
            <h1 className="login-message">({message})</h1>
            )}
        </div>
    )
}

export default Login
