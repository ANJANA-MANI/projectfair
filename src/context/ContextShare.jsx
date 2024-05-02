import React, { useState } from 'react'
import { createContext } from 'react'

export const addProjectResponseContext=createContext()
export const editProjectResponseContext=createContext()
export const updateProfileContext=createContext()
function ContextShare({children}) {
    const [addProjectResponse,setAProjectResponse]=useState({})
    const[editProjectResponse,setEditProjectResponse]=useState({})
    const[updateProfile,setupdateProfile]=useState({})
    return (
    <>
    <addProjectResponseContext.Provider value={{addProjectResponse,setAProjectResponse}}>
       <editProjectResponseContext.Provider value={{editProjectResponse,setEditProjectResponse}}>
       <updateProfileContext.Provider value={{updateProfile,setupdateProfile}}>
       {children}
       </updateProfileContext.Provider>
       </editProjectResponseContext.Provider>
    </addProjectResponseContext.Provider>
    </>
  )
}

export default ContextShare