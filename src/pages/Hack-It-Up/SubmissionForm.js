import React, { useEffect } from 'react';
import { db } from '../../firebase.config';
import { collection, addDoc } from 'firebase/firestore';
import * as Yup from 'yup';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Container, Box, Typography, Button, CircularProgress, TextField } from '@material-ui/core';
import { Formik, Form, Field } from 'formik';

const validationSchema = Yup.object().shape({
    teamName: Yup.string()
        .required('Team name is required')
        .min(2, 'Team name must be at least 2 characters')
        .max(50, 'Team name must not exceed 50 characters'),
    
    member1Name: Yup.string()
        .required('Team member 1 name is required'),
    member1Email: Yup.string()
        .email('Invalid email')
        .required('Team member 1 email is required'),
    member1Contact: Yup.string()
        .matches(/^[0-9]{10}$/, 'Contact number must be 10 digits')
        .required('Team member 1 contact is required'),
    member1GradYear: Yup.number()
        .min(2024, 'Invalid graduation year')
        .max(2028, 'Invalid graduation year')
        .required('Team member 1 graduation year is required'),

    member2Name: Yup.string(),
    member2Email: Yup.string()
        .email('Invalid email')
        .when('member2Name', {
            is: val => val && val.length > 0,
            then: Yup.string().required('Email is required when name is provided')
        }),
    member2Contact: Yup.string()
        .matches(/^[0-9]{10}$/, 'Contact number must be 10 digits'),
    member2GradYear: Yup.number()
        .min(2024, 'Invalid graduation year')
        .max(2028, 'Invalid graduation year'),

    member3Name: Yup.string(),
    member3Email: Yup.string()
        .email('Invalid email')
        .when('member3Name', {
            is: val => val && val.length > 0,
            then: Yup.string().required('Email is required when name is provided')
        }),
    member3Contact: Yup.string()
        .matches(/^[0-9]{10}$/, 'Contact number must be 10 digits'),
    member3GradYear: Yup.number()
        .min(2024, 'Invalid graduation year')
        .max(2028, 'Invalid graduation year'),

    member4Name: Yup.string(),
    member4Email: Yup.string()
        .email('Invalid email')
        .when('member4Name', {
            is: val => val && val.length > 0,
            then: Yup.string().required('Email is required when name is provided')
        }),
    member4Contact: Yup.string()
        .matches(/^[0-9]{10}$/, 'Contact number must be 10 digits'),
    member4GradYear: Yup.number()
        .min(2024, 'Invalid graduation year')
        .max(2028, 'Invalid graduation year'),

    prototypeLink: Yup.string()
        .url('Please enter a valid URL')
        .required('Prototype link is required'),
    
    githubRepo: Yup.string()
        .required('GitHub repository or NA is required')
        .matches(
            /^(https:\/\/github\.com\/[a-zA-Z0-9_-]+\/[a-zA-Z0-9_-]+|NA)$/i,
            'Please enter a valid GitHub repository URL or NA'
        )
});

const HackathonSubmission = () => {
    useEffect(() => {
        AOS.init();
    }, []);

    const handleSubmit = async (values, { setSubmitting, resetForm, setStatus }) => {
        try {
            await addDoc(collection(db, 'submissions'), {
                ...values,
                submittedAt: new Date(),
            });
            setStatus({ success: true });
            resetForm();
        } catch (error) {
            console.error('Submission error:', error);
            setStatus({ error: 'Failed to submit. Please try again.' });
        } finally {
            setSubmitting(false);
        }
    };

    const renderMemberFields = (memberNum) => (
        <Box mb={4} data-aos="fade-up">
            <Typography variant="h6" gutterBottom>
                Team Member {memberNum} {memberNum === 1 ? '(Team Leader) *' : ''}
            </Typography>
            <Box mb={2}>
                <Field
                    name={`member${memberNum}Name`}
                    as={TextField}
                    label="Name"
                    fullWidth
                    required={memberNum === 1}
                />
            </Box>
            <Box mb={2}>
                <Field
                    name={`member${memberNum}Email`}
                    as={TextField}
                    label="Email"
                    type="email"
                    fullWidth
                    required={memberNum === 1}
                />
            </Box>
            <Box mb={2}>
                <Field
                    name={`member${memberNum}Contact`}
                    as={TextField}
                    label="Contact Number"
                    fullWidth
                    required={memberNum === 1}
                />
            </Box>
            <Box mb={2}>
                <Field
                    name={`member${memberNum}GradYear`}
                    as={TextField}
                    label="Graduation Year"
                    type="number"
                    fullWidth
                    required={memberNum === 1}
                />
            </Box>
        </Box>
    );

    return (
        <Container maxWidth="md">
            <Box my={4}>
                <Typography variant="h4" component="h1" gutterBottom align="center">
                    Hackathon Project Submission
                </Typography>

                <Formik
                    initialValues={{
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
                        githubRepo: ''
                    }}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                >
                    {({ errors, touched, isSubmitting, status }) => (
                        <Form className="space-y-4 p-6 bg-white shadow-lg rounded-lg">
                            <Box mb={4} data-aos="fade-up">
                                <Field
                                    name="teamName"
                                    as={TextField}
                                    label="Team Name *"
                                    fullWidth
                                    error={touched.teamName && Boolean(errors.teamName)}
                                    helperText={touched.teamName && errors.teamName}
                                />
                            </Box>

                            {[1, 2, 3, 4].map(num => renderMemberFields(num))}

                            <Box mb={4} data-aos="fade-up">
                                <Field
                                    name="prototypeLink"
                                    as={TextField}
                                    label="Prototype Link *"
                                    fullWidth
                                    error={touched.prototypeLink && Boolean(errors.prototypeLink)}
                                    helperText={touched.prototypeLink && errors.prototypeLink}
                                />
                            </Box>

                            <Box mb={4} data-aos="fade-up">
                                <Field
                                    name="githubRepo"
                                    as={TextField}
                                    label="GitHub Repository (Write NA if all members are first year) *"
                                    fullWidth
                                    error={touched.githubRepo && Boolean(errors.githubRepo)}
                                    helperText={touched.githubRepo && errors.githubRepo}
                                />
                            </Box>

                            {status?.error && (
                                <Box mb={2} color="error.main">
                                    {status.error}
                                </Box>
                            )}

                            {status?.success && (
                                <Box mb={2} color="success.main">
                                    Submission successful!
                                </Box>
                            )}

                            <Button
                                type="submit"
                                variant="contained"
                                color="primary"
                                fullWidth
                                disabled={isSubmitting}
                                className="mt-4"
                            >
                                {isSubmitting ? <CircularProgress size={24} /> : 'Submit'}
                            </Button>
                        </Form>
                    )}
                </Formik>
            </Box>
        </Container>
    );
};

export default HackathonSubmission;