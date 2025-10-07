import React from 'react';
import { Paper, Typography, Box, Divider, Chip } from '@mui/material';
import {
  Email as EmailIcon,
  Phone as PhoneIcon,
  LocationOn as LocationIcon,
  LinkedIn as LinkedInIcon,
  GitHub as GitHubIcon,
  Language as WebsiteIcon
} from '@mui/icons-material';

// Modern Template (Original - Purple Gradient)
function ModernTemplate({ resume }) {
  const { personalInfo, experience, education, skills, projects, certifications } = resume;

  return (
    <Box sx={{ backgroundColor: 'white', p: 4 }}>
      {/* Header */}
      <Box sx={{ textAlign: 'center', mb: 3, pb: 2, borderBottom: '3px solid #667eea' }}>
        <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#667eea', mb: 1 }}>
          {personalInfo.fullName || 'Your Name'}
        </Typography>
        
        <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 1.5, fontSize: '0.9rem' }}>
          {personalInfo.email && (
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
              <EmailIcon sx={{ fontSize: 16 }} />
              <Typography variant="body2">{personalInfo.email}</Typography>
            </Box>
          )}
          {personalInfo.phone && (
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
              <PhoneIcon sx={{ fontSize: 16 }} />
              <Typography variant="body2">{personalInfo.phone}</Typography>
            </Box>
          )}
          {personalInfo.location && (
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
              <LocationIcon sx={{ fontSize: 16 }} />
              <Typography variant="body2">{personalInfo.location}</Typography>
            </Box>
          )}
        </Box>
      </Box>

      {/* Summary */}
      {personalInfo.summary && (
        <Box sx={{ mb: 3 }}>
          <Typography variant="h6" sx={{ color: '#667eea', fontWeight: 'bold', mb: 1 }}>
            Professional Summary
          </Typography>
          <Typography variant="body2" sx={{ lineHeight: 1.6 }}>{personalInfo.summary}</Typography>
        </Box>
      )}

      {/* Experience */}
      {experience?.length > 0 && (
        <Box sx={{ mb: 3 }}>
          <Typography variant="h6" sx={{ color: '#667eea', fontWeight: 'bold', mb: 2 }}>
            Work Experience
          </Typography>
          {experience.map((exp, index) => (
            <Box key={index} sx={{ mb: 2, pl: 2, borderLeft: '3px solid #667eea' }}>
              <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>{exp.position}</Typography>
              <Typography variant="body2" color="text.secondary">{exp.company} | {exp.location}</Typography>
              <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mb: 1 }}>
                {exp.startDate} - {exp.current ? 'Present' : exp.endDate}
              </Typography>
              <Typography variant="body2">{exp.description}</Typography>
            </Box>
          ))}
        </Box>
      )}

      {/* Education */}
      {education?.length > 0 && (
        <Box sx={{ mb: 3 }}>
          <Typography variant="h6" sx={{ color: '#667eea', fontWeight: 'bold', mb: 2 }}>
            Education
          </Typography>
          {education.map((edu, index) => (
            <Box key={index} sx={{ mb: 2 }}>
              <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                {edu.degree} in {edu.field}
              </Typography>
              <Typography variant="body2" color="text.secondary">{edu.institution}</Typography>
            </Box>
          ))}
        </Box>
      )}

      {/* Skills */}
      {(skills?.technical?.length > 0 || skills?.soft?.length > 0) && (
        <Box sx={{ mb: 3 }}>
          <Typography variant="h6" sx={{ color: '#667eea', fontWeight: 'bold', mb: 2 }}>
            Skills
          </Typography>
          {skills.technical?.length > 0 && (
            <Box sx={{ mb: 1 }}>
              <Typography variant="subtitle2" sx={{ fontWeight: 'bold', mb: 1 }}>Technical:</Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                {skills.technical.map((skill, i) => (
                  <Chip key={i} label={skill} size="small" sx={{ bgcolor: '#667eea', color: 'white' }} />
                ))}
              </Box>
            </Box>
          )}
        </Box>
      )}

      {/* Projects */}
      {projects?.length > 0 && (
        <Box>
          <Typography variant="h6" sx={{ color: '#667eea', fontWeight: 'bold', mb: 2 }}>
            Projects
          </Typography>
          {projects.map((project, index) => (
            <Box key={index} sx={{ mb: 2 }}>
              <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>{project.name}</Typography>
              <Typography variant="body2">{project.description}</Typography>
            </Box>
          ))}
        </Box>
      )}
    </Box>
  );
}

