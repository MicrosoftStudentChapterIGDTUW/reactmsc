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
  member1GradYear: Yup.string().required('Team member 1 graduation year is required'),
  member2Name: Yup.string().required('Team member 2 name is required'),
  member2Email: Yup.string().email('Invalid email').required('Team member 2 email is required'),
  member2Contact: Yup.string().required('Team member 2 contact is required'),
  member2GradYear: Yup.string().required('Team member 2 graduation year is required'),
  member3Name: Yup.string(),
  member3Email: Yup.string().email('Invalid email'),
  member3Contact: Yup.string(),
  member3GradYear: Yup.string(),
  member4Name: Yup.string(),
  member4Email: Yup.string().email('Invalid email'),
  member4Contact: Yup.string(),
  member4GradYear: Yup.string(),
  prototypeLink: Yup.string()
    .required('Prototype/Figma link is required')
    .url('Please enter a valid URL'),
  githubRepo: Yup.string()
    .required('GitHub repository link is required')
});

const HackathonSubmission = () => {
  const [loading, setLoading] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);

  useEffect(() => {
    AOS.init();
  }, []);

  const handleSubmit = async (values, { resetForm }) => {
    setLoading(true);
    try {
      await addDoc(collection(db, 'submissions'), {
        ...values,
        submittedAt: new Date(),
      });
      setOpenDialog(true);
      resetForm();
    } catch (error) {
      console.error('Submission error:', error);
      alert('Failed to submit. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    window.location.reload(); // Refresh the page
  };

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
        >
          {({ errors, touched }) => (
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
                  className="mb-2"
                />
                <Field
                  name="member1Email"
                  as={TextField}
                  label="Email *"
                  fullWidth
                  className="mb-2"
                />
                <Field
                  name="member1Contact"
                  as={TextField}
                  label="Contact Number *"
                  fullWidth
                  className="mb-2"
                />
                <Field
                  name="member1GradYear"
                  as={TextField}
                  label="Graduation Year *"
                  fullWidth
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
                  className="mb-2"
                />
                <Field
                  name="member2Email"
                  as={TextField}
                  label="Email *"
                  fullWidth
                  className="mb-2"
                />
                <Field
                  name="member2Contact"
                  as={TextField}
                  label="Contact Number *"
                  fullWidth
                  className="mb-2"
                />
                <Field
                  name="member2GradYear"
                  as={TextField}
                  label="Graduation Year *"
                  fullWidth
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
                  className="mb-2"
                />
                <Field
                  name="member3Email"
                  as={TextField}
                  label="Email"
                  fullWidth
                  className="mb-2"
                />
                <Field
                  name="member3Contact"
                  as={TextField}
                  label="Contact Number"
                  fullWidth
                  className="mb-2"
                />
                <Field
                  name="member3GradYear"
                  as={TextField}
                  label="Graduation Year"
                  fullWidth
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
                  className="mb-2"
                />
                <Field
                  name="member4Email"
                  as={TextField}
                  label="Email"
                  fullWidth
                  className="mb-2"
                />
                <Field
                  name="member4Contact"
                  as={TextField}
                  label="Contact Number"
                  fullWidth
                  className="mb-2"
                />
                <Field
                  name="member4GradYear"
                  as={TextField}
                  label="Graduation Year"
                  fullWidth
                />
              </Box>
            
              {/* Prototype Link */}
              <Box mb={2} data-aos="fade-up">
                <label className="block text-blue-600 text-lg font-bold mb-2">
                  Prototype/Figma Link *
                </label>
                <Field
                  name="prototypeLink"
                  as={TextField}
                  placeholder="https://figma.com/..."
                  fullWidth
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
                disabled={loading}
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
      </Box>
    </Container>
  );
};

export default HackathonSubmission;
              