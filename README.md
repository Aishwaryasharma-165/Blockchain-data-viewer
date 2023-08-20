# Blockchain-data-viewer

This project is a simple web application built using EJS, JavaScript, and HTML. It utilizes the Axios library to fetch data from the blockchain.com API. The main purpose of this project is to provide users with information about blockchain symbols, including their price and base currency details.

## Features

- Fetches blockchain symbol data from the blockchain.com API.
- Displays the price of a selected blockchain symbol.
- Provides information about the base currency associated with the symbol.

## Prerequisites

- Node.js installed on your system.
- Basic understanding of EJS, HTML, and JavaScript.
- An active internet connection to fetch data from the blockchain.com API.
- An API key from blockchain.com. [Register here](https://www.blockchain.com) if you don't have one.

## Setup

1. Clone this repository to your local machine.
2. Navigate to the project directory in your terminal.
3. Run `npm install` to install the required dependencies.

## Configuration

1. Open the `index.js` file.
2. Find the commented section where the API key is expected.
3. Replace `'YOUR_API_KEY'` with your actual blockchain.com API key.

## Usage

1. Open the `index.ejs` file in a browser to access the web application.
2. Login or register on blockchain.com to get your API key.
3. Enter the obtained API key in the `app.js` file.
4. Enter the desired blockchain symbol in the input field.
5. Click the "Get Price" button to retrieve and display the price of the symbol.
6. Click the "Get Base Currency" button to retrieve and display the base currency and additional information.

## Customization

You can easily customize this project for your own needs:

- Modify the UI elements and styles in the `index.ejs` file.
- Adjust the API endpoint and parameters in the JavaScript code.
- Enhance the functionality by adding more buttons or features.

## Limitations

- The accuracy of the data depends on the blockchain.com API.
- This project is intended for educational purposes and may not have all error handling mechanisms.

## Acknowledgments

- This project was inspired by the desire to interact with blockchain data in a simple web application.