// Professional Template (Classic - Black & Blue)
function ProfessionalTemplate({ resume }) {
  const { personalInfo, experience, education, skills, projects } = resume;

  return (
    <Box sx={{ backgroundColor: 'white', p: 4 }}>
      <Box sx={{ textAlign: 'center', mb: 3, pb: 2, borderBottom: '2px solid #2c3e50' }}>
        <Typography variant="h3" sx={{ fontWeight: 'bold', color: '#2c3e50', mb: 1 }}>
          {personalInfo.fullName || 'Your Name'}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          {personalInfo.email} | {personalInfo.phone} | {personalInfo.location}
        </Typography>
      </Box>

      {personalInfo.summary && (
        <Box sx={{ mb: 3, p: 2, bgcolor: '#ecf0f1', borderLeft: '4px solid #3498db' }}>
          <Typography variant="body1" sx={{ fontStyle: 'italic' }}>{personalInfo.summary}</Typography>
        </Box>
      )}

      {experience?.length > 0 && (
        <Box sx={{ mb: 3 }}>
          <Typography variant="h5" sx={{ color: '#2c3e50', fontWeight: 'bold', mb: 2, pb: 1, borderBottom: '2px solid #3498db' }}>
            EXPERIENCE
          </Typography>
          {experience.map((exp, i) => (
            <Box key={i} sx={{ mb: 2 }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>{exp.position}</Typography>
                <Typography variant="body2">{exp.startDate} - {exp.endDate}</Typography>
              </Box>
              <Typography variant="subtitle1" color="primary">{exp.company}</Typography>
              <Typography variant="body2">{exp.description}</Typography>
            </Box>
          ))}
        </Box>
      )}

      {education?.length > 0 && (
        <Box sx={{ mb: 3 }}>
          <Typography variant="h5" sx={{ color: '#2c3e50', fontWeight: 'bold', mb: 2, pb: 1, borderBottom: '2px solid #3498db' }}>
            EDUCATION
          </Typography>
          {education.map((edu, i) => (
            <Box key={i}>
              <Typography variant="h6" sx={{ fontWeight: 'bold' }}>{edu.degree} in {edu.field}</Typography>
              <Typography variant="body1">{edu.institution}</Typography>
            </Box>
          ))}
        </Box>
      )}

      {skills?.technical?.length > 0 && (
        <Box>
          <Typography variant="h5" sx={{ color: '#2c3e50', fontWeight: 'bold', mb: 2, pb: 1, borderBottom: '2px solid #3498db' }}>
            SKILLS
          </Typography>
          <Typography variant="body1">{skills.technical.join(' • ')}</Typography>
        </Box>
      )}
    </Box>
  );
}

// Creative Template (Colorful - Orange & Teal)
function CreativeTemplate({ resume }) {
  const { personalInfo, experience, education, skills, projects } = resume;

  return (
    <Box sx={{ backgroundColor: '#fff', p: 0 }}>
      {/* Sidebar */}
      <Box sx={{ display: 'flex', minHeight: '842px' }}>
        <Box sx={{ width: '35%', bgcolor: '#ff6b6b', color: 'white', p: 3 }}>
          <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 3 }}>
            {personalInfo.fullName?.split(' ')[0] || 'First'}
          </Typography>
          <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 4, opacity: 0.8 }}>
            {personalInfo.fullName?.split(' ').slice(1).join(' ') || 'Last'}
          </Typography>

          <Box sx={{ mb: 3 }}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>CONTACT</Typography>
            <Typography variant="body2" sx={{ mb: 1 }}>{personalInfo.email}</Typography>
            <Typography variant="body2" sx={{ mb: 1 }}>{personalInfo.phone}</Typography>
            <Typography variant="body2">{personalInfo.location}</Typography>
          </Box>

          {skills?.technical?.length > 0 && (
            <Box>
              <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>SKILLS</Typography>
              {skills.technical.map((skill, i) => (
                <Chip key={i} label={skill} sx={{ m: 0.5, bgcolor: 'white', color: '#ff6b6b' }} size="small" />
              ))}
            </Box>
          )}
        </Box>

        {/* Main Content */}
        <Box sx={{ flex: 1, p: 3 }}>
          {personalInfo.summary && (
            <Box sx={{ mb: 3 }}>
              <Typography variant="h5" sx={{ color: '#ff6b6b', fontWeight: 'bold', mb: 2 }}>
                ABOUT ME
              </Typography>
              <Typography variant="body1">{personalInfo.summary}</Typography>
            </Box>
          )}

          {experience?.length > 0 && (
            <Box sx={{ mb: 3 }}>
              <Typography variant="h5" sx={{ color: '#ff6b6b', fontWeight: 'bold', mb: 2 }}>
                EXPERIENCE
              </Typography>
              {experience.map((exp, i) => (
                <Box key={i} sx={{ mb: 2 }}>
                  <Typography variant="h6" sx={{ fontWeight: 'bold' }}>{exp.position}</Typography>
                  <Typography variant="subtitle1" color="text.secondary">{exp.company}</Typography>
                  <Typography variant="body2">{exp.description}</Typography>
                </Box>
              ))}
            </Box>
          )}

          {education?.length > 0 && (
            <Box>
              <Typography variant="h5" sx={{ color: '#ff6b6b', fontWeight: 'bold', mb: 2 }}>
                EDUCATION
              </Typography>
              {education.map((edu, i) => (
                <Box key={i}>
                  <Typography variant="h6">{edu.degree}</Typography>
                  <Typography variant="body1">{edu.institution}</Typography>
                </Box>
              ))}
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );
}

