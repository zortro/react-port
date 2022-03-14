import React, { useState } from 'react';
import Nav from './pages/nav'
import Portfolio from './pages/portfolio'
import Contact from './pages/contact'
import Resume from './pages/resume'
import About from './pages/about'
import Footer from './pages/footer'

export default function Main() {
    const [currentPage, setPage] = useState('About')

    const renderPage = () => {

        if (currentPage === 'About') {
            return <About />
        }
        if (currentPage === 'Portfolio') {
            return <Portfolio />
        }
        if (currentPage === 'Contact') {
            return <Contact />
        }
            return <Resume />
    }

        const pageChange = (page) => setPage(page)

        return (
            <body>
                <Nav currentPage={currentPage} handlePageChange={pageChange} />
                {renderPage()}
                <Footer />
            </body> 
        )  
}
