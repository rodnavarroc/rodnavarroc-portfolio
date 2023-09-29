import React from 'react'

const ProjectCard = ({ image, name, description, stack, url, adultsOnly }) => {

  const renderStackElement = (e) => {
    switch (e) {
      case 'NextJS': {
        return <img src="https://seeklogo.com/images/N/next-js-icon-logo-EE302D5DBD-seeklogo.com.png" />
      }
      case 'PHP': {
        return <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/PHP-logo.svg/2560px-PHP-logo.svg.png" />
      }
      case 'SQL': {
        return <img src="https://play-lh.googleusercontent.com/hvK9JjjMrQ-MSP98UVqmwpgojkc89P5tYvLUbvbnAqORVx3o7mUhk_NNdSD4S9_F8pw" />
      }
      case 'SASS': {
        return <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Sass_Logo_Color.svg/1200px-Sass_Logo_Color.svg.png" />
      }
      case 'AWS': {
        return <img src="https://www.c3ntro.com/hubfs/logo-aws-blanco%20(1).png" />
      }
    }
  }

  return (
    <div className="project-card-container">

      <div className="image">
        <img src={image} alt={name} />
      </div>

      <div className='card-project-body'>
        <h3>{name}</h3>
        <h5>{description}
          {adultsOnly ?
            <>
              <br /><br />
              <b style={{color: 'goldenrod', fontSize: '12px'}}>NSFW Alert! This is an adult shop website. </b>
            </>
            : null
          }
        </h5>

        <h6>TECH STACK</h6>
        <div className="tech-stack-container">
          {stack.map((e) =>
            renderStackElement(e)
          )}
        </div>

        <div className="checkitout-button" onClick={() => window.open(url, '_blank')}>
          <b>Visit website</b>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard