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
- [API Ninja](https://api-ninjas.com/) for additional recipe data

## Testing Report

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


## Contributors
- **Zainab** - Frontend Development
- **Steven** - State Management & Component Logic
- **Ben** - Styling & UI/UX Design
- **Navjot** - API Integration & Data Handling
- **Kuldip** - Testing & Documentation


