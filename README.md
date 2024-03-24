# React News App

This is a React application that fetches and displays news articles using the [News API](https://newsapi.org/). The application allows users to browse through different categories of news and read articles from various sources.

## Installation

1. Clone this repository to your local machine.
   ```
   git clone https://github.com/jaspinderkohli/news-app.git
   ```
2. Navigate to the project directory.
   ```
   cd news-app
   ```
3. Install dependencies using npm or yarn.
   ```
   npm install
   # or
   yarn install
   ```

## Usage

1. Obtain an API key from [News API](https://newsapi.org/).
2. Create a `.env` file in the root directory of the project.
3. Add your API key to the `.env` file.
   ```
   REACT_APP_NEWS_API_KEY=your-api-key-goes-here
   ```
4. Start the development server.
   ```
   npm start
   # or
   yarn start
   ```
5. Open your browser and navigate to `http://localhost:3000` to view the application.

## Features

- Browse news articles by different categories such as business, entertainment, health, science, sports, technology, etc.
- View articles from various news sources.
- Click on an article to read the full content on the source website.
- Responsive design for seamless usage on different devices.

## Technologies Used

- React
- Axios (for making HTTP requests)
- React Router (for routing)
- Bootstrap (for styling)

## Contributing

Contributions are welcome! If you have any suggestions, improvements, or bug fixes, please open an issue or create a pull request.
