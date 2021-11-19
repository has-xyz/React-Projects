import React, {useState, useEffect} from 'react'
import {NativeSelect, FormControl} from '@material-ui/core'

import {fetchCountries} from '../../api'

import styles from './countryPicker.module.css'

export default function CountryPicker({handleCountryChange}) {
    const [fetchedCountries, setFetchedCountries] = useState([]);
    useEffect(() => {
        const fetchAPI = async () => {
            setFetchedCountries(await fetchCountries())
        }
        fetchAPI()
    }, [setFetchedCountries])

    console.log(fetchedCountries)

    return (
        <div>
            <FormControl className={styles.formControl}>
                <NativeSelect defaultValue='' onChange={(event) => handleCountryChange(event.target.value)}>
                    <option value=''>Global</option>
                    {fetchedCountries.map((country, index) => (
                        <option key={index} value={country}>{country}</option>
                    ))}
                </NativeSelect>
            </FormControl>
        </div>
    )
}
