import React from 'react';
import me from '../assets/img/tempMe.jpg'

export default function Nav({ currentPage, handlePageChange }) {
    return (
        <div>
            <nav className="navbar">
                <h1 className='pageTitle'>Benjamin Dominguez</h1>  
                <ul className='navItems'>
                    <li>
                        <a href='#about' onClick={() => handlePageChange('About')} className={currentPage === 'About' ? 'link active' : 'link'}>About Me</a>
                    </li>
                    <li>
                        <a href='#portfolio' onClick={() => handlePageChange('Portfolio')} className={currentPage === 'Portfolio' ? 'link active' : 'link'}>Portfolio</a>
                    </li>
                    <li>
                        <a href='#contact' onClick={() => handlePageChange('Contact')} className={currentPage === 'Contact' ? 'link active' : 'link'}>Contact Me</a>
                    </li>
                    <li>
                        <a href='#resume' onClick={() => handlePageChange('Resume')} className={currentPage === 'Resume' ? 'link active' : 'link'}>Resume</a>
                    </li>
                </ul>
                <img src={me} alt='me' className='profilePicture'></img>
            </nav>

        </div>
    )
}