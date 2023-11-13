import React from "react";
import { useForm } from "react-hook-form";
export const Form = () => {
  const { register, handleSubmit } = useForm();

  const submitForm = (data) => {
    console.log(data);
  };

  return (
    <div className="form-container">
      <form
        className="form-content"
        onSubmit={handleSubmit(submitForm)}
        autoComplete="off"
      >
        <h1>Form</h1>
        <div>
          <label htmlFor="fname">Full Name</label>
          <input
            type="text"
            placeholder="Full Name"
            id="fname"
            {...register("fullname")}
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            placeholder="eg: abc@gmail.com"
            id="email"
            {...register("email")}
          />
        </div>
        <div>
          <label htmlFor="age">Age</label>
          <input type="number" id="age" {...register("age")} />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" {...register("password")} />
        </div>
        <div>
          <label htmlFor="ConfirmPassword">Confirm Password</label>
          <input
            type="password"
            id="ConfirmPassword"
            {...register("confirmpassword")}
          />
        </div>
        <button className="submit-button" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};
