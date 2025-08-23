import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

export default function FormikForm() {
  // Initial values for each input field
  const initialValues = {
    username: "",
    email: "",
    password: "",
  };

  // Validation rules using Yup
  const validationSchema = Yup.object({
    username: Yup.string().required("Username is required"),
    email: Yup.string().email("Invalid email").required("Email is required"), 
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  
  const handleSubmit = (values, { resetForm }) => {
    console.log("Form submitted:", values);


    alert("Registration successful!");

    // Clear the form after successful submission
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues} // starting values
      validationSchema={validationSchema} // apply Yup validation
      onSubmit={handleSubmit} // what happens on form submit
    >
      <Form className="p-4 border rounded w-80">
        <h2 className="text-xl font-bold mb-4">Formik Form</h2>

        {/* Username Field */}
        <div className="mb-2">
          <Field
            type="text"
            name="username"
            placeholder="Username"
            className="border p-2 w-full"
          />
          {/* Show error if validation fails */}
          <ErrorMessage name="username" component="div" className="text-red-500" />
        </div>

        {/* Email Field */}
        <div className="mb-2">
          <Field
            type="email"
            name="email"
            placeholder="Email"
            className="border p-2 w-full"
          />
          <ErrorMessage name="email" component="div" className="text-red-500" />
        </div>

        {/* Password Field */}
        <div className="mb-2">
          <Field
            type="password"
            name="password"
            placeholder="Password"
            className="border p-2 w-full"
          />
          <ErrorMessage name="password" component="div" className="text-red-500" />
        </div>

        {/* Submit Button */}
        <button type="submit" className="bg-green-500 text-white p-2 w-full">
          Register
        </button>
      </Form>
    </Formik>
  );
}
