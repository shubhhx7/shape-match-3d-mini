# Shape Match 3D Mini

A simple educational browser game for children aged 5–8. Kids identify basic 3D shapes and match each one to its correct illustrated house.

---

## Features

- 5 rounds per session, one shape per round
- 5 different shapes: Cube, Cuboid, Sphere, Cone, Cylinder
- Three answer options per round (one correct, two distractors)
- Randomized shape and question order every session
- Visual feedback on correct and wrong answers
- Animated shape character with a cute face
- Score tracking and star rating on the result screen
- Play Again and Home buttons on the result screen
- Sound effects using the browser's Web Audio API
- Responsive layout that works on mobile, tablet, and desktop

---

## Shapes

| Shape    | Real-world example    |
|----------|-----------------------|
| Cube     | Dice, box             |
| Cuboid   | Brick, lunch box      |
| Sphere   | Ball                  |
| Cone     | Ice cream cone        |
| Cylinder | Can, drum             |

---

## Gameplay

1. Open the app and tap **Tap to Start** on the home screen.
2. A 3D shape character appears in the center of the screen.
3. A question is shown at the top — for example: *"Find the home for the Cube!"* or *"Find the shape with flat square faces."*
4. Three shape-house cards appear at the bottom. Tap the correct one.
5. Correct answer: confetti plays and the round advances.
6. Wrong answer: the card shakes and a hint appears. Try again.
7. After 5 rounds, the result screen shows your score and star rating.
8. Tap **Play Again** to start a new session or **Home** to return to the start screen.

---

## Rounds

Each session is exactly 5 rounds. The game shuffles both the shape order and the question type independently, so every session uses all 5 shapes and all 5 question styles exactly once. Question styles include:

- Match by shape name
- Match by real-world example
- Match by physical property
- Match by visual feature
- Match by the shape of the house door

---

## Tech Stack

- **React 19** — UI components and state management
- **Vite 8** — development server and production build
- **JavaScript (JSX)** — no TypeScript
- **Tailwind CSS** — utility classes for layout and spacing
- **Inline styles** — used for dynamic values like colors and sizes
- **CSS keyframe animations** — all animations defined in `index.css`
- **Web Audio API** — sound effects generated at runtime, no audio files needed
- **Static PNG assets** — shape house images served from `public/`

---

## Project Structure

```
shape-match-3d-mini/
├── public/
│   ├── 1.png               # Home screen background
│   ├── 3.png               # Game and result screen background
│   ├── cube.png            # Cube house image
│   ├── cuboid.png          # Cuboid house image
│   ├── sphere.png          # Sphere house image
│   ├── cone.png            # Cone house image
│   ├── cylinder.png        # Cylinder house image
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── HomeScreen.jsx      # Start screen
│   │   ├── GameScreen.jsx      # Main round screen
│   │   ├── ShapeCharacter.jsx  # Animated SVG shape with face
│   │   ├── ShapeHome.jsx       # Answer card with house image
│   │   ├── ResultScreen.jsx    # Score and celebration screen
│   │   ├── RoundCounter.jsx    # Progress dots and score
│   │   ├── Confetti.jsx        # Confetti animation on correct answer
│   │   └── SoundToggle.jsx     # Mute / unmute button
│   ├── data/
│   │   └── shapes.js           # Shape definitions and round generator
│   ├── hooks/
│   │   └── useSound.js         # Web Audio API sound hook
│   ├── App.jsx                 # Game state machine
│   ├── index.css               # Global styles and animations
│   └── main.jsx                # Entry point
├── package.json
└── vite.config.js
```

---

## Setup

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview the production build locally
npm run preview
```

The dev server runs at `http://localhost:5173` by default.

---

## Deployment

The production build outputs a fully static site to the `dist/` folder. It can be deployed to any static hosting platform:

- **Vercel** — connect the repository and it deploys automatically
- **Netlify** — drag and drop the `dist/` folder or connect via Git
- **GitHub Pages** — serve the `dist/` folder from the `gh-pages` branch
- **Cloudflare Pages** — connect the repository, set build command to `npm run build`

No server or backend is required.

---

## Possible Future Improvements

- Additional shapes (pyramid, prism)
- More rounds or a longer game mode
- Difficulty levels with harder question types
- Voice narration for pre-readers
- Progress saved between sessions
- Accessibility improvements (keyboard navigation, ARIA)

---

## Author

**Shubham Kumar**
