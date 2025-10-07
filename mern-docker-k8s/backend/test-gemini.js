// Test script to verify Gemini API is working
const { GoogleGenerativeAI } = require('@google/generative-ai');
require('dotenv').config();

async function testGemini() {
  console.log('🧪 Testing Gemini API...\n');
  
  // Check if API key exists
  if (!process.env.GEMINI_API_KEY) {
    console.error('❌ GEMINI_API_KEY not found in .env file');
    return;
  }
  
  console.log('✅ API Key found:', process.env.GEMINI_API_KEY.substring(0, 10) + '...');
  
  try {
    // Initialize Gemini
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    
    // Try gemini-2.0-flash
    console.log('\n📡 Testing model: gemini-2.0-flash');
    const model = genAI.getGenerativeModel({ model: 'gemini-2.0-flash' });
    
    const prompt = 'Say "Hello! Gemini is working!" in a professional tone.';
    console.log('📝 Prompt:', prompt);
    
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    
    console.log('\n✅ Response received:');
    console.log('━'.repeat(50));
    console.log(text);
    console.log('━'.repeat(50));
    console.log('\n🎉 SUCCESS! Gemini API is working perfectly!\n');
    
  } catch (error) {
    console.error('\n❌ ERROR:', error.message);
    
    if (error.message.includes('API key not valid')) {
      console.log('\n💡 Solution: Get a new API key from https://aistudio.google.com/app/apikey');
    } else if (error.message.includes('not found')) {
      console.log('\n💡 The model name might be incorrect. Trying alternative models...');
      
      // Try alternative models
      const models = ['gemini-1.5-flash', 'gemini-1.5-pro', 'gemini-pro'];
      for (const modelName of models) {
        try {
          console.log(`\n📡 Testing model: ${modelName}`);
          const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
          const altModel = genAI.getGenerativeModel({ model: modelName });
          const result = await altModel.generateContent('Say hi');
          const response = await result.response;
          console.log(`✅ ${modelName} works!`);
          console.log('Response:', response.text().substring(0, 50) + '...');
          break;
        } catch (e) {
          console.log(`❌ ${modelName} failed:`, e.message.substring(0, 80));
        }
      }
    } else if (error.message.includes('quota') || error.message.includes('429')) {
      console.log('\n💡 You have exceeded the free tier quota. Wait 24 hours or upgrade.');
    } else {
      console.log('\n💡 Unexpected error. Check your internet connection and API key.');
    }
  }
}

// Run the test
testGemini();
