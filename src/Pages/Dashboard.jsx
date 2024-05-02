import React, { useEffect, useState } from 'react'
import Header from '../Components/Header'
import { Col, Row } from 'react-bootstrap'
import Myprojects from '../Components/Myprojects'
import Profile from '../Components/Profile'
import { getUserAPI } from '../services/allAPI'
import { updateProfileContext } from '../context/ContextShare'
import { useContext } from 'react'

function Dashboard() {
  const[username,setUsername]=useState("")
  const[user,setUser]=useState("")
  const{updateProfile,setupdateProfile}=useContext(updateProfileContext)
  //console.log('context in dasboard',updateProfile);
  const getUser=async()=>{

    if(sessionStorage.getItem("token"))
      {
        const token=sessionStorage.getItem("token")
        const reqHeader={
          "Content-Type":"application/json",
          "Authorization":`Bearer ${token}`
        }
   // console.log('Header',reqHeader);
    const result=await getUserAPI(reqHeader);
  
    if(result.status==200)
    {
    setUser(result.data.User)
     // console.log('home user',user);
    
    }
  }
  }

  useEffect(()=>{
if(sessionStorage.getItem('existingUser')) 
{

  setUsername(JSON.parse(sessionStorage.getItem('existingUser')).username)
  setUser(JSON.parse(sessionStorage.getItem('existingUser')))

}},[])

useEffect(()=>{
  console.log('updatinggg dashboard from context........',updateProfile);
  getUser()
},[updateProfile])
  return (
    <>
    <Header insideDashboard />
    <Row style={{marginTop:"100px",display:"flex",flexDirection:"row"}}>
     
      <Col sm={12} md={8} className='mt-5'>
        <h2>
          Welcome <span className='text-warning mt-5'>{username}</span>
        </h2>
        <Myprojects/>
      </Col>

      <Col sm={12} md={4} className=' '>
        {user?( <Profile user={user}/>):(<></>)}
        
       
      </Col>
    </Row>
    
    </>
 
  )
}

export default Dashboard