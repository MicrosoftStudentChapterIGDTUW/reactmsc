import React, { useState, useEffect } from 'react';
import { db } from '../../firebase.config';
import { collection, addDoc } from 'firebase/firestore';
import * as Yup from 'yup';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Container, Box, Typography, Button, CircularProgress, TextField, Dialog, DialogTitle, DialogContent, DialogActions } from '@material-ui/core';
import { Formik, Form, Field } from 'formik';

const validationSchema = Yup.object().shape({
  teamName: Yup.string()
    .required('Team name is required')
    .min(2, 'Team name must be at least 2 characters')
    .max(50, 'Team name must not exceed 50 characters'),
  member1Name: Yup.string().required('Team member 1 name is required'),
  member1Email: Yup.string().email('Invalid email').required('Team member 1 email is required'),
  member1Contact: Yup.string().required('Team member 1 contact is required'),
  member1GradYear: Yup.number()
  .required('Team member 1 graduation year is required')
  .min(2025, 'Graduation year must be 2025 or later')
  .max(2028, 'Graduation year must be 2028 or earlier')
  .integer('Please enter a valid year'),
  member2Name: Yup.string().required('Team member 2 name is required'),
  member2Email: Yup.string().email('Invalid email').required('Team member 2 email is required'),
  member2Contact: Yup.string().required('Team member 2 contact is required'),
  member2GradYear: Yup.number()
  .required('Team member 2 graduation year is required')
  .min(2025, 'Graduation year must be 2025 or later')
  .max(2028, 'Graduation year must be 2028 or earlier')
  .integer('Please enter a valid year'),
  member3Name: Yup.string(),
  member3Email: Yup.string().email('Invalid email'),
  member3Contact: Yup.string(),
  member3GradYear: Yup.number()
    .nullable()
    .transform((value, originalValue) => originalValue === '' ? null : value)
    .min(2025, 'Graduation year must be 2025 or later')
    .max(2028, 'Graduation year must be 2028 or earlier')
    .integer('Please enter a valid year'),
  member4Name: Yup.string(),
  member4Email: Yup.string().email('Invalid email'),
  member4Contact: Yup.string(),
  member4GradYear: Yup.number()
    .nullable()
    .transform((value, originalValue) => originalValue === '' ? null : value)
    .min(2025, 'Graduation year must be 2025 or later')
    .max(2028, 'Graduation year must be 2028 or earlier')
    .integer('Please enter a valid year'),
  prototypeLink: Yup.string()
    .required('Prototype/Figma link is required')
    .url('Please enter a valid URL'),
  githubRepo: Yup.string()
    .required('GitHub repository link is required')
});

const initialValues = {
  teamName: '',
  member1Name: '',
  member1Email: '',
  member1Contact: '',
  member1GradYear: '',
  member2Name: '',
  member2Email: '',
  member2Contact: '',
  member2GradYear: '',
  member3Name: '',
  member3Email: '',
  member3Contact: '',
  member3GradYear: '',
  member4Name: '',
  member4Email: '',
  member4Contact: '',
  member4GradYear: '',
  prototypeLink: '',
  githubRepo: '',
};

