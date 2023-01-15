import React from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const Profile = () => {
    const data=useSelector(state=>state.user.list);
    const ID= useParams()
    const singleUser= data.find(el=>el.id === Number(ID.id))
    console.log(singleUser);
  return (
    <div>Profile</div>
  )
}

export default Profile