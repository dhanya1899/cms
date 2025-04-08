import "./complaint.css";
import {
  Radio,
  RadioGroup,
  FormControlLabel,
  FormLabel,
  FormControl,
  Container,
  Button,
  Box,
} from "@mui/material";
import React, { useState } from "react";
import "../App.css";

function Complaint() {
  // Define the states for the selections
  const [transactionsSelection, setTransactionsSelection] = useState("");
  const [codeSetsSelection, setCodeSetsSelection] = useState("");
  const [uniqueIdentifiersSelection, setUniqueIdentifiersSelection] =
    useState("");
  const [operatingRulesSelection, setOperatingRulesSelection] = useState("");

  // Handle change for each radio group
  const handleTransactionsChange = (event) => {
    setTransactionsSelection(event.target.value);
  };

  const handleCodeSetsChange = (event) => {
    setCodeSetsSelection(event.target.value);
  };

  const handleUniqueIdentifiersChange = (event) => {
    setUniqueIdentifiersSelection(event.target.value);
  };

  const handleOperatingRulesChange = (event) => {
    setOperatingRulesSelection(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({
      transactionsSelection,
      codeSetsSelection,
      uniqueIdentifiersSelection,
      operatingRulesSelection,
    });
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

      <form onSubmit={handleSubmit}>
        <FormControl component="fieldset">
          <RadioGroup
            value={transactionsSelection}
            onChange={handleTransactionsChange}
          >
            <FormControlLabel
              value="violation"
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
              value="violation"
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
              value="violation"
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
              value="violation"
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
          {/* First Button - Left margin */}
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

          {/* Second Button - Centered */}
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

          {/* Third Button - Right margin */}
          <Button
            type="submit"
            variant="contained"
            sx={{
              marginRight: 2,
              backgroundColor: "#2e6da4",
              textTransform: "none",
            }}
          >
            <span>Complaint</span>
            <span>Information</span>
          </Button>
        </Box>
      </form>
    </div>
  );
}

export default Complaint;
