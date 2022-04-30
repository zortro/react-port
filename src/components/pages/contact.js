import React from 'react'

export default function Contact() {
    return(
        <div className='container'>
            <div className='accentText'>
                <h3 className='textTitle'>Let's create together.</h3>
            </div> 
            <div className='textContainer'>
                <div className='contact'>
                    <h3 className='textTitle'>Contact</h3>
                    <p>The view of the earth from the moon fascinated me - a small disk, 240,000 mniles away. It was hard to think that that little thing held so many problems, so many frustrations. Raging nationalistic interests, famines, wars, pestilence don't show from that distance. I'm convinced that some wayward stranger in a space-craft, coming from some other part of the heavens, could look at earth and never know that it was inhabited at all. But the samw wayward stranger would certainly know instinctively that if the earth were inhabited, then the destinies of all who lived on it must inevitably be interwoven and joined. We are one hunk of ground, water, air, clouds, floating around in space. From out there it really is 'one world'.</p>
                    <p>Feel free to reach out.</p>
                    <div class='line'/>
                    <ul className='contactLi'>
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
            </div>
        </div>
    )
}