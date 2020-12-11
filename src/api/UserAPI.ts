
import Axios from "axios";
import {JsonResponse} from "../models/JsonResponse";

export class UserAPI{


     BASE_URL:string = "http://localhost:8010/proxy/";


    login(userName:string,password:string,callback:(Res:JsonResponse)=>any){


        let options: any = {
            headers: {
                'Content-Type':'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE, HEAD, OPTIONS'
            },
            json:true
        }

       let data:any = {
            "userName":userName,
           "password":password,
        }


        Axios.post(this.BASE_URL+"login",data,options)
            .then(function (response:any) {
                // handle success
                let res:JsonResponse = new JsonResponse(response.data);
                callback(res);

            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .then(function () {
                // always executed
            });
    }
}