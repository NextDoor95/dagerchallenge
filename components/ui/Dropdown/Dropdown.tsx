
import React, { useState, useRef, useEffect } from 'react';

import Link from 'next/link'

import Image from 'next/image'
import Instagram from "../../../public/socials/instagram.png"
import Discord from "../../../public/socials/discord.png"
import github from "../../../public/socials/github.png"
import spotify from "../../../public/socials/spotify.png"
import tiktok from "../../../public/socials/tiktok.png"
import twitch from "../../../public/socials/twitch.png"
import twitter from "../../../public/socials/twitter.png"
import youtube from "../../../public/socials/youtube.png"

function Dropdown() {

    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

      // Cerrar el menú si se hace clic fuera
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

    return (
        <div className='wrapper'>
            
            <div className="dropdown-menu" ref={dropdownRef}>
                
            {/* Botón para abrir/cerrar el dropdown */}
                <button onClick={toggleDropdown} className="dropdown-button">
                    Redes Sociales
                </button>

        {/* Contenido del dropdown */}
        {isOpen && (
            <div className="dropdown-content">
            <ul>
                <li>
                    <Image src={youtube} width={30} height={30} alt="Bubble" />
                    <a
                        href="https://www.youtube.com/@DotDager"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Canal principal
                    </a>
                </li>

                <li>
                    <Image src={Instagram} width={30} height={30} alt="Bubble" />
                <a
                    href="https://www.instagram.com/dager.32/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Instagram
                </a>
                </li>
                <li>
                <Image src={tiktok} width={30} height={30} alt="Bubble" />
                <a
                    href="https://www.tiktok.com/@elantrodedager"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Tiktok
                </a>
                </li>
                <li>
                <Image src={youtube} width={30} height={30} alt="Bubble" />
                <a
                    href="https://www.youtube.com/@DagerLive"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Live clips
                </a>
                </li>

                <li>
                <Image src={Discord} width={30} height={30} alt="Bubble" />
                <a
                    href="https://discord.gg/el-antro-de-dager-399451704170512395"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Unite al antro❤️
                </a>
                </li>

                <li>
                <Image src={github} width={30} height={30} alt="Bubble" />
                <a
                    href="https://github.com/MarianoVilla"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Github
                </a>
                </li>

                <li>
                <Image src={youtube} width={30} height={30} alt="Bubble" />
                <a
                    href="https://www.youtube.com/c/DagerMusic"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Musiquita
                </a>
                </li>

                <li>
                <Image src={twitch} width={30} height={30} alt="Bubble" />
                <a
                    href="https://www.twitch.tv/dagerxiv"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Twitch
                </a>
                </li>

                <li>
                <Image src={spotify} width={30} height={30} alt="Bubble" />
                <a
                    href="https://open.spotify.com/intl-es/artist/6bkClBMJd4qKxJp0J5vHsz?si=mbfNHqvBT9SKSQ-ZNhXHJg&nd=1"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Spotify
                </a>
                </li>

                <li>
                <Image src={twitter} width={30} height={30} alt="Bubble" />
                <a
                    href="https://x.com/Dager_32"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Twitter
                </a>
                </li>

                <li>
                <Image src={youtube} width={30} height={30} alt="Bubble" />
                <a
                    href="https://www.youtube.com/c/DagerXIV"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    El Antro de Dager
                </a>
                </li>

                
                <li>
                <a
                    href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    🥒chistes de ya sabes🥒
                </a>
                </li>
            </ul>
            </div>
            
        )}
        <Link className="dropdown-button" href="mailto:portafoliosdesarrollador@gmail.com" target="_blank" rel='noreferrer'>
                                    Contacto
                            </Link>
        </div>
    </div>
    )
}

export default Dropdown