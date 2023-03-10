import axios from "axios";

export default class FollowService{
    follow(values,token){
       return axios.post(process.env.REACT_APP_API + "follows/add",values,{
            headers:{
                'Authorization':"Bearer "+token
            }
        })
    }
    unfollow(values,token){
        return axios.delete(process.env.REACT_APP_API + `follows/delete/${values.userId}/${values.followingId}`,{
             headers:{
                 'Authorization':"Bearer "+token
             }
         })
     }
}