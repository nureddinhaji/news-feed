 News Feed

This is a News Feed application built with React and Material-UI. It fetches and displays the latest news articles from various categories using the News API.

## Project Overview

This project was created as part of a course in the Diploma of Almdrasa. The application allows users to search for news articles, filter them by category, and navigate through pages of results.

## Features

- Fetches news articles from the News API
- Displays news articles with title, author, description, image, source, and published date
- Allows users to search for news articles
- Provides category filters for news articles
- Pagination for navigating through pages of news articles
- Responsive design using Material-UI components

## Technologies Used

- React
- Material-UI
- Vite
- News API

## Getting Started

### Prerequisites

- Node.js
- npm

### Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/your-username/news-feed.git
    ```
2. Navigate to the project directory:
    ```sh
    cd news-feed
    ```
3. Install the dependencies:
    ```sh
    npm install
    ```

### Running the Application

1. Create a [.env](http://_vscodecontentref_/1) file in the root directory and add your News API key:
    ```env
    VITE_NEWS_API_KEY=your_news_api_key
    ```
2. Start the development server:
    ```sh
    npm run dev
    ```
3. Open your browser and navigate to `http://localhost:3000`.

### Building the Application

To build the application for production, run:
```sh
npm run build
```
### Linting the Code

To lint the code, run:
```sh
npm run lint
```
## License
This project is licensed under the MIT License.
