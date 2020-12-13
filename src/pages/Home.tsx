import React, {useEffect, useState} from "react";
import {FakePostAPI} from "../api/FakePostAPI";
import {Posts} from "../models/Posts";
import {SinglePost} from "../component/SinglePost";
import {Link, Redirect} from "react-router-dom";
import { LinearProgress} from "@material-ui/core";


export const Home = () =>{

    let postArr:Posts[] = [];
    const [posts,setPosts] = useState(postArr);
    const [isLoading,setIsLoading] = useState(true);
    const [isAuthenticated,setIsAuthenticated] = useState(true);


    useEffect(() => {

        let authenticated = localStorage.getItem("authenticated");
        let postApi:FakePostAPI = new FakePostAPI();
        if (authenticated !== "true"){
            setIsAuthenticated(false);
             return;
        }

       postApi.getPosts(response => {
           setIsLoading(false);
           setPosts(response);

       })
    },[]);
    return <div>
        <br/>
        {isAuthenticated?null: <Redirect to="/" />}
        {isLoading?<LinearProgress color={"secondary"} />:null}

        <br/>
        {
            posts.map(post=>{
                return <Link to={"/posts/id/"+post.id} key={post.id} >
                    <SinglePost title={post.title} key={post.id} onclick={() => ""}/>
                </Link>
            })

        }
    </div>
}