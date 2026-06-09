<!-- Prettier Ignore -->
<!-- eslint-disable -->

# 💕 Romantic Trip Proposal Web App

A beautiful, interactive web application to propose a romantic trip to your loved one with curated destinations in Yogyakarta, Indonesia!

## ✨ Features

- 🏠 **Beautiful Home Page** - Romantic introduction with animated hearts
- 🗺️ **Destination Gallery** - 10 carefully curated romantic places in Yogyakarta
- 💝 **Interactive Selection** - Choose your favorite destination with engaging card UI
- 🎊 **Celebratory Effects** - Confetti animation when proposal is confirmed
- 📸 **Image Gallery** - High-quality images for each destination
- 🎵 **Romantic Animations** - Smooth transitions and engaging visual effects
- 📱 **Fully Responsive** - Beautiful on desktop, tablet, and mobile devices
- 🔗 **Share Features** - Share your proposal on social media
- 💾 **Download** - Save your proposal as an image

## 🌴 Yogyakarta Destinations Included

1. **Borobudur Temple Sunrise** - World's largest Buddhist temple with stunning sunrise
2. **Prambanan Temple at Sunset** - UNESCO World Heritage Site with Ramayana Ballet
3. **Parangtritis Beach** - Magical beach with sunset horseback rides
4. **Taman Sari Water Castle** - Historic royal gardens with secret passageways
5. **HeHa Sky View** - Panoramic views with sky bridges and romantic dining
6. **Bukit Bintang (Star Hill)** - Romantic night viewpoint with city lights
7. **Pine Forest Mangunan** - Serene pine forest perfect for peaceful walks
8. **Malioboro Street Night Stroll** - Vibrant street with local culture and food
9. **Kalinampu Natural Park** - Dreamy water hyacinth gardens
10. **Romantic Dinner Experience** - Fine dining with scenic views and candlelit ambiance

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/Ebyyyxx/romantic-trip-proposal.git

# Navigate to the project
cd romantic-trip-proposal

# Install dependencies
npm install

# Start the development server
npm run dev
```

The app will open at `http://localhost:3000`

### Build for Production

```bash
npm run build

# Preview the production build
npm run preview
```

## 🛠️ Technology Stack

- **Frontend Framework**: React 18
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Animations**: CSS Animations + Canvas Confetti
- **Hosting Ready**: Can be deployed to Vercel, Netlify, or any static hosting

## 📦 Project Structure

```
romantic-trip-proposal/
├── src/
│   ├── components/
│   │   ├── HomePage.jsx          # Welcome page with intro
│   │   ├── DestinationGallery.jsx # Gallery of destinations
│   │   ├── DestinationCard.jsx    # Individual destination card
│   │   └── ProposalPage.jsx       # Final proposal confirmation
│   ├── data/
│   │   └── destinations.js        # All destination data
│   ├── App.jsx                    # Main app component
│   ├── main.jsx                   # Entry point
│   └── index.css                  # Global styles
├── public/
├── index.html                     # HTML template
├── vite.config.js                # Vite configuration
├── tailwind.config.js             # Tailwind CSS config
├── postcss.config.js              # PostCSS config
└── package.json                   # Dependencies
```

## 🎨 Customization

### Change Destinations
Edit `src/data/destinations.js` to add, remove, or modify destinations. Each destination should have:
- `id`: Unique identifier
- `name`: Destination name
- `description`: Detailed description
- `image`: Image URL
- `highlight`: Key highlight
- `activities`: Array of activities
- `vibe`: Romantic vibe/theme

### Customize Colors
Edit `tailwind.config.js` to change the color scheme and animations.

### Add Background Music
Add an `<audio>` element to `src/App.jsx` for romantic background music.

## 📱 Responsive Design

The app is fully responsive and looks great on:
- Desktop (1920px and above)
- Tablet (768px - 1024px)
- Mobile (320px - 767px)

## 🌐 Deployment

### Deploy to Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Deploy to Netlify
```bash
npm run build
# Then drag and drop the 'dist' folder to Netlify
```

### Deploy to GitHub Pages
1. Update `vite.config.js` with your repo name
2. Run `npm run build`
3. Push the `dist` folder to `gh-pages` branch

## 🎯 How to Use

1. **Start**: Click "Let's Choose Our Destination" on the home page
2. **Browse**: Scroll through all 10 romantic destinations
3. **Select**: Click on any destination to see full details
4. **Confirm**: Click "Let's Go Here! ���" to confirm your choice
5. **Celebrate**: Confetti! 🎊
6. **Share**: Share your proposal or save as an image

## 💡 Tips for Best Experience

- Use on a device with sound enabled for better immersion
- Perform in a romantic setting for maximum impact
- Take screenshots of the final proposal page
- You can customize the destination data with your own images

## 🤝 Contributing

Feel free to fork and improve this project! Some ideas:
- Add more destinations
- Add background music
- Create multiple proposal themes
- Add more animations and effects
- Support for multiple languages

## 📄 License

This project is open source and available for personal use.

## 💌 Made with Love

Created for those special moments that deserve a beautiful, memorable presentation. ✨💕

---

**Ready to make your proposal unforgettable?** 🌹

Start the app and sweep your loved one off their feet with this romantic destination proposal! 💑✈️
