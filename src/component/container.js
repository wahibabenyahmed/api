import React from 'react'
import Userlist from './Userlist'

const Container = ({resultat}) => {
  return (
    <div>
        {resultat.map((el,key)=>{
          return <Userlist element={el} key={el.id} />
        })}
    </div>
  )
}

export default Container