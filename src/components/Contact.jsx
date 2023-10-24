import React, { useState } from 'react';

function Contact() {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [city, setCity] = useState('');
    const [animalType, setAnimalType] = useState(''); // --> "cat" | "dog" | "both" | ""
    const [animalNum, setAnimalNum] = useState('');
    const [animalBreed, setAnimalBreed] = useState('');
    const [animalAge, setAnimalAge] = useState('');
    const [animalName, setAnimalName] = useState('');
    const [message, setMessage] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');

    // const handleChange = (event) => {
    //     console.log(event.target.value);
    // }

    const handleSubmit = (event) => {
        event.preventDefault();

        console.log("Submitted...");
    }

  return (
    <div className='contact-container'>
        <form onSubmit={handleSubmit} className='contact-form'>
            <label htmlFor='first-name'>First Name</label>
            <input 
                type='text'
                id='first-name'
                name='first-name'
                value={firstName}
                onChange={(e => setFirstName(e.target.value))}
                />

            <label htmlFor='last-name'>Last Name</label>
            <input 
                type='text'
                id='last-name'
                name='last-name'
                value={lastName}
                onChange={(e => setLastName(e.target.value))}
                />

            <label htmlFor='email'>Contact Email</label>
            <input 
                type='email'
                id='email'
                name='email'
                value={email}
                onChange={(e => setEmail(e.target.value))}
                />

            <label htmlFor='city'>City</label>
            <input 
                type='text'
                id='city'
                name='city'
                value={city}
                onChange={(e => setCity(e.target.value))}
                />

            <label htmlFor="animal-type">What kind of pet do you have?</label>
            <select id='animal-type' value={animalType} onChange={(e) => setAnimalType(e.target.value)}>
                <option value=""> -- Select from option list -- </option>
                <option value="cat">I have a Cat</option>
                <option value="dog">I have a Dog</option>
                <option value="both">I have both!</option>
            </select>

            <label htmlFor='animal-num'>More than one?</label>
            <input 
                type='checkbox'
                id='animal-num'
                name='animal-num'
                value={animalNum}
                onChange={(e => setAnimalNum(e.target.value))}
                />

            <label htmlFor='animal-breed'>Animal Breed</label>
            <input 
                type='text'
                id='animal-breed'
                name='animal-breed'
                value={animalBreed}
                onChange={(e => setAnimalBreed(e.target.value))}
                />

            <label htmlFor='animal-age'>Animal Age</label>
            <input 
                type='number'
                id='animal-age'
                name='animal-age'
                value={animalAge}
                onChange={(e => setAnimalAge(e.target.value))}
                />

            <label htmlFor='animal-name'>Name of Pet</label>
            <input 
                type='text'
                id='animal-name'
                name='animal-name'
                value={animalName}
                onChange={(e => setAnimalName(e.target.value))}
                />

            <label htmlFor='start-date'>Start Date</label>
            <input 
                type='date'
                id='start-date'
                name='start-date'
                value={startDate}
                onChange={(e => setStartDate(e.target.value))}
                />

            <label htmlFor='end-date'>End Date</label>
            <input 
                type='date'
                id='end-date'
                name='end-date'
                value={endDate}
                onChange={(e => setEndDate(e.target.value))}
                />

            <label htmlFor='message'>Additional Information</label>
            <textarea 
                type='text'
                id='message'
                name='message'
                value={message}
                onChange={(e => setMessage(e.target.value))}
                />

            <button type='submit' className='submit-btn'>Submit Inquiry</button>
        </form>
    </div>
  )
}

export default Contact;