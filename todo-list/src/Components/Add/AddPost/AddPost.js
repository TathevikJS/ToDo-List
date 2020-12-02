import React from 'react';
import './AddPost.css'
import * as Yup from 'yup'
import {Formik} from 'formik'
import Error from './Error';

const validationSchema = Yup.object().shape({
    title: Yup
        .string()
        .max(15, 'Must be shorter than 15 letters')
        .required('required'),
    description: Yup
        .string()
        .max(99, 'Must be shorter than 99 letters')
        .required('required'),
    color: Yup
        .string()
        .required('required'),
})


const AddPost = ({postData}) => {
    return (
        <Formik
            initialValues={{ title: '', description: '', color: '' }}
            validationSchema={validationSchema}
            onSubmit={(values, { setSubmitting, resetForm }) => {
                setSubmitting(true)
                    postData(values)
                    resetForm()
                    setSubmitting(false)
            }}
        >
            {(
                {
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit
                }
            ) => {
                return (
                    <form className='modal-content'
                        onSubmit={handleSubmit}>
                        <div className='container'>
                            <label htmlFor='title'>title</label>
                            <input
                                id='title'
                                type='text'
                                name='title'
                                placeholder='Enter your title'
                                value={values.title}
                                className={touched.title && errors.title ? 'has-error' : null}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            <Error touched={touched.title} message={errors.title} />
                            <label htmlFor='description'>description</label>
                            <input
                                id='description'
                                type='text'
                                name='description'
                                placeholder='Enter your description'
                                value={values.description}
                                className={touched.description && errors.description ? 'has-error' : null}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            <Error touched={touched.description} message={errors.description} />

                            <label htmlFor='color'>color</label>
                            <input
                                id='color'
                                type='text'
                                name='color'
                                placeholder='Enter your color'
                                value={values.color}
                                className={touched.color && errors.color ? 'has-error' : null}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            <Error touched={touched.color} message={errors.color} />
                           

                            <button type='submit'>Add ToDo</button>
                        </div>
                    </form>
                )
            }}

        </Formik>
    );
}

export default AddPost;