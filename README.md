# LUMEN

**Learning Using Machine-intelligence for Efficient Navigation**

## 🚀 Project Overview

LUMEN is a web-based IDE designed to help users solve Data Structures & Algorithms (DSA) concepts with the guidance of a Retrieval-Augmented Generation (RAG) based bot.  
Unlike traditional platforms, LUMEN does **not** provide direct solutions or debug your code. Instead, it acts like a teacher—encouraging you to think about your approach, understand the intuition behind each problem, and refine your solution process.  
The bot interacts with you to deepen your conceptual understanding, helping you build problem-solving skills rather than just finding answers.

LUMEN is built with React, TypeScript, Vite and SCSS, leveraging modern frontend patterns and a modular architecture to support future ML/AI enhancements.

## 🧱 Features

- Interactive frontend built with React + TypeScript.
- Modular architecture that allows toggling of IDE / question components.
- Styled using SCSS, with a responsive layout using flex and animated transitions.
- Placeholder for future integration of machine-intelligence modules for “navigation” assistance.
- Easy to extend: add new question types, add AI-driven navigation features.

## 📁 Tech Stack

- **Frontend:** React + TypeScript (using Vite)
- **Styling:** SCSS
- **Animations / Layout:** CSS flex + optional motion library
- **Build / Bundler:** Vite
- **Code Editor Component:** Monaco Editor via `@monaco-editor/react` for the IDE panel
- **Linting / Typing:** ESLint + TypeScript

## 📂 Folder Structure

```
lumen/
├── public/               # Static files (icons, index.html, etc.)
├── src/                  # Core React app source
│   ├── components/       # Reusable UI components (Questions, IDE, etc.)
│   ├── pages/ or views/  # Main screens/pages
│   ├── styles/           # SCSS partials and main styles
│   └── ...               # Other app logic, hooks, utils
├── config/               # Configuration files (if any)
├── tests/                # Test files (if any)
├── vite.config.ts        # Vite configuration
├── tsconfig.json         # TypeScript config
├── package.json          # Dependencies and scripts
└── README.md             # Project documentation
```

## 🔧 Setup & Installation

### Prerequisites

- Node.js (v16+ recommended)
- npm or yarn

### Installation

```sh
git clone https://github.com/UditDe/LUMEN.git
cd LUMEN
npm install
```

### Running in development mode

```sh
npm run dev
```

Then open [http://localhost:5173](http://localhost:5173) (or the address shown in terminal) to view the app.

### Building for production

```sh
npm run build
```

Build artifacts will be in `dist/`.

### Running tests (if any)

Add instructions here if you integrate tests (e.g. Jest, Cypress).

## 🧭 How it works (Structure)

- `src/` — contains the core React app.
- `components/` — UI components (e.g. Questions, IDE).
- `pages/` or `views/` — main screens.
- `styles/` — SCSS partials and main styles.
- `public/` — static files (icons, index.html).
- `vite.config.ts` — Vite configuration.
- `tsconfig.*.json` — TypeScript config files.
- `package.json` — dependencies and scripts.

### Key functional behaviour

The right container houses two panels:
- The **Questions panel** (always present when a `question_number` is defined).
- The **IDE panel** (conditionally rendered when `isEditorOpen` is true).

**Layout behaviour:**
- When only Questions panel is present → it takes full width.
- When IDE panel appears → both panels share equal width, with smooth transitions/animations.

The Monaco Editor theme/style can be customized via `onMount` callback registering a custom theme (ex: adjusting the editor background).

SCSS + CSS variables allow styling and layout tweaks.

## 🎨 Customization & Theming

To change the background of the Monaco Editor, use the `onMount` callback in the Editor component:

```js
const onMount = (editor, monaco) => {
  monaco.editor.defineTheme('myCustomTheme', {
    base: 'vs-dark',
    inherit: true,
    rules: [],
    colors: {
      'editor.background': '#1e1e2e', // your custom color
    },
  });
  monaco.editor.setTheme('myCustomTheme');
};
```

**SCSS usage:** you may use CSS variables for heights, margins etc. Example for calculating element height:

```css
:root {
  --h4-height: 2rem; // adjust according to your h4 font size / line-height
}
.some-element {
  height: calc(100vh - var(--h4-height));
}
```

## 🤝 Contributing

Contributions are welcome. If you’d like to add features, fix bugs or improve performance:

1. Fork the repo.
2. Create a feature branch (`git checkout -b feature/my-feature`).
3. Commit your changes (`git commit -m 'Add my feature'`).
4. Push to the branch (`git push origin feature/my-feature`).
5. Open a Pull Request.

Please ensure your code is linted and builds successfully before submitting.

## 📝 License

Specify or link the license here, e.g., MIT.

> Note: If no explicit license file is provided, it’s recommended to add one for clarity.

## 📬 Contact

For questions or feedback, you can reach out to the author Udit via GitHub profile: [UditDe](https://github.com/UditDe).

---

_This README was automatically generated and should be adapted to reflect any additional functionality or backend integrations as the project evolves._
