# Food Delivery App

A responsive React application for food ordering with an intuitive user interface for browsing menus, adding items to cart, and checking out.

## Demo

Link of the site [Food]()

## Features

- **Responsive Design**: Works seamlessly on mobile, tablet, and desktop screens
- **Interactive Menu**: Browse through categorized food items with horizontal scrolling on larger screens
- **Navigation**: Easy navigation between Home, Menu, and Cart pages
- **Shopping Cart**: Add items to cart and manage quantities
- **Mobile-friendly Interface**: Bottom navigation bar on mobile and traditional top navigation on larger screens

## Technology Stack

- React
- React Router DOM for navigation
- Tailwind CSS for styling
- zustand for state management

## Installation and Setup

1. Clone the repository

```bash
git clone https://github.com/gautamSH20/food-delivery.git
```

2. Navigate to the project directory

```bash
cd food-delivery
```

3. Install dependencies

```bash
npm install
```

4. Start the development server

```bash
npm start
```

5. Open your browser and visit `http://localhost:5173/`

## Usage Guide

### Navigation

- Use the top navigation bar on desktop or the bottom navigation bar on mobile
- Click on the Food Delivery logo to return to the homepage
- Navigate to the Menu page to browse food items
- Navigate to the Cart page to review your order and checkout

### Menu Browsing

- Food items are categorized by type (Pizza, Burger, Drinks)
- On desktop and tablet views, use the arrow buttons on either side to scroll through items
- On mobile, simply swipe horizontally to browse items
- Click "Add to Cart" to add an item to your shopping cart

### Shopping Cart

- Review your selected items in the Cart page
- Adjust quantities or remove items as needed
- Proceed to checkout when ready

## Customization

### Adding New Food Categories

To add a new food category, modify the `Menu.jsx` file:

1. Add a new array with your food items
2. Create a new ref for the category
3. Add a new section with the same structure as existing categories

### Styling

The app uses Tailwind CSS for styling. Modify the classes in the component files or extend the Tailwind configuration for custom styles.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
