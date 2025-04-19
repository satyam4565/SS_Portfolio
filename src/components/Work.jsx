import React from 'react'

import ProjectCard from './ProjectCard'

const works = [
    {
      imgSrc: '/images/chromextp.png',
      title: 'HabitHub',
      tags: ['Chrome Extension API', 'HTML/CSS', 'JavaScript'],
      projectLink: 'https://github.com/satyam4565/HabitHub'
    },
    {
      imgSrc: '/images/project-2.jpg',
      title: 'Play_On',
      tags: ['React.js', 'TMDB API','Node.js','MongoDB'],
      projectLink: 'https://github.com/satyam4565/Play_On'
    },
    {
      imgSrc: '/images/Calculator.png',
      title: 'Calculator',
      tags: ['HTML/CSS', 'JavaScript'],
      projectLink: ''
    },
];

const Work = () => {
  return (
    <section id='work' className='section'>
        <div className='container'>
            <h2 className='headline-2 mb-8 '>My portfolio highlights</h2>
            <div className='grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]'>
                {works.map(({imgSrc,title,tags,projectLink},key) => (
                    <ProjectCard 
                        key={key}
                        imgSrc={imgSrc}
                        title={title}
                        tags={tags}
                        projectLink={projectLink}
                        classes='mb-8'
                    />
                ))
                }
            </div>
        </div>
    </section>
  )
}

export default Work