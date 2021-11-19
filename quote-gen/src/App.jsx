import React, { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';

export default function App() {
  const [advice, setAdvice] = useState('');

  useEffect(() => {
    fetchAdvice();
  }, [])

  const fetchAdvice = () => {
    axios.get('https://api.adviceslip.com/advice')
    .then((response) => {
      const {advice} = response.data.slip
      setAdvice(advice)
      console.log(advice)
    })
    .catch((error) => {
      console.log(error)
    })

  }

  return (
    <div className="app">
      <div className="card">
      <h1 className="heading">{advice}</h1>
      <button className='button' onClick={fetchAdvice}>
        <span>New Advice</span>
      </button>
      </div>
    </div>
  )
}
