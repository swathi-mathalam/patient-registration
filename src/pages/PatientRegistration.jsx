import { useState } from "react";
import InputField from "../components/InputField";
import Button from "../components/Button";
import Swal from "sweetalert2";

const PatientRegistration = () => {
  const [formData, setFormData] = useState({
  fullName: "",
  age: "",
  dob: "",
  gender: "",
  phone: "",
  email: "",
  address: "",
  bloodGroup: "",
  emergencyContact: "",
  medicalHistory: "",
  password: "",
  confirmPassword: "",
});

  const [errors, setErrors] = useState({});

  // Handle Input Change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Validation
  const validateForm = () => {
    let newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full Name is required";
    }

   if (name === "age" && value < 0) {
    return;
  }
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
    ) {
      newErrors.email = "Invalid email format";
    } 
 
   if (
    name === "phone" ||
    name === "emergencyContact"
  ) {
    // Block anything except numbers
    if (!/^[0-9\b]*$/.test(value)) {
      return;
    }

    // Limit to 10 digits
    if (value.length > 10) {
      return;
    }
  }
    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password =
        "Password must be at least 6 characters";
    }

    if (formData.confirmPassword !== formData.password) {
      newErrors.confirmPassword =
        "Passwords do not match";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  // Submit
  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      const patientData = {
        id: Date.now(),
        ...formData,
      };

      console.log("Patient Registered:", patientData);

      Swal.fire({
  title: "Success!",
  text: "Patient Registered Successfully!",
  icon: "success",
  confirmButtonText: "OK",
});

      setFormData({
        fullName: "",
        age: "",
        dob: "",
        gender: "",
        phone: "",
        email: "",
        address: "",
        bloodGroup: "",
        emergencyContact: "",
        medicalHistory: "",
        password: "",
        confirmPassword: "",
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-5">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-xl p-8">

        <h1 className="text-3xl font-bold text-center mb-6 text-blue-600">
          Patient Registration Form
        </h1>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          <InputField
  label="Full Name"
  name="fullName"
  value={formData.fullName}
  onChange={handleChange}
  error={errors.fullName}
  required
/>

          <InputField
  label="Age"
  type="number"
  name="age"
  value={formData.age}
  onChange={handleChange}
  error={errors.age}
  min="0"
  required
/>

          <InputField
            label="Date of Birth"
            type="date"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
          />

          <div>
            <label className="block mb-1 font-medium">
              Gender
            </label>

            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="w-full border rounded-lg p-2"
            >
              <option value="">
                Select Gender
              </option>
              <option value="Male">
                Male
              </option>
              <option value="Female">
                Female
              </option>
              <option value="Other">
                Other
              </option>
            </select>
          </div>

      <InputField
  label="Phone Number"
  type="text"
  name="phone"
  value={formData.phone}
  onChange={handleChange}
  error={errors.phone}
  required
  maxLength={10}
/>

          <InputField
  label="Email"
  type="email"
  name="email"
  value={formData.email}
  onChange={handleChange}
  error={errors.email}
  required
/>

         <div>
  <label className="block mb-2 font-medium text-gray-700">
    Address
  </label>

  <textarea
    name="address"
    value={formData.address}
    onChange={handleChange}
    rows="1"
    className="w-full border border-gray-300 rounded-lg px-4 py-2 h-[42px] resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
  />
</div>

          <InputField
            label="Blood Group"
            name="bloodGroup"
            value={formData.bloodGroup}
            onChange={handleChange}
          />

        <InputField
  label="Emergency Contact"
  type="text"
  name="emergencyContact"
  value={formData.emergencyContact}
  onChange={handleChange}
  maxLength={10}
/><div>
  <label className="block mb-2 font-medium text-gray-700">
    Medical History
  </label>

  <textarea
    name="medicalHistory"
    value={formData.medicalHistory}
    onChange={handleChange}
    rows="1"
    className="w-full border border-gray-300 rounded-lg px-4 py-2 h-[42px] resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
  />
</div>
          <InputField
  label="Password"
  type="password"
  name="password"
  value={formData.password}
  onChange={handleChange}
  error={errors.password}
  required
/>

         <InputField
  label="Confirm Password"
  type="password"
  name="confirmPassword"
  value={formData.confirmPassword}
  onChange={handleChange}
  error={errors.confirmPassword}
  required
/>

          <div className="md:col-span-2">
            <Button text="Register Patient" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default PatientRegistration; 