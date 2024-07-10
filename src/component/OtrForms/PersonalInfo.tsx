
import { Grid, Typography } from "@mui/material";
import React from "react";
import { ApplicationStep } from "../common/Steps";
import formConfig from "@/app/Validation/OtrForm";
import DynamicForm from "../Form/DynamicForm";


const PersonalInfo = () => {
  return (
    <>
        <Typography
          variant="h1"
          sx={{
            color: "#13296C",
            fontSize: "18px",
            fontWeight: 600,
            mb: 2,
            textAlign: "left",
          }}
        >
          Personal Details
        </Typography>
        <DynamicForm config={formConfig.candidateForm} />
    </>
  );
};

export default PersonalInfo;
