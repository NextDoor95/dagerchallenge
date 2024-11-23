import React from 'react'
import Link from 'next/link'

function Footer() {

    const icons = [
        {href: "https://www.linkedin.com/in/nextdoor-frontend/", classname: "fa-brands fa-linkedin-in", text: "LinkedIn"},
        {href: "https://x.com/Dager_32", classname: "fa-brands fa-twitter", text: "Twitter"},
        {href: "https://github.com/MarianoVilla", classname: "fa-brands fa-github", text: "Github"},
        {href: "https://github.com/NextDoor95/dagerchallenge", classname: "fa-solid fa-file-code", text: "Portfolio code"},
    ]

    return (
        <section className="footer">
            <div className="top">
                <div className="left">
                    <p>
                    ``La vida es una garcha <br/> Por eso me encanta la vida`` <br/> - Aristotlefus
                    </p>
                    <br/>
                    <Link className="logo" rel='noreferrer' target='_blank' href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley">
                    ➡️ Mis libros de filosofía favoritos que recomiendo ⬅️
                    </Link>
                </div>
                <div className="right">

                    <div className="col">
                        <p>See again</p>
                            <Link className="linkbutton" href="#about" rel='noreferrer'>
                                <p className="footer-btn">
                                    Home
                                </p>
                            </Link>
                            <Link className="linkbutton" href="#experience" rel='noreferrer'>
                                <p className="footer-btn">
                                    About
                                </p>
                            </Link>
                            <Link className="linkbutton" href="/dev" rel='noreferrer'>
                                <p className="footer-btn">
                                    Interests
                                </p>
                            </Link>
                    </div>
                    <div className="col">
                        <p>My most popular videos</p>
                            <Link className="linkbutton" href="https://www.youtube.com/watch?v=fUeIDRcI0ZM" target="_blank" rel='noreferrer'>
                                <p className="footer-btn">
                                I tried to hire a junior, and... we need to talk.
                                </p>
                            </Link>
                            <Link className="linkbutton" href="https://www.youtube.com/watch?v=c2EJRboAYL4&t=16s" target="_blank" rel='noreferrer'>
                                <p className="footer-btn">
                                    Watch this BEFORE learning how to CODE.
                                </p>
                            </Link>
                            <Link className="linkbutton" href="https://www.youtube.com/watch?v=o_s6Q-teA6U&ab_channel=DotDager" target="_blank" rel='noreferrer'>
                                <p className="footer-btn">
                                    Today is SATURDAY, and this video knows it.
                                </p>
                            </Link>
                    </div>
                    <div className="col">
                        <p>Contact</p>
                            <Link className="linkbutton" href="mailto:portafoliosdesarrollador@gmail.com" target="_blank" rel='noreferrer'>
                                <p className="footer-btn">
                                    E-mail
                                </p>
                            </Link>
                            
                    </div>
                </div>
            </div>
            <div className="bottom">
                <div className="social">
                    <Link
                        className="button-footer" 
                        href="https://www.youtube.com/@DotDager"
                        target='_blank'
                        rel='noreferrer'
                    >
                        <i className="fa-sharp fa-solid fa-t"></i>
                        <p className="bug">
                            Youtube
                        </p>
                    </Link>
                    {icons.map((i) => (
                        <Link className="button-footer" key={i.href} href={i.href} target='_blank' rel='noreferrer'>
                            <i className={i.classname}></i> <p className="bug">{i.text}</p>
                        </Link>
                    ))}
                    
                </div>
                <div className="rights-reserved">
                    <p>
                        build by NextDoor | 2024 © casi todos los derechos reservados.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Footer