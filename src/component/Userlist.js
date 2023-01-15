import React from 'react'
import {useNavigate} from 'react-router-dom'
const Userlist = ({element}) => {
  const navigate=useNavigate();
  return (
    <div>
      <h1>user ID :{element.id} </h1>
      <h1>{element.name} </h1>
      <h1>{element.username} </h1>
      <button onClick={()=>navigate(`/profile/${element.id} `) } > details</button>
    </div>
  )
}

export default Userlist