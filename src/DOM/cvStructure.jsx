
export default function CVStructure( {Data} ){
    return (
        <>
            <header> 
                <nav>
                    <h1 className = "names" id="names" aria-labelledby='names'> 
                        {Data.Names}
                    </h1>

                    <div className="contact"> 
                        <section id="Email" aria-labelledby='Email' > {Data.emailInfo} </section> 
                        <section id="Phone" aria-labelledby='Phone' > {Data.phoneNo}</section>
                    </div>

                </nav>
            </header>

            <main>
                <section className="info" id="info" aria-labelledby='info' > 
                    <h2> EDUCATION</h2>
                    <section className="info2"> 
                        {Data.newEdu.map( (edu) => ( 
                            <div key={edu.id}> 
                                <section className="headTitle" id="headTitle" aria-labelledby='headTitle' > {edu.school} </section>
                                <div className="info3" /* style={{display: "flex",gap:20+'px',}} */ >
                                    <section className="info4" id="info4" aria-labelledby='info4' > <i>  {edu.degree} </i> </section>
                                    <div className="info5" /* style={{display: "flex",gap:10+'px',}} */ > 
                                        <section id="SchoolStart" aria-labelledby='SchoolStart' > {edu.schoolstart} </section>
                                        <section id="SchoolEnd" aria-labelledby='SchoolEnd' > {edu.schoolend} </section>
                                    </div>
                                </div>
                                <p></p>
                            
                            </div>
                        ))}
                    </section> 
                </section>
                <p></p>
                <section className="info" id="info1" aria-labelledby='info1' > 
                    <h2> WORK EXPERIENCE</h2>
                    <section className="info2"> 
                        {Data.newWork.map( (work) => ( 
                            <div key={work.id}> 
                                <section className="headTitle" id="headTitle1" aria-labelledby='headTitle1'  > {work.title} </section>
                                <div className="info3" >
                                    <section className="info4" id="info41" aria-labelledby='info41' > <i>  {work.company} </i> </section>
                                    <div className="info5" > 
                                        <section id="SchoolStart1" aria-labelledby='SchoolStart1' > {work.workstart} </section>
                                        <section id="SchoolEnd1" aria-labelledby='SchoolEnd1' > {work.workend} </section>
                                    </div>
                                </div>
                                <section id="JobDesc" aria-labelledby='JobDesc' > <i>  {work.jobDesc} </i> </section>
                                <p></p>
                            
                            </div>
                        ))}
                    </section> 
                </section>
                <p></p>
                <section className="info" id="info" aria-labelledby='info' > 
                    <h2> DIGITAL/COMMUNICATION SKILLS</h2>
                    <section className="info2"> 
                        {Data.newSkill.map( (skill) => ( 
                            <ul key={skill.id}> 
                                <li className="info4" id="info42" aria-labelledby='info41' > {skill.skills} </li>
                                                   
                            </ul>
                        ))}
                    </section> 
                </section>
            </main>
            
        
        </>
    )
}