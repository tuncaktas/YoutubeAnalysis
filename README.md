# 📱 AI-Powered Video Insights App

## 🚀 Overview
AI-Powered Video Insights App is a mobile application that collects data from YouTube and other platforms, providing AI-powered video summaries and key point extraction. Built with React Native and Expo, it features a robust backend infrastructure using Supabase and PostgreSQL.

## 🛠️ Technologies Used
- **Expo** - Cross-platform mobile app development
- **React Native** - User-friendly and modern UI development
- **Supabase** - Backend and database management
- **PostgreSQL** - Secure data storage
- **BrightData** - Scraping data from YouTube and other platforms
- **OpenAI API** - AI-driven video summarization and key point extraction

## 📌 Features
- 🎥 **YouTube Video Analysis**: Extracts data from YouTube to analyze video content.
- 🤖 **AI-Powered Summarization**: Uses OpenAI API to generate video summaries.
- 📊 **Key Point Extraction**: Identifies the most critical moments in a video.
- 📂 **Data Management with Supabase**: Secure storage of user data using Supabase and PostgreSQL.
- 🌎 **Cross-Platform Support**: Smooth performance on both Android and iOS.

## 📦 Installation & Setup
```sh
# Clone the project
git clone https://github.com/username/project-name.git
cd project-name

# Install dependencies
npm install

# Start Expo
npx expo start
```

## ⚙️ Configuration
1. **Supabase Connection**: Add the following details to your `.env` file:
   ```env
   EXPO_PUBLIC_SUPABASE_URL=your_supabase_url
   EXPO_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```
2. **BrightData API Key**: Add your API key for data scraping.
   ```env
   BRIGHTDATA_API_KEY=your_brightdata_api_key
   ```
3. **OpenAI API Key**: Add your API key for AI operations.
   ```env
   OPENAI_API_KEY=your_openai_api_key
   ```

## 🚀 Usage
- Open the app and enter a youtube url to analyze.
- View AI-generated summaries and highlight






