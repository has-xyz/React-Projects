import React, { useState } from 'react'
import {Paper, TextField} from '@material-ui/core'

export default function SearchBar({onFormSubmit}) {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSubmit = (event) => {
        onFormSubmit(searchTerm)
        event.preventDefault();
    }

    const handleChange = (event) => setSearchTerm(event.target.value);

    return (
        <>
            <Paper elevation={6} style={{padding: '25px'}}>
                <form onSubmit={handleSubmit}>
                    <TextField fullWidth label="Search..." onChange={handleChange}></TextField>
                </form>
            </Paper>
        </>
    )
}