// Minimal Template (Clean - Gray)
function MinimalTemplate({ resume }) {
  const { personalInfo, experience, education, skills, projects } = resume;

  return (
    <Box sx={{ backgroundColor: 'white', p: 4 }}>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h3" sx={{ fontWeight: 300, mb: 0.5 }}>
          {personalInfo.fullName || 'Your Name'}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          {personalInfo.email} • {personalInfo.phone} • {personalInfo.location}
        </Typography>
      </Box>

      {personalInfo.summary && (
        <Box sx={{ mb: 4 }}>
          <Typography variant="body1" sx={{ lineHeight: 1.8 }}>{personalInfo.summary}</Typography>
        </Box>
      )}

      {experience?.length > 0 && (
        <Box sx={{ mb: 4 }}>
          <Typography variant="h6" sx={{ fontWeight: 300, mb: 2, textTransform: 'uppercase', letterSpacing: 2 }}>
            Experience
          </Typography>
          {experience.map((exp, i) => (
            <Box key={i} sx={{ mb: 2 }}>
              <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>{exp.position} — {exp.company}</Typography>
              <Typography variant="caption" color="text.secondary">{exp.startDate} - {exp.endDate}</Typography>
              <Typography variant="body2" sx={{ mt: 0.5 }}>{exp.description}</Typography>
            </Box>
          ))}
        </Box>
      )}

      {education?.length > 0 && (
        <Box sx={{ mb: 4 }}>
          <Typography variant="h6" sx={{ fontWeight: 300, mb: 2, textTransform: 'uppercase', letterSpacing: 2 }}>
            Education
          </Typography>
          {education.map((edu, i) => (
            <Typography key={i} variant="body1">{edu.degree}, {edu.institution}</Typography>
          ))}
        </Box>
      )}

      {skills?.technical?.length > 0 && (
        <Box>
          <Typography variant="h6" sx={{ fontWeight: 300, mb: 2, textTransform: 'uppercase', letterSpacing: 2 }}>
            Skills
          </Typography>
          <Typography variant="body1">{skills.technical.join(', ')}</Typography>
        </Box>
      )}
    </Box>
  );
}

