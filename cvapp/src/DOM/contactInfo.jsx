
import { useState } from 'react';


export default function ContactInfo( {Data, setData} ) {

    const handleChange = (e) => {
      setData( {...Data, [e.target.name]:e.target.value  });
    };

  
    return (
      <div
          className='contactInfo'
          style={{
            display: 'flex',
            flexDirection: 'column',
          }}    >

        <label>
        Name:{' '}
        <input
          name='Names'
          value={Data.Names}
          onChange={handleChange}
        />
        </label>

        <label>
            Email:{' '}
            <input
              type='email'
              name='emailInfo'
              value={Data.emailInfo}
              onChange={handleChange}
            />
        </label>

        <label>
            Phone Number:{' '}
            <input
              type='number'
              name='phoneNo'
              value={Data.phoneNo}
              onChange={handleChange}
            />
        </label>

        
      </div>
    );
}
