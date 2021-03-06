import React, {useState, useEffect} from 'react';

const Home = ()=>{
    const [data, setData] = useState([]);
    useEffect(()=>{
        fetch('/allposts', {
            headers:{
                "Authorization" : "Bearer "+localStorage.getItem("jwt")
            }
        })
        .then(res=>res.json())
        .then(result=>{
            setData(result.posts);
        })

    }, [])
    return(
        <div className="home-page">
            {
                data.map(item=>{
                    return(
                        <div className="card home-card" key={item._id}>
                        <h5>{item.postedBy.name}</h5>
                        <div className="card-image">
                            <img alt="pic" src={item.photo}/>
        
                        </div>
                        <div className="card-content">
                        <i className="material-icons likebt">favorite</i>
                            <h6>{item.title}</h6>
                            <p>
                                {item.body}
                            </p>
                            <input type="text" placeholder="have any thoughts!" />
        
                        </div>               
                    </div>

                    )
                })
            }
           
        </div>

    );
}

export default Home;