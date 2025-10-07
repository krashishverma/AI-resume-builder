const { GoogleGenerativeAI } = require('@google/generative-ai');

// Initialize Gemini AI client (if API key is provided)
let genAI = null;
let model = null;

if (process.env.GEMINI_API_KEY) {
  genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
  // Using gemini-2.0-flash (confirmed working with this API key)
  model = genAI.getGenerativeModel({ model: 'gemini-2.0-flash' });
}

// AI Service with fallback responses
const aiService = {
  // Generate professional summary
  async generateSummary({ name, experience, skills, targetRole }) {
    if (!model) {
      return this.getFallbackSummary({ name, experience, skills, targetRole });
    }

    try {
      const prompt = `You are an expert resume writer and career coach. Create professional, ATS-friendly resume content.

Generate a professional resume summary for ${name} who is applying for a ${targetRole} position. 
They have experience in: ${experience || 'various roles'}.
Their key skills include: ${skills?.join(', ') || 'various technical skills'}.

Write a compelling 3-4 sentence professional summary that highlights their strengths and value proposition.
Make it ATS-friendly and impactful.`;

      const result = await model.generateContent(prompt);
      const response = await result.response;
      const text = response.text();
      
      return text.trim();
    } catch (error) {
      console.error('Gemini API error:', error);
      return this.getFallbackSummary({ name, experience, skills, targetRole });
    }
  },

  // Improve job description
  async improveDescription({ description, position, company }) {
    if (!model) {
      return this.getFallbackDescription({ description });
    }

    try {
      const prompt = `You are an expert resume writer. Transform job descriptions into achievement-focused bullet points.

Improve this job description for a ${position} role${company ? ` at ${company}` : ''}:

"${description}"

Make it more impactful by:
1. Using strong action verbs
2. Quantifying achievements where possible
3. Being concise and ATS-friendly
4. Highlighting results and impact

Provide 3-5 improved bullet points.`;

      const result = await model.generateContent(prompt);
      const response = await result.response;
      const text = response.text();
      
      return text.trim();
    } catch (error) {
      console.error('Gemini API error:', error);
      return this.getFallbackDescription({ description });
    }
  },

  // Suggest relevant skills
  async suggestSkills({ targetRole, currentSkills, experience }) {
    if (!model) {
      return this.getFallbackSkills({ targetRole });
    }

    try {
      const prompt = `You are a career advisor specializing in skill development and job market trends.

For a ${targetRole} position, suggest 10-15 relevant technical and soft skills.
Current skills: ${currentSkills?.join(', ') || 'None listed'}
Experience level: ${experience || 'Mid-level'}

Focus on:
1. Industry-standard technical skills
2. Important soft skills
3. Tools and technologies
4. Skills that match ATS keywords

Return ONLY as a comma-separated list without any additional text.`;

      const result = await model.generateContent(prompt);
      const response = await result.response;
      const skillsText = response.text().trim();
      
      return skillsText.split(',').map(s => s.trim()).filter(s => s);
    } catch (error) {
      console.error('Gemini API error:', error);
      return this.getFallbackSkills({ targetRole });
    }
  },

  // Analyze resume and provide feedback
  async analyzeResume(resumeData) {
    if (!model) {
      return this.getFallbackAnalysis();
    }

    try {
      const resumeText = JSON.stringify(resumeData, null, 2);
      
      const prompt = `You are an expert resume reviewer and ATS specialist. Provide constructive, actionable feedback.

Analyze this resume and provide a score (0-100) and specific improvement suggestions:

${resumeText}

Evaluate:
1. Professional summary effectiveness
2. Experience descriptions (use of action verbs, quantification)
3. Skills relevance and completeness
4. Overall ATS-friendliness
5. Format and structure

Provide your response in VALID JSON format ONLY:
{ 
  "score": number, 
  "suggestions": ["suggestion1", "suggestion2", "suggestion3", "suggestion4", "suggestion5"]
}`;

      const result = await model.generateContent(prompt);
      const response = await result.response;
      const text = response.text().trim();
      
      try {
        // Extract JSON from response (Gemini sometimes adds markdown)
        const jsonMatch = text.match(/\{[\s\S]*\}/);
        if (jsonMatch) {
          return JSON.parse(jsonMatch[0]);
        }
        return JSON.parse(text);
      } catch {
        return {
          score: 70,
          suggestions: text.split('\n').filter(s => s.trim() && !s.includes('{') && !s.includes('}'))
        };
      }
    } catch (error) {
      console.error('Gemini API error:', error);
      return this.getFallbackAnalysis();
    }
  },

  // Fallback methods (when API is not configured)
  getFallbackSummary({ name, targetRole }) {
    return `Results-driven professional with proven expertise in ${targetRole}. Demonstrated ability to deliver high-quality solutions and drive business impact. Strong technical skills combined with excellent communication and collaboration abilities. Passionate about leveraging technology to solve complex problems and exceed organizational goals.`;
  },

  getFallbackDescription({ description }) {
    return `• ${description}\n• Collaborated with cross-functional teams to deliver high-quality results\n• Implemented best practices and contributed to process improvements\n• Achieved measurable impact through data-driven decision making`;
  },

  getFallbackSkills({ targetRole }) {
    const commonSkills = {
      'Software Developer': ['JavaScript', 'Python', 'React', 'Node.js', 'Git', 'Agile', 'Problem Solving', 'Communication'],
      'Data Analyst': ['Python', 'SQL', 'Excel', 'Tableau', 'Statistics', 'Data Visualization', 'Critical Thinking'],
      'Product Manager': ['Agile', 'Roadmapping', 'Stakeholder Management', 'User Research', 'Analytics', 'Communication'],
      'default': ['Communication', 'Teamwork', 'Problem Solving', 'Time Management', 'Adaptability', 'Leadership']
    };

    return commonSkills[targetRole] || commonSkills['default'];
  },

  getFallbackAnalysis() {
    return {
      score: 75,
      suggestions: [
        'Add quantifiable achievements to your experience descriptions',
        'Include more action verbs at the beginning of bullet points',
        'Ensure your summary targets the specific role you\'re applying for',
        'Add relevant technical skills for better ATS matching',
        'Consider adding a projects section to showcase practical work',
        'Keep descriptions concise and impactful (1-2 lines per point)'
      ]
    };
  }
};

module.exports = aiService;
