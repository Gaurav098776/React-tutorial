import React, { useState } from "react";

const App = () => {
  // const [firstName, setFirstName] = useState('')
  // const [lastName, setLastName] = useState('')

  // console.log(firstName)
  // console.log(lastName)

  //  function onChangeHandler(event) {
  //   // console.log(event.target.value);
  //   setFirstName(event.target.value)  //immediate value set nhi hot hai schedule hoti hai
  // }

  // function changeLastNameHandler(event) {
  //   // console.log(event.target.value);
  //   setLastName(event.target.value)
  // }

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    comment: "",
    isVisible: false,
    mode: "",
    favCar: "",
  });

  console.log(formData);

  function changeHandler(event) {
    const { name, value, checked, type } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData, // old data ko copy kr dena agist (state me)
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  // controlled component - [maintain state inside component]
  function submitHandler(event) {
    event.preventDefault();
    console.log("formData", formData);
  }
  return (
    <div className="App ">
      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="First name"
          onChange={changeHandler} // har bar handler trigger  ho rha jab bhi input me change ho rha hai
          name="firstName"
          value={formData.firstName}
        />
        <br />
        <br />
        <input
          type="text"
          placeholder="last name"
          onChange={changeHandler}
          name="lastName"
          value={formData.lastName} // state maintain ke liye use krte hai
        />
        <br />
        <br />
        <input
          type="email"
          placeholder="Enter your email here"
          onChange={changeHandler}
          name="email"
          value={formData.email}
        />
        <br />
        <br />
        <textarea
          placeholder="enter your comment"
          onChange={changeHandler}
          name="comment"
          value={formData.comment}
        ></textarea>
        <br />
        <br />
        <input
          type="checkbox"
          onChange={changeHandler}
          name="isVisible"
          id="isVisible"
          checked={formData.isVisible}
        />{" "}
        {/* chekbox ke case me value nhi use kte checked use kerte*/}
        <label htmlFor="isVisible">Am i Visible?</label>
        <br />
        <br />
        <fieldset>
          <legend>Mode:</legend>
          <input
            type="radio"
            onChange={changeHandler}
            name="mode"
            value="Online-Mode"
            id="Online-Mode"
            checked={formData.mode === "Online-Mode"}
          />
          <label htmlFor="Online-Mode">Online Mode</label>
          <input
            type="radio"
            onChange={changeHandler}
            name="mode"
            value="Offline-Mode"
            id="Offline-Mode"
            checked={formData.mode === "Offline-Mode"}
          />
          <label htmlFor="Offline-Mode">Offline Mode</label>
        </fieldset>
        <select
          name="favCar"
          onChange={changeHandler}
          id="favCar"
          value={formData.favCar}
        >
          <option value="scorpio">Scorpio</option>
          <option value="fortuner">fortuner</option>
          <option value="Bulero">Bulero</option>
          <option value="Suzuki">Tharr</option>
          <option value="Thar">Bike</option>
          <option value="Defender">Defender</option>
        </select>
        <button>Submit</button>{" "}
        {/* jab submit button per click krte hai to onSubmit event triggre hota hai */}
      </form>
    </div>
  );
};

export default App;
