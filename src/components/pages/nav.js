import React from 'react';
import me from '../assets/img/tempMe.jpg'

export default function Nav({ currentPage, handlePageChange }) {
    return (
        <div>
            <nav className="navbar">
                <h1 className='pageTitle'>Benjamin Dominguez</h1>  
                <ul className='navItems'>
                    <li>
                        <a href='#about' onClick={() => handlePageChange('About')} className='link'>About Me</a>
                    </li>
                    <li>
                        <a href='#portfolio' onClick={() => handlePageChange('Portfolio')} className='link'>Portfolio</a>
                    </li>
                    <li>
                        <a href='#contact' onClick={() => handlePageChange('Contact')} className='link'>Contact Me</a>
                    </li>
                    <li>
                        <a href='#resume' onClick={() => handlePageChange('Resume')} className='link'>Resume</a>
                    </li>
                </ul>
                <img src={me} alt='me' className='profilePicture'></img>
            </nav>

        </div>
    )
}