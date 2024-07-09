

import {v4 as uuid} from 'uuid';


export default function EducationInfo( {Data, setData} ) {

    const handleChange = (e, id) => {

        const updateEdu = Data.newEdu.map( (edu) =>
            edu.id === id ? {...edu, [e.target.name]:e.target.value } : edu
        );

        setData({...Data, newEdu:updateEdu});
    };

    const addEducation = (e) => {
        e.preventDefault();
        setData({
            ...Data,
            newEdu: [
                ...Data.newEdu, 
                {
                    id: uuid(),
                    school: "",
                    degree: "",
                    schoolstart: "",
                    schoolend: "", 
                },
             ],
        });
    };

    const deleteEdu = (id) => {
        const delEdu = Data.newEdu.filter( (edu) => edu.id !== id );
        setData({ ...Data, newEdu:delEdu });
    };

  
    return (
      <div
          className="eduExp"
          /* style={{
            display: 'flex',
            flexDirection: 'column',
          }} */  
        >

        <h2> EDUCATION</h2>

        {Data.newEdu.map((edu) => ( 
            <form key={edu.id} style={{
                display: 'flex',
                flexDirection: 'column',
              }}>  
                <label>
                    Name:{' '}
                    <input
                        type="text"
                        name="school"
                        value={edu.school}
                        onChange={(e) => handleChange(e, edu.id )}
                    />
                </label>

                <label>
                    Degree:{' '}
                    <input
                        type="text"
                        name="degree"
                        value={edu.degree}
                        onChange={(e) => handleChange(e, edu.id)}
                    />
                </label>

                <label>
                    Year Started:{' '}
                    <input
                        type="date"
                        name="schoolstart"
                        value={edu.schoolstart}
                        onChange={(e) => handleChange(e, edu.id)}
                    />
                </label>

                <label>
                    Year End:{' '}
                    <input
                        type="date"
                        name="schoolend"
                        value={edu.schoolend}
                        onChange={(e) => handleChange(e, edu.id)}
                    />
                </label>

                <button type='button' onClick={() => deleteEdu(edu.id)}> Delete </button>

                <p style={{height:2+'px'}}></p>
            </form>
        ))}

        <button onClick={addEducation}> Add Education </button>
        <p style={{height:2+'px'}}></p>
 
      </div>
    );
}