// Elegant Template (Serif - Navy & Gold)
function ElegantTemplate({ resume }) {
  const { personalInfo, experience, education, skills, projects } = resume;

  return (
    <Box sx={{ backgroundColor: 'white', p: 4, fontFamily: 'Georgia, serif' }}>
      <Box sx={{ textAlign: 'center', mb: 4, pb: 3, borderBottom: '1px solid #d4af37' }}>
        <Typography variant="h3" sx={{ fontFamily: 'Georgia, serif', fontWeight: 'bold', color: '#1a237e', mb: 1 }}>
          {personalInfo.fullName || 'Your Name'}
        </Typography>
        <Typography variant="body1" sx={{ color: '#666' }}>
          {personalInfo.email} | {personalInfo.phone}
        </Typography>
        <Typography variant="body2" sx={{ color: '#666' }}>
          {personalInfo.location}
        </Typography>
      </Box>

      {personalInfo.summary && (
        <Box sx={{ mb: 4, p: 2, borderLeft: '3px solid #d4af37' }}>
          <Typography variant="body1" sx={{ fontStyle: 'italic', color: '#444' }}>
            "{personalInfo.summary}"
          </Typography>
        </Box>
      )}

      {experience?.length > 0 && (
        <Box sx={{ mb: 4 }}>
          <Typography variant="h5" sx={{ fontFamily: 'Georgia, serif', color: '#1a237e', mb: 2, fontWeight: 'bold' }}>
            Professional Experience
          </Typography>
          {experience.map((exp, i) => (
            <Box key={i} sx={{ mb: 3 }}>
              <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#333' }}>{exp.position}</Typography>
              <Typography variant="subtitle1" sx={{ color: '#d4af37', fontStyle: 'italic' }}>{exp.company}</Typography>
              <Typography variant="caption" sx={{ color: '#666' }}>{exp.startDate} - {exp.endDate}</Typography>
              <Typography variant="body2" sx={{ mt: 1 }}>{exp.description}</Typography>
            </Box>
          ))}
        </Box>
      )}

      {education?.length > 0 && (
        <Box sx={{ mb: 4 }}>
          <Typography variant="h5" sx={{ fontFamily: 'Georgia, serif', color: '#1a237e', mb: 2, fontWeight: 'bold' }}>
            Education
          </Typography>
          {education.map((edu, i) => (
            <Box key={i} sx={{ mb: 2 }}>
              <Typography variant="h6" sx={{ fontWeight: 'bold' }}>{edu.degree} in {edu.field}</Typography>
              <Typography variant="body1" sx={{ color: '#666' }}>{edu.institution}</Typography>
            </Box>
          ))}
        </Box>
      )}

      {skills?.technical?.length > 0 && (
        <Box>
          <Typography variant="h5" sx={{ fontFamily: 'Georgia, serif', color: '#1a237e', mb: 2, fontWeight: 'bold' }}>
            Core Competencies
          </Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
            {skills.technical.map((skill, i) => (
              <Typography key={i} variant="body1" sx={{ 
                px: 2, py: 0.5, 
                border: '1px solid #d4af37', 
                borderRadius: 1,
                color: '#1a237e'
              }}>
                {skill}
              </Typography>
            ))}
          </Box>
        </Box>
      )}
    </Box>
  );
}

// Main Template Selector
function ResumeTemplate({ resume, template = 'modern' }) {
  const templates = {
    modern: <ModernTemplate resume={resume} />,
    professional: <ProfessionalTemplate resume={resume} />,
    creative: <CreativeTemplate resume={resume} />,
    minimal: <MinimalTemplate resume={resume} />,
    elegant: <ElegantTemplate resume={resume} />
  };

  return (
    <Paper 
      elevation={3} 
      sx={{ 
        minHeight: '842px',
        maxWidth: '595px',
        margin: '0 auto',
        overflow: 'hidden'
      }}
    >
      {templates[template] || templates.modern}
    </Paper>
  );
}

export default ResumeTemplate;
export { ModernTemplate, ProfessionalTemplate, CreativeTemplate, MinimalTemplate, ElegantTemplate };
