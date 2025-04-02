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

## Testing Report

### Base Layout Created 3/31/25 (no big updates occurded before this date worth documenting)

# April 2nd

## As of April 2nd, 2025 (11:22AM)

### ✅ Working Features
- Sign-up and sign-in pages are displayed in the Login tab
- "About Us" page includes history, mission statement, and contact info
- Mobile compatibility works well
- Tabs for Breakfast, Lunch, Dinner, Dessert, and Drinks are visible and neatly placed

### ❌ Issues Found
1. **Search Bar Not Displaying Results** - The search function does not return menu items
2. **Menu Items Missing** - No menu items are displayed in any tab (Breakfast, Lunch, Dinner, Dessert, Drinks)
3. **API Integration Missing** - Edamam API for nutrition data and API Ninja for recipes are not implemented
4. **Order Form Layout Missing** - There is no form for submitting orders or displaying total order cost

### Suggested Fixes
- Add a confirmation message when sign-up is successful
- Display menu items in each category (Breakfast, Lunch, etc.)
- Implement API calls for nutrition analysis and recipes
- Use bold text for navigation and menu category buttons for better readability on small screens

## As of April 2nd, 2025 (5:00PM)  

### NEW UPDATES
- Spoonacular API Is Now Being Used To Fetch Recipes (Can be located in pages/api/recipes.js)
- Check Out Needed Fixes 

### ✅ Working Features
- Sign-up and sign-in pages are displayed in the Login tab
- "About Us" page includes history, mission statement, and contact info
- Mobile compatibility works well
- Tabs for Breakfast, Lunch, Dinner, Dessert, and Drinks are visible and neatly placed
- Spoonacular API is being used to fetch recipes 

### ❌ Issues Found
1. **Search Bar Not Displaying Results** - The search function does not return menu items
2. **Menu Items Missing** - No menu items are displayed in any tab (Breakfast, Lunch, Dinner, Dessert, Drinks)
3. **API Integration Missing** - Edamam API for nutrition data 
4. **Order Form Layout Missing** - There is no form for submitting orders or displaying total order cost
5. **Bottom Tabs** - Lower Tabs (About us, Menu, & Login) need to be locked to the bottom of the screen (they currently are in the middle)

### Suggested Fixes
- Add a confirmation message when sign-up is successful
- Implement API calls for nutrition analysis 
- Use bold text for navigation and menu category buttons for better readability on small screens

## IMMEDIATE ATTENTION - NEEDED FIXES
- Display menu items in at least a category (Breakfast, Lunch, etc.)
- Search Bar Needs Usabilty (NEEDS MENU ITEMS TO FUNCTION)
- Text Displayed Twice unintentionally (As Seen In Image Below)

![image](https://github.com/user-attachments/assets/fd8b1ffb-c7a6-4eaa-81d1-ec55c2bc4832)

## Any Further Changes Pushed After Last Documention Update Period Has Passed (Currently 5PM EST April 2nd) Will Not Be Shown Till The Next Update 

# Contributors
- **Zainab** - Frontend Development
- **Steven** - State Management & Component Logic
- **Ben** - Styling & UI/UX Design
- **Navjot** - API Integration & Data Handling
- **Kuldip** - Testing & Documentation


