import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import React from 'react'

function FormikForm (){

    const validationSchema = Yup.object({
        name: Yup.string().required('Name is required'),
        email: Yup.string().email('Invalid email').required('Email is required'),
        password:Yup.string().required('password is required')
    });

    const initialValues = {
        email: '' ,
        name : '',
        password: '',
    }

    const submit = (value) => console.log(value)


  return (
    <div>
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={submit} >
            {()=>(
                <Form>
                    <Field type='text' name='name' placeholder="name"/>
                    <ErrorMessage name='name' component= 'span'/>

                    <Field name="email" type="email" placeholder="email"/>
                    <ErrorMessage name="email" component= 'span' />

                    <Field type="password" name="password" placeholder="password" />
                    <ErrorMessage name="password" component= 'span' />
                    <button type='submit'>Submit.</button>
                </Form>
            )}

        </Formik>
    </div>
 )
}

export default FormikForm ;