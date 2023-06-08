# Toms Without Scrolls

Toms Without Scrolls is a single-page e-commerce bookstore application showcasing the works of a selected author.

You can preview the live application here: [Toms Without Scrolls Live](https://e-commerce-bookstore-gamma.vercel.app/)

## Features

- **Author Selection and Home Page:** The homepage displays a 3D cube highlighting the chosen author with Three.js. The cube has an image of the author on the front and a 150-word description of the author's works and life on the back. The user can rotate the cube to view the description.

- **Navigation:** The application includes a navigation bar at the top of the page for easy access to all sections, including Home, Products, Cart, Account, and Item pages.

- **Products Page and Item Pages:** The Products page displays clickable tiles, each featuring a book cover thumbnail. Four item pages are dedicated to specific books, each containing the title, author, price, quantity, thumbnail, and product description.

- **Account Page:** Users can view and modify their account details. Fields include first name, last name, email, billing status, and profile image. Users can update their profile image via their webcam and modify their first and last names.

- **Data Management:** Redux is used for state management, creating and managing two data slices: "Cart" and "Profile". The "Cart" stores information such as total-price and total-quantity, while "Profile" stores the current and updated user first-name, last-name, and profile-image-url. Users can adjust the quantity of a book in the cart and on the item page.

- **Responsive Design:** The layout is responsive and optimized for desktop screens with a minimum width of 950px.

- **Styling:** Tailwind CSS is used to create a cohesive light theme design across all pages. This theme is also incorporated into the homepage canvas.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Node.js
- npm

### Installing

1. Clone the repo
    ```bash
    git clone https://github.com/jillo-abdullahi/e-commerce-bookstore.git
    ```
2. Switch to the app directory
	``` bash
	cd e-commerce-bookstore
	```
3. Install NPM packages
    ```bash
    npm install
    ```
4. Start the development server
    ```bash
    npm run dev
    ```

## Built With

- [React](https://reactjs.org/)
- [Redux](https://redux.js.org/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [Three.js](https://threejs.org/)
- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)

## Authors

- [Jillo Woche](https://github.com/jillo-abdullahi)

## License

This project is licensed under the MIT License.

