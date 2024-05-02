import React, { useContext, useState } from 'react'
import profileimg from '../assets/profile.svg'
import Collapse from 'react-bootstrap/Collapse';
import { useEffect } from 'react';
import { editProfileAPI } from '../services/allAPI';
import { BASE_URL } from '../services/serverurl';
import { updateProfileContext } from '../context/ContextShare';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Profile({user}) {
  const{updateProfile,setupdateProfile}=useContext(updateProfileContext)
  //console.log('context in profile',updateProfile);
  const[preview,setPreview]=useState("")
  const[profileDetails,setProfileDetails]=useState({
    id:user?._id,
    github:user?.github,
    linkedin:user?.linkedin,
    profile:""
  })

  const[open,setOpen] = useState(false);
  //console.log(profileDetails,'profile');
const updateProfileinfo=async()=>
{
//console.log('updatinggg');
const{github,linkedin,profile}=profileDetails
//console.log(profileDetails,'profile');
if(github==""||linkedin=="")
{
  toast.warning('fill all the fields')
}

else{
   console.log('Appending reqbody');
   const reqBody=new FormData()
   reqBody.append('github',github)
   reqBody.append('linkedin',linkedin)
   !preview?reqBody.append('profile',profile):reqBody.append('profile',profileDetails.profile)
   const token=sessionStorage.getItem('token');
  if(preview)
  {
    const reqHeader={
      "Content-Type":"multipart/form-data"
       ,"Authorization":`Bearer ${token}`
    }

    //api call
    const result=await editProfileAPI(reqBody,reqHeader)
    //console.log('api called.......');
    if(result.status===200)
    {
     toast.success('profile updated');
     setupdateProfile(result.data)
     setOpen(!open)
   
     //passs response to my project
    }
    else{
      //console.log('The result',result);
      toast.alert(result.response.data)

    }
  }
  else
  {
    const reqHeader={
      "Content-Type":"application/json"
       ,"Authorization":`Bearer ${token}`
    }
    const result=await editProfileAPI(reqBody,reqHeader)
    if(result.status===200)
    {
  toast.success('profile updated')
  setupdateProfile(result.data)
  
  setOpen(!open)
    }
    else{
    toast.error(result.response.data)
     }

  }
    }
  }

  useEffect(() => {
    if (profileDetails.profile) {
      //console.log(profileDetails.profile);
      setPreview(URL.createObjectURL(profileDetails.profile))
    }
  }, [profileDetails.profile])
  useEffect(() => {
    setProfileDetails({
      id: user?._id,
      github: user?.github,
      linkedin: user?.linkedin,
      profile: '',
    });
  }, [user]);
 
  
  return (
    <div className='card shadow mt-3 me-2 p-4'>
      <div className="d-flex justify-content-between">
      <h1>Profile</h1>
      <button className='btn btn-outline-info'onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}><i className='fa-solid fa-angle-down'></i></button>
      </div>
    <Collapse in={open}>
        
        <div className="row justify-content center mt-3" id="example-collapse-text">
    <label >
      <input type="file"  style={{display:"none"}}   onChange={e=>setProfileDetails({...profileDetails,profile:e.target.files[0]})}/>
    <img src={preview?preview:`${BASE_URL}/uploads/${user.profile}`} style={{width:"140px",height:"140px",cursor:"pointer",borderRadius:"50%"}}alt="img" srcset="" />
   
  
    </label>
    <div className="mt-3">


      <input type="text"   className='form-control' placeholder='Github' value={profileDetails?.github}  onChange={e=>setProfileDetails({...profileDetails,github:e.target.value})}  />
      <br/>
      <input type="text"    className='form-control' placeholder='Linkedin'  value={profileDetails?.linkedin}  onChange={e=>setProfileDetails({...profileDetails,linkedin:e.target.value})} />
      
      
    </div>
    <div className="mt-3 text-align-center d-grid">
      <button className='btn btn-warning d-grid' onClick={updateProfileinfo}>Update</button>
    </div>
    </div>
      </Collapse>
      <ToastContainer />
    </div>

  )
}

export default Profile