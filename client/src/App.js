import logo from './logo.svg';
import './App.css';
import React from 'react'
import { useTransition } from 'react'

import React ,{ useState, useEffect} from 'react';

export default function Hooks() {
  const [count, setCount] = useState(0);
  const decrementCount = () => {
    setCount(prevCount => -1);
 
  }
}

const incrementCount = () => {
  setCount (prevCount =>prevCount +1);
}
 //useefect

 const [resorceType, setResourceType] = useState ('posts');
 const [items, setItems] =useState ([]);

 useEffect (()=> {
  fetch (`https://jsonplaceholder.typicode.com/${resorceType}`)
  .then(response => response.json())
  .json(json => setItems(json))
 },[resorceType])

 return(
<div>
  <button onClick={() => setResourceType('posts')}>posts</button>
  <button onClick={() => setResourceType('posts')}>users</button>
  <button onClick={() => setResourceType('posts')}>comments</button>
  <h3>{resorceType}</h3>
  {items.map(item =>{
    return<pre>{JSON.stringify(item)}</pre>
  })}
</div>

 )

 function fetchingForm() {
  const [name,setName] = useState('')
  
 }
