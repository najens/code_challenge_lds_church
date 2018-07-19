# Project Specifications

## Application Setup
- The application requires only npm install and npm start to install and launch.
- A README is included with the project. The README includes a description and clear instructions for installing and launching the project.

## Log in Flow
- There should be a way for the user to impersonate/log in as an admin user.
- The application allows the user to log out and log back in.
- The user must be logged in as an admin to add, update, and delete articles and tiles.
- Once the user logs in, they are redirected to the home page.

## Application Functionality

### Initial Load
- The data that’s initially displayed is populated correctly from the backend.

### Navigation
- The app contains a navigation bar that is visible on all pages.
	- If the user is logged in, their name appears in the navigation bar.
- The articles and tiles are both accessible from the home page.
- Articles are available at `articles/:article-title`.
- Tiles are available at `tiles/:tile-title`.
- The user can navigate to an article or tile and back to the home page without typing the address into the address bar.
- The user can search for and navigate to all articles and tiles from a search bar on the home page.
	- As the user types into the search field, books that match the query are displayed on the page.
- The application shows a 404 Not Found page if a route, article, or title does not exist (New articles and titles will not be accessible by typing in the url because of the way the backend is set up in this application).
	- A link to return to the home page should be available from the 404 Not Found page.

### Home Page
- Articles and tiles are listed in order from the most recently created to the least recently created with only the most recent articles and tiles being visible on the home page.

### Article Page
- Design and functionality matches the specification provided in the project specification.
- When each thumbnail is clicked, that image is displayed on the larger image.
- When the video play button is clicked, it plays in place.

### Tile Page
- Design and functionality matches the specification provided in the project specification.
- When video play button is clicked, the video enlarges, plays in place, and the news headline and description wrap below the video.

### Add Article Page
- The form to add a new article is available at `article/add`.
- Upon submitting the add article form, the new article is created and the admin user is redirected to the home page.

### Add Tile Page
- The form to add a new tile is available at `tile/add`.
- Upon submitting the add tile form, the new tile is created and the admin user is redirected to the home page.

### Edit Article Page
- The form to edit an article is available at `article/:id/edit`.
- Upon submitting the edit article form, the article is edited and the admin user is redirected to the article page.

### Edit Tile Page
- The form to edit a tile is available at `tile/:id/edit`.
- Upon submitting the edit tile form, the tile is edited and the admin user is redirected to the tile page.

## Architecture
- The store is the application’s source of truth.
- Components read the necessary state from the store; they do not have their own versions of the same state.
- There are no direct API calls in the components' lifecycle methods.
- Most application state is managed by the Redux store. State-based props are mapped from the store rather than stored as component state.
	- Form inputs and controlled components may have some state handled by the component.
- Updates are triggered by dispatching action creators to reducers.
- Reducers and actions are written properly and correctly return updated state to the store.
- The code is structured and organized in a logical way.
- Components are modular and reusable.

## Testing
- All unit tests pass when running `npm run test`.
