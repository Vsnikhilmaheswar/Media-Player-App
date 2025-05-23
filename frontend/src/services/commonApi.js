import axios from "axios"

export const commonApi = async(httprequest,url,reqBody)=>{
    const reqConfig = {
        method : httprequest, //post
        url ,  //serverurl
        data:reqBody, //video details
        headers: {"Content-Type" : "application/json"}
    }
    return await axios(reqConfig).then((result)=>{
        return result
    }).catch((err)=>{
        return err
    })
   
} 