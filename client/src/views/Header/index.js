import React from 'react'
import './Header.css'

const Header = () => {

    const darkMode = () => {
        document.querySelector('body').style.backgroundColor = "#333"
        document.querySelector('.brand-logo').style.color = "#000"
        document.querySelector('#search').style.color = "#FFF"
        let list = document.querySelectorAll('.collection-item')
        if (list) {
            list.forEach(item => {
                item.style.color = "#FFF"
                item.style.backgroundColor = "#333"
            })
        }
    }

    const lightMode = () => {
        document.querySelector('body').style.backgroundColor = "#FFF"
        document.querySelector('.brand-logo').style.color = "#FFF"
        document.querySelector('#search').style.color = "#000"
        let list = document.querySelectorAll('.collection-item')
        if (list) {
            list.forEach(item => {
                item.style.color = "#000"
                item.style.backgroundColor = "#FFF"
            })
        }
    }

    return <nav className='teal darken-2 container'>
        <div className="nav-wrapper container">
            <a href='/' className="brand-logo">Github fetcher<span role='img'>🚀</span></a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li className='darkModeButton' onClick={darkMode}>Dark</li>
                <li className='darkModeButton' onClick={lightMode}>Light</li>
            </ul>
        </div>
    </nav>
}

export default Header