import React from 'react'
import { skills } from '../content/skills'

const Skills = () => {
  return (
    <section>
        <div className=" bg-gray-300  px-20 py-10">
            <div className="text-center">
                <h1 className="font-medium sm:text-4xl text-5xl mb-4">Skills & Technologies</h1>
                <div className="flex flex-wrap lg:4/5 sm:mx-auto px-5 sm:mb-2  items-center">
                    {skills.map((skill)=> ( 
                        <div key={skill} className="w-full p-2 sm:w-1/2">
                            <div className="flex bg-gray-900 items-center rounded p-4 h-full">
                                <span className="text-white font-medium px-10">{skill}</span>
                                </div> 
                            </div>
                    ))}
                
                </div>
            </div>
        </div>
    </section>
  )
}

export default Skills 