import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';

const getAuthHeader = () => {
  const token = localStorage.getItem('token');
  return { Authorization: `Bearer ${token}` };
};

// Resume APIs
export const resumeAPI = {
  getAll: async () => {
    const response = await axios.get(`${API_URL}/api/resumes`, {
      headers: getAuthHeader()
    });
    return response.data;
  },

  getById: async (id) => {
    const response = await axios.get(`${API_URL}/api/resumes/${id}`, {
      headers: getAuthHeader()
    });
    return response.data;
  },

  create: async (resumeData) => {
    const response = await axios.post(`${API_URL}/api/resumes`, resumeData, {
      headers: getAuthHeader()
    });
    return response.data;
  },

  update: async (id, resumeData) => {
    const response = await axios.put(`${API_URL}/api/resumes/${id}`, resumeData, {
      headers: getAuthHeader()
    });
    return response.data;
  },

  delete: async (id) => {
    const response = await axios.delete(`${API_URL}/api/resumes/${id}`, {
      headers: getAuthHeader()
    });
    return response.data;
  }
};

// AI APIs
export const aiAPI = {
  generateSummary: async (data) => {
    const response = await axios.post(`${API_URL}/api/ai/generate-summary`, data, {
      headers: getAuthHeader()
    });
    return response.data;
  },

  improveDescription: async (data) => {
    const response = await axios.post(`${API_URL}/api/ai/improve-description`, data, {
      headers: getAuthHeader()
    });
    return response.data;
  },

  suggestSkills: async (data) => {
    const response = await axios.post(`${API_URL}/api/ai/suggest-skills`, data, {
      headers: getAuthHeader()
    });
    return response.data;
  },

  analyzeResume: async (data) => {
    const response = await axios.post(`${API_URL}/api/ai/analyze-resume`, data, {
      headers: getAuthHeader()
    });
    return response.data;
  }
};
