# Virtual Store

An online shopping portal for a fictional store.

## Author

Jedidiah Staley

## Deployment

The [Deployed Site](https://staley-store.netlify.app/) will take about 60 seconds to display content due to the backend server having to spin up, being a free instance on Render.com.


## Overview

The Virtual Store application powers an online storefront that allows users to browse product offerings by category, place items in their shopping cart, and check out when they are ready to make their purchase.

### Technical Overview

The application is created with the following overall architecture and methodologies:

- React
- ES6 Classes
- Redux Store for Application State
- Deployed API with MongoDB storage for storing categories and products
- Superagent or Axios for performing API Requests
- Material UI for layout and styling
- Test Driven Development, using Jest
- Deployment to a cloud provider (Netlify, Amplify, or GitHub Pages)

## Setting Up the Application

1. Clone the repository:

    ```bash
    git clone <https://github.com/yourusername/virtual-store.git>
    ```

2. Navigate to the project directory:

    ```bash
    cd virtual-store
    ```

3. Install dependencies:

    ```bash
    npm install
    ```

4. Start the development server:

    ```bash
    npm start
    ```

## Development Process

### Whiteboard

[Whiteboard](./images/whiteboard.png)

### Phase 1: Application Setup

- Basic React Application
- Redux State Management
- State managed in memory
- Material UI Components & Styling

### Phase 2: Shopping Cart

- Add items to a shopping cart
- Update quantities
- Remove items from the cart
- Show the cart in real-time on the UI

### Phase 3: Live Data

- Connect the application to a live API
- Persist changes to products based on cart activity

### Phase 4: Checkout & Detail Pages

- Refactor the store to use the latest Redux design pattern (Redux Toolkit)
- Add a cart checkout page
- Add a product details page

## Credits

- OpenAI's ChatGPT 4o was used extensively in writing tests and debugging

- Cart icon obtained from flaticon.com [here](https://www.flaticon.com/free-icons/smart-cart)
