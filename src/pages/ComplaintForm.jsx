import React, { useState } from "react";
import {
  TextField,
  RadioGroup,
  FormControlLabel,
  Radio,
  Button,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Box,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
const ComplainantForm = () => {
  const [formData, setFormData] = useState({
    anonymous: "",
    orgName: "",
    orgType: "",
    orgRole: "",
    orgPhone: "",
    title: "",
    firstName: "",
    middleInitial: "",
    lastName: "",
    address1: "",
    address2: "",
    city: "",
    state: "",
    zip: "",
    email: "",
    contactPhone: "",
    cellPhone: "",
  });

  const navigate = useNavigate(); // Initialize useNavigate

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data submitted:", formData);
  };

  const handleBackToComplaintForm = () => {
    navigate("/"); // Navigate to the Complaint Form route
  };

  return (
    <Box
      sx={{
        maxWidth: 850,
        margin: "0 auto",
        padding: 4,
        border: "1px solid #ccc",
        borderRadius: 2,
      }}
    >
      <Typography variant="h4" gutterBottom>
        Complainant Details Form
      </Typography>

      <form onSubmit={handleSubmit}>
        {/* Anonymous Selection */}
        <FormControl component="fieldset" fullWidth sx={{ marginBottom: 2 }}>
          <Typography variant="subtitle1">
            Do you want to remain anonymous during this process?*
          </Typography>
          <RadioGroup
            row
            name="anonymous"
            value={formData.anonymous}
            onChange={handleChange}
            required
          >
            <FormControlLabel value="yes" control={<Radio />} label="Yes" />
            <FormControlLabel value="no" control={<Radio />} label="No" />
          </RadioGroup>
        </FormControl>

        {/* Disclaimer */}
        <Typography variant="body2" sx={{ marginBottom: 2 }}>
          <strong>Disclaimer:</strong> If you select yes, CMS will not share
          your information with the Filed Against Entity (FAE) during the
          investigation process. However, information provided in this complaint
          is subject to rules and policies under the Freedom of Information Act
          (FOIA).
        </Typography>

        {/* Organization Details */}
        <TextField
          label="Complainant Organization Name*"
          name="orgName"
          value={formData.orgName}
          onChange={handleChange}
          fullWidth
          required
          sx={{ marginBottom: 2 }}
        />

        <FormControl fullWidth sx={{ marginBottom: 2 }}>
          <InputLabel>Complainant Organization Type</InputLabel>
          <Select
            name="orgType"
            value={formData.orgType}
            onChange={handleChange}
            label="Complainant Organization Type"
          >
            <MenuItem value="none">--None--</MenuItem>
            <MenuItem value="type1">Health Care Clearinghouse</MenuItem>
            <MenuItem value="type2">Covered Health Care Provider</MenuItem>
            <MenuItem value="other">Health Plan</MenuItem>
            <MenuItem value="other">Vendor</MenuItem>
            <MenuItem value="other">Others</MenuItem>
          </Select>
        </FormControl>

        <TextField
          label="Complainant Organization Role"
          name="orgRole"
          value={formData.orgRole}
          onChange={handleChange}
          fullWidth
          sx={{ marginBottom: 2 }}
        />

        <TextField
          label="Complainant Organization Phone Number*"
          name="orgPhone"
          value={formData.orgPhone}
          onChange={handleChange}
          fullWidth
          required
          sx={{ marginBottom: 2 }}
        />

        {/* Personal Details */}
        <FormControl fullWidth sx={{ marginBottom: 2 }}>
          <InputLabel>Complainant Title*</InputLabel>
          <Select
            name="title"
            value={formData.title}
            onChange={handleChange}
            label="Complainant Title"
            required
          >
            <MenuItem value="none">--None--</MenuItem>
            <MenuItem value="mr">Mr.</MenuItem>
            <MenuItem value="ms">Mrs.</MenuItem>
            <MenuItem value="ms">Miss</MenuItem>
            <MenuItem value="ms">Ms.</MenuItem>
            <MenuItem value="dr">Dr.</MenuItem>
          </Select>
        </FormControl>

        <TextField
          label="Complainant First Name*"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          fullWidth
          required
          sx={{ marginBottom: 2 }}
        />

        <TextField
          label="Complainant MI"
          name="middleInitial"
          value={formData.middleInitial}
          onChange={handleChange}
          fullWidth
          sx={{ marginBottom: 2 }}
        />

        <TextField
          label="Complainant Last Name*"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          fullWidth
          required
          sx={{ marginBottom: 2 }}
        />

        <TextField
          label="Complainant Address Line 1*"
          name="address1"
          value={formData.address1}
          onChange={handleChange}
          fullWidth
          required
          sx={{ marginBottom: 2 }}
        />

        <TextField
          label="Complainant Address Line 2"
          name="address2"
          value={formData.address2}
          onChange={handleChange}
          fullWidth
          sx={{ marginBottom: 2 }}
        />

        <TextField
          label="Complainant City/Town*"
          name="city"
          value={formData.city}
          onChange={handleChange}
          fullWidth
          required
          sx={{ marginBottom: 2 }}
        />

        <FormControl fullWidth sx={{ marginBottom: 2 }}>
          <InputLabel>Complainant State/Territory*</InputLabel>
          <Select
            name="state"
            value={formData.state}
            onChange={handleChange}
            label="Complainant State/Territory"
            required
          >
            <MenuItem value="none">--None--</MenuItem>
            <MenuItem value="state1">Alabama</MenuItem>
            <MenuItem value="state2">Alaska</MenuItem>
            <MenuItem value="state3">American Samoa</MenuItem>
            <MenuItem value="state3">Arizona</MenuItem>
            <MenuItem value="state3">Arkansas</MenuItem>
            <MenuItem value="state3">California</MenuItem>
            <MenuItem value="state3">Colorado</MenuItem>
            <MenuItem value="state3">Connecticult</MenuItem>
            <MenuItem value="state3">Delaware</MenuItem>
            <MenuItem value="state3">District Of Columbia</MenuItem>
            <MenuItem value="state3">Florida</MenuItem>
          </Select>
        </FormControl>

        <TextField
          label="Complainant Zip Code*"
          name="zip"
          value={formData.zip}
          onChange={handleChange}
          fullWidth
          required
          sx={{ marginBottom: 2 }}
        />

        <TextField
          label="Complainant Email Address*"
          name="email"
          value={formData.email}
          onChange={handleChange}
          fullWidth
          required
          sx={{ marginBottom: 2 }}
        />

        <TextField
          label="Complainant Contact Phone Number*"
          name="contactPhone"
          value={formData.contactPhone}
          onChange={handleChange}
          fullWidth
          required
          sx={{ marginBottom: 2 }}
        />

        <TextField
          label="Complainant Cell Phone Number"
          name="cellPhone"
          value={formData.cellPhone}
          onChange={handleChange}
          fullWidth
          sx={{ marginBottom: 2 }}
        />

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <Button
            type="submit"
            variant="contained"
            sx={{
              marginLeft: 2,
              backgroundColor: "#2e6da4",
              textTransform: "none",
              width: "450px",
            }}
          >
            Specify complaint Type
          </Button>

          <Box
            sx={{ display: "flex", justifyContent: "center", width: "100%" }}
          >
            <Button
              type="submit"
              variant="contained"
              sx={{
                backgroundColor: "#2e6da4",
                textTransform: "none",
              }}
            >
              Cancel
            </Button>
          </Box>

          <Button
            type="button" // Change this to "button" to prevent form submission
            variant="contained"
            sx={{
              marginRight: 2,
              backgroundColor: "#2e6da4",
              textTransform: "none",
              width: "600px",
            }}
            onClick={handleBackToComplaintForm} // Trigger navigation when clicked
          >
            Field against entity information
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default ComplainantForm;
