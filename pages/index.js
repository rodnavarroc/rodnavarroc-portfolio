import React from 'react'
import Head from 'next/head'
import Navbar from '../components/Navbar/Navbar'
import ProjectCard from '../components/ProjectCard/ProjectCard'
import SkillCard from '../components/SkillCard/SkillCard'

const index = () => {
  return (
    <>
      <Head>
        <title>Rodolfo Navarro | Software Enginner</title>
      </Head>
      <Navbar />
      <div className="index-container">

        <div className="intro">
          <div>
            <h2>Hello! 👋🏻 I&apos;m a fullstack web developer <b> based in Mexico 🇲🇽</b></h2>
            <h4>This is a quick view on me and my work. 👇🏻</h4>
            <div className="contact">
              <span>Keep scrolling</span>
              <span>or</span>
              <span style={{ cursor: 'pointer' }}><a href="mailto:rodnavarroc@outlook.com">Get in touch via email ✨</a></span>
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
              <ProjectCard
                name="Venus"
                description="E-commerce website for a Sex Shop brand where I was part of the UI / UX team, and back-end development."
                image="/venus.jpg"
                stack={['NextJS', 'SASS', 'PHP', 'SQL', 'AWS']}
                url="https://www.tiendavenus.com/"
                adultsOnly={true}
              />
              <ProjectCard
                name="Tres Distribuciones"
                description="E-commerce website for a Sexual Health & Entertainment products wholesale brand where I was part of the UI / UX and full stack development teams."
                image="/tres distribuciones.jpg"
                stack={['NextJS', 'SASS', 'PHP', 'SQL', 'AWS']}
                url="https://www.tresdistribuciones.com/"
                adultsOnly={true}
              />
              <ProjectCard
                name="Odibo"
                description="E-commerce website for an adult toys brand where I was part of the back-end dev team."
                image="/odibo.jpg"
                stack={['NextJS', 'SASS', 'PHP', 'SQL', 'AWS']}
                url="https://www.odibo.mx/"
                adultsOnly={true}
              />
              <ProjectCard
                name="Sey"
                description="E-commerce like website for an adult toys and accesories brand where I was part of the UI / UX team, SEO improvement and back-end development."
                image="/sey.jpg"
                stack={['NextJS', 'SASS', 'PHP', 'SQL', 'AWS']}
                url="https://www.sey.mx/"
                adultsOnly={true}
              />
            </div>

          </div>
        </div>

        <div className="section">
          <div className="skills">

            <div className="title">
              <div className="line" />
              <h2>Tech & Skills</h2>
              <div className="line" />
            </div>

            <div className="body">
              <div className="iconsFlex">
                <SkillCard image="https://seeklogo.com/images/N/next-js-logo-8FCFF51DD2-seeklogo.com.png" />
                <SkillCard image="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" />
                <SkillCard image="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1184px-Vue.js_Logo_2.svg.png" />
                <SkillCard image="https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Sass_Logo_Color.svg/1200px-Sass_Logo_Color.svg.png" />
                <SkillCard image="https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/PHP-logo.svg/2560px-PHP-logo.svg.png" />
                <SkillCard image="https://play-lh.googleusercontent.com/hvK9JjjMrQ-MSP98UVqmwpgojkc89P5tYvLUbvbnAqORVx3o7mUhk_NNdSD4S9_F8pw" />
                <SkillCard image="https://www.c3ntro.com/hubfs/logo-aws-blanco%20(1).png" />
              </div>
            </div>
          </div>
        </div>

        <br />
      </div>
    </>
  )
}

export default index