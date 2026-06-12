# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# Video Calling App

A real-time video calling web application built with **React** and **ZegoCloud UIKit**. Users can create or join meeting rooms instantly by entering a Room ID.

---

## Features

-  Create instant meeting rooms
-  Join existing rooms via Room ID
-  Group video calling support
-  Share meeting link with others
-  Camera & microphone controls
-  Pre-join preview screen
-  Auto-redirect to home on leaving room

---

## Tech Stack

| Technology       | Purpose              |
| ---------------- | -------------------- |
| React            | Frontend UI          |
| React Router DOM | Page routing         |
| ZegoCloud UIKit  | Video calling engine |
| Vite             | Build tool           |
| Tailwind CSS     | Styling              |

---

## Project Structure

```
VIDEO-CALLING/
├── public/
├── src/
│   ├── assets/
│   ├── App.jsx               # Main router setup
│   ├── CreateMeetingRoom.jsx # Home page — enter Room ID
│   ├── Meeting.jsx           # Video call page
│   ├── index.css             # Global styles
│   └── main.jsx              # App entry point
├── .env.local                # Environment variables (secret keys)
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

---

## Setup & Installation

### 1. Clone the repository

```bash
git clone https://github.com/your-username/video-calling.git
cd video-calling
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a `.env.local` file in the project root:

```env
VITE_ZEGOCLOUD_SECRET_KEY=your_zegocloud_server_secret_here
```

> **Important:** The file must be named `.env.local` (not `.enc.local`)

#### How to get your ZegoCloud Secret Key:

1. Go to [console.zegocloud.com](https://console.zegocloud.com)
2. Login → Select your project
3. Go to **App Sign** → Copy **Server Secret**

### 4. Run the development server

```bash
npm run dev
```

Open your browser at: **http://localhost:5173**

---

## How to Use

1. Open the app in your browser
2. Enter any **Room ID** (e.g. `123456`) on the home page
3. Click **Join / Create Meeting**
4. Allow camera & microphone permissions
5. Share the same **Room ID** with others so they can join
6. Click **Leave** to exit and return to the home page

---

## Available Scripts

| Command           | Description              |
| ----------------- | ------------------------ |
| `npm run dev`     | Start development server |
| `npm run build`   | Build for production     |
| `npm run preview` | Preview production build |
| `npm run lint`    | Run ESLint checks        |

---

## Deployment

### Build for production:

```bash
npm run build
```

The output will be in the `dist/` folder. Deploy it to any static hosting:

- [Vercel](https://vercel.com) — `vercel deploy`
- [Netlify](https://netlify.com) — drag & drop the `dist/` folder
- [GitHub Pages](https://pages.github.com)

> **Security Note:** `generateKitTokenForTest` is for development only.
> For production, generate tokens on your **backend server** to keep your secret key safe.

---

## Common Issues & Fixes

### "ZEGOCLOUD secret key is missing"

- Make sure your file is named **`.env.local`** (not `.env`, not `.enc.local`)
- Restart the dev server after creating/editing `.env.local`

### Video not showing / black screen

- Allow **camera and microphone** permissions in your browser
- Try a different browser (Chrome recommended)

### Room not connecting

- Check your internet connection
- Make sure your App ID and Secret Key match your ZegoCloud project

### Changes to `.env.local` not working

- Always **restart** the dev server: `Ctrl+C` then `npm run dev`

---

## Dependencies

```json
{
  "@zegocloud/zego-uikit-prebuilt": "latest",
  "react": "^18.x",
  "react-dom": "^18.x",
  "react-router-dom": "^6.x"
}
```

---

## License

This project is open source and available under the [MIT License](LICENSE).

---

## Author

Built with  using React + ZegoCloud
