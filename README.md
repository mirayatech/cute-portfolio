# 🎨 Welcome to Your Portfolio!

This is a customizable and interactive portfolio built with **Next.js**, **Tailwind CSS**, **TypeScript**, and **GSAP**. It’s perfect for showcasing your projects, skills, and experience in a modern, responsive design!

## ✨ Features

- ⚡ **Next.js** for server-side rendering and static site generation.
- 💅 **Tailwind CSS** for utility-first styling.
- 🎬 **GSAP** for smooth animations and delightful transitions.
- 🌍 **SEO-friendly** with metadata configuration.
- 🎨 **Responsive Design**: Optimized for mobile and desktop layouts.
- 🖼️ **Custom Animations** with `gsap` for that extra spark.
  
## 📦 Installation

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) installed on your system.

### 🚀 Steps to Get Started:

**Install dependencies**:

   Using npm:

   ```bash
   npm install
   ```

   Or using yarn:

   ```bash
   yarn install
   ```

 **Run the development server**:

   Using npm:

   ```bash
   npm run dev
   ```

   Or using yarn:

   ```bash
   yarn dev
   ```

   Your development server should now be running at `http://localhost:3000`. 🎉

## 🛠️ Customization

### Modify Personal Information:

To update personal details like your name, description, and links:

1. Open the `Page.tsx` file and modify the placeholder text in the JSX elements with your own details.
2. You can adjust the animations, colors, and images as needed to fit your personal style.

### Animations with GSAP:

The animations are configured using `gsap`. You can find the animation logic inside the `useEffect` hook within `Page.tsx`. Feel free to tweak the animations or add your own custom animations using `gsap`!

```typescript
useEffect(() => {
  // Example animation for the AHOY text
  if (ahoyRef.current) {
    gsap.fromTo(
      ahoyRef.current.children,
      { scale: 0 },
      { scale: 1, duration: 1, ease: "elastic.out(1, 0.3)", stagger: 0.2 }
    );
  }
}, []);
```

### Tailwind CSS Styling:

Styling is done using Tailwind CSS. You can easily customize the colors, spacing, and layout by updating classes directly in the JSX or modifying the `tailwind.config.js` file.

```css
/* Example custom hover animation */
.button:hover span {
  animation: wave 0.8s ease-in-out infinite;
}

@keyframes wave {
  0% { transform: rotate(0deg); }
  20% { transform: rotate(-10deg); }
  40% { transform: rotate(12deg); }
  60% { transform: rotate(-8deg); }
  80% { transform: rotate(8deg); }
  100% { transform: rotate(0deg); }
}
```


### 📝 License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for more details.

