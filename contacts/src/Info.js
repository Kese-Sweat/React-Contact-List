import React, { useEffect, useState }  from 'react';
import MyData from './randomUsers.json';
import { FaUser, FaEnvelope, FaMobileAlt, FaGlobeAfrica } from "react-icons/fa";




function Info(props){
const [data, setData]= useState({name: {title:''}}) //name needs to be defined
const [location, setLocation]= useState("")
const [img, setImg]= useState ("")


    useEffect (() =>{
        const id = Number(props.match.params.id)
        const data = MyData.find(data => data.id === id)
        
        
        
        setImg(data.picture.large)
        setData(data)
        setLocation(data.location.city + "," + data.location.state)
        
        
        console.log(props)

    },[props.match.params])
   
    return(

    <div>
         <ul>
             <h2><img className="lrgImg" src={img}/></h2>
               <li className="details"><FaUser/> {data.name.first} {data.name.last}</li>
                <li className="details"><FaEnvelope/>{data.email}</li>
                <li className="details"><FaMobileAlt/>{data.phone}</li>
                <li><FaGlobeAfrica/>{location}</li>
        </ul>
    

            
    </div>


    )}

export default Info