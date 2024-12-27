import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Importing the CSS file

export default function App() {

  function handleSubmit(event){
    event.preventDefault()
    console.log("submitted")
  }
  return (
    <section className="form-container">
      <h1 className="form-title">Signup Form</h1>
      <form className="signup-form" onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <input id="email" type="email" name="email" placeholder="joe@schmoe.com" />
        <label htmlFor="password">Password:</label>
        <input id="password" type="password" name="password" placeholder="Enter your password" />
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}
