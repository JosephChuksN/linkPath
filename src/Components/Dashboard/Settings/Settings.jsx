import React, {useState,} from 'react'
import ChangePassword from './ChangePassword';
import EditProfile from './EditProfile';
import { useAuth } from '../../../Context/AppContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';










const Settings = () => {

  const { updateError } = useAuth();
  const [showModal, setShowModal] = useState(false)
  const [loading, setLoading] = useState(false)
  
  
  
 
  

  const handleShowModal = ()=>{ 
   setShowModal(!showModal)
}





 const updateDone = ()=>{
  toast.info('profile updated',{
   autoClose: 1000
  })
}
const updateErr = ()=>{
  toast.error(updateError,{
    autoClose: 1000
  })
}
  



return (
<div className='flex lg:flex-row flex-col  w-full px-3 md:px-0 py-5 md:pt-10 md:w-3/4 lg:w-full  gap-3 lg:px-5 '>

    <EditProfile 
     handleShowModal={handleShowModal}
     showModal={showModal}
     loading={loading}
     updateDone={updateDone}
     updateErr={updateErr}
     setLoading={setLoading}

    />
    <ToastContainer limit={2} />
    <ChangePassword />
    </div>
  )
}

export default Settings