# Open Graph Image Generator

![Open Graph Protocol Logo](https://ogp.me/logo.png)

A project to generate dynamic images for the Open Graph (OG) protocol in web applications.

## 📌 About Open Graph

We’ve all copied an interesting link and shared it on social media like WhatsApp, Facebook, X, LinkedIn, etc. Have you noticed that when you paste the link, even before sending it, an image with information about the content appears? This is controlled by Open Graph meta tags on the source website.

> _"Open Graph is a protocol that enables customization of how content appears when a web page is shared on social media. It uses HTML meta tags to provide specific information about the page, such as title, description, and image, controlling how the shared link is displayed."_

Learn more: [https://ogp.me/](https://ogp.me/)

## 🚀 Introduction

This project demonstrates how to generate dynamic Open Graph images in a React application with React Router v7. The solution uses:

- **Satori**: Converts HTML and CSS into SVG
- **ResVG**: Converts SVG into PNG
- **fast-average-color-node**: Extracts dominant colors from images

## 🛠️ Technologies

- React Router v7
- TypeScript
- Satori
- @resvg/resvg-js
- fast-average-color-node

## ⚙️ How It Works

1. Creates a special route (`/og`) that generates dynamic images
2. Uses dynamic data (title, description, image) to create a customized design
3. Converts the design into PNG to be served as the `og:image` meta tag
4. Applies dynamic colors based on the main image for a cohesive design

## 🧑‍💻 How to Use

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```

## ✨ Features

- Real-time dynamic image generation
- Responsive design for sharing
- Adaptive colors based on the main image
- Support for custom fonts (Inter in this example)
- Easy integration with any framework

## 📄 Example Meta Tags

```javascript
export function meta() {
  return [
    { title: "Open Graph Image Generation App" },
    { name: "description", content: "Welcome to Open Graph Image Generation!" },
    { name: "og:title", content: "Open Graph Image Generation App" },
    {
      name: "og:description",
      content: "Welcome to Open Graph Image Generation!",
    },
    { name: "og:image", content: "http://localhost:5173/og/" },
    { name: "og:url", content: "http://localhost:5173/" },
    { name: "og:type", content: "website" },
    { name: "og:site_name", content: "Open Graph Image Generation" },
    { name: "og:locale", content: "en_US" },
  ];
}
```

### Extra Tip

You can test how your OG images will appear on social media using tools like:

- [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)
- [Twitter Card Validator](https://cards-dev.twitter.com/validator)

## 📝 License

MIT

---

Built by Douglas Held Pacito - 2025

---
