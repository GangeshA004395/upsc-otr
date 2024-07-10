// lib/formConfig.js
const formConfig = {
  candidateForm: {
    fields: {
      candidateName: {
        label: 'Candidate Name (as per Class 10th)',
        labelh:"उम्मीदवार का नाम (कक्षा 10वीं के अनुसार)",
        type: 'text',
        placeholder: 'Enter candidate name',
        validation: { required: true },
        errorMessage: { required: 'Candidate name is required' },
        regex:/^(?!.* {2})(?!.*^([a-zA-Z.])\1*$)[a-zA-Z.]+( [a-zA-Z.]+)*$/
      },
      verifyCandidateName: {
        label: 'Verify Candidate Name',
        labelh:"उम्मीदवार का नाम सत्यापित करें",
        type: 'text',
        placeholder: 'Verify candidate name',
        validation: { required: true },
        errorMessage: { required: 'Verification is required' },
      },
      gender: {
        label: 'Gender',
        labelh:"लिंग",
        type: 'select',
        options: [
          { value: '', label: 'Select Gender' },
          { value: 'male', label: 'Male' },
          { value: 'female', label: 'Female' },
          { value: 'other', label: 'Other' },
        ],
        validation: { required: true },
        errorMessage: { required: 'Gender is required' },
      },
      verifyGender: {
        label: 'Verify Gender',
        labelh:'लिंग सत्यापित करें',
        type: 'select',
        options: [
          { value: '', label: 'Select Gender' },
          { value: 'male', label: 'Male' },
          { value: 'female', label: 'Female' },
          { value: 'other', label: 'Other' },
        ],
        validation: { required: true },
        errorMessage: { required: 'Verification is required' },
      },
      dob: {
        label: 'Date of Birth',
        labelh:'जन्म की तारीख रें',
        type: 'date',
        validation: { required: true },
        errorMessage: { required: 'Date of birth is required' },
      },
      verifyDob: {
        label: 'Verify Date of Birth',
        labelh:'जन्म की तारीख सत्यापित करें',
        type: 'date',
        validation: { required: true },
        errorMessage: { required: 'Verification is required' },
      },
      fatherName: {
        label: 'Father Name',
        labelh:'पिता का नाम',
        type: 'text',
        placeholder: 'Enter father name',
        validation: { required: true },
        errorMessage: { required: 'Father name is required' },
        regex:/^(?!.* {2})(?!.*^([a-zA-Z.])\1*$)[a-zA-Z.]+( [a-zA-Z.]+)*$/
      },
      verifyFatherName: {
        label: 'Verify Father Name',
        labelh:'पिता का नाम सत्यापित करें',
        type: 'text',
        placeholder: 'Verify father name',
        validation: { required: true },
        errorMessage: { required: 'Verification is required' },
      },
      motherName: {
        label: 'Mother Name',
        labelh:'माता का नाम',
        type: 'text',
        placeholder: 'Enter mother name',
        validation: { required: true },
        errorMessage: { required: 'Mother name is required' },
        regex:/^(?!.* {2})(?!.*^([a-zA-Z.])\1*$)[a-zA-Z.]+( [a-zA-Z.]+)*$/
      },
      verifyMotherName: {
        label: 'Verify Mother Name',
        labelh:'माता का नाम सत्यापित करें',
        type: 'text',
        placeholder: 'Verify mother name',
        validation: { required: true },
        errorMessage: { required: 'Verification is required' },
      },
      minorityStatus: {
        label: 'Minority Status',
        labelh:'क्या आप अल्पसंख्यक समुदाय से हैं?रें',
        type: 'select',
        options: [
          { value: '', label: 'Select Status' },
          { value: 'yes', label: 'Yes' },
          { value: 'no', label: 'No' },
        ],
        validation: { required: true },
        errorMessage: { required: 'Minority status is required' },
      },
      minorityOption: {
        label: 'Minority Option',
        labelh:'लिंग सत्यापित करें',
        type: 'select',
        options: [
          { value: '', label: 'Select Option' },
          { value: 'option1', label: 'Option 1' },
          { value: 'option2', label: 'Option 2' },
          { value: 'option3', label: 'Option 3' },
        ],
        validation: { required: true },
        errorMessage: { required: 'Minority option is required' },
        dependsOn: 'minorityStatus',
        dependsValue: 'yes',
      },
    },
  },
  candidateEducation: {
    fields: {
      Class10thBoardExaminationRollNo: {
        label: 'Class 10th Board Examination Roll No',
        labelh:"कक्षा दसवीं (10वीं) बोर्ड परीक्षा रोल नं",
        type: 'text',
        placeholder: 'Class 10th Board Examination Roll No*',
        validation: { required: true },
        errorMessage: { required: 'Candidate name is required' },
        regex:/^(?!.*\b(\w)\1{1,}\b)(?!.*\s{2,})[A-Z]+(?:\s[A-Z]+)*$/
      },
      PassingYearoftheClass10th: {
        label: 'Passing Year of the Class 10th*',
        labelh:"कक्षा दसवीं (10वीं) उत्तीर्ण वर्ष",
        type: 'text',
        placeholder: 'Passing Year of the Class 10th*',
        validation: { required: true },
        errorMessage: { required: 'Verification is required' },
      },
      Class10thBoardName: {
        label: 'Class 10th Board Name*',
        labelh:"कक्षा दसवीं बोर्ड का नाम",
        type: 'select',
        options: [
          { value: '', label: 'Select Class 10th Board Name*' },
          { value: 'male', label: 'Male' },
          { value: 'female', label: 'Female' },
          { value: 'other', label: 'Other' },
        ],
        validation: { required: true },
        errorMessage: { required: 'Gender is required' },
      },
     
     
      
      EnterBoardName: {
        label: 'Enter Board Name',
        labelh:"अपने अन्य बोर्ड का नाम दर्ज करें",
        type: 'text',
        placeholder: 'Enter Board Name ',
        validation: { required: true },
        errorMessage: { required: 'Verification is required' },
      },
     
     
     
    
    },
  },
  candidateContactDetails:{
    fields: {
      emailAddress: {
        label: 'E-Mail Address',
        labelh:"मेल पता",
        type: 'email',
        placeholder: 'Please enter e-mail address',
        validation: { required: true },
        errorMessage: { required: 'E-Mail is required' },
        regex:/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
      },
      mobileNumber: {
        label: 'Mobile Number*',
        labelh:"मोबाइल नंबर",
        type: 'number',
        placeholder: 'Please enter mobile number',
        validation: { required: true },
        errorMessage: { required: 'Mobile number is required' },
        // regex:/^\+?(\d{1,3})?[-.\s]?(\(?\d{1,4}\)?)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/
        regex:/^[6-9]\d{9}$/
      },
      altEmailAddress: {
        label: 'Alternate E-mail Address',
        labelh:"वैकल्पिक मोबाइल नंबर",
        type: 'email',
        placeholder: 'Please enter e-mail address',
        validation: { required: false },
        // errorMessage: { required: 'E-Mail is required' },
        regex:/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
      },
     
      altMobileNumber: {
        label: 'Mobile Number',
        labelh:"वैकल्पिक मेल पता",
        type: 'number',
        placeholder: 'Please enter alternate mobile number',
        validation: { required: false },
        errorMessage: { required: 'Alternate mobile number is required' },
        regex:/^[6-9]\d{9}$/
      },

      capcha: {
        label: 'Captcha',
        labelh:"कॅप्चा",
        type: 'text',
        placeholder: 'Enter the letter as they are shown in the image above.',
        validation: { required: false },
        errorMessage: { required: 'Captcha is required' },
        // regex:/^\+?(\d{1,3})?[-.\s]?(\(?\d{1,4}\)?)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/
      },
     
    },
  }
};

export default formConfig;
