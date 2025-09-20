import React from 'react'

const About = () => {
  return (
    <section id='about' className='section'>
      <div className='container'>
        <div className='bg-gradient-to-r from-zinc-800 via-zinc-800 to-zinc-800 p-12 rounded-3xl shadow-2xl md:p-16'>
          <div className='flex flex-col md:flex-row items-center md:items-center gap-10'>
            <p className='text-zinc-200 text-lg leading-relaxed md:text-xl md:max-w-[60ch]'>
              Hi Everyone, I am Satyam Singh. I’m currently pursuing B.Tech in Computer Science and Engineering at Delhi Technological University (DTU), New Delhi. I am an enthusiastic learner driven by a passion for solving real-world problems through Data Structures and Algorithms (DSA). With hands-on experience in C, C++, and JavaScript, I am deeply interested in building efficient systems and scalable web applications. I specialize in developing full-stack applications using modern JavaScript frameworks like React.js, Node.js, and Express.js, and I’m currently working on expanding my project portfolio to crack top tech companies.
              <br></br>Beyond coding, I enjoy: 
              <ul className='list-none pl-0 mt-4'>
                <li>🎮 Playing Games</li>
                <li>🚗 Travelling</li>
                <li>🎬 Watching movies</li>
                <li>🏋🏻Hitting the Gym</li>
              </ul>
            </p>
            <img src='./images/hero.png' alt='avatar' className='w-40 h-40 rounded-full border-4 border-zinc-600 shadow-lg md:w-48 md:h-48' />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
