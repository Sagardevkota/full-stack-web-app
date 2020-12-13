import Axios from "axios";
import {Posts} from "../models/Posts";

export class FakePostAPI{

    BASE_URL = "https://jsonplaceholder.typicode.com/";

    getPosts(callback:(response:Posts[])=>any) {

        let path:any = "posts"
        let fullPath = this.BASE_URL+path;

        Axios.get(fullPath)
            .then(function (response:any) {
                // handle success
                let resArray:any[] = response.data;
                resArray.map(post=>{
                    return new Posts(post);
                })


                callback(resArray);

            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .then(function () {
                // always executed
            });


    }

    getOnePost(id:any , callback:(res:Posts)=>any){
        let path = "posts/"+id
        let fullpath = this.BASE_URL + path;

        Axios.get(fullpath)
            .then((response:any)=>{

                let post = response.data;
                callback(new Posts(post));

            })
            .catch()
            .finally();
    }


}