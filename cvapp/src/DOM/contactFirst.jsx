

import { useState } from 'react';


export default function ContactInfo() {

    const [allNames, setAllNames] = useState('John Doe');
    const [emailInfo, setEmailInfo] = useState('ghtyio@gmail.com');
    const [phoneNo, setPhoneNo] = useState('1189000');

    //const fullName = firstName + ' ' + lastName;

    function handleNameChange(e) {
        setAllNames(e.target.value);
    }

    function handleEmailChange(e) {
        setEmailInfo(e.target.value);
    }

    function handlePhoneChange(e) {
        setPhoneNo(e.target.value);
    }
    
    /* const handleIncreaseAge = () => {
      const newPerson = { ...person, age: person.age + 1 };
      setPerson(newPerson);
    }; */
  
    return (
      <div style={{
        display: 'flex',
        flexDirection: 'column',
      }}>
        <h1>{allNames}</h1>
        <h2>{emailInfo}</h2>
        <h2>{phoneNo}</h2>

        <label>
        Name:{' '}
        <input
          value={allNames}
          onChange={handleNameChange}
        />
        </label>

        <label>
            Email:{' '}
            <input
            type='email'
            value={emailInfo}
            onChange={handleEmailChange}
            />
        </label>

        <label>
            Phone No.:{' '}
            <input
            type='number'
            value={phoneNo}
            onChange={handlePhoneChange}
            />
        </label>

        
      </div>
    );
}
