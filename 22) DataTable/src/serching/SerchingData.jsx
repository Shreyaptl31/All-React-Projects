import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './SerchingData.css'

const SerchingData = () => {
    const [userData, setUserData] = useState([])
    const [search, setSearch] = useState('')

    const showapi = async () => {
        const response = await axios.get("https://jsonplaceholder.typicode.com/users")
        setUserData(response.data)
    }

    useEffect(() => {
        showapi()
    }, [])

    const searchFunction = (e) => {
        setSearch(e.target.value)
    }

    const filterData = userData.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
    )

    return (
        <div className="search-wrapper">
            <h1 className="search-title">🔍 Search Users</h1>
            <input
                type="text"
                placeholder="Type a name..."
                value={search}
                onChange={searchFunction}
                className="search-bar"
            />

            <div className="card-grid">
                {filterData.length > 0 ? (
                    filterData.map((item) => (
                        <div key={item.id} className="glass-card">
                            <h3>{item.name}</h3>
                            <p>{item.email}</p>
                            <p>{item.company.name}</p>
                        </div>
                    ))
                ) : (
                    <p className="no-results">No matching users found.</p>
                )}
            </div>
        </div>
    )
}

export default SerchingData