# Portfolio

Welcome to my, a Next.js-based portfolio project that leverages modern web technologies for a dynamic and immersive user experience. The project incorporates 3D animations, smooth transitions, and interactive UI elements using `@react-three/fiber`, `@react-three/drei`, and `framer-motion` to deliver a visually engaging and performant user interface.

## Features

- **Next.js 14**: Utilizes the latest version of Next.js for server-side rendering, optimized builds, and enhanced developer experience.
- **3D Animations**: Powered by `@react-three/fiber` and `@react-three/drei` to create interactive 3D models and animations.
- **Smooth Transitions**: Framer Motion is used for seamless page transitions and motion effects that elevate the UX.
- **Tailwind CSS**: Easily customizable styling with utility-first CSS.
- **Embla Carousel**: Carousel component for showcasing content in a slider format.

## Technologies Used

- **Next.js 14.2.7**
- **React 18**
- **@react-three/fiber**: For 3D rendering and animations in the browser.
- **@react-three/drei**: A collection of useful helpers for working with three.js and `@react-three/fiber`.
- **Framer Motion**: For smooth animations and transitions.
- **Tailwind CSS**: For responsive, utility-based styling.
- **Embla Carousel**: For creating carousels/sliders with a smooth experience.

## Installation

To get started with this project, follow these steps:

1. **Fork the repository**: Click the "Fork" button at the top right of the repository page on GitHub to create a copy of this project to your GitHub account.

2. **Clone your fork**:
   ```
   git clone https://github.com/your-username/dorville.git
   cd dorville
   ```

3. **Install dependencies**:
   Make sure you have `Node.js` and `bun` installed. Run the following command to install all necessary dependencies:
   ```
   bun install
   ```

4. **Run the development server**:
   After installation, start the development server using:
   ```
   bun dev
   ```
   Your app will be running locally at `http://localhost:3000`.

5. **Build for production**:
   To create an optimized production build, run:
   ```
   bun run build
   ```

6. **Start the production server**:
   Once the build is ready, you can start the production server:
   ```
   bun start
   ```

## Customization

This project is built to be easily customizable. Here are a few areas you can explore to make it your own:

- **3D Models**: You can replace the default 3D models by adding your own GLTF files and updating the corresponding components that use `@react-three/fiber` and `@react-three/drei`.
- **Animations**: Modify or add custom animations using `framer-motion` to fit your design needs.
- **Styling**: Tailwind CSS allows you to easily change the look and feel of the portfolio. You can adjust or extend the existing classes in `tailwind.config.js`.

## License

This project is licensed under the MIT License, so feel free to fork, modify, and use it in your own projects.

---

Happy coding! 🎉 Feel free to reach out for any questions or contributions.
