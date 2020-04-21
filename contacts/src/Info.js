import React, { useEffect, useState }  from 'react';
import MyData from './randomUsers.json';
import { FaUser, FaEnvelope, FaMobileAlt, FaGlobeAfrica, FaArrowLeft } from "react-icons/fa";
import ContactList from './ContactList.js';
import { Link } from 'react-router-dom';



function Info(props){
const [data, setData]= useState({name: {title:''}}) // defining name so we can call a key on the name property
const [location, setLocation]= useState("")//empty OBJ
const [img, setImg]= useState ("")//empty OBJ





    useEffect (() =>{
        const id = Number(props.match.params.id)
        const data = MyData.find(data => data.id === id)// finds data ID 
        
        
        
        setImg(data.picture.large)// will set state for img
        setData(data)// will set state for data
        setLocation(data.location.city + "," + data.location.state)//will set state for location

      
        
        
        console.log(props)

    },[props.match.params])
   
    return(

    <div>
        <button onClick><Link to="/"><FaArrowLeft/></Link></button>
         <ul>
             <h2><img className="lrgImg" src={img}/></h2>
               <li className="details"><FaUser/> {data.name.first} {data.name.last}</li>
                <li className="details"><FaEnvelope/>{data.email}</li>
                <li className="details"><FaMobileAlt/>{data.phone}</li>
                <li className="details"><FaGlobeAfrica/>{location}</li>
        </ul>
    

            
    </div>


    )}

export default Info