# Kids Zone Web App (زۆنی منداڵان)

A beautiful, interactive, and kid-friendly web application designed for Kurdish children.

## 🚀 How to Add New Content

The application uses simple React arrays to render content dynamically. To add new items, you just need to edit the corresponding list in the page component.

### 1. Adding a New Game
File: `src/pages/Games.jsx`
Locate the `gamesList` array inside the component and add your new game as an object:
```jsx
const gamesList = [
  // Existing games...
  { 
    title: 'یاری نوێ (New Game)', 
    desc: 'کورتەیەک لەسەر یارییەکە (Short description)', 
    icon: <Star size={40}/>, // You can use any icon from lucide-react
    color: '#ff9ff3' // Choose a bright hex color
  }
];
```

### 2. Adding a New Story
File: `src/pages/Stories.jsx`
Locate the `stories` array and add your story:
```jsx
const stories = [
  // Existing stories...
  { 
    title: 'چیرۆکی نوێ (New Story Title)', 
    time: '٦ خولەک', 
    image: '🌟' // Use a fun emoji
  }
];
```

### 3. Adding a New Learning Lesson
File: `src/pages/Learning.jsx`
Locate the `lessons` array:
```jsx
const lessons = [
  // Existing lessons...
  { 
    title: 'ئاژەڵەکان (Animals)', 
    desc: 'فێربوونی ناوی ئاژەڵەکان', 
    icon: <Dog size={40}/>, 
    color: '#10ac84' 
  }
];
```

---

## 🌍 How to Deploy to Netlify for Free

### Method 1: The Easiest Way (Drag & Drop)
This method takes less than a minute and requires no Git knowledge.

1. **Build the Application**
   Open your terminal in the project folder (`test`) and run:
   ```bash
   npm run build
   ```
   This will create a new folder named `dist` (this is your final website).

2. **Upload to Netlify**
   - Go to [Netlify Drop](https://app.netlify.com/drop).
   - Sign up or log in for free.
   - Drag and drop the complete `dist` folder into the circle on the webpage.
   - Netlify will instantly generate a live link for your web app!

### Method 2: Connection with GitHub (Recommended for automatic updates)
1. Push your project code to a new repository on GitHub.
2. Go to the [Netlify Dashboard](https://app.netlify.com/).
3. Click **"Add new site"** -> **"Import an existing project"**.
4. Select GitHub, authorize it, and select your repository.
5. In the build settings, leave the defaults:
   - Build command: `npm run build`
   - Publish directory: `dist`
6. Click **Deploy Site**. Every time you push changes to GitHub, Netlify will automatically update your live site!
