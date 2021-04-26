import React from "react";
import {Link, useHistory} from "react-router-dom";
import { useState } from "react";
import M from "materialize-css";
const Signin = () => {
  const history = useHistory();
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const PostData = ()=>{
    if(!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)){
      M.toast({html: "invalid email", classes:"rounded #c2185b pink darken-2"})
      return;
    }


    fetch("/signin", {
      method : "post",
      headers : {
        "Content-Type" : "application/json"
      },
      body : JSON.stringify({
        password,
        email
      })
    })
    .then(res=>res.json())
    .then(data =>{
      if(data.error){
        M.toast({html: data.error, classes:"rounded #c2185b pink darken-2"});
      }
      else{
        localStorage.setItem("jwt", data.token);
        localStorage.setItem("user", data.user);
        M.toast({html: "signin success", classes:"rounded #66bb6a green lighten-1"});
        history.push("/");
      }
      
    })
    .catch(err=>{
      console.log(err);
    })
  }
  return (
    <div className = "myCard">
      <div className="card auth-card input-field">
        <h2>Instagram</h2>
        <input 
        type="text" 
        placeholder="Email"
        value = {email}
        onChange = {(e)=>setEmail(e.target.value)}
        />
        <input 
        type="text" 
        placeholder="Password"
        value = {password}
        onChange = {(e)=>setPassword(e.target.value)}
        />

        <button className="btn waves-effect waves-light #e91e63 pink" onClick={()=>PostData()}>Login</button>
        <h6><Link to="/signup">Don't Have An Account? Create One!</Link></h6>
      </div>
    </div>
  );
};

export default Signin;
