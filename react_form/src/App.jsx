import React from 'react';
import './index.css'; // Importing the CSS file

export default function App() {

  function signUp(formData){
    const email = formData.get("email")
    const password = formData.get("password")
    const employmentStatus = formData.get("employment-status")
    const description = formData.get("description")
    console.log("email :"+email)
    console.log("password : "+password)
    console.log(description)
    console.log(employmentStatus)
  }
  return (
    <section className="form-container">
      <h1 className="form-title">Signup Form</h1>
      <form className="signup-form" action={signUp}>
        <label htmlFor="email">Email:</label>
        <input id="email" type="email" name="email" defaultValue="@gmail.com" />

        <label htmlFor="password">Password:</label>
        <input id="password" type="password" name="password" placeholder="Enter your password" />

        <label htmlFor="description"></label>
        <textarea id="description" name='description'></textarea>

      <fieldset>
        <legend>Employment status:</legend>
        <label className='radio-label'>
          <input type="radio" name='employment-status' value="Unemployed" />
           Unemployed
        </label>
        <label className='radio-label'>
          <input type="radio" name='employment-status' value="Part-time" />
          Part-time
        </label>
        <label className='radio-label'>
          <input type="radio" name='employment-status' value=" Full-time"/>
          Full-time
        </label>
      </fieldset>
        

        <button type="submit">Submit</button>
      </form>
    </section>
  );
}