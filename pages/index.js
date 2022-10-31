import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import ProjectCard from '../components/ProjectCard/ProjectCard'

const index = () => {
  return (
    <>
      <Navbar />
      <div className="index-container">
        
        <div className="intro">
          <div>
            <h2>Hello! 👋🏻 I&apos;m a fullstack web developer <b> based in Mexico 🇲🇽</b></h2>
            <h4>This is a quick view on me and my work. 👇🏻</h4>
            <div className="contact">
              <span>Keep scrolling,</span>
              <span>or maybe you want to</span>
              <span>Get in touch ✨</span>
            </div>
          </div>
        </div>

        <div className="section">
          <div className="projects">

            <div className="title">
              <div className="line" />
              <h2>Recent Projects</h2>
              <div className="line" />
            </div>

            <div className="body">
              <ProjectCard />
              <ProjectCard />
              <ProjectCard />
              <ProjectCard />
              <ProjectCard />
              <ProjectCard />
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default index