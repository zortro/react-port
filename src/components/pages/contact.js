import React from 'react'

export default function Contact() {
    return(
        <div className='wrapper'>
            <h2>Contact Me</h2>
            <p>lorem ipsum dolor sit amet lorem</p>
            <ul>
                <li>
                    <a className="link" href="tel:360.339.3196">360.339.3196</a>
                </li>
                <li>
                    <a className="link" href="mailto:ben.r.dominguez@gmail.com">Email</a>
                </li>
                <li>
                    <a className="link" href="https://github.com/zortro" target="_blank">Github</a>
                </li>
                <li>
                    <a className="link" href="https://twitter.com/BenDomi03406118" target="_blank">Twitter</a>
                </li>
                <li>
                    <a className="link" href="https://open.spotify.com/user/piebros.82?si=d7dbcd36ef344a84" target="_blank">Spotify</a>
                </li>
            </ul>
        </div>
    )
}