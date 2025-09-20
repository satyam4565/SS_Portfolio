import React from 'react'

import ProjectCard from './ProjectCard'

const works = [
    {
      imgSrc: '/images/ems.png',
      title: 'Emplytic',
      tags: ['React.js', 'TailwindCSS','JavaScript','HTML/CSS'],
      projectLink: 'https://github.com/satyam4565/Employee-Management-System'
    },
    {
      imgSrc: '/images/cinesuggest.png',
      title: 'CineSuggest',
      tags: ['Python', 'Streamlit', 'TMDB API'],
      projectLink: 'https://cinesuggestai.streamlit.app/'
    },
    {
      imgSrc: '/images/chromextp.png',
      title: 'HabitHub',
      tags: ['Chrome Extension API', 'HTML/CSS', 'JavaScript'],
      projectLink: 'https://github.com/satyam4565/HabitHub'
    },
    {
      imgSrc: '/images/heartg.png',
      title: 'HeartGuardian.AI',
      tags: ['Python', 'Streamlit'],
      projectLink: 'https://heartguardianai.streamlit.app/'
    },
    {
      imgSrc: '/images/algoguru.png',
      title: 'AlgoGuru - DSA Chatbot',
      tags: ['React.js', 'TypeScript','Google Gemini API'],
      projectLink: 'https://algoguru.vercel.app/'
    },
    {
      imgSrc: '/images/calc.png',
      title: 'Calculator',
      tags: ['HTML/CSS', 'JavaScript'],
      projectLink: 'https://calculator-gray-gamma-85.vercel.app/'
    }
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