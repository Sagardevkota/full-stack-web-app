import React from "react";
import {Card, CardHeader, CardMedia} from "@material-ui/core";
import './SinglePost.css';


interface IProps{
    title:string,
    onclick:()=>void,
    key:number
}

export const SinglePost:React.FC<IProps> = (props) =>{


    return (

        <div className={"SinglePost"} >

        <Card className={"card"} onClick={(event)=>props.onclick()}>
            <CardHeader
                title={props.title}
                subheader="September 14, 2016"
            />
            <CardMedia
                image="https://icons-for-free.com/iconfiles/png/512/instagram+new+design+social+media+square+icon-1320184017120651958.png"
                title="Paella dish"
            />

        </Card>

    </div>

            )

}