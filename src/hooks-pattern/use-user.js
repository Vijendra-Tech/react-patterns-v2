import {useState,useEffect} from 'react'

const useUser =(userId)=>{
  const [user,setUser] = useState("")
  useEffect(()=>{
      (async ()=>{
         const res = fetch(`/user/${userId}`)
         setUser(res.data)
      })()
  },[userId])
  return user;
}