const HackathonSubmission = () => {
  const [loading, setLoading] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const [openErrorDialog, setOpenErrorDialog] = useState(false);
  const [errorMessages, setErrorMessages] = useState([]);

  useEffect(() => {
    AOS.init();
  }, []);

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    setLoading(true);
    setSubmitting(true);

    try {
      let errorList = [];

      // Required fields validation
      if (!values.teamName) errorList.push("Team Name is required");
      if (!values.member1Name) errorList.push("Team Member 1 Name is required");
      if (!values.member1Email) errorList.push("Team Member 1 Email is required");
      if (!values.member1Contact) errorList.push("Team Member 1 Contact is required");
      if (!values.member1GradYear) errorList.push("Team Member 1 Graduation Year is required");
      if (!values.member2Name) errorList.push("Team Member 2 Name is required");
      if (!values.member2Email) errorList.push("Team Member 2 Email is required");
      if (!values.member2Contact) errorList.push("Team Member 2 Contact is required");
      if (!values.member2GradYear) errorList.push("Team Member 2 Graduation Year is required");
      if (!values.prototypeLink) errorList.push("Prototype/Figma Link is required");
      if (!values.githubRepo) errorList.push("GitHub Repository Link is required");

      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (values.member1Email && !emailRegex.test(values.member1Email)) {
        errorList.push("Team Member 1 Email is invalid");
      }
      if (values.member2Email && !emailRegex.test(values.member2Email)) {
        errorList.push("Team Member 2 Email is invalid");
      }

      // URL validation
      const urlRegex = /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/;
      if (values.prototypeLink && !urlRegex.test(values.prototypeLink)) {
        errorList.push("Prototype/Figma Link is invalid");
      }
      if (values.githubRepo && values.githubRepo !== "NA" && !urlRegex.test(values.githubRepo)) {
        errorList.push("GitHub Repository Link is invalid");
      }

      if (errorList.length > 0) {
        setErrorMessages(errorList);
        setOpenErrorDialog(true);
        setLoading(false);
        setSubmitting(false);
        return;
      }

      await addDoc(collection(db, 'submissions'), {
        ...values,
        submittedAt: new Date(),
      });
      
      setOpenDialog(true);
      resetForm();
      
    } catch (error) {
      console.error('Submission error:', error);
      setErrorMessages(['Failed to submit. Please try again.']);
      setOpenErrorDialog(true);
    } finally {
      setLoading(false);
      setSubmitting(false);
    }
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    window.location.reload();
  };

  const handleCloseErrorDialog = () => {
    setOpenErrorDialog(false);
  };
  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom className="text-4xl text-darkblue font-bold py-4">
          Hackathon Project Submission
        </Typography>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
          validateOnBlur={true}
          validateOnChange={true}
        >
          {({ errors, touched, isSubmitting }) => (
            <Form className="space-y-4 p-6 bg-white shadow-lg rounded-lg">
              {/* Team Name */}
              <Box mb={2} data-aos="fade-up">
                <label className="block text-blue-600 text-lg font-bold mb-2">
                  Team Name *
                </label>
                <Field
                  name="teamName"
                  as={TextField}
                  placeholder="Enter your team name"
                  fullWidth
                  error={touched.teamName && errors.teamName}
                  helperText={touched.teamName && errors.teamName}
                  className="p-2 text-lg shadow-md rounded border border-gray-300"
                />
              </Box>
            
              {/* Team Member 1 */}
              <Typography variant="h6" className="text-blue-600 font-bold mt-4">Team Member 1 (Required)</Typography>
              <Box mb={2} data-aos="fade-up">
                <Field
                  name="member1Name"
                  as={TextField}
                  label="Name *"
                  fullWidth
                  error={touched.member1Name && errors.member1Name}
                  helperText={touched.member1Name && errors.member1Name}
                  className="mb-2"
                />
                <Field
                  name="member1Email"
                  as={TextField}
                  label="Email *"
                  fullWidth
                  error={touched.member1Email && errors.member1Email}
                  helperText={touched.member1Email && errors.member1Email}
                  className="mb-2"
                />
                <Field
                  name="member1Contact"
                  as={TextField}
                  label="Contact Number *"
                  fullWidth
                  error={touched.member1Contact && errors.member1Contact}
                  helperText={touched.member1Contact && errors.member1Contact}
                  className="mb-2"
                />
                <Field
                  name="member1GradYear"
                  as={TextField}
                  label="Graduation Year *"
                  fullWidth
                  error={touched.member1GradYear && errors.member1GradYear}
                  helperText={touched.member1GradYear && errors.member1GradYear}
                />
              </Box>
            
              {/* Team Member 2 */}
              <Typography variant="h6" className="text-blue-600 font-bold mt-4">Team Member 2 (Required)</Typography>
              <Box mb={2} data-aos="fade-up">
                <Field
                  name="member2Name"
                  as={TextField}
                  label="Name *"
                  fullWidth
                  error={touched.member2Name && errors.member2Name}
                  helperText={touched.member2Name && errors.member2Name}
                  className="mb-2"
                />
                <Field
                  name="member2Email"
                  as={TextField}
                  label="Email *"
                  fullWidth
                  error={touched.member2Email && errors.member2Email}
                  helperText={touched.member2Email && errors.member2Email}
                  className="mb-2"
                />
                <Field
                  name="member2Contact"
                  as={TextField}
                  label="Contact Number *"
                  fullWidth
                  error={touched.member2Contact && errors.member2Contact}
                  helperText={touched.member2Contact && errors.member2Contact}
                  className="mb-2"
                />
                <Field
                  name="member2GradYear"
                  as={TextField}
                  label="Graduation Year *"
                  fullWidth
                  error={touched.member2GradYear && errors.member2GradYear}
                  helperText={touched.member2GradYear && errors.member2GradYear}
                />
              </Box>
            
              {/* Team Member 3 */}
              <Typography variant="h6" className="text-blue-600 font-bold mt-4">Team Member 3 (Optional)</Typography>
              <Box mb={2} data-aos="fade-up">
                <Field
                  name="member3Name"
                  as={TextField}
                  label="Name"
                  fullWidth
                  error={touched.member3Name && errors.member3Name}
                  helperText={touched.member3Name && errors.member3Name}
                  className="mb-2"
                />
                <Field
                  name="member3Email"
                  as={TextField}
                  label="Email"
                  fullWidth
                  error={touched.member3Email && errors.member3Email}
                  helperText={touched.member3Email && errors.member3Email}
                  className="mb-2"
                />
                <Field
                  name="member3Contact"
                  as={TextField}
                  label="Contact Number"
                  fullWidth
                  error={touched.member3Contact && errors.member3Contact}
                  helperText={touched.member3Contact && errors.member3Contact}
                  className="mb-2"
                />
                <Field
                  name="member3GradYear"
                  as={TextField}
                  label="Graduation Year"
                  fullWidth
                  error={touched.member3GradYear && errors.member3GradYear}
                  helperText={touched.member3GradYear && errors.member3GradYear}
                />
              </Box>
            
              {/* Team Member 4 */}
              <Typography variant="h6" className="text-blue-600 font-bold mt-4">Team Member 4 (Optional)</Typography>
              <Box mb={2} data-aos="fade-up">
                <Field
                  name="member4Name"
                  as={TextField}
                  label="Name"
                  fullWidth
                  error={touched.member4Name && errors.member4Name}
                  helperText={touched.member4Name && errors.member4Name}
                  className="mb-2"
                />
                <Field
                  name="member4Email"
                  as={TextField}
                  label="Email"
                  fullWidth
                  error={touched.member4Email && errors.member4Email}
                  helperText={touched.member4Email && errors.member4Email}
                  className="mb-2"
                />
                <Field
                  name="member4Contact"
                  as={TextField}
                  label="Contact Number"
                  fullWidth
                  error={touched.member4Contact && errors.member4Contact}
                  helperText={touched.member4Contact && errors.member4Contact}
                  className="mb-2"
                />
                <Field
                  name="member4GradYear"
                  as={TextField}
                  label="Graduation Year"
                  fullWidth
                  error={touched.member4GradYear && errors.member4GradYear}
                  helperText={touched.member4GradYear && errors.member4GradYear}
                />
              </Box>
            
              {/* Prototype Link */}
              <Box mb={2} data-aos="fade-up">
                <label className="block text-blue-600 text-lg font-bold mb-2">
                  Deployed Link/Figma Link(If all the members of the team are from 1st year) *
                </label>
                <Field
                  name="prototypeLink"
                  as={TextField}
                  placeholder="https://figma.com/..."
                  fullWidth
                  error={touched.prototypeLink && errors.prototypeLink}
                  helperText={touched.prototypeLink && errors.prototypeLink}
                  className="p-2 text-lg shadow-md rounded border border-gray-300"
                />
              </Box>
            
              {/* GitHub Repo */}
              <Box mb={2} data-aos="fade-up">
                <label className="block text-blue-600 text-lg font-bold mb-2">
                  GitHub Repository * (Write NA if all team members are first years)
                </label>
                <Field
                  name="githubRepo"
                  as={TextField}
                  placeholder="https://github.com/... or NA"
                  fullWidth
                  error={touched.githubRepo && errors.githubRepo}
                  helperText={touched.githubRepo && errors.githubRepo}
                  className="p-2 text-lg shadow-md rounded border border-gray-300"
                />
              </Box>
            
              {/* Submit Button */}
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                className="w-full p-2 bg-blue-600 text-white text-lg font-bold rounded shadow-md hover:bg-blue-700"
                disabled={loading || isSubmitting}
              >
                {loading ? <CircularProgress size={24} /> : 'Submit Project'}
              </Button>
            </Form>
          )}
        </Formik>

        {/* Success Dialog */}
        <Dialog
          open={openDialog}
          onClose={handleCloseDialog}
          aria-labelledby="alert-dialog-title"
        >
          <DialogTitle id="alert-dialog-title">
            {"Submission Successful!"}
          </DialogTitle>
          <DialogContent>
            <Typography>
              Your project has been successfully submitted.
            </Typography>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseDialog} color="primary" autoFocus>
              OK
            </Button>
          </DialogActions>
        </Dialog>

        {/* Error Dialog */}
        <Dialog
          open={openErrorDialog}
          onClose={handleCloseErrorDialog}
          aria-labelledby="error-dialog-title"
        >
          <DialogTitle id="error-dialog-title" style={{ color: '#f44336' }}>
            {"Required Fields Missing"}
          </DialogTitle>
          <DialogContent>
            <Typography color="error">
              Please fill in all required fields:
            </Typography>
            <ul style={{ marginTop: '10px', color: '#f44336' }}>
              {errorMessages.map((message, index) => (
                <li key={index} style={{ marginBottom: '5px' }}>
                  • {message}
                </li>
              ))}
            </ul>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseErrorDialog} color="primary" autoFocus>
              OK
            </Button>
          </DialogActions>
        </Dialog>
      </Box>
    </Container>
  );
};

export default HackathonSubmission;