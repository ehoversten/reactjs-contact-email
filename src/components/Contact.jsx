import React, { useState } from 'react';
import { Formik, useFormik } from 'formik';

function Contact() {

    // const [firstName, setFirstName] = useState('');
    // const [lastName, setLastName] = useState('');
    // const [email, setEmail] = useState('');
    // const [city, setCity] = useState('');
    // const [animalType, setAnimalType] = useState(''); // --> "cat" | "dog" | "both" | ""
    // const [animalNum, setAnimalNum] = useState('');
    // const [animalBreed, setAnimalBreed] = useState('');
    // const [animalAge, setAnimalAge] = useState('');
    // const [animalName, setAnimalName] = useState('');
    // const [message, setMessage] = useState('');
    // const [startDate, setStartDate] = useState('');
    // const [endDate, setEndDate] = useState('');

    // const handleChange = (event) => {
    //     console.log(event.target.value);
    //     setFormData({
    //          ...formData,
    //          [event.target.name]: event.target.value
    //     });
    // }

    const handleSubmit = (event) => {
        event.preventDefault();

        console.log("Submitted...");
    }

    const formik = useFormik({
        initialValues: { 
            firstName: '',
            lastName: '',
            email: '',
            city: '',
            animalType: '',
            animalNum: '',
            animalName: '',
            animalBreed: '',
            animalAge: '',
            message: '',
            startDate: '',
            endDate: ''
        },
        onSubmit: values => {
            console.log("Submitting values: ", values);
        }
    })

  return (
    <div className='contact-container'>

        <form onSubmit={formik.handleSubmit} className='contact-form'>
            <label htmlFor='first-name'>First Name</label>
            <input 
                type='text'
                id='first-name'
                name='firstName'
                value={formik.values.firstName}
                onChange={formik.handleChange}
                />

            <label htmlFor='last-name'>Last Name</label>
            <input 
                type='text'
                id='last-name'
                name='lastName'
                value={formik.values.lastName}
                onChange={formik.handleChange}
                />

            <label htmlFor='email'>Contact Email</label>
            <input 
                type='email'
                id='email'
                name='email'
                value={formik.values.email}
                onChange={formik.handleChange}
                />

            <label htmlFor='city'>City</label>
            <input 
                type='text'
                id='city'
                name='city'
                value={formik.values.city}
                onChange={formik.handleChange}
                />

            <label htmlFor="animal-type">What kind of pet do you have?</label>
            <select id='animal-type' name='animalType' value={formik.values.animalType} onChange={formik.handleChange}>
                <option value=""> -- Select from option list -- </option>
                <option value="cat">I have a Cat</option>
                <option value="dog">I have a Dog</option>
                <option value="both">I have both!</option>
            </select>

            <label htmlFor='animal-num'>How many pets?</label>
            <input 
                type='checkbox'
                id='animal-num'
                name='animalNum'
                value='1'
                onChange={formik.handleChange}
                />One
            <input 
                type='checkbox'
                id='animal-num'
                name='animalNum'
                value='2'
                onChange={formik.handleChange}
                />Two
            <input 
                type='checkbox'
                id='animal-num'
                name='animalNum'
                value='3'
                onChange={formik.handleChange}
                />Three
            <input 
                type='checkbox'
                id='animal-num'
                name='animalNum'
                value='4+'
                onChange={formik.handleChange}
                />Four or More

            <label htmlFor='animal-breed'>Animal Breed</label>
            <input 
                type='text'
                id='animal-breed'
                name='animalBreed'
                value={formik.values.animalBreed}
                onChange={formik.handleChange}
                />

            <label htmlFor='animal-age'>Animal Age</label>
            <input 
                type='number'
                id='animal-age'
                name='animalAge'
                value={formik.values.animalAge}
                onChange={formik.handleChange}
                />

            <label htmlFor='animal-name'>Name of Pet</label>
            <input 
                type='text'
                id='animal-name'
                name='animalName'
                value={formik.values.animalName}
                onChange={formik.handleChange}
                />

            <label htmlFor='start-date'>Start Date</label>
            <input 
                type='date'
                id='start-date'
                name='startDate'
                value={formik.values.startDate}
                onChange={formik.handleChange}
                />

            <label htmlFor='end-date'>End Date</label>
            <input 
                type='date'
                id='end-date'
                name='endDate'
                value={formik.values.endDate}
                onChange={formik.handleChange}
                />

            <label htmlFor='message'>Additional Information</label>
            <textarea 
                type='text'
                id='message'
                name='message'
                value={formik.values.message}
                onChange={formik.handleChange}
                />

            <button type='submit' className='submit-btn'>Submit Inquiry</button>
        </form>

    </div>
  )
}

export default Contact;