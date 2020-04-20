import React, {  useState }  from 'react';
import { Link } from 'react-router-dom';
import MyData from './randomUsers.json';



function ContactList (props){
const [data]= useState(MyData)
return(
    <div>
        <h1 className="header">My Buddies</h1>
        {data.map((item) => {
          return <li className="myContacts"><img className="picture" src={item.picture.thumbnail}/>
              <Link className="name" to={`/randomUsers/${item.id}`}>{item.name.first} {item.name.last}</Link></li>
        })}
    </div>

)}

export default ContactList