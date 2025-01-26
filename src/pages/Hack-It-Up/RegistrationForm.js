import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import {
  Button,
  TextField,
  Typography,
  Container,
  Box,
  CircularProgress,
} from '@material-ui/core';
import { db } from '../../firebase.config';
import { collection, addDoc } from 'firebase/firestore';

const validationSchema = Yup.object().shape({
  teamName: Yup.string()
    .required('Team name is required')
    .min(2, 'Team name must be at least 2 characters'),
  teamLeaderName: Yup.string().required('Team leader name is required'),
  teamLeaderEmail: Yup.string()
    .email('Invalid email')
    .required('Team leader email is required'),
  devfolioUsername: Yup.string().required('Devfolio username is required'),
  teamSize: Yup.number()
    .required('Team size is required')
    .min(1, 'Team must have at least 1 member')
    .max(4, 'Team cannot exceed 4 members'),
});

const TeamRegistrationForm = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (values, { resetForm }) => {
    try {
      setLoading(true);

      // Save form data to Firestore
      await addDoc(collection(db, 'registrations'), {
        ...values,
        timestamp: new Date(),
      });

      resetForm();
      alert('Registration successful!');
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Error submitting form. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Team Registration
        </Typography>

        <Formik
          initialValues={{
            teamName: '',
            teamLeaderName: '',
            teamLeaderEmail: '',
            devfolioUsername: '',
            teamSize: '',
            projectDescription: '',
            devfolioSSLink: '',
          }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ errors, touched }) => (
            <Form>
              <Box mb={2}>
                <Field
                  name="teamName"
                  as={TextField}
                  label="Team Name"
                  fullWidth
                  error={touched.teamName && Boolean(errors.teamName)}
                  helperText={touched.teamName && errors.teamName}
                />
              </Box>

              <Box mb={2}>
                <Field
                  name="teamLeaderName"
                  as={TextField}
                  label="Team Leader Name"
                  fullWidth
                  error={touched.teamLeaderName && Boolean(errors.teamLeaderName)}
                  helperText={touched.teamLeaderName && errors.teamLeaderName}
                />
              </Box>

              <Box mb={2}>
                <Field
                  name="teamLeaderEmail"
                  as={TextField}
                  label="Team Leader Email"
                  fullWidth
                  error={touched.teamLeaderEmail && Boolean(errors.teamLeaderEmail)}
                  helperText={touched.teamLeaderEmail && errors.teamLeaderEmail}
                />
              </Box>

              <Box mb={2}>
                <Field
                  name="devfolioUsername"
                  as={TextField}
                  label="Devfolio Username"
                  fullWidth
                  error={touched.devfolioUsername && Boolean(errors.devfolioUsername)}
                  helperText={touched.devfolioUsername && errors.devfolioUsername}
                />
              </Box>

              <Box mb={2}>
                <Field
                  name="teamSize"
                  as={TextField}
                  label="Team Size"
                  type="number"
                  fullWidth
                  error={touched.teamSize && Boolean(errors.teamSize)}
                  helperText={touched.teamSize && errors.teamSize}
                />
              </Box>

              <Box mb={2}>
                <Field
                  name="projectDescription"
                  as={TextField}
                  label="Project Description"
                  multiline
                  rows={4}
                  fullWidth
                />
              </Box>

              <Box mb={2}>
                <Field
                  name="devfolioSSLink"
                  as={TextField}
                  label="Devfolio Screenshot Drive Link"
                  multiline
                  rows={4}
                  fullWidth
                />
                <Typography variant="caption" display="block" gutterBottom>
                  Please upload a screenshot of your Devfolio registration to google drive and paste the link.
                </Typography>
              </Box>

              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                disabled={loading}
              >
                {loading ? <CircularProgress size={24} /> : 'Submit Registration'}
              </Button>
            </Form>
          )}
        </Formik>
      </Box>
    </Container>
  );
};

export default TeamRegistrationForm;