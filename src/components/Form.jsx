import React from "react";

export const Form = () => {
  return (
    <div>
      <form class="form-container" action="GET" autoComplete="off">
        <div>
          <label htmlFor="fname">Full Name</label>
          <input type="text" placeholder="Full Name" id="fname" />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" placeholder="eg: abc@gmail.com" id="email" />
        </div>
        <div>
          <label htmlFor="age">Age</label>
          <input type="number" id="age" />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" />
        </div>
        <div>
          <label htmlFor="ConfirmPassword">Confirm Password</label>
          <input type="password" id="ConfirmPassword" />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
