import React, { useState, useEffect } from 'react';
import { db } from '../../firebase.config';
import { collection, addDoc } from 'firebase/firestore';

import * as Yup from 'yup';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Container, Box, Typography, Button, CircularProgress, TextField } from '@material-ui/core';
import { Formik, Form, Field } from 'formik';
// import './HackathonSubmission.css';

    // Define validation schema using Yup
    const validationSchema = Yup.object().shape({
        teamName: Yup.string()
          .required('Team name is required')
          .min(2, 'Team name must be at least 2 characters')
          .max(50, 'Team name must not exceed 50 characters'),
        projectName: Yup.string()
          .required('Project name is required')
          .min(2, 'Project name must be at least 2 characters')
          .max(100, 'Project name must not exceed 100 characters'),
        deployedLink: Yup.string()
          .required('Deployed link is required')
          .url('Please enter a valid URL')
          .matches(
            /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-])\/?$/,
            'Please enter a valid URL'
          ),
        githubRepo: Yup.string()
          .required('GitHub repository link is required')
          .url('Please enter a valid URL')
          .matches(
            /^(https?:\/\/)?(www\.)?github\.com\/[a-zA-Z0-9_-]+\/[a-zA-Z0-9_-]+$/,
            'Please enter a valid GitHub repository URL'
          ),
        description: Yup.string()
          .required('Project description is required')
          .min(50, 'Description must be at least 50 characters')
          .max(1000, 'Description must not exceed 1000 characters'),
          techStack: Yup.string().required('Tech stack is required'),
        });
    
