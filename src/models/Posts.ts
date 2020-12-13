export class Posts{
    userId:number
    id:number
    title:string
    body:string

    constructor(postResponse:any) {
        this.userId = postResponse.userId
        this.id = postResponse.id
        this.title = postResponse.title
        this.body = postResponse.body
    }

}