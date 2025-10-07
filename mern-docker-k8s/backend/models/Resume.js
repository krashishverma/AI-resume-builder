const mongoose = require('mongoose');

const ResumeSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  title: {
    type: String,
    required: true,
    default: 'My Resume'
  },
  template: {
    type: String,
    enum: ['modern', 'creative', 'tech', 'executive'],
    default: 'modern'
  },
  personalInfo: {
    fullName: { type: String, required: true },
    email: { type: String, required: true },
    phone: String,
    location: String,
    linkedin: String,
    github: String,
    website: String,
    summary: String
  },
  experience: [{
    company: { type: String, required: true },
    position: { type: String, required: true },
    location: String,
    startDate: { type: String, required: true },
    endDate: String,
    current: { type: Boolean, default: false },
    description: String,
    achievements: [String]
  }],
  education: [{
    institution: { type: String, required: true },
    degree: { type: String, required: true },
    field: String,
    location: String,
    startDate: String,
    endDate: String,
    gpa: String,
    achievements: [String]
  }],
  skills: {
    technical: [String],
    soft: [String],
    languages: [String],
    tools: [String]
  },
  projects: [{
    name: { type: String, required: true },
    description: String,
    technologies: [String],
    link: String,
    github: String
  }],
  certifications: [{
    name: String,
    issuer: String,
    date: String,
    credentialId: String
  }],
  aiSuggestions: {
    summaryScore: Number,
    skillsScore: Number,
    experienceScore: Number,
    overallScore: Number,
    suggestions: [String]
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

// Update the updatedAt timestamp before saving
ResumeSchema.pre('save', function(next) {
  this.updatedAt = Date.now();
  next();
});

module.exports = mongoose.model('Resume', ResumeSchema);
