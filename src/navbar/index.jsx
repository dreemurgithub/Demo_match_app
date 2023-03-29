import React, {useState} from 'react'
import {Link} from 'react-router-dom'

function Navbar() {
    return (
        <nav>
            <ul style={{display: 'flex', listStyle: 'none', backgroundColor: '#6495ED', padding: '0.5em'}}>
                <li style={{padding: '0.5em', border: '1px solid black', backgroundColor: '#9FE2BF'}}><Link
                    to='/'>Home</Link></li>
                <li style={{padding: '0.5em', border: '1px solid black', backgroundColor: '#9FE2BF'}}><Link
                    to='/daugiai'>Giải</Link></li>
                <li style={{padding: '0.5em', border: '1px solid black', backgroundColor: '#9FE2BF'}}><Link
                    to='/xuatexcel'>Data</Link></li>

            </ul>
        </nav>
    )
}

export default Navbar