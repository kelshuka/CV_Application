

import {v4 as uuid} from 'uuid';


export default function SkillsInfo( {Data, setData} ) {

    const handleChange = (e, id) => {

        const updateSkill = Data.newSkill.map( (skill) =>
            skill.id === id ? {...skill, [e.target.name]:e.target.value } : skill
        );

        setData({...Data, newSkill:updateSkill});
    };

    const addSkill = (e) => {
        e.preventDefault();
        setData({
            ...Data,
            newSkill: [
                ...Data.newSkill, 
                {
                    id: uuid(),
                    skills: "",
                },
             ],
        });
    };

    const deleteSkill = (id) => {
        const delSkill = Data.newSkill.filter( (skill) => skill.id !== id );
        setData({ ...Data, newSkill:delSkill });
    };


  
    return (
      <div
          className="skillExp" 
        >

        <h2> SKILLS </h2>

        {Data.newSkill.map((skill) => ( 
            <form key={skill.id} style={{
                display: 'flex',
                flexDirection: 'column',
              }}>  


                <label>
                    Skill:{' '}
                    <input
                        type="text"
                        name="skills"
                        value={skill.skills}
                        onChange={(e) => handleChange(e, skill.id )}
                    />
                </label>

                <button type='button' onClick={() => deleteSkill(skill.id)}> Delete </button>
               
                <p style={{height:2+'px'}}></p>
            </form>
        ))}

        <button onClick={addSkill}> Add Skill </button>
        <p style={{height:2+'px'}}></p>
 
      </div>
    );
}



