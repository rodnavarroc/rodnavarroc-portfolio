import React from 'react'

const SkillCard = ({ image }) => {
    return (
        <div className="skill-card-container">
            <div className="item">
                <img src={image} />
            </div>
        </div>
    )
}

export default SkillCard