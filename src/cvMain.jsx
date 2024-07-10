
import { useState } from 'react';
import './App.css'
import CVForms from './DOM/cvForms';
import CVStructure from './DOM/cvStructure';
import SkillsInfo from './DOM/skills';

export default function CVApp(){

    const [Data, setData] = useState({
        Names: "John Mnbt",
        emailInfo: "john@gmail.com",
        phoneNo: "449010890",
        newEdu: [{school: "University of Michigan",
            degree: "Bachelor in Science",
            schoolstart: "02/03/2024",
            schoolend: "07/18/2024",}
        ],
        newWork: [{title: "Web Developer",
            company: "Google LLC",
            workstart: "05/09/2012",
            workend: "09/23/2024",
            jobDesc: "front and back-end web projects.", }
        ],
        newSkill: [{skills: "Proficient in Programming languages JavaScript, Html, CSS and Python",}]
    });

    return (
        
        <div className='container'>
            <section className='cvForms'>
                <CVForms Data={Data} setData = {setData} />
            </section>

            <section className='cvStruct'>
                <CVStructure Data={Data} setData = {setData} />
            </section>
            
        </div>
    )
}