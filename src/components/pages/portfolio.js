import React from 'react';
import OOK from '../assets/img/OokDemo.png'
import PNF from '../assets/img/PageNotFound.png'

export default function Portfolio() {
    return(
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
    )
}