const HackathonSubmission = () => {
    const [formData, setFormData] = useState({
        teamName: '',
        projectName: '',
        deployedLink: '',
        githubRepo: '',
        description: '',
        techStack: ''
    });
    const [loading, setLoading] = useState(false);
    const [error, setErrors] = useState({});
    const [success, setSuccess] = useState(false);    

    const validateField = async (name, value) => {
        try {
          await Yup.reach(validationSchema, name).validate(value);
          setErrors(prev => ({ ...prev, [name]: '' }));
        } catch (error) {
          setErrors(prev => ({ ...prev, [name]: error.message }));
        }
    };


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        validateField(name, value);
        setSuccess(false);
      };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        
        try {
            // Validate all fields
            await validationSchema.validate(formData, { abortEarly: false });
            
            // Submit to Firebase
            await addDoc(collection(db, 'submissions'), {
            ...formData,
            submittedAt: new Date(),
            });
            
            // Reset form
            setFormData({
            teamName: '',
            projectName: '',
            deployedLink: '',
            githubRepo: '',
            description: '',
            techStack: [],
            customTechStack: ''
            });
            setErrors({});
            setSuccess(true);
            
        } catch (error) {
            if (error instanceof Yup.ValidationError) {
            // Handle Yup validation errors
            const validationErrors = {};
            error.inner.forEach(err => {
                validationErrors[err.path] = err.message;
            });
            setErrors(validationErrors);
            } else {
            // Handle Firebase or other errors
            setErrors({ submit: 'Failed to submit. Please try again.' });
            console.error('Submission error:', error);
            }
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        AOS.init();
      }, []);

      /*
      const initialTechOptions = [
        'Others', // Move Others to the top
        'Vercel', // Place Vercel at the top
        'React', 'Node.js', 'Express', 'MongoDB', 'Firebase', 'Tailwind CSS', 'Bootstrap', 'AWS',
        'Angular', 'Vue.js', 'Django', 'Flask', 'PostgreSQL', 'MySQL', 'SQLite', 'GraphQL', 'Docker',
        'Kubernetes', 'HTML', 'Git', 'GitHub Actions', 'Azure', 'Netlify', 'Sass', 'Less', 'Webpack',
        'CSS', 'MobX', 'Next.js', 'Nuxt.js', 'Gatsby', 'Render', 'Ionic', 'Cordova'
      ].sort((a, b) => a === 'Others' ? -1 : b === 'Others' ? 1 : a.localeCompare(b));
      
        const [showCustomTechStack, setShowCustomTechStack] = useState(false);
        const [techOptions, setTechOptions] = useState(initialTechOptions);

        const handleTechStackChange = (e) => {
            const selectedTech = e.target.value;
            if (selectedTech === 'Others') {
                setShowCustomTechStack(true);
            } else if (selectedTech && !formData.techStack.includes(selectedTech)) {
                setFormData({
                ...formData,
                techStack: [...formData.techStack, selectedTech],
                });
                setTechOptions(techOptions.filter((tech) => tech !== selectedTech));
                setShowCustomTechStack(false);
            }
            e.target.value = '';
            };
    
      const handleCustomTechStackChange = (e) => {
        setFormData({
          ...formData,
          customTechStack: e.target.value,
        });
      };
    
      const addCustomTechStack = () => {
        if (formData.customTechStack && !formData.techStack.includes(formData.customTechStack)) {
          setFormData({
            ...formData,
            techStack: [...formData.techStack, formData.customTechStack],
            customTechStack: ''
          });
          setShowCustomTechStack(false);
        }
      };
    
      const removeTechStack = (tech) => {
        setFormData({
          ...formData,
          techStack: formData.techStack.filter((t) => t !== tech),
        });
        setTechOptions([...techOptions, tech].sort());
      };
      */

    return (
        <Container maxWidth="sm">
        <Box my={4}>
          <Typography variant="h4" component="h1" gutterBottom className="text-4xl text-darkblue font-bold py-4">
            Hackathon Project Submission
          </Typography>
    
          <Formik
            initialValues={{
              teamName: '',
              projectName: '',
              deployedLink: '',
              githubRepo: '',
              description: '',
              techStack: '',
            }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ errors, touched }) => (
              <Form className="space-y-4 p-6 bg-white shadow-lg rounded-lg">
                <Box mb={2} data-aos="fade-up">
                  <label className="block text-blue-600 text-lg font-bold mb-2" htmlFor="teamName">
                    Team Name *
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
                  <label className="block text-blue-600 text-lg font-bold mb-2" htmlFor="projectName">
                    Project Name *
                  </label>
                  <Field
                    name="projectName"
                    as={TextField}
                    placeholder="Enter your project name"
                    fullWidth
                    className="p-2 text-lg shadow-md rounded border border-gray-300"
                    error={touched.projectName && Boolean(errors.projectName)}
                    helperText={touched.projectName && errors.projectName}
                  />
                </Box>

                <Box mb={2} data-aos="fade-up">
              <label className="block text-blue-600 text-lg font-bold mb-2" htmlFor="deployedLink">
                Deployed Link *
              </label>
              <Field
                name="deployedLink"
                as={TextField}
                placeholder="https://your-project.com"
                fullWidth
                className="p-2 text-lg shadow-md rounded border border-gray-300"
                error={touched.deployedLink && Boolean(errors.deployedLink)}
                helperText={touched.deployedLink && errors.deployedLink}
              />
            </Box>

            <Box mb={2} data-aos="fade-up">
              <label className="block text-blue-600 text-lg font-bold mb-2" htmlFor="githubRepo">
                GitHub Repository *
              </label>
              <Field
                name="githubRepo"
                as={TextField}
                placeholder="https://github.com/username/repo"
                fullWidth
                className="p-2 text-lg shadow-md rounded border border-gray-300"
                error={touched.githubRepo && Boolean(errors.githubRepo)}
                helperText={touched.githubRepo && errors.githubRepo}
              />
            </Box>

            <Box mb={2} data-aos="fade-up">
              <label className="block text-blue-600 text-lg font-bold mb-2" htmlFor="techStack">
                Tech Stack *
              </label>
              <Field
                name="techStack"
                as={TextField}
                placeholder="HTML, CSS, Python, ReactJS, MongoDB etc"
                fullWidth
                className="p-2 text-lg shadow-md rounded border border-gray-300"
                error={touched.techStack && Boolean(errors.techStack)}
                helperText={touched.techStack && errors.techStack}
              />
            </Box>


                {/* <div className="form-group mb-4" data-aos="fade-up">
                <label htmlFor="techStack" className="block text-blue-600 text-lg font-bold mb-2">Tech Stack *</label>
                <select
                    id="techStack"
                    name="techStack"
                    onChange={handleTechStackChange}
                    className="p-2 text-lg shadow-md rounded border border-gray-300 w-full"
                >
                    <option value="">Select a technology</option>
                    {techOptions.map((tech) => (
                    <option key={tech} value={tech}>{tech}</option>
                    ))}
                    <option value="Others">Others</option>
                </select>
                {showCustomTechStack && (
                    <div className="mt-2 flex items-center">
                    <input
                        type="text"
                        value={formData.customTechStack}
                        onChange={handleCustomTechStackChange}
                        placeholder="Enter custom tech stack"
                        className="p-2 text-lg shadow-md rounded border border-gray-300 w-full"
                    />
                    <button type="button" onClick={addCustomTechStack} className="ml-2 p-2 bg-blue-600 text-white text-lg font-bold rounded shadow-md hover:bg-blue-700">
                        Add
                    </button>
                    </div>
                )}
                <div className="mt-2 flex flex-wrap gap-2">
                {formData.techStack.map((tech) => (
                    <div key={tech} className="flex items-center justify-between p-2 bg-gray-200 rounded shadow-md w-auto">
                    <span className="mr-2">{tech}</span>
                    <button type="button" onClick={() => removeTechStack(tech)} className="text-black font-bold">X</button>
                    </div>
                ))}
                </div>
                </div>
                */}

                <Box mb={2} data-aos="fade-up">
              <label className="block text-blue-600 text-lg font-bold mb-2" htmlFor="description">
                Project Description *
              </label>
              <Field
                name="description"
                as={TextField}
                placeholder="Describe your project, its features, and how it solves the problem"
                fullWidth
                multiline
                rows={5}
                className="p-2 text-lg shadow-md rounded border border-gray-300"
                error={touched.description && Boolean(errors.description)}
                helperText={touched.description && errors.description}
              />
            </Box>

            {errors.submit && <div className="error-message text-red-600 mb-4">{errors.submit}</div>}
            {success && <div className="success-message text-green-600 mb-4">Project submitted successfully!</div>}

            <Button
            data-aos="fade-up"
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
      </Box>
    </Container>
    );
};

export default HackathonSubmission;