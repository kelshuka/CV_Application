
import { useState } from 'react';
import './App.css'
import CVForms from './DOM/cvForms';
import CVStructure from './DOM/cvStructure';

export default function CVApp(){

    const [Data, setData] = useState({
        Names: "John Mnbt",
        emailInfo: "john@gmail.com",
        phoneNo: "123890",
        /* schoolName: "University of San Paolo",
        degree: "BSc in Comp. Science",
        schoolStart: "",
        schoolEnd: "", */
        newEdu: [],
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