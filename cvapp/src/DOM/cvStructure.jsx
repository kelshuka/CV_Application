
export default function CVStructure( {Data} ){
    return (
        <>
            <nav>
                <h1 className = "names"> 
                    {Data.Names}
                </h1>

                <div className="contact"> 
                    <p> {Data.emailInfo} </p> 
                    <p> {Data.phoneNo} </p>
                </div>

            </nav>
        
        </>
    )
}