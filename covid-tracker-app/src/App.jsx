import React, { useEffect, useState } from 'react'
import {Cards, Chart, CountryPicker} from './components'
import styles from './app.module.css'
import {fetchData} from './api'

export default function App() {
  const [data, setData] = useState({});
  const [country, setCountry] = useState('');
  useEffect(() => {
    const fetchCovidData = async () => {
      const data = await fetchData();
      setData(data);
      // console.log(data)
    }
    fetchCovidData()
  },[])

  const handleCountryChange = async (country) => {
    console.log(country)
    const fetchedData = await fetchData(country);
    setData(fetchedData)
    setCountry(country)
    // fetch data

    // set state
  }


  return (
    <div className={styles.container}>
      {/* <button onClick={()=> fetchCovidData()}>Fetch Data</button> */}
      <img src='https://i.ibb.co/7QpKsCX/image.png' className={styles.image} alt='COVID-19'/>
      <Cards data={data}/>
      <CountryPicker handleCountryChange={handleCountryChange}/>
      <Chart data={data} country={country}/>
    </div>
  )
}
