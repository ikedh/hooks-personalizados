import { useEffect, useState } from "react"

const useSize = () => {

const[width,setWidth]= useState (window.innerWidth)
const[height,setHeight] = useState (window.innerHeight)

const handleResolución= () => {
    setWidth(window.innerWidth)
    setHeight(window.innerHeight)
}

useEffect(()=>{
    window.addEventListener('resize',handleResolución)

    return  () =>{
        window.removeEventListener('resize',handleResolución)
    }
},[])

  return{
    width,
    height
  }


}

export default useSize