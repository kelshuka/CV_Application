


import {v4 as uuid} from 'uuid';


export default function WorkExperience( {Data, setData} ) {

    const handleChange = (e, id) => {

        const updateWork = Data.newWork.map( (work) =>
            work.id === id ? {...work, [e.target.name]:e.target.value } : work
        );

        setData({...Data, newWork:updateWork});
    };

    const addWork = (e) => {
        e.preventDefault();
        setData({
            ...Data,
            newWork: [
                ...Data.newWork, 
                {
                    id: uuid(),
                    title: "",
                    company: "",
                    workstart: "",
                    workend: "",
                    jobDesc: "", 
                },
             ],
        });
    };

    const deleteWork = (id) => {
        const delWork = Data.newWork.filter( (work) => work.id !== id );
        setData({ ...Data, newWork:delWork });
    };

  
    return (
      <div
          className="workExp"
          /* style={{
            display: 'flex',
            flexDirection: 'column',
          }} */  
        >

        <h2> WORK EXPERIENCE</h2>

        {Data.newWork.map((work) => ( 
            <form key={work.id} style={{
                display: 'flex',
                flexDirection: 'column',
              }}>  
                <label>
                    Job Title:{' '}
                    <input
                        type="text"
                        name="title"
                        value={work.title}
                        onChange={(e) => handleChange(e, work.id )}
                    />
                </label>

                <label>
                    Company Name:{' '}
                    <input
                        type="text"
                        name="company"
                        value={work.company}
                        onChange={(e) => handleChange(e, work.id)}
                    />
                </label>

                <label>
                    Year Started:{' '}
                    <input
                        type="date"
                        name="workstart"
                        value={work.workstart} 
                        onChange={(e) => handleChange(e, work.id)}
                    />
                </label>

                <label>
                    Year End:{' '}
                    <input
                        type="date"
                        name="workend"
                        value={work.workend}
                        onChange={(e) => handleChange(e, work.id)}
                    />
                </label>

                <label>
                    Job Description:{' '}
                    <input
                        type="text"
                        name="jobDesc"
                        value={work.jobDesc}
                        onChange={(e) => handleChange(e, work.id )}
                    />
                </label>

                <button type='button' onClick={() => deleteWork(work.id)}> Delete </button>

                <p style={{height:2+'px'}}></p>
            </form>
        ))}

        <button onClick={addWork}> Add Work </button>
        <p style={{height:2+'px'}}></p>
 
      </div>
    );
}



