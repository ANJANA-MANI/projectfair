import { BASE_URL } from "./serverurl";
import { commonAPI } from "./commonapi";
//register
export const registerAPI=async(user)=>{
    return await commonAPI("POST",`${BASE_URL}/user/register`,user,"")
}

//login
export const loginAPI=async(user)=>{
    return await commonAPI("POST",`${BASE_URL}/user/login`,user,"")
}

//add project
export const addProjectAPI=async(reqBody,reqHeader)=>{
    return await commonAPI("POST",`${BASE_URL}/projects/add`,reqBody,reqHeader)
}
//gethomeprojects
export const homeProjectsAPI=async()=>{
    return await commonAPI("GET",`${BASE_URL}/projects/homeprojects`,"","")
}
//getallprojects
export const allProjectsAPI=async(searchkey,reqHeader)=>{
    return await commonAPI("GET",`${BASE_URL}/projects/all?search=${searchkey}`,"",reqHeader)
}
//get userprojects
export const userProjectsAPI=async(reqHeader)=>{
    return await commonAPI("GET",`${BASE_URL}/user/allprojects`,"",reqHeader)
}

export const editProjectAPI=async(projectId,reqBody,reqHeader)=>{
    return await commonAPI("PUT",`${BASE_URL}/projects/edit/${projectId}`,reqBody,reqHeader)
}
//delete project
export const deleteProjectAPI=async(projectId,reqHeader)=>{
    return await commonAPI("DELETE",`${BASE_URL}/projects/remove/${projectId}`,{},reqHeader)
}
//edit profile
export const editProfileAPI=async(reqBody,reqHeader)=>{
    return await commonAPI("PUT",`${BASE_URL}/profile/update`,reqBody,reqHeader)
}
//get user
export const getUserAPI=async(reqHeader)=>{
    return await commonAPI("GET",`${BASE_URL}/user/details`,"",reqHeader)
}