import React, {useEffect, useState, useContext} from 'react';
import {UserContext} from "../../App";
const Profile = ()=>{
    const [myPics, setPics] = useState([]);
    const {state, dispatch} = useContext(UserContext);
    console.log(state);
    useEffect(()=>{
        fetch("/myposts", {
            headers :{
                "Authorization" : "Bearer "+localStorage.getItem("jwt")
            }
        })
        .then(res=>res.json())
        .then(result=>{
            setPics(result.posts);
        })

    }, []);
    return(
        <div className="profile-page">
            <div className="user-info">
                <div className ="dp-pic">
                    <img 
                    style={{width: "160px",
                        height: "160px",
                        borderRadius: "80px"}}
                    src="https://images.unsplash.com/photo-1504376379689-8d54347b26c6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cGVvcGxlfGVufDB8MnwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                    alt="profile pic"
                    />

                </div>

                <div className="name-info">
                    <h4>{state?state.name:"loading"}</h4>
                    <div style={{display: "flex", justifyContent: "space-between", width:"108%"}}>
                        <h6>15 Posts</h6>
                        <h6>15 Followers</h6>
                        <h6>40 Following</h6>
                    </div>


                </div>
            </div>
            <div className="gallery">
                {
                    myPics.map(item=>{
                        return(
                            <img key={item._id} className="galimg" src={item.photo} alt={item.title}/>

                        )

                    })
                }
            </div>
        </div>

    );
}

export default Profile;