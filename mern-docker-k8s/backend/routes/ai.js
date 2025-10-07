const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/auth');
const aiService = require('../services/aiService');

// Protect all AI routes
router.use(authMiddleware);

// Generate professional summary
router.post('/generate-summary', async (req, res) => {
  try {
    const { name, experience, skills, targetRole } = req.body;

    if (!name || !targetRole) {
      return res.status(400).json({ error: 'Name and target role are required' });
    }

    const summary = await aiService.generateSummary({
      name,
      experience,
      skills,
      targetRole
    });

    res.json({
      success: true,
      summary
    });
  } catch (error) {
    console.error('Generate summary error:', error);
    res.status(500).json({ 
      error: 'Error generating summary',
      message: error.message 
    });
  }
});

// Improve job description
router.post('/improve-description', async (req, res) => {
  try {
    const { description, position, company } = req.body;

    if (!description) {
      return res.status(400).json({ error: 'Description is required' });
    }

    const improved = await aiService.improveDescription({
      description,
      position,
      company
    });

    res.json({
      success: true,
      improved
    });
  } catch (error) {
    console.error('Improve description error:', error);
    res.status(500).json({ 
      error: 'Error improving description',
      message: error.message 
    });
  }
});

// Suggest skills
router.post('/suggest-skills', async (req, res) => {
  try {
    const { targetRole, currentSkills, experience } = req.body;

    if (!targetRole) {
      return res.status(400).json({ error: 'Target role is required' });
    }

    const skills = await aiService.suggestSkills({
      targetRole,
      currentSkills,
      experience
    });

    res.json({
      success: true,
      skills
    });
  } catch (error) {
    console.error('Suggest skills error:', error);
    res.status(500).json({ 
      error: 'Error suggesting skills',
      message: error.message 
    });
  }
});

// Analyze resume and provide feedback
router.post('/analyze-resume', async (req, res) => {
  try {
    const { resumeData } = req.body;

    if (!resumeData) {
      return res.status(400).json({ error: 'Resume data is required' });
    }

    const analysis = await aiService.analyzeResume(resumeData);

    res.json({
      success: true,
      analysis
    });
  } catch (error) {
    console.error('Analyze resume error:', error);
    res.status(500).json({ 
      error: 'Error analyzing resume',
      message: error.message 
    });
  }
});

module.exports = router;
