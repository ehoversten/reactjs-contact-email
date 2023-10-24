import React from 'react';
import { useFormik } from 'formik';

const formValidate = values => {
    const errors = {}

    if(!values.firstName) {
        errors.firstName = 'Required'
    }
    if(!values.lastName) {
        errors.lastName = 'Required'
    }

    if (!values.email) {
        errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
         errors.email = 'Invalid email address';
    }

    if(!values.city) {
        errors.city = 'Required'
    }

    if(!values.animalType) {
        errors.animalType = 'Required'
    }

    if(!values.animalName) {
        errors.animalName = 'Required'
    }

    if(!values.animalBreed) {
        errors.animalBreed = 'Required'
    }
    
    if(!values.animalAge) {
        errors.animalAge = 'Required'
    }

    if(!values.animalNum.length) {
        errors.animalNum = 'Required'
    } else if(values.animalNum.length > 1) {
        errors.animalNum = 'Please only select one checkbox'
    }

    if(!values.startDate) {
        errors.startDate = 'Required'
    }

    if(!values.endDate) {
        errors.endDate = 'Required'
    }

    return errors
}

function Contact() {

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
        validate: formValidate,
        onSubmit: values => {
            console.log("Submitting values: ", values);
        }
    })

    // console.log("Form Values: ", formik.values);
    console.log("Visited Fields: ", formik.touched);

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
                onBlur={formik.handleBlur}
                />
            { formik.touched.firstName && formik.errors.firstName ? <div className='form-error'>{formik.errors.firstName}</div>: null }

            <label htmlFor='last-name'>Last Name</label>
            <input 
                type='text'
                id='last-name'
                name='lastName'
                value={formik.values.lastName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                />
            { formik.touched.lastName && formik.errors.lastName ? <div className='form-error'>{formik.errors.lastName}</div>: null }

            <label htmlFor='email'>Contact Email</label>
            <input 
                type='email'
                id='email'
                name='email'
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                />
            { formik.touched.email &&  formik.errors.email ? <div className='form-error'>{formik.errors.email}</div>: null }

            <label htmlFor='city'>City</label>
            <input 
                type='text'
                id='city'
                name='city'
                value={formik.values.city}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                />
            { formik.touched.city && formik.errors.city ? <div className='form-error'>{formik.errors.city}</div>: null }

            <label htmlFor="animal-type">What kind of pet do you have?</label>
            <select id='animal-type' name='animalType' value={formik.values.animalType} onChange={formik.handleChange} onBlur={formik.handleBlur}>
                <option value=""> -- Select from option list -- </option>
                <option value="cat">I have a Cat</option>
                <option value="dog">I have a Dog</option>
                <option value="both">I have both!</option>
            </select>
            { formik.touched.animalType && formik.errors.animalType ? <div className='form-error'>{formik.errors.animalType}</div>: null }

            <label htmlFor='animal-num'>How many pets?</label>
            <input 
                type='checkbox'
                id='animal-num'
                name='animalNum'
                value='1'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                />One
            <input 
                type='checkbox'
                id='animal-num'
                name='animalNum'
                value='2'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                />Two
            <input 
                type='checkbox'
                id='animal-num'
                name='animalNum'
                value='3'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                />Three
            <input 
                type='checkbox'
                id='animal-num'
                name='animalNum'
                value='4+'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                />Four or More
            { formik.touched.animalNum && formik.values.animalNum && formik.errors.animalNum ? <div className='form-error'>{formik.errors.animalNum}</div>: null }

            <label htmlFor='animal-breed'>Animal Breed</label>
            <input 
                type='text'
                id='animal-breed'
                name='animalBreed'
                value={formik.values.animalBreed}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                />
            { formik.touched.animalBreed && formik.errors.animalBreed ? <div className='form-error'>{formik.errors.animalBreed}</div>: null }

            <label htmlFor='animal-age'>Animal Age</label>
            <input 
                type='number'
                id='animal-age'
                name='animalAge'
                value={formik.values.animalAge}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                />
            { formik.touched.animalAge && formik.errors.animalAge ? <div className='form-error'>{formik.errors.animalAge}</div>: null }

            <label htmlFor='animal-name'>Name of Pet</label>
            <input 
                type='text'
                id='animal-name'
                name='animalName'
                value={formik.values.animalName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                />
            { formik.touched.animalName &&  formik.errors.animalName ? <div className='form-error'>{formik.errors.animalName}</div>: null }

            <label htmlFor='start-date'>Start Date</label>
            <input 
                type='date'
                id='start-date'
                name='startDate'
                value={formik.values.startDate}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                />
            { formik.touched.startDate && formik.errors.startDate ? <div className='form-error'>{formik.errors.startDate}</div>: null }

            <label htmlFor='end-date'>End Date</label>
            <input 
                type='date'
                id='end-date'
                name='endDate'
                value={formik.values.endDate}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                />
            { formik.touched.endDate && formik.errors.endDate ? <div className='form-error'>{formik.errors.endDate}</div>: null }

            <label htmlFor='message'>Additional Information</label>
            <textarea 
                type='text'
                id='message'
                name='message'
                value={formik.values.message}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                />

            <button type='submit' className='submit-btn'>Submit Inquiry</button>
        </form>

    </div>
  )
}

export default Contact;