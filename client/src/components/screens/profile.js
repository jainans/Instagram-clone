import React from 'react';

const Profile = ()=>{
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
                    <h4>Anshuman Jain</h4>
                    <div style={{display: "flex", justifyContent: "space-between", width:"108%"}}>
                        <h6>15 Posts</h6>
                        <h6>15 Followers</h6>
                        <h6>40 Following</h6>
                    </div>


                </div>
            </div>
            <div className="gallery">
                <img className="galimg" src="https://images.unsplash.com/photo-1552162864-987ac51d1177?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhdXRpZnVsJTIwZ2lybHN8ZW58MHwyfDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="pic"/>
                <img className="galimg" src="https://images.unsplash.com/photo-1479936343636-73cdc5aae0c3?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTh8fGJpa2luaSUyMGdpcmx8ZW58MHwyfDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="pic"/>
                <img className="galimg" src="https://images.unsplash.com/photo-1455103433115-33cd90e2a3d6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Njl8fHBlb3BsZXxlbnwwfDJ8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="pic"/>
                <img className="galimg" src="https://images.unsplash.com/photo-1529068755536-a5ade0dcb4e8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGVvcGxlfGVufDB8MnwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="pic"/>
                <img className="galimg" src="https://images.unsplash.com/photo-1528817164944-2cf16aefdc8d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODh8fHBlb3BsZXxlbnwwfDJ8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="pic"/>
                <img className="galimg" src="https://images.unsplash.com/photo-1518887802087-968ef5f0dc60?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTU3fHxwZW9wbGV8ZW58MHwyfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="pic"/>

            </div>
        </div>

    );
}

export default Profile;