import React,{useState} from 'react'

export default function Sliding() {
    const[slide,setslide]=useState(0)
 
    
    const images=[
    "https://images.pexels.com/photos/417344/pexels-photo-417344.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/8905037/pexels-photo-8905037.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    "https://images.pexels.com/photos/802024/pexels-photo-802024.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg?auto=compress&cs=tinysrgb&w=600"
    ];
   
    function next(){
      if(slide<images.length -1){
        setslide(slide +1)
      }
     
    }
    function prev(){
      setslide(slide -1)
    }
  return (
  
    <div className='flex justify-center mt-[7rem] items-center '>
        <div className='  '>
           <img className=' w-[800px]  ' src={images[slide]} alt="" />
             <div className=' mt-[2rem] text-center  '>
                <button onClick={next} className='py-2 px-7 text-white  bg-orange-500 mx-6'>Next</button>
                <button onClick={prev} className='py-2 px-7 text-white  bg-orange-500 mx-6'>Prev</button>
             </div>
        </div>
    </div>
  )
}
