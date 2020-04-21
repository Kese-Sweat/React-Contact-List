import React, { useEffect, useState }  from 'react';
import logo from './logo.svg';
import './App.css';
import MyData from './randomUsers.json';
import Info from './Info'
import {BrowserRouter as Router, Route } from 'react-router-dom';
import ContactList from './ContactList'



function App() {

const [data, setData]= useState(MyData)
console.log(MyData)


  return (
    <div className="Contacts">
      
    <Router>
      
       <Route path="/" exact component={ContactList} />
       <Route path="/randomUsers/:id" component={Info} />
       
    </Router>
    </div>
  );
}

export default App;

