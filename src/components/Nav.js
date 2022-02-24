import React from 'react'
import { Navbar } from './../styles/Components'
import mockNav from './../static/mockNav.png'

export default function Nav(props) {
    return (
        <Navbar src={mockNav} alt="navbar" />
    )
}
