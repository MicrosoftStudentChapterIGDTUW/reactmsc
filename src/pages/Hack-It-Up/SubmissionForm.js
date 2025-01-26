import React, { useState } from 'react';
import { db } from '../../firebase.config';
import { collection, addDoc } from 'firebase/firestore';
// import './HackathonSubmission.css';

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
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);

    const validateForm = () => {
        if (!formData.teamName.trim()) return "Team name is required";
        if (!formData.projectName.trim()) return "Project name is required";
        if (!formData.deployedLink.trim()) return "Deployed link is required";
        if (!formData.githubRepo.trim()) return "GitHub repository link is required";
        if (!formData.description.trim()) return "Project description is required";
        
        // Validate URL format
        const urlRegex = /^(http|https):\/\/[^ "]+$/;
        if (!urlRegex.test(formData.deployedLink)) return "Please enter a valid deployed URL";
        if (!urlRegex.test(formData.githubRepo)) return "Please enter a valid GitHub URL";
        
        return "";
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
        setError('');
        setSuccess(false);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const validationError = validateForm();
        if (validationError) {
            setError(validationError);
            return;
        }

        setLoading(true);
        try {
            await addDoc(collection(db, 'submissions'), {
                ...formData,
                submittedAt: new Date(),
            });
            setSuccess(true);
            setFormData({
                teamName: '',
                projectName: '',
                deployedLink: '',
                githubRepo: '',
                description: '',
                techStack: ''
            });
        } catch (err) {
            setError('Failed to submit. Please try again.');
            console.error('Submission error:', err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="submission-container">
            <h1>Hackathon Project Submission</h1>
            
            <form onSubmit={handleSubmit} className="submission-form">
                <div className="form-group">
                    <label htmlFor="teamName">Team Name *</label>
                    <input
                        type="text"
                        id="teamName"
                        name="teamName"
                        value={formData.teamName}
                        onChange={handleChange}
                        placeholder="Enter your team name"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="projectName">Project Name *</label>
                    <input
                        type="text"
                        id="projectName"
                        name="projectName"
                        value={formData.projectName}
                        onChange={handleChange}
                        placeholder="Enter your project name"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="deployedLink">Deployed Link *</label>
                    <input
                        type="url"
                        id="deployedLink"
                        name="deployedLink"
                        value={formData.deployedLink}
                        onChange={handleChange}
                        placeholder="https://your-project.com"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="githubRepo">GitHub Repository *</label>
                    <input
                        type="url"
                        id="githubRepo"
                        name="githubRepo"
                        value={formData.githubRepo}
                        onChange={handleChange}
                        placeholder="https://github.com/username/repo"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="techStack">Tech Stack</label>
                    <input
                        type="text"
                        id="techStack"
                        name="techStack"
                        value={formData.techStack}
                        onChange={handleChange}
                        placeholder="React, Node.js, MongoDB, etc."
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="description">Project Description *</label>
                    <textarea
                        id="description"
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        placeholder="Describe your project, its features, and how it solves the problem"
                        rows="5"
                    />
                </div>

                {error && <div className="error-message">{error}</div>}
                {success && <div className="success-message">Project submitted successfully!</div>}

                <button 
                    type="submit" 
                    className="submit-button"
                    disabled={loading}
                >
                    {loading ? 'Submitting...' : 'Submit Project'}
                </button>
            </form>
        </div>
    );
};

export default HackathonSubmission;