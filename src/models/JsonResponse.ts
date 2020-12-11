export class JsonResponse{

    status:string;
    message:string;

    constructor(Response:any) {
        this.status = Response.status;
        this.message = Response.message;
    }
}