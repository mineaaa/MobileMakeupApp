# MakeUp Mobile

This project is for my course in Mobile programming.
The app is created for makeup. 


## Components
The app has three views: home, search, and favorites.

### Home
In the Home-view the user can see what kind of categories there are of products. 
The categories are: blush, bronzer, eyebrow, eyeliner, eyeshadow, foundation, lipliner, lipstick, mascara and nailpolish.

### Search
From the Home-screen the user is able to navigate to the Search-view. In the search they can search for products based on the categories (blush, bronzer ect.), the tags (vegan, Canadian ect.) and brand (NYX, Clinique ect.). 

Based on the user's search they will be met with a list of products. From each of the products the user will be able to open an info card detailing the products information, brand, price and tags.

### Favourites
In the search view the user will be able to favourite the products which they like by clicking on the empty heart icon next to the product. The favourited products will appear in the Favourites component with a full heart icon. This way the user can be sure of the products they've favourited.

## Technologies

My project uses this API: https://github.com/karenheyn/MakeupAPI

From the API there are three endpoints at use in this project:
- product_type
- product_tags
- brand

This application is React Native based. The project uses a Firebase database.

Technologies in this project and some raises:
- React Native
- Firebase
- React Native Paper
- Expo Go
- React Navigation (Bottom Tab and Stack Navigation)
- Expo Sharing
- ScrollView

### Notable

NOTE: The application was first developed in another repository, but when it broke, it was moved to this one. 
You can find previous commits here: https://github.com/mineaaa/MakeupApp
