import React from 'react';

export default function Nav({ currentPage, handlePageChange }) {
    return (
        <nav className="navbar">        
            <h1 class="page-title">Benjamin Dominguez</h1>
            <ul className='Navitems'>
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
        </nav>
    )
}