import React from 'react'
import Link from 'next/link'

function GameZone() {
  return (
    <section className='game'>
      <h2>Esta es mi zona... mi zona de videojuegos</h2>
      <Link className="translation" rel='noreferrer' target='_blank'

        href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley">
          ➡️ Menú de mini-juegos ⬅️
      </Link>
      <div className='lumberjack'>
        <iframe
            title="Lumber Jack Game"
            src="https://tbot.xyz/lumber/"
            width="600"
            height="1200"
        >
        </iframe>
      </div>
        
    </section>
  )
}

export default GameZone