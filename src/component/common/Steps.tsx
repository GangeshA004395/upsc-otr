import { Card } from "@mui/material";
import React from "react";
import styled from "styled-components";
// import { isEqual, filter, toLower } from 'lodash'
// import map from 'lodash/map'
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { IconFormIncomplete } from "./IconFormIncomplete";

const Header = styled("h2")`
  color: #13296c;
  font-size: 22px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  padding-bottom: 16;
`;

const Info = styled("span")`
  color: #000;
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-transform: capitalize;
  padding-bottom: 20px;
  padding-top: 16px;
`;

const P = styled("p")`
  margin-top: 6.5px;
  margin-bottom: 6.5px;
`;

export const ApplicationStep = ({ data }: any) => {
  // const activeSections = sections?.[activeStep]?.columns.map(
  //   ({ title }: any) => title
  // );
  console.log(data, "in step marking");
  return (
    <Card sx={{ padding: 3 }}>
      <Header>Steps for Applicants </Header>
      <hr />
      <Info>Applicant can submit his/her following details:</Info>
      {/* {activeSections?.map((item:any) => ( */}
      <P>
        <IconFormIncomplete success={data.candidateName ? true : false} />{" "}
        Candidate&apos;s Name (As per Class 10th)
      </P>
      <P>
        <IconFormIncomplete success={data.verifyCandidateName ? true : false} />{" "}
        Verify Candidate&apos;s Name (As per Class 10th)
      </P>
      <P>
        <IconFormIncomplete success={data.gender ? true : false} /> Gender
      </P>
      <P>
        <IconFormIncomplete success={data.verifyGender ? true : false} /> Verify
        Gender
      </P>
      <P>
        <IconFormIncomplete success={data.dob ? true : false} /> Date
        of Birth
      </P>
      <P>
        <IconFormIncomplete success={data.verifyDob ? true : false} />{" "}
        Verify Date of Birth
      </P>
      <P>
        <IconFormIncomplete success={data.fatherName ? true : false} />
        Father’s Name
      </P>
      <P>
        <IconFormIncomplete success={data.verifyFatherName ? true : false}/> Verify Father’s Name
      </P>
      <P>
        <IconFormIncomplete success={data.motherName ? true : false}/> Mother’s Name
      </P>
      <P>
        <IconFormIncomplete success={data.verifyMotherName ? true : false}/> Verify Mother’s Name
      </P>
      <P>
        <IconFormIncomplete success={data.minorityStatus ? true : false}/> Minority Status
      </P>
      <P>
        <IconFormIncomplete success={data.minorityOption ? true : false}/> Minority option
      </P>
      {/* ))} */}
    </Card>
  );
};
