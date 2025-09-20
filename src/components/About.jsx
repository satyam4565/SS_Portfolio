import React from 'react'

const About = () => {
  const interests = [
    { activity: 'Playing Games', icon: '🎮' },
    { activity: 'Travelling', icon: '🚗' },
    { activity: 'Watching Movies', icon: '🎬' },
    { activity: 'Hitting the Gym', icon: '🏋️' }
  ];

  return (
    <section id='about' className='section'>
      <div className='container'>
        <div className='text-center mb-6'>
          <h2 className='headline-2 mb-4'>About Me</h2>
        </div>
        
        <div className='grid lg:grid-cols-2 gap-12 lg:gap-16 items-center'>
          {/* Left Column - Content */}
          <div className='space-y-8'>
            <div className='bg-gradient-to-br from-zinc-800/50 to-zinc-900/50 p-8 rounded-2xl ring-1 ring-zinc-50/5 backdrop-blur-sm'>
              <div className='flex items-center gap-3 mb-6'>
                <div className='w-2 h-2 rounded-full bg-emerald-400'></div>
                <span className='text-emerald-400 text-sm font-medium tracking-wide'>Currently Available</span>
              </div>
              <h3 className='text-2xl font-semibold text-zinc-50 mb-4'>Hi, I'm Satyam Singh</h3>
              <p className='text-zinc-300 leading-relaxed mb-6'>
                I'm currently pursuing B.Tech in Computer Science and Engineering at Delhi Technological University (DTU), New Delhi. Driven by a passion for problem-solving, I specialize in designing efficient algorithms and building scalable, real-world applications.
              </p>
              <p className='text-zinc-300 leading-relaxed'>
              I have hands-on experience with C, C++, and JavaScript, and build full-stack web applications using React.js, Node.js, and Express.js. Lately, I’ve been exploring Machine Learning, NLP, and Deep Learning to create intelligent systems that impact real-world experiences.
              </p>
            </div>

            {/* Interests Section */}
            <div className='bg-gradient-to-br from-zinc-800/30 to-zinc-900/30 p-6 rounded-xl ring-1 ring-zinc-50/5'>
              <h4 className='text-lg font-semibold text-zinc-50 mb-4 flex items-center gap-2'>
                <span className='material-symbols-rounded text-emerald-400'>favorite</span>
                Beyond Coding
              </h4>
              <div className='grid grid-cols-2 gap-3'>
                {interests.map((interest, index) => (
                  <div 
                    key={index}
                    className='flex items-center gap-3 p-3 bg-zinc-700/30 rounded-lg hover:bg-zinc-600/30 transition-colors'
                  >
                    <span className='text-xl'>{interest.icon}</span>
                    <span className='text-zinc-300 text-sm'>{interest.activity}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Image & Stats */}
          <div className='space-y-8'>
            <div className='relative'>
              <div className='absolute inset-0 bg-gradient-to-br from-sky-400/20 to-emerald-400/20 rounded-3xl blur-xl'></div>
              <div className='relative bg-gradient-to-br from-zinc-800 to-zinc-900 p-12 rounded-3xl ring-1 ring-zinc-50/10'>
                <img 
                  src='./images/hero.png' 
                  alt='Satyam Singh' 
                  className='w-full max-w-sm mx-auto rounded-2xl shadow-2xl' 
                />
              </div>
            </div>

            {/* Stats Cards */}
            <div className='grid grid-cols-2 gap-4'>
              <div className='bg-gradient-to-br from-sky-400/10 to-sky-400/5 p-4 rounded-xl ring-1 ring-sky-400/20 text-center'>
                <div className='text-2xl font-bold text-sky-400 mb-1'>1000+</div>
                <div className='text-zinc-400 text-sm'>DSA Problems</div>
              </div>
              <div className='bg-gradient-to-br from-emerald-400/10 to-emerald-400/5 p-4 rounded-xl ring-1 ring-emerald-400/20 text-center'>
                <div className='text-2xl font-bold text-emerald-400 mb-1'>6+</div>
                <div className='text-zinc-400 text-sm'>Projects Built</div>
              </div>
            </div>

            {/* Call to Action */}
            <div className='text-center'>
              <div className='flex flex-col sm:flex-row gap-3 justify-center'>
                <a 
                  href='#work' 
                  className='px-6 py-3 bg-sky-400 text-zinc-950 rounded-xl font-medium hover:bg-sky-300 transition-colors'
                >
                  View My Work
                </a>
                <a 
                  href='#contact' 
                  className='px-6 py-3 bg-zinc-800 text-zinc-50 rounded-xl font-medium ring-1 ring-zinc-50/10 hover:bg-zinc-700 transition-colors'
                >
                  Get In Touch
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
