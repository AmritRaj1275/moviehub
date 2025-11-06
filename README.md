# MovieHub - IMDB Clone Web Application

A complete, modern web application that mimics IMDB functionality, built with pure HTML, CSS, and JavaScript.

## Features

### 🏠 Home Page (index.html)
- Displays all movies in a responsive grid layout
- Each movie card shows:
  - Movie poster
  - Movie name
  - IMDb rating with star icon
  - Genre badge
  - Short summary
- Beautiful hover effects and animations

### 🎬 Movies Page (movies.html)
- **Search Functionality**: Real-time search by movie name
- **Genre Filter**: Dropdown to filter movies by category
- **Dynamic Display**: Movies update instantly based on filters
- All movies displayed in card format with full details

### ℹ️ About Page (about.html)
- Describes the purpose and features of MovieHub
- Information about technology stack
- Vision and mission statement

### 📧 Contact Page (contact.html)
- Contact form with fields:
  - Name
  - Email
  - Message
- Form validation
- Submit functionality with user feedback

## Project Structure

```
/Project01
├── index.html          # Home page with all movies
├── movies.html         # Movies page with search and filter
├── about.html          # About page
├── contact.html        # Contact page
├── movies.js           # Movie database (20 movies)
├── style.css           # Complete styling
├── README.md           # This file
└── /images             # Folder for movie posters (optional)
```

## Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with:
  - Flexbox and Grid layouts
  - Gradients and shadows
  - Smooth transitions and hover effects
  - Responsive design
- **JavaScript**: Vanilla JS for:
  - Dynamic content rendering
  - Search functionality
  - Filter functionality
  - Form handling

## Movie Database

The `movies.js` file contains 20 movies across various genres:
- **Action**: The Dark Knight, The Avengers, Gladiator
- **Drama**: The Shawshank Redemption, Forrest Gump, Joker
- **Sci-Fi**: Inception, The Matrix, Interstellar
- **Crime**: Pulp Fiction, Goodfellas, The Godfather
- **Comedy**: The Hangover, Superbad
- **Romance**: Titanic, The Notebook
- **Thriller**: Parasite, Get Out
- **Animation**: Toy Story, Finding Nemo

Each movie includes:
- Name
- Poster URL (using TMDB images)
- Summary
- IMDb rating
- Genre

## Design Features

### Navigation
- Sticky navigation bar
- Active page highlighting
- Smooth hover effects
- Responsive mobile menu

### Styling
- Modern gradient backgrounds
- Card-based layouts
- Shadow effects
- Rounded corners
- Responsive grid system

### Responsive Design
- Desktop: Multi-column grid
- Tablet: Adaptive columns
- Mobile: Single column layout

## How to Use

1. **Open the application**:
   - Simply open `index.html` in any modern web browser
   - No server or build process required

2. **Browse movies**:
   - Home page shows all movies
   - Click on Movies to access search and filter features

3. **Search movies**:
   - Type in the search box to filter by name
   - Select a genre from the dropdown to filter by category
   - Combine both for precise results

4. **Contact**:
   - Fill out the contact form
   - Submit to see confirmation (demo only)

## Browser Compatibility

Works on all modern browsers:
- Chrome
- Firefox
- Safari
- Edge

## Future Enhancements

Potential features to add:
- Movie detail pages
- Sorting options (by rating, name, year)
- Local storage for favorites
- Dark mode toggle
- More movie data
- Backend integration
- User reviews

## Credits

- Movie posters from The Movie Database (TMDB)
- Built with ❤️ using vanilla web technologies

---

**Note**: This is a frontend-only application. The contact form and other interactive features are for demonstration purposes and don't connect to a backend server.
