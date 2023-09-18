import React from 'react'
import '../Pages/Home.css'
const Home = () => {
    return (
        <>
            <div className="container">
                <h1>Web Search</h1>
            </div>
            <form action="https://www.google.com/search" method="get" className='form container'>
                <input autoComplete='off' autoFocus type="search" name="q" placeholder='Search...' />
            </form>
        </>
    )
}

export default Home
