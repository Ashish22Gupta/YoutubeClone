# 📺 VidStream - YouTube Clone

A modern, responsive YouTube clone built with React, Vite, and Material-UI. Features a sleek dark theme, smooth animations with Framer Motion, and real YouTube API integration.

## ✨ Features

- 🎨 **Modern Dark Theme** - Sleek dark UI with glass morphism effects
- 📱 **Fully Responsive** - Works perfectly on all devices (mobile, tablet, desktop)
- 🎬 **YouTube API Integration** - Real video data from YouTube
- 🔍 **Search Functionality** - Search for any videos
- 📺 **Video Player** - Watch videos with autoplay
- 📋 **Recommended Videos** - Related video suggestions
- 🎯 **Sidebar Navigation** - Browse by categories (Trending, Music, Gaming, etc.)
- ✨ **Smooth Animations** - Framer Motion powered animations
- 🔒 **Secure API Key Handling** - Server-side API key protection

## 🚀 Live Demo

Check out the live demo: [VidStream on Netlify](https://vidstream-youtube-clone.netlify.app)

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v18 or higher)
- [npm](https://www.npmjs.com/) (v8 or higher)
- [Git](https://git-scm.com/)

## 🛠️ Installation

### 1. Clone the Repository

git clone https://github.com/Ashish22Gupta/YoutubeClone.git
cd vidstream-youtube-clone

### 2. Install Dependencies

npm install

### 3. Set Up Environment Variables

# Create .env file
Add the following to your .env file:
VITE_YOUTUBE_API_KEY=your_youtube_api_key_here

### 4. Install Dependencies

npm install

### 4. Build an Run

npm run build
npm run dev






# 🔑 Detailed Guide: Get a Free YouTube Data API v3 Key

Setting up the Google Cloud Console can be tricky. Follow this comprehensive, step-by-step guide to generate and secure your API key.

---

## Step 1: Access Google Cloud Console

1. Open your browser and navigate to the **[Google Cloud Console](https://console.cloud.google.com/)**.
2. Sign in with your Google (Gmail) account.
3. If it's your first time using Google Cloud, you may be prompted to agree to the Terms of Service and select your country. Click **Agree and Continue**.
   *(Note: You do **not** need to enter credit card details or enable billing to use the free tier of the YouTube Data API).*

---

## Step 2: Create a New Project

1. At the very top of the page, next to "Google Cloud", click the **project dropdown menu** (it might say "My First Project" or your email address).
2. In the pop-up window, click **NEW PROJECT** (top right corner).
3. **Project Name:** Enter a recognizable name, e.g., `VidStream-Clone` or `YouTube-App`.
4. **Organization:** Leave as default or select "No organization" if you are using a personal account.
5. Click **CREATE**.
6. *Wait a few seconds.* Ensure your newly created project is selected in the top dropdown menu before moving to the next step.

---

## Step 3: Enable the YouTube Data API v3

By default, Google Cloud projects do not have APIs enabled. You must explicitly turn it on.

1. Click the **Navigation Menu** (☰ hamburger icon) in the top left corner.
2. Hover over **APIs & Services** and click on **Library** from the side menu.
3. In the search bar at the top, type: `YouTube Data API v3` and press **Enter**.
4. Click on **YouTube Data API v3** from the search results.
5. Click the big blue **ENABLE** button.
6. *Wait a few seconds* while Google provisions the API for your project.

---

## Step 4: Generate the API Key

1. Once the API is enabled, you will be taken to the API dashboard. Click on **Credentials** in the left-hand sidebar (or navigate via ☰ > APIs & Services > Credentials).
2. Click the **+ CREATE CREDENTIALS** button at the top of the page.
3. Select **API key** from the dropdown menu.
4. A pop-up will appear displaying your new API key. 
5. **Copy this key immediately** and save it somewhere safe (like a notepad). 
6. Click **CLOSE**.

---

## Step 5: Secure & Restrict Your API Key (🚨 CRUCIAL)

The YouTube API has a strict **daily quota limit (10,000 units)**. If you leave your key unrestricted and it gets scraped from your GitHub repository, bots can drain your quota in minutes, breaking your app.

1. On the **Credentials** page, click on the **name of your newly created API key** (e.g., "API key 1").
2. Under **Application restrictions**, choose one of the following:
   - **HTTP referrers** (Recommended for Web Apps): Add your actual domains.
     - *For Local Development:* Add `http://localhost:*` and `http://127.0.0.1:*`
     - *For Production (Netlify):* Add `https://vidstream-youtube-clone.netlify.app/*`
   - **None** (Only use this temporarily while testing locally).
3. Under **API restrictions**, select **Restrict key**.
4. In the dropdown menu, find and select **YouTube Data API v3**. *(This ensures the key can ONLY be used for YouTube, not Google Maps or other paid APIs).*
5. Click **SAVE**.
   *(⚠️ Note: It can take anywhere from 5 seconds to 5 minutes for Google to apply these restrictions. If you get an error immediately after saving, wait a few minutes and refresh your app).*

---

## Step 6: Add to Your Project

1. Open your project folder in your code editor (VS Code).
2. Create a file named `.env` in the **root directory** (same level as `package.json`).
3. Paste your API key into the file exactly like this (no quotes, no spaces):

```env
VITE_YOUTUBE_API_KEY=AMzaKyA1A2c1Q1e0O0g7H8i9k0kLmApPqRsTuWw
