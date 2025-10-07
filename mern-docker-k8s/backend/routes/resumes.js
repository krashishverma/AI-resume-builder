const express = require('express');
const router = express.Router();
const Resume = require('../models/Resume');
const authMiddleware = require('../middleware/auth');

// Protect all resume routes
router.use(authMiddleware);

// Get all resumes for logged-in user
router.get('/', async (req, res) => {
  try {
    const resumes = await Resume.find({ user: req.userId })
      .sort({ updatedAt: -1 })
      .select('-__v');
    
    res.json({
      success: true,
      count: resumes.length,
      resumes
    });
  } catch (error) {
    console.error('Get resumes error:', error);
    res.status(500).json({ error: 'Error fetching resumes' });
  }
});

// Get single resume
router.get('/:id', async (req, res) => {
  try {
    const resume = await Resume.findOne({
      _id: req.params.id,
      user: req.userId
    });

    if (!resume) {
      return res.status(404).json({ error: 'Resume not found' });
    }

    res.json({
      success: true,
      resume
    });
  } catch (error) {
    console.error('Get resume error:', error);
    res.status(500).json({ error: 'Error fetching resume' });
  }
});

// Create new resume
router.post('/', async (req, res) => {
  try {
    const resumeData = {
      ...req.body,
      user: req.userId
    };

    const resume = new Resume(resumeData);
    await resume.save();

    res.status(201).json({
      success: true,
      resume
    });
  } catch (error) {
    console.error('Create resume error:', error);
    res.status(500).json({ error: 'Error creating resume' });
  }
});

// Update resume
router.put('/:id', async (req, res) => {
  try {
    const resume = await Resume.findOneAndUpdate(
      { _id: req.params.id, user: req.userId },
      req.body,
      { new: true, runValidators: true }
    );

    if (!resume) {
      return res.status(404).json({ error: 'Resume not found' });
    }

    res.json({
      success: true,
      resume
    });
  } catch (error) {
    console.error('Update resume error:', error);
    res.status(500).json({ error: 'Error updating resume' });
  }
});

// Delete resume
router.delete('/:id', async (req, res) => {
  try {
    const resume = await Resume.findOneAndDelete({
      _id: req.params.id,
      user: req.userId
    });

    if (!resume) {
      return res.status(404).json({ error: 'Resume not found' });
    }

    res.json({
      success: true,
      message: 'Resume deleted successfully'
    });
  } catch (error) {
    console.error('Delete resume error:', error);
    res.status(500).json({ error: 'Error deleting resume' });
  }
});

module.exports = router;
