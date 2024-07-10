import { Table, TableBody, TableCell, TableHead, TableRow, Typography,Paper, } from '@mui/material';
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 29px 90px;
  background: #2947A3!important;
  box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.1);
  border-radius: 6px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 10px;
`;
const InstructionContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 29px 90px;
  background: white;
  box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.1);
  border-radius: 6px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 10px;
`;

const HeaderContent = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 19px;
`;

const Image = styled.img`
  width: 52px;
  height: 52px;
  border: 0.7px solid #3ac47d;
`;

const TextContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 22px;
`;
const TableContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: left;
  gap: 22px;
`;

const Text = styled.div`
  color: white;
  font-size: 20px;
  font-family: Roboto, sans-serif;
  font-weight: 600;
  word-wrap: break-word;
`;
const InstructionText = styled.div`
  color: rgba(0, 0, 0, 0.70);
  font-size: 16px;
  font-family: Roboto;
  font-weight: 400;
  word-wrap: break-word;
  letter-spacing: 0.50px;
  line-height: 26px;
`;


const CustomHeader = () => {

    const rows = [
        {
          "field": "Name",
          "value": "John Doe"
        },
        {
          "field": "Email",
          "value": "john.doe@example.com"
        },
        {
          "field": "Phone",
          "value": "+123456789"
        },
        {
          "field": "Address",
          "value": "123 Main St, Anytown, USA"
        },
        {
          "field": "Company",
          "value": "Doe Enterprises"
        }
      ]
      

  return (<>
    <Container>
      <HeaderContent>
        
        <TextContainer>
          <Text>
          Confirmation of Personal Information for New Registration
          </Text>
        </TextContainer>
      </HeaderContent>
    </Container>


    <InstructionContainer>
      <HeaderContent>
        
        <TableContainer>
        dfdf
       
        </TableContainer>
        <TextContainer>
        dfdf
       
        </TextContainer>
        
      </HeaderContent>
      
    </InstructionContainer>
    <InstructionContainer>
      <HeaderContent>
        
        <TextContainer>
          <InstructionText>
          The applicants are advised to fill in all their particulars in the online recruitment carefully as submission of wrong information
           may lead to rejection through computer based short-listing apart from deparment by the commission  The applicants are advised to
           fill in all their particulars in the online recruitment carefully as submission of wrong information
            may lead to rejection through computer based short-listing apart from deparment by the commission.
          </InstructionText>
          
        </TextContainer>
        
      </HeaderContent>
      <HeaderContent>
        
        <TextContainer>
          <InstructionText>
          The applicants are advised to fill in all their particulars in the online recruitment carefully as submission of wrong information
      may lead to rejection through computer based short-listing apart from deparment by the commission  The applicants are advised to
      fill in all their particulars in the online recruitment carefully as submission of wrong information
      may lead to rejection through computer based short-listing apart from deparment by the commission .
          </InstructionText>
          
        </TextContainer>
        
      </HeaderContent>
    </InstructionContainer>
    </>
  );
};

export default CustomHeader;
