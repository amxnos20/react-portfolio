import React from 'react'
import './Skill.css'
import Title from './Title'
import developerActivity from '../images/developerActivity.svg'

const Skill = () => {
  const softwareSkills = [
    {
      skillName: 'HTML5',
      fontAwesomeClassname: 'simple-icons:html5',
      style: {
        color: '#E34F26',
      },
    },
    {
      skillName: 'CSS3',
      fontAwesomeClassname: 'fa-css3',
      style: {
        color: '#1572B6',
      },
    },
    {
      skillName: 'JavaScript',
      fontAwesomeClassname: 'simple-icons:javascript',
      style: {
        backgroundColor: '#000000',
        color: '#F7DF1E',
      },
    },
    {
      skillName: 'ReactJS',
      fontAwesomeClassname: 'simple-icons:react',
      style: {
        color: '#61DAFB',
      },
    },
    {
      skillName: 'NodeJS',
      fontAwesomeClassname: 'simple-icons:node-dot-js',
      style: {
        color: '#339933',
      },
    },
    {
      skillName: 'Python',
      fontAwesomeClassname: 'ion-logo-python',
      style: {
        backgroundColor: 'transparent',
        color: '#3776AB',
      },
    },
    {
      skillName: 'Firebase',
      fontAwesomeClassname: 'simple-icons:firebase',
      style: {
        color: '#FFCA28',
      },
    },
    {
      skillName: 'MongoDB',
      fontAwesomeClassname: 'simple-icons:mongodb',
      style: {
        color: '#47A248',
      },
    },
    {
      skillName: 'Sql',
      fontAwesomeClassname: 'ant-design:console-sql-outlined',
      style: {
        color: '#1572B6',
      },
    },
    {
      skillName: 'PowerBI',
      fontAwesomeClassname: 'simple-icons:powerbi',
      style: {
        color: '#000',
      },
    },
    {
      skillName: 'Office',
      fontAwesomeClassname: 'mdi:microsoft-office',
      style: {
        color: '#E43A03',
      },
    },
    {
      skillName: 'Java',
      fontAwesomeClassname: 'logos:java',
      style: {
        color: '#E43A03',
      },
    },
  ]

  return (
    <div className='skill'>
      <Title title='What I do' />
      <div className='container'>
        <div className='row'>
          <div className='col-6'>
            <div className='skill__img'>
              <img src={developerActivity} alt='' />
            </div>
          </div>
          <div className='col-6'>
            <div className='skill-text'>
              <h2>
                A passionate engineer who wants to explore every tech stack
              </h2>
              <p style={{ marginBottom: '2rem' }}>
                ⚡ Develop highly interactive and responsive web and mobile
                applications using React, HTML, CSS, Bootstrap...
                <br /> ⚡ Building back end applications and integration of
                third party services such as Firebase, MERN Stack...
                <br /> ⚡ Analyzing data using Python, PowerBI...
              </p>
              <ul className='skill-items'>
                {softwareSkills.map((skill) => (
                  <li className='skill-item' key={skill.skillName}>
                    <span
                      style={{
                        fontSize: '2.6rem',
                        color: `${skill.style.color}`,
                        backgroundColor: `${skill.style.backgroundColor}`,
                      }}
                      className='iconify'
                      data-icon={skill.fontAwesomeClassname}
                    ></span>
                    <p style={{ fontSize: '11px', fontWeight: '500' }}>
                      {skill.skillName}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skill
