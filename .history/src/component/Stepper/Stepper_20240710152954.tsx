
import React, { useState } from 'react'
import { Stepper, Step, StepLabel, Box, Button } from '@mui/material'
import styled from 'styled-components'

import BadgeIcon from '@mui/icons-material/Badge'
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle'
import ContactMailIcon from '@mui/icons-material/ContactMail'
import SecurityIcon from '@mui/icons-material/Security'
import PreviewIcon from '@mui/icons-material/Preview';
import StepConnector, {
  stepConnectorClasses,
} from '@mui/material/StepConnector'
import { StepIconProps } from '@mui/material/StepIcon'
import AdharVerification from '@/app/candidate/aadhar_verification/page'
import PersonalInfo from '../OtrForms/PersonalInfo'
import OtrInstruction from '@/app/candidate/otr_instruction/page'
import EducationDetails from '@/app/candidate/education/page'
import ContactDetails from '../OtrForms/Contact'
import MuiCard from './MuiCard'
import Privew from '@/app/candidate/otrprivew/privew'

const ColorlibStepIconRoot = styled('div')<{
  ownerstate: { completed?: boolean; active?: boolean }
}>(({ theme, ownerstate }) => ({
  zIndex: 1,
  color: '#fff',
  width: 50,
  height: 50,
  display: 'flex',
  borderRadius: '50%',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#7F91C8',
  ...(ownerstate.active && {
    backgroundColor: '#2947A3',
  }),
}))

function ColorlibStepIcon(props: StepIconProps) {
  const { active, completed, className } = props

  const icons: { [index: string]: React.ReactElement } = {
    1: <BadgeIcon />,
    2: <SupervisedUserCircleIcon />,
    3: <ContactMailIcon />,
    4: <SecurityIcon />,
    5:  <PreviewIcon/>
  }

  return (
    <ColorlibStepIconRoot
<<<<<<< HEAD
      ownerState={{ completed, active }}
      className={className}
=======
      ownerstate={{ completed, active }}
      className={className + ' iconsbox'}
>>>>>>> 73e34bf8ec6b5f49ce17953520cf63b9f1183d9e
    >
      {icons[String(props.icon)]}
    </ColorlibStepIconRoot>
  )
}

const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 22,
    marginLeft: '5%',
    marginRight: '5%',
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundColor: '#2947A3',
      position: 'relative',
      '&::after': {
        position: 'absolute',
        content: '""',
        right: '-2px',
        top: '-8px',
        width: '0',
        height: '0',
        borderTop: '10px solid transparent',
        borderLeft: '10px solid #2947A3',
        borderBottom: '10px solid transparent',
      },
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundColor: '#d51010',
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    height: 3,
    border: 0,
    backgroundColor: '#eaeaf0',
    borderRadius: 1,
  },
}))
const StepperComponent: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0)

  const steps = [
    'Aadhaar Verify',
    'Personal Details',
    'Education Information',
    'Contact Details',
    'Preview',
  ]

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1)
  }

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1)
  }

  const getStepContent = (step: number) => {
    switch (step) {
      case 0:
        return <div><OtrInstruction/></div>
      case 1:
        return <div><PersonalInfo /></div>
      case 2:
        return <div><EducationDetails/></div>
      case 3:
        return <div><ContactDetails/></div>
      case 4:
        return <div><Privew/></div>
      default:
        return <div>Unknown step</div>
    }
  }

  return (
<>
    <MuiCard
    title="One Time Registration (OTR)"
    rightText={<div />}
    data={
      <Stepper
        nonLinear
        activeStep={activeStep}
        alternativeLabel
        connector={<ColorlibConnector />}
        className="mt-3"
      >
         {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel StepIconComponent={ColorlibStepIcon}>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      
      
    }
  />
  <div>
      {getStepContent(activeStep)}
      <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
       <Button
         color="primary"
          variant="contained"
          disabled={activeStep === 0}
          onClick={handleBack}
          sx={{ mr: 1 }}
        >
          Back
        </Button>
        <Box sx={{ flex: '1 1 auto' }} />
        
        <Button color="primary" variant="contained" onClick={handleNext}>
          {activeStep === steps.length - 1 ? 'Agree & Submit' : 'CONTINUE'}
        </Button>
      </Box>
    </div>
    </>
  )
}

export default StepperComponent

