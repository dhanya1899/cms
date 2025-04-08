import React from "react";
import {
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  Button,
  Box,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./complaint.css";
import "../App.css";

function Complaint() {
  const navigate = useNavigate(); // Create navigate function

  // Handle navigation to ComplaintForm page
  const handleComplaintButtonClick = () => {
    navigate("/complaint-form"); // Redirects to ComplaintForm page
  };

  return (
    <div>
      <p className="textSize">Form Approved OMB No. 0938-0948</p>

      <h1 className="headingSize">
        <b>Complaint Type</b>
      </h1>
      <h2 className="headingSize">
        <b>Make a selection below</b>
      </h2>

      <form>
        <FormControl component="fieldset">
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            name="radio-buttons-group"
          >
            <FormControlLabel
              value="Transactions"
              control={<Radio />}
              label="Transactions"
              sx={{ "& .MuiFormControlLabel-label": { fontSize: "22px" } }}
            />
            <p>
              Select if a covered entity is in violation of the following
              transactions: claims and encounter information, payment and
              remittance advice, claims status, eligibility, enrollment and
              disenrollment, referrals and authorizations, coordination of
              benefits and premium payment.
            </p>

            <FormControlLabel
              value="Code Sets"
              control={<Radio />}
              label="Code Sets"
              sx={{ "& .MuiFormControlLabel-label": { fontSize: "22px" } }}
            />
            <p>
              Select if a covered entity is in violation of the following Code
              Sets: HCPCS (Ancillary Services/Procedures), CPT-4 (Physicians
              Procedures), CDT (Dental Terminology), ICD-9 (Diagnosis and
              Hospital Inpatient Procedures), ICD-10 (As of October 1, 2015) and
              NDC (National Drug Codes) codes with which providers and health
              plan are familiar, are the adopted code sets for procedures,
              diagnoses, and drugs.
            </p>

            <FormControlLabel
              value="Unique Identifiers"
              control={<Radio />}
              label="Unique Identifiers"
              sx={{ "& .MuiFormControlLabel-label": { fontSize: "22px" } }}
            />
            <p>
              Select if a covered entity is in violation of the following Unique
              Identifiers: National Provider Identifier (NPI), Employer
              Identification Number (EIN).
            </p>

            <FormControlLabel
              value="Operating Rules"
              control={<Radio />}
              label="Operating Rules"
              sx={{ "& .MuiFormControlLabel-label": { fontSize: "22px" } }}
            />
            <p>
              Select if a covered entity is suspected of being in violation of
              any of the adopted Operating Rules: Electronic Funds
              Transfer/Electronic Remittance Advice (EFT/ERA), Health Care Claim
              Status, and Eligibility for a Health Plan.
            </p>
          </RadioGroup>
        </FormControl>

        {/* Submit Button */}
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
            }}
          >
            Welcome
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
              width: "210px",
            }}
            onClick={handleComplaintButtonClick} // On click, navigate to ComplaintForm
          >
            <span style={{ marginRight: "8px" }}>Complaint</span>
            <span>Information</span>
          </Button>
        </Box>
      </form>
    </div>
  );
}

export default Complaint;
