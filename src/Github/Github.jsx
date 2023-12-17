import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

function Github() {

    const [data,setData]=useState([])
    useEffect(
        ()=>{
            fetch('https://api.github.com/users/suyash5802')
            .then(res=>res.json())
            .then(data=> setData(data))
        }
    )
  return (
    <div > Github followers :{data.followers}
    <img src='data.avatar.url ' alt="Git picture"/>
    </div>
  )
}

export default Github
