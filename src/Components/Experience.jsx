import { useState } from 'react'
import ExperienceItem from './ExperienceItem.jsx'
import experienceData from '../data/exp.js'

export default function Experience() {
  // console.log(experience)
  const [slideIdx, setSlideIdx] = useState(0)

  const changeCompanyIndex = (index) => {
    setSlideIdx(index)
  }

  return (
    <section id="experience">
      <div className="exp-container">
        <h2 className="exp-heading">Relevant Professional Experience</h2>
        <div className="exp-inner">
          <div className="tablist">
            {experienceData.map((exp, index) => {
              return (
                <button
                  onClick={() => changeCompanyIndex(index)}
                  className={slideIdx === index ? 'tab active' : 'tab'}
                  key={index}
                >
                  {exp.companyName}
                </button>
              )
            })}
          </div>
          <div className="exp-info-container">
            <ExperienceItem expData={experienceData} index={slideIdx} />
          </div>
        </div>
      </div>
    </section>
  )
}
