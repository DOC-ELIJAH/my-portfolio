import React from "react";
import formStyle from "./WorkTogether.module.css";
import { Form, Field, Formik } from "formik";
import * as Yup from "yup";
import Fade from "react-reveal/Fade";

const WorkTogether = () => {
  const signupSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(3, "Mininum of 3 characters")
      .max(15, "Maximum of 15 characters")
      .required("Required!"),

    lastName: Yup.string()
      .min(3, "Mininum of 3 characters")
      .max(15, "Maximum of 15 characters")
      .required("Required!"),

    number: Yup.string()
      .min(8, "Mininum of 8 characters")
      .required("Required!"),

    email: Yup.string().email("Invalid email format").required("Required!"),

    enquiry: Yup.string().required("Required!"),

    message: Yup.string()
      .min(3, "Mininum of 3 characters")
      .max(100, "Maximum of 100 characters")
      .required("Required!"),
  });

  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    number: "",
    enquiry: "",
    message: "",
  };
  return (
    <section className={formStyle.mainContainer}>
      {/***********************************This is where the form starts***************************** ************ */}
      <main className="subContainer">
        <Fade top>
          <h1 className={formStyle.heading}>What Do You Need, Let's Talk</h1>
          <Formik
            initialValues={initialValues}
            validationSchema={signupSchema}
            validateOnChange={true}
            validateOnBlur={true}
            onSubmit={(values) => {
              console.log(values);
              localStorage.setItem("initialValues", JSON.stringify(values));
            }}
          >
            {({ errors, touched, handleChange, handleBlur, isSubmitting }) => (
              <Form>
                <Field
                  type="text"
                  name="firstName"
                  id="firstName"
                  placeholder="First Name"
                  className={formStyle.inputs}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.firstName && touched.firstName ? (
                  <p className={formStyle.validation}>{errors.firstName}</p>
                ) : null}

                <Field
                  type="text"
                  name="lastName"
                  id="lastName"
                  placeholder="Last Name"
                  className={formStyle.inputs}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.lastName && touched.lastName ? (
                  <p className={formStyle.validation}>{errors.lastName}</p>
                ) : null}

                <Field
                  type="number"
                  name="number"
                  id="number"
                  placeholder="Phone Number"
                  className={formStyle.inputs}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.number && touched.number ? (
                  <p className={formStyle.validation}>{errors.number}</p>
                ) : null}

                <Field
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  className={formStyle.inputs}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.email && touched.email ? (
                  <p className={formStyle.validation}>{errors.email}</p>
                ) : null}

                <select
                  name="enquiry"
                  id="enquiry"
                  className={formStyle.inputs}
                  onChange={handleChange}
                  // onBlur={handleBlur}
                >
                  <option value="What are you working on?">
                    What are you working on?
                  </option>
                  <option value="Websites">Websites</option>
                  <option value="Mobile-Apps">Mobile Apps</option>
                </select>
                {errors.enquiry && touched.enquiry ? (
                  <p className={formStyle.validation}>{errors.enquiry}</p>
                ) : null}

                <textarea
                  name="message"
                  id="message"
                  cols="22"
                  rows="5"
                  placeholder="Message"
                  className={formStyle.inputs}
                  onChange={handleChange}
                  // onBlur={handleBlur}
                ></textarea>
                {errors.message && touched.message ? (
                  <p className={formStyle.validation}>{errors.message}</p>
                ) : null}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={formStyle.btn}
                  value="Submit"
                >
                  Submit
                </button>
              </Form>
            )}
          </Formik>
        </Fade>
      </main>
    </section>
  );
};

export default WorkTogether;
