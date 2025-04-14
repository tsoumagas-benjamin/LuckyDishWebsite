# Lucky Dish Website 🍽️

## Overview
Lucky Dish provides customers a seamless and visually pleasing experience in viewing the menu and information about the restaurant. Users should be able to search the menu items, filter by category (breakfast/lunch/dinner/dessert/etc.) and view menu item costs and nutritional value at a glance. As a health conscious restaurant, dishes should be labeled for common dietary restrictions such as vegan/vegetarian/nut-free. As well the website should facilitate easy ordering and ways to see the total at a glance.

## Features
- Search & Filter Menu Items  
- View Nutritional Information  
- Place an Order and See Total Cost  
- Dietary Labels for Vegan, Vegetarian, and Nut-Free Dishes  

## How to Run the Project
1. Clone the repository:
   ```bash
   git clone https://github.com/tsoumagas-benjamin/LuckyDishWebsite.git
   ```
2. Navigate to the project folder:
   ```bash
   cd LuckyDishWebsite/lucky-dish-website
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```
5. Open **http://localhost:3000** in your browser

## API Used
- [Edamam API](https://developer.edamam.com/) for nutrition analysis
- [API Ninja](https://api-ninjas.com/) recipe data
- [Spooncular API](https://spoonacular.com/) for additional recipe data

## 🌐 Routing Overview

This project uses Next.js file-based routing. Below is a simple guide to understand how each page or folder works:


### 🏠 Main Pages

| Route        | What It Does                                   |
|--------------|------------------------------------------------|
| `/`          | Main landing page (index.js)                   |
| `/home`      | Shows homepage after login. Displays menu items and recipes. |
| `/about`     | Info about the Lucky Dish app and the team     |
| `/login`     | Sign in page using `SignIn` and `SignInForm` components |
| `/signup`    | Sign up form using `SignUp` and `SignUpForm` components |
| `/menu`      | Displays a scrollable list of food items       |
| `/menu/[id]` | Dynamic page that shows detailed info for a selected dish |


### ⚙️ API Routes (Backend Stuff)

These run on the server inside `pages/api/`.

| Route            | What It Does                                      |
|------------------|---------------------------------------------------|
| `/api/hello`     | Test route. Just returns a hello message          |
| `/api/recipes`   | Calls Spoonacular API to get recipe search results |


### 🧩 Components That Help With Routing

| Component     | What It Does                                         |
|---------------|------------------------------------------------------|
| `NavBar.js`   | Used on most pages. Links to Home, About, Menu, Login |
| `MenuItem.js` | Links each dish to its detailed `/menu/[id]` page    |
| `ScrollMenu.js` | Renders a list of `MenuItem` components, each linking to a dynamic route |
| `SearchBar.js` | Triggers filtered search results that are displayed in the `ScrollMenu` |


### User Journey

1. User goes to `/login` and signs in.
2. They’re taken to `/home` to see food options.
3. They click on a dish, which takes them to `/menu/[id]`.
4. They can learn more or go to `/about` to read about the app.


## Component Descriptions

### **MenuItem.js**
The `MenuItem` component represents an individual dish in the menu. The key features added in **Phase 2**:
- Added an `item` prop that passes data for each menu item, including `id`, `image`, `title`, etc.
- Implemented a "favorite" feature that allows users to toggle their favorite dishes.
- Introduced dynamic routing with `Link` to allow navigation to detailed dish pages (`/menu/[id]`), which is useful for the use of Spoonacular API for displaying nutritional information. Like This:
![Lucky Dish Image](https://i.imgur.com/IRGPbLA.png)

### **NavBar.js**
The `NavBar` component handles the navigation across the website. Updates made in **Phase 2**:
- Links for **Homepage**, **About Us**, **Menu**, and **Login** have been added to the navigation bar.
- Mobile-friendly navigation: implemented state handling to toggle the mobile menu visibility.
- Ensured the styling was consistent with the overall design of the site.
![Image Description](https://i.imgur.com/xyz123.png)


### **ScrollMenu.js**
The `ScrollMenu` component renders a list of `MenuItem` components dynamically based on the menu items passed to it. Key updates in **Phase 2**:
- Dynamically renders the menu items received as props from a parent component.
- Added conditional rendering to display a message when no menu items are found.

### **SignUp.js**
The `SignUp` component handles user registration. Key features added in **Phase 2**:
- Integrated a custom `SignUpForm` component that handles form submission and validation for new user accounts.
- Added necessary styling using CSS modules to match the overall design of the application.
- Includes a heading for clarity and structured form layout.

### **SignIn.js**
The `SignIn` component handles user login functionality. Key features added in **Phase 2**:
- Uses the custom `SignInForm` component to manage user input and submission.
- Applies modular CSS for consistent styling across the login interface.
- Includes a heading element to clearly indicate the purpose of the page to users.
![Image Description](https://i.imgur.com/xyz123.png)


### **MenuBar.js**
The `MenuBar` component displays category filter buttons for users to switch between different food types. Key features added in **Phase 2**:
- Introduced local state `activeCategory` to manage the currently selected category.
- Provides buttons for "Breakfast," "Lunch," "Dinner," "Dessert," and "Drinks."
- Category selection is currently local; can be expanded to filter menu items dynamically in future phases.
![Image Description](https://i.imgur.com/hhs0nZa.png)


### **PageHeader.js**
The `PageHeader` component is a static header displayed at the top of the application. Key features added in **Phase 2**:
- Displays the Lucky Dish logo alongside the app name for branding.
- Uses a separate CSS module for styling, ensuring visual consistency across pages.

### **recipes.js**
The `recipes` API route handles server-side requests to the Spoonacular API to fetch recipes. Key features added in **Phase 2**:
- Validates query parameters and returns errors if missing or empty.
- Sends a GET request to the Spoonacular API using a valid API key.
- Maps and formats the recipe data from the external API into a usable structure for the frontend.
- Logs and handles errors both for unexpected responses and failed API calls.


## Phase 2 Summary
In **Phase 2**, we focused on enhancing the user interface and routing functionality. The following key updates were made:
- **MenuItem** component now supports dynamic props for individual items.
- **ScrollMenu** dynamically renders the list of menu items passed from the parent.
- **NavBar** now includes links to core pages (Home, About, Menu, Login) with improved mobile compatibility
- Added dynamic routing for menu items, allowing users to click on a dish and view more detailed information
- The **SignIn** and **SignUp** system now have updated dedicated form components


# Testing Report

#### Base Layout Created 3/31/25 (no big updates occurded before this date worth documenting)

## April 2nd

### As of April 2nd, 2025 (11:22AM)

#### Working Features
- Sign-up and sign-in pages are displayed in the Login tab
- "About Us" page includes history, mission statement, and contact info
- Mobile compatibility works well
- Tabs for Breakfast, Lunch, Dinner, Dessert, and Drinks are visible and neatly placed

Issues Found
1. **Search Bar Not Displaying Results** - The search function does not return menu items
2. **Menu Items Missing** - No menu items are displayed in any tab (Breakfast, Lunch, Dinner, Dessert, Drinks)
3. **API Integration Missing** - Edamam API for nutrition data and API Ninja for recipes are not implemented
4. **Order Form Layout Missing** - There is no form for submitting orders or displaying total order cost

Suggested Fixes
- Add a confirmation message when sign-up is successful
- Display menu items in each category (Breakfast, Lunch, etc.)
- Implement API calls for nutrition analysis and recipes
- Use bold text for navigation and menu category buttons for better readability on small screens

### As of April 2nd, 2025 (5:00PM)  

#### NEW UPDATES
- Spoonacular API Is Now Being Used To Fetch Recipes (Can be located in pages/api/recipes.js)
- Check Out Needed Fixes 

Working Features
- Sign-up and sign-in pages are displayed in the Login tab
- "About Us" page includes history, mission statement, and contact info
- Mobile compatibility works well
- Tabs for Breakfast, Lunch, Dinner, Dessert, and Drinks are visible and neatly placed
- Spoonacular API is being used to fetch recipes 

Issues Found
1. **Search Bar Not Displaying Results** - The search function does not return menu items
2. **Menu Items Missing** - No menu items are displayed in any tab (Breakfast, Lunch, Dinner, Dessert, Drinks)
3. **API Integration Missing** - Edamam API for nutrition data 
4. **Order Form Layout Missing** - There is no form for submitting orders or displaying total order cost
5. **Bottom Tabs** - Lower Tabs (About us, Menu, & Login) need to be locked to the bottom of the screen (they currently are in the middle)

Suggested Fixes
- Add a confirmation message when sign-up is successful
- Implement API calls for nutrition analysis 
- Use bold text for navigation and menu category buttons for better readability on small screens
- Search Bar Needs Usabilty (NEEDS MENU ITEMS TO FUNCTION)
- Text Displayed Twice unintentionally (As Seen In Image Below)

![image](https://github.com/user-attachments/assets/fd8b1ffb-c7a6-4eaa-81d1-ec55c2bc4832)

### Note:
No work was committed between April 3rd to April 11th thus no work could be reviewed or documented during that time.
All updates and documentation changes resume on April 12th, 2025.

## April 12th

#### New Updates
Updated styling for
- MenuItem component
- ScrollMenu component
- SignIn component

**All Functional**

## April 14th

#### New Updates
MenuItem Component
- Added item prop to support improved data flow
- The search bar and API can now be used to search for items

Homepage
- Added a new homepage component
- Navigation bar updated to include homepage

ScrollMenu Changes
- Adjusted for potential fixes in API usage
- Routing with [id].js
- Created a dynamic route for menu items
May help in passing and routing menu data with API

Menu Index Fix
- Fixed an error found in the menu/index.js file

**All Functional**


### Any Further Changes Pushed After Last Documention Update Period Has Passed (Currently April 14th, 2025) Will Not Be Shown Till The Next Update 



# Contributors
- **Zainab** - Frontend Development
- **Steven** - State Management & Component Logic
- **Ben** - Styling & UI/UX Design
- **Navjot** - API Integration & Data Handling
- **Kuldip** - Testing & Documentation
