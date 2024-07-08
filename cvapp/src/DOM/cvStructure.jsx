
export default function CVStructure( {Data} ){
    return (
        <>
            <header> 
                <nav>
                    <h1 className = "names"> 
                        {Data.Names}
                    </h1>

                    <div className="contact"> 
                        <p>Email: {Data.emailInfo} </p> 
                        <p>Phone: {Data.phoneNo} </p>
                    </div>

                </nav>
            </header>

            <main>
                <section className="schoolInfo"> 
                    <h2> EDUCATION</h2>
                    {Data.newEdu?.map( (edu) => ( 
                        <div key={edu.id}> 
                            <h3> {edu.school} </h3>
                            <div style={{display: "flex",gap:20+'px',}}>
                                <section> <i>  {edu.degree} </i> </section>
                                <div style={{display: "flex",gap:10+'px',}}> 
                                    <section> {edu.schoolstart} </section>
                                    <section> {edu.schoolend} </section>
                                </div>
                            </div>
                        
                        </div>
                    ))} 
                </section>
            </main>
            
        
        </>
    )
}