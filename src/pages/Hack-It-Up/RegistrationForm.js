import React, { useState, useEffect } from 'react';
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
import AOS from 'aos';
import 'aos/dist/aos.css';

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

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Container maxWidth="sm">
      <Box my={4}>
      <Typography variant="h4" component="h1" gutterBottom className="text-4xl text-darkblue font-bold py-4">
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
            <Form className="space-y-4 p-6 bg-white shadow-lg rounded-lg">
            <Box mb={2} data-aos="fade-up">
              <label className="block text-blue-600 text-lg font-bold mb-2" htmlFor="teamName">
                What is your team name? *
              </label>
              <Field
                name="teamName"
                as={TextField}
                placeholder="Enter your team name"
                fullWidth
                className="p-2 text-lg shadow-md rounded border border-gray-300"
                error={touched.teamName && Boolean(errors.teamName)}
                helperText={touched.teamName && errors.teamName}
              />
            </Box>
  
            <Box mb={2} data-aos="fade-up">
              <label className="block text-blue-600 text-lg font-bold mb-2" htmlFor="teamLeaderName">
                Who is the team leader? *
              </label>
              <Field
                name="teamLeaderName"
                as={TextField}
                placeholder="Enter the team leader's name"
                fullWidth
                className="p-2 text-lg shadow-md rounded border border-gray-300"
                error={touched.teamLeaderName && Boolean(errors.teamLeaderName)}
                helperText={touched.teamLeaderName && errors.teamLeaderName}
              />
            </Box>

            <Box mb={2} data-aos="fade-up">
            <label className="block text-blue-600 text-lg font-bold mb={2}" htmlFor="teamLeaderEmail">
              What is the team leader's email? *
            </label>
            <Field
              name="teamLeaderEmail"
              as={TextField}
              placeholder="Enter the team leader's email"
              fullWidth
              className="p-2 text-lg shadow-md rounded border border-gray-300"
              error={touched.teamLeaderEmail && Boolean(errors.teamLeaderEmail)}
              helperText={touched.teamLeaderEmail && errors.teamLeaderEmail}
            />
          </Box>

          <Box mb={2} data-aos="fade-up">
            <label className="block text-blue-600 text-lg font-bold mb-2" htmlFor="devfolioUsername">
              What is your Devfolio username? *
            </label>
            <Field
              name="devfolioUsername"
              as={TextField}
              placeholder="Enter your Devfolio username"
              fullWidth
              className="p-2 text-lg shadow-md rounded border border-gray-300"
              error={touched.devfolioUsername && Boolean(errors.devfolioUsername)}
              helperText={touched.devfolioUsername && errors.devfolioUsername}
            />
          </Box>

          <Box mb={2} data-aos="fade-up">
            <label className="block text-blue-600 text-lg font-bold mb-2" htmlFor="teamSize">
              How many members are in your team? *
            </label>
            <Field
              name="teamSize"
              as={TextField}
              placeholder="Enter the number of team members"
              fullWidth
              className="p-2 text-lg shadow-md rounded border border-gray-300"
              error={touched.teamSize && Boolean(errors.teamSize)}
              helperText={touched.teamSize && errors.teamSize}
            />
          </Box>

          <Box mb={2} data-aos="fade-up">
            <label className="block text-blue-600 text-lg font-bold mb-2" htmlFor="projectDescription">
              Describe your project
            </label>
            <Field
              name="projectDescription"
              as={TextField}
              placeholder="Enter a brief description of your project"
              fullWidth
              className="p-2 text-lg shadow-md rounded border border-gray-300"
              error={touched.projectDescription && Boolean(errors.projectDescription)}
              helperText={touched.projectDescription && errors.projectDescription}
            />
          </Box>

          <Box mb={2} data-aos="fade-up">
            <label className="block text-blue-600 text-lg font-bold mb-2" htmlFor="devfolioSSLink">
              Provide a link to your Devfolio screenshot (open for all to view) *
            </label>
            <Field
              name="devfolioSSLink"
              as={TextField}
              placeholder="Enter the URL of your Devfolio screenshot"
              fullWidth
              className="p-2 text-lg shadow-md rounded border border-gray-300"
              error={touched.devfolioSSLink && Boolean(errors.devfolioSSLink)}
              helperText={touched.devfolioSSLink && errors.devfolioSSLink}
            />
          </Box>

              <Button data-aos="fade-up"
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                className="w-full p-2 bg-blue-600 text-white text-lg font-bold rounded shadow-md hover:bg-blue-700"
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