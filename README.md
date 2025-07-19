# Two-Step Registration Form (React + Vite)

## Project Setup

1. Clone the repo:  
   `git clone https://github.com/your-username/zdata-registration.git`  
   `cd zdata-registration`

2. Install dependencies:  
   `npm install`


## Running the App

Start the development server:  
`npm run dev`

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Assumptions & Decisions

- Used React Context API for managing form state globally.  
- Client-side validation done before navigation or submission.  
- Axios used for API calls with the base URL from `.env`.  
- Tailwind CSS for styling, focusing on responsive and clean UI.  
- Disabled navigation buttons until inputs are valid.  
- API expects JSON payload and returns user info or error messages.
