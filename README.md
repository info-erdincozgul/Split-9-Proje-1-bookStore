# Book Shopping Cart
## About the Project
This project is a simple e-commerce application developed using the React Context API. Users can browse a list of products, add them to a shopping cart, and view the contents of the cart. The most important feature of the application is that its state management is handled by the central Context API, and the cart data is persisted in the browser's local storage.

The project uses React Router for page navigation and Styled Components for component-based dynamic styling.
## Key Features
* Centralized State Management (Context API): Application states, such as the product list and shopping cart, are managed via the ProductContext and CartContext components. This allows for easy access to data without the need for prop drilling.
* Data Persistence (useLocalStorage Custom Hook): The data in the cart is stored in localStorage using a custom hook called useLocalStorage. This ensures that the cart contents are preserved even when the page is refreshed.
* Page Navigation (React Router): Navigation within the application is provided by React Router. There are two main pages: Products (/) and Shopping Cart (/cart).
* Shopping Cart Management:
    * The Products.jsx component gets products from the ProductContext and lists them using the Product components.
    * The Product.jsx component handles the "Add to cart" functionality.
    * The ShoppingCart.jsx component gets the cart data from the CartContext, calculates the total price, and lists the cart's contents.
    * The ShoppingCartItem.jsx component includes a button to remove an item from the cart.
* Component-Based Styling (Styled Components): The visual design of the application is created using the Styled Components library. Styles are centrally defined in a separate scParts.jsx file.
## Project Structure
src/:
* App.jsx: The main component of the application; it contains the Context providers and React Router routing logic.
* contexts/: Contains the Context files that handle the application's state management.
* components/: The folder containing the application's interface components.
* hooks/: Includes the custom useLocalStorage hook.
* data.js: A local data file containing the product data for the application.
## How to Run
To run this project on your local machine, you need to have Node.js and npm installed.
1. Install Required Packages:
```
Bash
npm install
```
2. Start the Application:
```
Bash
npm run dev
```
3. View in Browser: After running the command, your project will typically open automatically at http://localhost:5173/.
## Learning Outcomes
By exploring or working on this project, you can gain experience in the following areas:
* You will learn how to use React's Context API to manage global state. The project uses a ProductContext to store and provide product data to components. It also uses a CartContext to manage the state of the shopping cart, including adding and removing items. This approach avoids prop drilling and makes state accessible to any component that needs it, like the Navigation component displaying the cart item count.
* You will learn to build a clean, modular application using a component-based structure. The project separates concerns into distinct components like Products, ShoppingCart, and reusable Product and ShoppingCartItem components. This makes the codebase more organized and easier to maintain.
* You will gain experience using essential React Hooks. The useState hook is used to manage component-level state, such as the list of products. The useContext hook is used to access data from the Context API. The project also utilizes a custom useLocalStorage hook to persist the shopping cart data across page refreshes, which you will learn to implement and use.
* You will learn how to use the styled-components library to write component-level CSS in JavaScript. This project demonstrates creating styled components for different UI elements like ScNav, ScProduct, and ScCartItem, which helps in scoping styles and preventing conflicts.
* You will learn to implement client-side routing using React Router DOM. The App.jsx file defines routes for the main products page (/) and the shopping cart page (/cart), allowing for seamless navigation without a full page reload. The NavLink component in the Navigation bar is also used to provide active link styling.
