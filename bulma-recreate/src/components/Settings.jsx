import React, {useState} from 'react'
import General from './SettingsPages/General'
import SettingsPage from './SettingsPages/SettingsPage'
import Sidenav from './Sidenav'

const Settings = () => {
    const [page, setPage] = useState("general")
    return (
        <div>
            <div className="columns">
                <div className="column is-3" id="sidenav-container">
                    <Sidenav page={page} setPage={setPage}/>
                </div>
                <div className="column">
                    {page === "general" && <General />}
                    {page === "settings" && <SettingsPage  />}
                    
                </div>
            </div>
        </div>
    )
}

export default Settings
