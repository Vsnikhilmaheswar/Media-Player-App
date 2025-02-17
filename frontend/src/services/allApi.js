import { serverUrl } from "./serverUrl"
import { commonApi } from "./commonApi"

export const addVideoApi = async (reqBody) =>{
    return await commonApi(`POST`,`${serverUrl}/video`,reqBody) 

}

export const getVideoApi = async()=>
{
    return await commonApi(`GET`,`${serverUrl}/video`,"")
}

export const removeVideApi = async(id)=>
{
    return await commonApi(`DELETE`,`${serverUrl}/video/${id}`,{})
}
export const addwatchhistoryApi = async (reqBody)=>{
    return await commonApi(`POST`,`${serverUrl}/history`,reqBody)
} 
export const getwatchhistoryApi = async ()=>{
    return await commonApi(`GET`,`${serverUrl}/history`,"")
} 

export const removeWatchHistory = async(id)=>
    {
        return await commonApi(`DELETE`,`${serverUrl}/history/${id}`,{})
    }