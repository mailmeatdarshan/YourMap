# 🗺️ YourMap Location Finder

![logo](./logo.png)
<div align="center">

![Map Demo](https://img.shields.io/badge/Map-Interactive-blue?style=for-the-badge&logo=leaflet)
![Location](https://img.shields.io/badge/GPS-Enabled-green?style=for-the-badge&logo=googlemaps)
![Languages](https://img.shields.io/badge/Multi-Language-orange?style=for-the-badge&logo=google-translate)

*An elegant, interactive map application with real-time location tracking and multi-language geocoding*

[🚀 Live Demo](#demo) • [⚡ Quick Start](#quick-start) • [🛠️ Features](#features) • [📖 Documentation](#documentation)

</div>

---

## ✨ Features

🎯 **One-Click Location Finding** - Instantly find and navigate to your current location  
🔍 **Smart Geocoding** - Search for any place worldwide with intelligent suggestions  
🌍 **Multi-Language Support** - Search in English, French, German, Japanese, and Spanish  
📱 **Responsive Design** - Perfect experience on desktop, tablet, and mobile  
🎨 **Modern UI** - Clean, intuitive interface with smooth animations  
⚡ **Real-Time Updates** - Live location tracking with visual feedback  

## 🚀 Quick Start

### Prerequisites
- A modern web browser with GPS support
- MapTiler API key ([Get one free here](https://www.maptiler.com/))

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/mailmeatdarshan/YourMap
   cd YourMap
   ```

2. **Add your API key**
   ```javascript
   // In script.js, replace with your actual API key
   maptilersdk.config.apiKey = 'YOUR_MAPTILER_API_KEY_HERE';
   ```

3. **Launch the application**
   ```bash
   # Open index.html in your browser
   # Or serve with a local server
   python -m http.server 8000  # Python
   # OR
   npx serve .                 # Node.js
   ```

4. **🎉 You're ready to explore!**

## 🎮 How to Use

| Action | Description |
|--------|-------------|
| 📍 **Click Location Button** | Instantly center map on your current location |
| 🔍 **Search Bar** | Type any address or place name to navigate |
| 🌐 **Language Toggle** | Switch between different languages for search |
| 🖱️ **Map Interaction** | Zoom, pan, and explore the world |

## 🛠️ Project Structure

```
maptiler-location-finder/
├── 📄 index.html          # Main HTML structure
├── 🎨 styles.css          # Beautiful styling & animations  
├── ⚡ script.js           # Interactive functionality
└── 📖 README.md           # You are here!
```

## 🔧 Configuration

### API Key Setup
```javascript
// script.js
maptilersdk.config.apiKey = 'pk.your-api-key-here';
```

### Customize Map Center
```javascript
// Default: India center coordinates  
center: [78.9629, 20.5937]  // [longitude, latitude]
```

### Supported Languages
- 🇺🇸 English (`en`)
- 🇫🇷 French (`fr`)  
- 🇩🇪 German (`de`)
- 🇯🇵 Japanese (`ja`)
- 🇪🇸 Spanish (`es`)

## 📱 Browser Support

| Browser | Support | Notes |
|---------|---------|-------|
| Chrome | ✅ Full | Best experience |
| Firefox | ✅ Full | Excellent performance |
| Safari | ✅ Full | iOS/macOS compatible |
| Edge | ✅ Full | Windows optimized |

## 🔒 Privacy & Security

- **Location Data**: Never stored or transmitted to external servers
- **API Usage**: Only for map rendering and geocoding
- **HTTPS Required**: Geolocation only works on secure connections

## 🐛 Troubleshooting

### Common Issues

**Location not working?**
- Ensure HTTPS connection
- Check browser location permissions
- Verify GPS is enabled on mobile

**Map not loading?**
- Verify API key is correct
- Check internet connection
- Ensure CDN resources are accessible

**Search not working?**
- Confirm API key has geocoding permissions
- Check for JavaScript console errors

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- 🗺️ **MapTiler** - Amazing mapping platform and APIs
- 📍 **Geolocation API** - Browser location services
- 🎨 **Modern CSS** - Beautiful animations and effects


---

<div align="center">

**Made with ❤️ and lots of ☕ by Darshan**

[⭐ Star this repo](https://github.com/mailmeatdarshan/YourMap) • [🐛 Report Bug](https://github.com/mailmeatdarshan/YourMap/issues) • [💡 Request Feature](https://github.com/mailmeatdarshan/YourMap/issues)

</div>