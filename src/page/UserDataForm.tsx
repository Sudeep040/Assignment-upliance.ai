import React, { useState, useEffect } from "react";
import { Alert, AlertTitle, Button, TextField } from "@mui/material";

const UserDataForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    email: "",
    phone: "",
  });
  const [showAlert, setShowAlert] = useState(false);

  const handleShowAlert = () => {
    setShowAlert(true);
  };

  const handleCloseAlert = () => {
    setShowAlert(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const userId = generateUserId();
    const userDataString = localStorage.getItem("UserData");
    let UserData = [];

    if (userDataString !== null) {
      UserData = JSON.parse(userDataString);
    }

    localStorage.setItem("UserData", JSON.stringify([{ ...formData, userId }]));
    setFormData({ name: "", address: "", email: "", phone: "" });
    handleShowAlert();
  };

  const generateUserId = () => {
    return new Date().getTime().toString();
  };

  useEffect(() => {
    const handleBeforeUnload = (event: BeforeUnloadEvent) => {
      if (hasUnsavedChanges()) {
        const message =
          "You have unsaved changes. Are you sure you want to leave?";
        event.returnValue = message;
        return message;
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [formData]);

  const hasUnsavedChanges = () => {
    // You can customize this logic based on your requirements
    return Object.values(formData).some((value) => value !== "");
  };

  return (
    <div className=" d-flex justify-content-center h-100 align-items-center  ">
      <div
        id="form"
        className="d-flex align-items-center flex-column px-3 py-5 justify-content-center border rounded-4 "
      >
        <div className=" pt-3 pb-4 fw-bold">User Data Form</div>
        <form
          className=" d-flex flex-column w-100 px-4  "
          onSubmit={(e: React.FormEvent<HTMLFormElement>) => handleSubmit(e)}
        >
          <TextField
            label="Name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
          <br />

          <TextField
            type="text"
            label="Address"
            name="address"
            value={formData.address}
            multiline
            rows={4}
            onChange={handleInputChange}
            required
          />

          <br />

          <TextField
            type="email"
            label="Email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />

          <br />

          <TextField
            type="tel"
            label="Phone"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            required
          />

          <br />
          <Button variant="contained" color="primary" type="submit">
            save
          </Button>
        </form>
        {showAlert && (
          <div className=" al border">
            <Alert severity="success" onClose={handleCloseAlert}>
              <AlertTitle>Success</AlertTitle>
              Form submited
            </Alert>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserDataForm;
