import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

export const Form = () => {
  const schema = yup.object().shape({
    fullname: yup.string().required("FullName is required!!!"),
    email: yup.string().email("Include @gmail.com").required(),
    age: yup.number("Must be a number!").positive("Cannot be negative!"),
    password: yup.string().required().min(4).max(12),
    confirmpassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "passwords Do not match")
      .required(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const submitForm = (data) => {
    console.log("submitted");
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
          <p>{errors.fullname?.message}</p>
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            placeholder="eg: abc@gmail.com"
            id="email"
            {...register("email")}
          />
          <p>{errors.email?.message}</p>
        </div>
        <div>
          <label htmlFor="age">Age</label>
          <input type="number" id="age" {...register("age")} />
          <p>{errors.age?.message}</p>
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
          <p>{errors.confirmpassword?.message}</p>
        </div>
        <button className="submit-button" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};
