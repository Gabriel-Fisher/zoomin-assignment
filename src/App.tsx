import React, { useState, useEffect } from 'react';
import './App.css';
import SideBar from './components/SideBar';
import { NullMovie } from './services/Movie'
import axios from 'axios'
import { Spinner } from 'react-bootstrap';

const url = 'https://swapi.dev/api/films'

const App = () => {

  const [loading, setLoading] = useState(false)
  const [movies, setMovies] = useState(new NullMovie())
  const getMovies = async () => {
    try {
      const data = await axios
      .get(url)
      .then(res => {
        console.log(res.data);
        setMovies(res.data)
      })
      setLoading(true)
    } catch (e) {
      console.log(e)
    }
  }

  useEffect(()=>{
    getMovies()
  },[])

  return(
    <div>
      {loading ? (<SideBar movies={movies}/>): (<Spinner animation="border"/>)}
      
    </div>
  )

}

export default App;
