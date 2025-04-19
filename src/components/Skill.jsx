import React from 'react'

import SkillCard from './SkillCard'

const skillItem = [
    {
      imgSrc: '/images/cpp.svg',
      label: 'C++',
      desc: 'Programming'
    },
    {
      imgSrc: '/images/HTML.svg',
      label: 'HTML',
      desc: 'Markup Language'
    },
    {
      imgSrc: '/images/css3.svg',
      label: 'CSS',
      desc: 'User Interface'
    },
    {
      imgSrc: '/images/tailwindcss.svg',
      label: 'TailwindCSS',
      desc: 'User Interface'
    },
    {
      imgSrc: '/images/javascript.svg',
      label: 'JavaScript',
      desc: 'Interaction'
    },
    {
      imgSrc: '/images/react.svg',
      label: 'React',
      desc: 'Framework'
    },
    {
      imgSrc: '/images/nodejs.svg',
      label: 'NodeJS',
      desc: 'Web Server'
    },
    {
      imgSrc: '/images/expressjs.svg',
      label: 'ExpressJS',
      desc: 'Node Framework'
    },
    {
      imgSrc: '/images/mongodb.svg',
      label: 'MongoDB',
      desc: 'Database'
    },
    {
      imgSrc: '/images/mysql.svg',
      label: 'MySQL',
      desc: 'Relational Database'
    },
    {
      imgSrc: '/images/figma.svg',
      label: 'Figma',
      desc: 'Design tool'
    },
    
    {
      imgSrc: '/images/git.svg',
      label: 'Git',
      desc: 'Version Control'
    },
    {
      imgSrc: '/images/python.svg',
      label: 'Python',
      desc: 'Scripting'
    },
    {
      imgSrc: '/images/firebase.svg',
      label: 'Firebase',
      desc: 'Backend'
    },
    {
      imgSrc: '/images/VS Code.svg',
      label: 'VS Code',
      desc: 'Editor'
    }
];

const Skill = () => {
  return (
    <section id='skills' className="section">
        <div className="container">
            <h2 className="headline-2">Essential Tools I use</h2>
            <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch]">Discover the powerful tools and technologies I use to create exceptional, high-performing websites & applications.</p>
            <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
                {
                    skillItem.map(({imgSrc,label,desc}, key) => (
                        <SkillCard key={key} imgSrc={imgSrc} label={label} desc={desc} />
                    ))         
                }
            </div>
        </div>
    </section>
  )
}

export default Skill