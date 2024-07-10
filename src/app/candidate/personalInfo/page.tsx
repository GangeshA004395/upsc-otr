// pages/contact.js
"use client";

import { ApplicationStep } from "@/component/common/Steps";
import formConfig from "../../Validation/OtrForm";
import DynamicForm from "@/component/Form/DynamicForm";
// import { OtrStepperCard } from "@/component/Stepper/Stepper";
import { Box, Grid, Typography, Container } from "@mui/material";
import PersonalInfo from "@/component/OtrForms/PersonalInfo";
import OtrInstruction from "../otr_instruction/page";
import StepperComponent from "@/component/Stepper/Stepper";

const ContactPage = () => {
  return (
    <Container
      sx={{
        marginBottom: "20px",
      }}
      maxWidth="lg"
    >
      <Grid container>
        <Grid xs={12} md={12} item>
          <StepperComponent />
        </Grid>
      </Grid>

     <Box>
      <PersonalInfo/>
     </Box>
    </Container>
  );
};

export default ContactPage;
