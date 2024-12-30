import React from 'react';
import './index.css'; // Importing the CSS file

export default function App() {

  function signUp(formData){
    const data = Object.fromEntries(formData);
    const dieteryData = formData.getAll("Dietery-status")
    const allData = {
      ...data,
      dieteryData
    }
    console.log(allData)
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
          <input type="radio" name='employment-status' value=" Full-time" defaultChecked={true}/>
          Full-time
        </label>

      </fieldset>

      <fieldset>
        <legend>Dietery Restriction :</legend>
        <label className='radio-label'>
          <input type="checkbox" name='Dietery-status' value="Kosher" />
           Kosher
        </label>
        <label className='radio-label'>
          <input type="checkbox" name='Dietery-status' value="Vegan" />
          Vegan
        </label>
        <label className='radio-label'>
          <input type="checkbox" name='Dietery-status' value=" Glutten-free" defaultChecked={true}/>
          Glutten-free
        </label>

      </fieldset>
        
        <label htmlFor="favColor">
          <select name="favColor" id="favColor" defaultValue="" required >
            <option value="" disabled >--Choose an Option--</option>
            <option value="Green">Black</option>
            <option value="Yelleow">Yelleow</option>
            <option value="Orange">Orange</option>
            <option value="Indigo">Indigo</option>
            <option value="Blue">Blue</option>
            <option value="Red">Red</option>
            <option value="White">White</option>
          </select>
        </label>

        <button type="submit">Submit</button>
      </form>
    </section>
  );
}