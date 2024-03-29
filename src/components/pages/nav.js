import React, { useState } from 'react';
import me from '../assets/img/lightMode.png'
import meAlt from '../assets/img/darkMode.png'

export default function Nav({ currentPage, handlePageChange }) {
    let [alt, setAlt] = useState(false)

    function altPic() {
        setAlt(true)
    }

    function mainPic() {
        setAlt(false)
    }

    return (
        <div>
            <nav className="navbar">
                <h1 className='pageTitle'>Benjamin Dominguez</h1>  
                <ul className='nav'>
                    <li>
                        <a href='#about' onClick={() => handlePageChange('About')} className={currentPage === 'About' ? 'nav active' : 'nav'}>About Me</a>
                    </li>
                    <li>
                        <a href='#portfolio' onClick={() => handlePageChange('Portfolio')} className={currentPage === 'Portfolio' ? 'nav active' : 'nav'}>Portfolio</a>
                    </li>
                    <li>
                        <a href='#contact' onClick={() => handlePageChange('Contact')} className={currentPage === 'Contact' ? 'nav active' : 'nav'}>Contact Me</a>
                    </li>
                    <li>
                        <a href='#resume' onClick={() => handlePageChange('Resume')} className={currentPage === 'Resume' ? 'nav active' : 'nav'}>Resume</a>
                    </li>
                </ul>
                {alt === false ? (
                    <img src={me} onClick={altPic} alt='me' className='darkToggle'></img>
                    ) : (
                    <img src={meAlt} onClick={mainPic} alt='me' className='darkToggle'></img>
                )}
            </nav>
        </div>
    )
}