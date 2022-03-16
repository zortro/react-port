import React, { useEffect, useState } from 'react';
import OOK from '../assets/img/OokDemo.png'
import PNF from '../assets/img/PageNotFound.png'
import LoadingPage from './loading.js'

export default function Portfolio() {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        let isMounted = true
        setTimeout(() => {
            if (isMounted) setLoading(false)
        }, 1000)
        return () => { isMounted = false }
    })

    return(
        <>
            {loading === true ? (
                <LoadingPage />
            ) : (
                <>
                    <aside className='portcont'>
                        <div className="img-1 desc">
                            <h4>Oceans of Knowledge</h4>
                            <img href='https://zortro.github.io/Project1/' src={OOK} alt='Oceans of Knowledge'/>
                            <p>Try your hand at Oceans of Knowledge! Using multiple APIs to create a fun and questionably educational trivia game!</p>
                        </div>

                        <div className="img-2 desc">
                            <h4>Img Title</h4>
                            <img src={PNF} alt='Page Not Found'/>
                            <p>Img Desc</p>
                        </div>

                        <div className="img-3 desc">
                            <h4>Img Title</h4>
                            <img src={PNF} alt='Page Not Found'/>
                            <p>Img Desc</p>
                        </div>

                        <div className="img-3 desc">
                            <h4>Img Title</h4>
                            <img src={PNF} alt='Page Not Found'/>
                            <p>Img Desc</p>
                        </div>

                        <div className="img-5 desc">
                            <h4>Img Title</h4>
                            <img src={PNF} alt='Page Not Found'/>
                            <p>Img Desc</p>
                        </div>
                    </aside>
                </>
            )}
        </>
    )
}