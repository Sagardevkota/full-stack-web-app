import React, {useEffect, useState} from "react";
import {RouteComponentProps} from "react-router";
import {FakePostAPI} from "../api/FakePostAPI";
import {Posts} from "../models/Posts";
import {Card, CardContent, CardHeader} from "@material-ui/core";
import './FullPost.css'
import {Redirect} from "react-router-dom";

//extending this class gets us parameter passed to route
interface IProps extends RouteComponentProps<{id:string}>{

}

export const FullPost:React.FC<IProps> = (props:IProps) =>{
    let id = props.match.params.id;
    let postAPI:FakePostAPI = new FakePostAPI();
    console.log(id)
    let singPost = new Posts("");

    const [post,setPost] = useState(singPost);
    const [isAuthenticated,setIsAuthenticated] = useState(true);




    useEffect(()=>{
        let authenticated = localStorage.getItem("authenticated");

        if (authenticated !== "true"){
            setIsAuthenticated(false);
            return;
        }
        if (typeof id !== 'undefined'){
            postAPI.getOnePost(id,(res)=>{
                setPost(res);
            })
        }


    },[])


    return (
        <div>
            {isAuthenticated?null: <Redirect to="/" />}
        {typeof id !== 'undefined'?
            null:
            (<h4>Id is undefined</h4>)}

            <h2>Full Post</h2>

            <Card className={"root"} key={id}>
                <CardHeader
                    title={post.title}
                    subheader="2020/12/3"
                />
                <CardContent>
                    {post.body}
                </CardContent>


            </Card>




    </div>)
}