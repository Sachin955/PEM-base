import React, { useState } from "react";
import axios from "axios";
import formFields from "./formData/formFields";
import "./Array.css";

const Array = () => {
  const [userInput, setUserInput] = useState({});
  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
    const { name, type, value, checked } = e.target;
    setUserInput((prevValue) => ({
      ...prevValue,
      [name]: type === "checkbox" ? checked : value,
    }));
    setErrors({})

  };

  const validate = (userInput) => {
      const errors = {};
      if (!userInput.tobacco_user) errors.tobacco_user = "tobacco user is requireds"
      if (!userInput.status) errors.status = "Status is required"
      if (!userInput.coverage_tier) errors.coverage_tier = "coverage tier filed is required"
      if (!userInput.zip_code) errors.zip_code = "zip code is required"

      setErrors(errors)
      return errors;
  }
  const formSubmit = async (e) => {
    e.preventDefault();

    const validateResult = validate(userInput)
    if (Object.keys(validateResult).length) return;

    try {
      await axios.post("https://your-backend-api.com/submit", userInput);
      alert("Form Submitted");
      setUserInput({});
    } catch (error) {
      alert("Something went wrong");
    }

  }

  return (
    <div>
      <h2>{formFields.title}</h2>
      <p>{formFields.description}</p>
      <form onSubmit={formSubmit}>
        {formFields.elements?.map((element, index) => (
          <div key={index}>
            {element.type === "text" && <p>{element.content}</p>}
            {
              element.type === "select" && (
                <div>
                  <label htmlFor={element.name}>
                    {element.label}
                    <select name={element.name}
                      value={userInput[element.name] || ""}
                      onChange={handleChange}>
                      {element.options.map((option, idx) => (
                        <option key={idx}
                          value={option.val || option.val}>
                          {option.label || option}

                        </option>
                      ))}
                    </select>
                  </label>
                </div>
              )
            }
            {
              errors[element.name] && <span style={{color:'red'}}>{errors[element.name]}</span>
            }

            {element.type === "checkbox" && (
              <div>
                <label htmlFor={element.name}>
                  <input
                    type="checkbox"
                    name={element.name}
                    checked={userInput[element.name] || false}
                    onChange={handleChange}
                  />
                  {element.label}
                </label>
              </div>
            )}

            {element.type === "input" && (
              <div>
                <label htmlFor={element.name}>
                  {element.label}
                  <input
                    type="text"
                    name={element.name}
                    placeholder={element.placeholder}
                    value={userInput[element.name] || ""}
                    onChange={handleChange}
                  />
                </label>
              </div>
            )}
          </div>
        ))}

        <input
          type="submit"
          id="contact-submit"
          className="blueBtn"
          value={formFields.elements?.find((e) => e.name === "zip_code")?.placeholder || "Submit"}
        />
      </form>

    </div>
  );
};

export default Array;
