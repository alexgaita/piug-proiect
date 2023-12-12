import React, { useState } from "react";
import { Box, TextField, Button } from "@mui/material";
import ReactGA from "react-ga";
import { COLORS } from "./Header";

export const ContactForm = ({ isDarkMode }) => {
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [phoneNumberError, setPhoneNumberError] = useState(false);

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^\d{10}$/;

  const handleEmailChange = (event) => {
    const value = event.target.value;
    setEmail(value);
    setEmailError(!emailRegex.test(value));
  };

  const handlePhoneNumberChange = (event) => {
    const value = event.target.value;
    setPhoneNumber(value);
    setPhoneNumberError(!phoneRegex.test(value));
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const TRACKING_ID = "G-ZPK1ZY28GR"; // OUR_TRACKING_ID
    ReactGA.initialize(TRACKING_ID);
    ReactGA.event({
      category: "User",
      action: "Contacted Us",
    });

    if (!emailError && !phoneNumberError) {
      // Add your logic for handling the submitted data here
      console.log("Email:", email);
      console.log("Phone Number:", phoneNumber);
      console.log("Message:", message);
    } else {
      console.log("Form has errors. Please correct them before submitting.");
    }
  };

  return (
    <Box
      sx={{
        minHeight: "90vh",
        width: "100vw",
        backgroundColor: !isDarkMode ? "#e6e4e0" : COLORS.ligtherDarkBg,
        boxSizing: "border-box",
        justifyContent: "center",
        padding: 5,
        pt: "10vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        boxSizing: "border-box",
      }}
    >
      <Box
        sx={{
          height: 400,
          width: { xs: 300, lg: 400 },
          backgroundColor: "#B6BBC4",
          borderRadius: "20px",
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          p: 5,
          gap: 2,
        }}
      >
        <TextField
          label={"Email"}
          fullWidth
          value={email}
          onChange={handleEmailChange}
          helperText={emailError ? "Please enter a valid email address" : ""}
          FormHelperTextProps={{ sx: { color: "red" } }}
        />
        <TextField
          label={"Phone number"}
          value={phoneNumber}
          fullWidth
          onChange={handlePhoneNumberChange}
          helperText={
            phoneNumberError ? "Please enter a valid phone number" : ""
          }
          FormHelperTextProps={{ sx: { color: "red" } }}
        />
        <TextField
          label={"Message"}
          value={message}
          fullWidth
          onChange={handleMessageChange}
        />
        <Button
          variant="outlined"
          sx={{ mt: 5 }}
          onClick={handleSubmit}
          disabled={emailError || phoneNumberError}
        >
          Send Email
        </Button>
      </Box>
    </Box>
  );
};
