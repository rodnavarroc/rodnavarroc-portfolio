import React from 'react'

const ProjectCard = ({image, name, description}) => {
  return (
    <div className="project-card-container">

      <div className="image">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ28WA2ZQREgEZ1jva2HNK6hzzNLXtnkxGhG2eCg1bAuw&s" alt={name} />
      </div>

      <div className='card-project-body'>
        <h3>{name}</h3>
        <h5>{description}</h5>

        <h6>TECH STACK</h6>

        <span className='checkitout-button'>Check it out 👉🏻</span>
      </div>
    </div>
  )
}

export default ProjectCard