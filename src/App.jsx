import { useState } from 'react'
import { useFormik } from 'formik';
import "../src/style.css";
import { validation } from './validation/FormValidation';


function App() {
  const initialValues = {
    firstname: "",
    lastname: "",
    email: "",
    password: "",

  }
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validation,
    onSubmit: (values ,action) => {
      console.log(values);
      action.resetForm()

    },
  });


  return (
    <>
      <div className='formbody'>
        <form method='post' onSubmit={formik.handleSubmit}>
          <div>
            <label htmlFor="firstname">FirstName</label> <br />
            <input type="text" name="firstname" id="firstname" onChange={formik.handleChange} value={formik.values.firstname} />
            {formik.touched.firstname && formik.errors.firstname ? (
              <div className='error'>{formik.errors.firstname}</div>
            ) : null}
          </div>

          <div>
            <label htmlFor="lastname">LastName</label> <br />
            <input type="text" name="lastname" id="lastname" onChange={formik.handleChange} value={formik.values.lastname} />

            {formik.touched.lastname && formik.errors.lastname ? (
              <div className='error'>{formik.errors.lastname}</div>
            ) : null}
          </div>


          <div>
            <label htmlFor="email">Email</label> <br />
            <input type="email" name="email" id="email" onChange={formik.handleChange} value={formik.values.email} />
            {formik.touched.email && formik.errors.email ? (
              <div className='error'>{formik.errors.email}</div>
            ) : null}
          </div>

          <div>
            <label htmlFor="password">Password</label> <br />
            <input type="pass" name="password" id="password" onChange={formik.handleChange} value={formik.values.password} />
            {formik.touched.password && formik.errors.password ? (
              <div className='error'>{formik.errors.password}</div>
            ) : null}
          </div>

          <button id='btn' type='submit'>
            Submit
          </button>

        </form>
      </div>
    </>
  )
}

export default App
