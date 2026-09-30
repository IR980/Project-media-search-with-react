# Media Search & Collection App

A React + Vite application that lets users search for media across three categories: photos, videos, and GIFs. Users can switch tabs, browse results, and save favorite items to a personal collection.

## Features

- Search media by keyword
- Switch between photo, video, and GIF results
- Fetch data from Unsplash, Pexels, and Giphy APIs
- Save selected items to a collection
- Remove or clear saved items from the collection page
- Responsive UI built with React and Tailwind CSS
- Toast notifications for add/remove actions
- Collection persisted in browser localStorage

## Tech Stack

- React
- Vite
- Redux Toolkit
- React Router DOM
- Axios
- Tailwind CSS
- React Toastify

## Project Structure

```bash
src/
├── api/
│   └── mediaApi.js
├── components/
│   ├── Navbar.jsx
│   ├── SearchBar.jsx
│   ├── Tabs.jsx
│   ├── ResultGrid.jsx
│   ├── ResultCard.jsx
│   └── CollectionCard.jsx
├── pages/
│   ├── HomePage.jsx
│   └── CollectionPage.jsx
├── redux/
│   ├── store.js
│   └── features/
│       ├── searchSlice.js
│       └── collectionSlice.js
├── App.jsx
├── main.jsx
├── index.css
└── App.css
```

## Prerequisites

Before running the app, make sure you have:

- Node.js installed
- npm or yarn installed
- API keys from:
  - Unsplash
  - Pexels
  - Giphy

## Setup

1. Install project dependencies:

```bash
npm install
```

2. Create a `.env` file in the project root:

```env
VITE_UNSPLASH_KEY=your_unsplash_access_key
VITE_PEXELS_KEY=your_pexels_api_key
VITE_GIPHY_KEY=your_giphy_api_key
```

3. Start the development server:

```bash
npm run dev
```

4. Open the local URL shown in the terminal, usually:

```bash
http://localhost:5173
```

## Available Scripts

```bash
npm run dev
npm run build
npm run preview
npm run lint
```

## How It Works

- Enter a search term in the search bar.
- Select the media type: photos, videos, or GIFs.
- The app calls the corresponding API and displays the results.
- Click on a result to save it to your collection.
- Navigate to the collection page to view and clear saved items.

## Notes

- The collection is stored in localStorage, so it persists across page refreshes in the same browser.
- Missing or invalid API keys will cause API requests to fail, so make sure the environment variables are correctly configured.

## API Providers

- Unsplash: https://unsplash.com/developers
- Pexels: https://www.pexels.com/api/
- Giphy: https://developers.giphy.com/

## License

This project is for learning and personal use. Add your own license if you plan to distribute or deploy it publicly.
