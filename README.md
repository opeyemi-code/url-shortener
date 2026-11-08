# URL Shortener

A responsive URL shortening application built with React and Tailwind CSS. It allows users to convert long URLs into shorter, shareable links using the [is.gd API](https://is.gd/).

## Features

- **URL Shortening:** Convert long URLs into short links using the is.gd API.
- **URL Validation:** Validate user input before making API requests.
- **Dynamic Link Display:** Display newly generated shortened URLs without refreshing the page.
- **Copy to Clipboard:** Copy shortened URLs with a single click.
- **Persistent Storage:** Save shortened links in browser localStorage so they remain available after refreshing the page.
- **Loading and Error Feedback:** Provide feedback during URL shortening and when requests fail.
- **Responsive Design:** Interface adapts to different screen sizes.

## Built With

- React
- JavaScript
- Tailwind CSS
- is.gd URL Shortening API
- Browser localStorage API
- Clipboard API

## Getting Started

Follow these steps to run the project locally.

### Prerequisites

- Node.js
- npm

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/opeyemi-code/url-shortner-api
   ```

2. Navigate into the project directory:

   ```bash
   cd url-shortner-api
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm start
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## How It Works

1. Enter a valid URL into the input field.
2. Submit the form to send a request to the is.gd API.
3. The application receives and displays the shortened URL.
4. Copy the generated link using the copy button.
5. Previously generated links remain available through browser localStorage.

## API

This project uses the [is.gd URL Shortening API](https://www.is.gd/apishorteningreference.php) to generate shortened URLs.

## Author

**Opeyemi Obatola**

- GitHub: [@opeyemi-code](https://github.com/opeyemi-code)
- Portfolio: [opeyemiobatola.com.ng](https://opeyemiobatola.com.ng)
