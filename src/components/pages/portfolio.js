import React, { useEffect, useState } from 'react';
import Carousel from "flat-carousel";
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
                    <aside className='portCont'>
                        <div className='port'>
                            <div className='proj'>
                                <h2>Oceans of Knowledge</h2>
                                <img className="sampleImg" src={OOK} alt='Oceans of Knowledge'/>
                                <p>Try your hand at Oceans of Knowledge! Using multiple APIs to create a fun and questionably educational trivia game!</p>
                            </div>

                            <div className='proj'>
                                <h2>Img Title</h2>
                                <img className="sampleImg" src={PNF} alt='Page Not Found'/>
                                <p>Img Desc</p>
                            </div>

                            <div className='proj'>
                                <h2>Img Title</h2>
                                <img className="sampleImg" src={PNF} alt='Page Not Found'/>
                                <p>Img Desc</p>
                            </div>

                            <div className='proj'>
                                <h2>Img Title</h2>
                                <img className="sampleImg" src={PNF} alt='Page Not Found'/>
                                <p>Img Desc</p>
                            </div>

                            <div className='proj'>
                                <h2>Img Title</h2>
                                <img className="sampleImg" src={PNF} alt='Page Not Found'/>
                                <p>Img Desc</p>
                            </div>
                        </div>
                    </aside>
                </>
            )}
        </>
    )
}