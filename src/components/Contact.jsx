import React, { useState } from 'react';

function Contact() {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [city, setCity] = useState('');
    const [animalType, setAnimalType] = useState('cat'); // --> "cat" | "dog"
    const [animalNum, setAnimalNum] = useState('');
    const [animalBreed, setAnimalBreed] = useState('');
    const [animalAge, setAnimalAge] = useState('');
    const [animalName, setAnimalName] = useState('');
    const [message, setMessage] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');

    const handleChange = (event) => {
        console.log(event.target.value);
    }

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
                onChange={handleChange}
                />

            <label htmlFor='last-name'>Last Name</label>
            <input 
                type='text'
                id='last-name'
                name='last-name'
                value={lastName}
                onChange={handleChange}
                />

            <label htmlFor='city'>City</label>
            <input 
                type='text'
                id='city'
                name='city'
                value={city}
                onChange={handleChange}
                />

            <label htmlFor="animal-type">What kind of pet do you have?</label>
            <select id='animal-type'>
                <option value="select">Select from list</option>
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
                onChange={handleChange}
                />

            <label htmlFor='animal-breed'>Animal Breed</label>
            <input 
                type='text'
                id='animal-breed'
                name='animal-breed'
                value={animalBreed}
                onChange={handleChange}
                />

            <label htmlFor='animal-age'>Animal Age</label>
            <input 
                type='number'
                id='animal-age'
                name='animal-age'
                value={animalAge}
                onChange={handleChange}
                />

            <label htmlFor='animal-name'>Name of Pet</label>
            <input 
                type='text'
                id='animal-name'
                name='animal-name'
                value={animalName}
                onChange={handleChange}
                />

            <label htmlFor='start-date'>Start Date</label>
            <input 
                type='date'
                id='start-date'
                name='start-date'
                value={startDate}
                onChange={handleChange}
                />

            <label htmlFor='end-date'>End Date</label>
            <input 
                type='date'
                id='end-date'
                name='end-date'
                value={endDate}
                onChange={handleChange}
                />

            <label htmlFor='message'>Additional Information</label>
            <textarea 
                type='text'
                id='message'
                name='message'
                value={message}
                onChange={handleChange}
                />

            <button type='submit' className='submit-btn'>Submit Inquiry</button>
        </form>
    </div>
  )
}

export default Contact;