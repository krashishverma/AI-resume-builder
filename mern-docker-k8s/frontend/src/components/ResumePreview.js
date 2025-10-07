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

function ResumePreview({ resume }) {
  const { personalInfo, experience, education, skills, projects, certifications } = resume;

  return (
    <Paper 
      elevation={3} 
      sx={{ 
        p: 4, 
        backgroundColor: 'white',
        minHeight: '842px', // A4 height
        maxWidth: '595px',  // A4 width
        margin: '0 auto'
      }}
    >
      {/* Header */}
      <Box sx={{ textAlign: 'center', mb: 3 }}>
        <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#667eea', mb: 1 }}>
          {personalInfo.fullName || 'Your Name'}
        </Typography>
        
        <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 1, mb: 1 }}>
          {personalInfo.email && (
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
              <EmailIcon sx={{ fontSize: 16, color: '#666' }} />
              <Typography variant="body2" color="text.secondary">
                {personalInfo.email}
              </Typography>
            </Box>
          )}
          {personalInfo.phone && (
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
              <PhoneIcon sx={{ fontSize: 16, color: '#666' }} />
              <Typography variant="body2" color="text.secondary">
                {personalInfo.phone}
              </Typography>
            </Box>
          )}
          {personalInfo.location && (
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
              <LocationIcon sx={{ fontSize: 16, color: '#666' }} />
              <Typography variant="body2" color="text.secondary">
                {personalInfo.location}
              </Typography>
            </Box>
          )}
        </Box>

        <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 1 }}>
          {personalInfo.linkedin && (
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
              <LinkedInIcon sx={{ fontSize: 16, color: '#0077b5' }} />
              <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.85rem' }}>
                LinkedIn
              </Typography>
            </Box>
          )}
          {personalInfo.github && (
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
              <GitHubIcon sx={{ fontSize: 16, color: '#333' }} />
              <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.85rem' }}>
                GitHub
              </Typography>
            </Box>
          )}
          {personalInfo.website && (
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
              <WebsiteIcon sx={{ fontSize: 16, color: '#666' }} />
              <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.85rem' }}>
                Website
              </Typography>
            </Box>
          )}
        </Box>
      </Box>

      {/* Summary */}
      {personalInfo.summary && (
        <>
          <Divider sx={{ my: 2 }} />
          <Box sx={{ mb: 3 }}>
            <Typography variant="h6" sx={{ color: '#667eea', fontWeight: 'bold', mb: 1 }}>
              Professional Summary
            </Typography>
            <Typography variant="body2" sx={{ textAlign: 'justify', lineHeight: 1.6 }}>
              {personalInfo.summary}
            </Typography>
          </Box>
        </>
      )}

      {/* Experience */}
      {experience && experience.length > 0 && (
        <>
          <Divider sx={{ my: 2 }} />
          <Box sx={{ mb: 3 }}>
            <Typography variant="h6" sx={{ color: '#667eea', fontWeight: 'bold', mb: 2 }}>
              Work Experience
            </Typography>
            {experience.map((exp, index) => (
              <Box key={index} sx={{ mb: 2, pl: 2, borderLeft: '3px solid #667eea' }}>
                <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                  {exp.position || 'Position'}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 0.5 }}>
                  {exp.company || 'Company'} | {exp.location || 'Location'}
                </Typography>
                <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mb: 1 }}>
                  {exp.startDate || 'Start'} - {exp.current ? 'Present' : exp.endDate || 'End'}
                </Typography>
                {exp.description && (
                  <Typography variant="body2" sx={{ fontSize: '0.9rem', lineHeight: 1.5 }}>
                    {exp.description}
                  </Typography>
                )}
                {exp.achievements && exp.achievements.length > 0 && (
                  <ul style={{ margin: '8px 0', paddingLeft: '20px' }}>
                    {exp.achievements.map((achievement, i) => (
                      <li key={i}>
                        <Typography variant="body2" sx={{ fontSize: '0.9rem' }}>
                          {achievement}
                        </Typography>
                      </li>
                    ))}
                  </ul>
                )}
              </Box>
            ))}
          </Box>
        </>
      )}

      {/* Education */}
      {education && education.length > 0 && (
        <>
          <Divider sx={{ my: 2 }} />
          <Box sx={{ mb: 3 }}>
            <Typography variant="h6" sx={{ color: '#667eea', fontWeight: 'bold', mb: 2 }}>
              Education
            </Typography>
            {education.map((edu, index) => (
              <Box key={index} sx={{ mb: 2, pl: 2, borderLeft: '3px solid #667eea' }}>
                <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                  {edu.degree || 'Degree'} in {edu.field || 'Field'}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {edu.institution || 'Institution'}
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  {edu.startDate || 'Start'} - {edu.endDate || 'End'}
                  {edu.gpa && ` | GPA: ${edu.gpa}`}
                </Typography>
              </Box>
            ))}
          </Box>
        </>
      )}

      {/* Skills */}
      {skills && (skills.technical?.length > 0 || skills.soft?.length > 0) && (
        <>
          <Divider sx={{ my: 2 }} />
          <Box sx={{ mb: 3 }}>
            <Typography variant="h6" sx={{ color: '#667eea', fontWeight: 'bold', mb: 2 }}>
              Skills
            </Typography>
            
            {skills.technical && skills.technical.length > 0 && (
              <Box sx={{ mb: 2 }}>
                <Typography variant="subtitle2" sx={{ mb: 1, fontWeight: 'bold' }}>
                  Technical Skills:
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                  {skills.technical.map((skill, index) => (
                    <Chip 
                      key={index} 
                      label={skill} 
                      size="small" 
                      sx={{ 
                        backgroundColor: '#667eea', 
                        color: 'white',
                        fontSize: '0.75rem'
                      }} 
                    />
                  ))}
                </Box>
              </Box>
            )}

            {skills.soft && skills.soft.length > 0 && (
              <Box sx={{ mb: 2 }}>
                <Typography variant="subtitle2" sx={{ mb: 1, fontWeight: 'bold' }}>
                  Soft Skills:
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                  {skills.soft.map((skill, index) => (
                    <Chip 
                      key={index} 
                      label={skill} 
                      size="small" 
                      sx={{ 
                        backgroundColor: '#764ba2', 
                        color: 'white',
                        fontSize: '0.75rem'
                      }} 
                    />
                  ))}
                </Box>
              </Box>
            )}

            {skills.languages && skills.languages.length > 0 && (
              <Box sx={{ mb: 2 }}>
                <Typography variant="subtitle2" sx={{ mb: 1, fontWeight: 'bold' }}>
                  Languages:
                </Typography>
                <Typography variant="body2">
                  {skills.languages.join(', ')}
                </Typography>
              </Box>
            )}

            {skills.tools && skills.tools.length > 0 && (
              <Box sx={{ mb: 2 }}>
                <Typography variant="subtitle2" sx={{ mb: 1, fontWeight: 'bold' }}>
                  Tools & Technologies:
                </Typography>
                <Typography variant="body2">
                  {skills.tools.join(', ')}
                </Typography>
              </Box>
            )}
          </Box>
        </>
      )}

      {/* Projects */}
      {projects && projects.length > 0 && (
        <>
          <Divider sx={{ my: 2 }} />
          <Box sx={{ mb: 3 }}>
            <Typography variant="h6" sx={{ color: '#667eea', fontWeight: 'bold', mb: 2 }}>
              Projects
            </Typography>
            {projects.map((project, index) => (
              <Box key={index} sx={{ mb: 2, pl: 2, borderLeft: '3px solid #667eea' }}>
                <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                  {project.name || 'Project Name'}
                </Typography>
                {project.description && (
                  <Typography variant="body2" sx={{ fontSize: '0.9rem', mt: 0.5 }}>
                    {project.description}
                  </Typography>
                )}
                {project.technologies && project.technologies.length > 0 && (
                  <Box sx={{ mt: 1, display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                    {project.technologies.map((tech, i) => (
                      <Chip 
                        key={i} 
                        label={tech} 
                        size="small" 
                        variant="outlined"
                        sx={{ fontSize: '0.7rem' }}
                      />
                    ))}
                  </Box>
                )}
              </Box>
            ))}
          </Box>
        </>
      )}

      {/* Certifications */}
      {certifications && certifications.length > 0 && (
        <>
          <Divider sx={{ my: 2 }} />
          <Box sx={{ mb: 2 }}>
            <Typography variant="h6" sx={{ color: '#667eea', fontWeight: 'bold', mb: 2 }}>
              Certifications
            </Typography>
            {certifications.map((cert, index) => (
              <Box key={index} sx={{ mb: 1 }}>
                <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                  • {cert.name || 'Certification Name'}
                </Typography>
                {cert.issuer && (
                  <Typography variant="caption" color="text.secondary" sx={{ ml: 2 }}>
                    {cert.issuer} {cert.date && `| ${cert.date}`}
                  </Typography>
                )}
              </Box>
            ))}
          </Box>
        </>
      )}
    </Paper>
  );
}

export default ResumePreview;
