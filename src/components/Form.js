import React, { useState } from "react";

function Form(props) {
  const [firstName, setFirstName] = useState("Sylvia");
  const [lastName, setLastName] = useState("Woods");

  function handleFirstNameChange(event) {
    setFirstName(event.target.value);
  }

  function handleLastNameChange(event) {
    setLastName(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const formData = { firstName: firstName, lastName: lastName}
    const dataArray = [...submittedData, formData]
    setSubmittedData(dataArray)
    setFirstName("")
    setLastName("")
  }
  const [errors, setErrors] = useState([]);

function handleSubmit(event) {
  event.preventDefault();
  // first name is required
  if (firstName.length > 0) {
    const formData = { firstName: firstName, lastName: lastName };
    const dataArray = [...submittedData, formData];
    setSubmittedData(dataArray);
    setFirstName("");
    setLastName("");
    setErrors([]);
  } else {
    setErrors(["First name is required!"]);
  }
}

 

  const listOfSubmissions = submittedData.map((data, index) => {
    return (
          <div key={index}>
            <p>First Name: {data.firstName}</p>
            <p>Last Name: {data.lastName}</p>
          </div>
          )
  })
  
  return (
    <div>
      <form onSubmit={handleSubmit}>
      <input type="text" onChange={handleFirstNameChange} value={firstName}></input>
      <input type="text" onChange={handleLastNameChange} value={lastName}></input>
      <button type="submit">Submit</button>
      </form>
      {errors.length > 0 ? errors.map((error, index) =>{
        <p key={index} style={{ color: "red"}}>
          {error}
        </p>
      })
      : null}
      <h3>Submissions</h3>
      {listOfSubmissions}
    </div>
  )
}

export default Form;
