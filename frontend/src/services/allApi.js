import { serverUrl } from "./serverUrl"
import { commonApi } from "./commonApi"
export const addVideoApi = async (reqBody) =>{
    return await commonApi(`POST`,`${serverUrl}/video`,reqBody) 
}