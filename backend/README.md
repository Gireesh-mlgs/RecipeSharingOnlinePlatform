# Recipe Backend - Easy (Express + MongoDB)

## Setup

1. Copy `.env.example` to `.env` and fill in your MongoDB connection string and JWT secret.
2. Install dependencies:
   ```
   npm install
   ```
3. Run in development:
   ```
   npm run dev
   ```
4. Set `REACT_APP_API_URL` in your React app to point to your backend URL (e.g. http://localhost:5000).

## Notes

- This version does not handle file/image uploads — recipes expect `images` to be an array of URLs.
- You can later add Cloudinary support to upload images.
