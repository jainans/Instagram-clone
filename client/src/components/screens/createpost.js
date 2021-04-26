import React from 'react';
import {Link, useHistory} from "react-router-dom";
import { useState, useEffect } from "react";
import M from "materialize-css";


const CreatePost  = ()=>{
    const history = useHistory();
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [photo, setPhoto] = useState("");
    const [url, setUrl] = useState("");

    useEffect(()=>{
      if(url)
      {
        fetch("/createpost", {
          method : "post",
          headers : {
            "Content-Type" : "application/json",
            "Authorization" : "Bearer "+localStorage.getItem("jwt")

          },
          body : JSON.stringify({
            title,
            body,
            photo:url
          })
        })
        .then(res=>res.json())
        .then(data =>{
          if(data.error){
            M.toast({html: data.error, classes:"rounded #c2185b pink darken-2"});
          }
          else{
            M.toast({html: "created post successfully", classes:"rounded #66bb6a green lighten-1"});
            history.push("/");
          }
          console.log(data);
        })
        .catch(err=>{
          console.log(err);
        })



      }

    }, [url])


    const postFile = ()=>{
        const formData = new FormData();
        formData.append('file', photo);
        formData.append('upload_preset', "insta-clone");
        formData.append('cloud_name', "anshu2161");

    
        fetch("	https://api.cloudinary.com/v1_1/anshu2161/image/upload", {
            method : "post",
            body : formData
    
        })
        .then(res=>res.json())
        .then(data=>{
            setUrl(data.url);
        })
        .catch(err=>{
            console.log(err);
        })

        
        
    
    }

    return (
        <div>
            <div className="card create-posts">
                <input type="text"
                 placeholder="Title"
                 value = {title}
                 onChange = {(e)=>setTitle(e.target.value)}
                 
                 />
                <input type="text"
                 placeholder="Body"
                 value = {body}
                 onChange = {(e)=>setBody(e.target.value)}
                 
                 />
                <div className="file-field input-field">
                    <div className="btn #e91e63 pink">
                    <span>Upload Image</span>
                    <input 
                    type="file"
                    onChange = {(e)=>setPhoto(e.target.files[0])}
                    
                    />
                    </div>
                    <div className="file-path-wrapper">
                        <input className="file-path validate" type="text"/>
                    </div>
                    
                </div>
                <button className="btn waves-effect waves-light #e91e63 pink" onClick={()=>postFile()}>CreatePost</button>
            </div>
        </div>
    );
}
export default CreatePost;