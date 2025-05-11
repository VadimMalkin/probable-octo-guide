# GymBeam Case Study: Web Application for Product List and Details

## Overview

This project is a simple web application built using **React**, **Next.js**, and **Tailwind CSS**. It allows authenticated customers to view a list of products and access detailed information about each product. The project pulls product data from the **Fake Store API**.

The app is designed to provide a smooth and consistent user experience, ensuring it works well on popular browsers such as Safari, Google Chrome, and Firefox. The focus is on creating a user-friendly interface that reflects the GymBeam brand identity.

## Features

- User authentication (login only, registration is optional)
- Access to a list of products
- Product detail view
- Ability to log out

## Technologies Used

- **React**: JavaScript library for building user interfaces
- **Next.js**: React framework for server-side rendering and static site generation
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development
- **Fake Store API**: A mock API for retrieving product data

## Installation

### Prerequisites

Make sure you have **Node.js** and **npm** installed. If not, download and install them from [Node.js website](https://nodejs.org/).

### Steps to Run Locally

1. **Clone the Repository**

   Open your terminal and run the following command to clone the repository:

   ```bash
   git clone https://github.com/VadimMalkin/probable-octo-guide.git
   ```



2. **Install Dependencies**

   Navigate into the project directory:

   ```bash
   cd probable-octo-guide
   ```

   Install the required dependencies using npm or yarn:

   ```bash
   npm install
   ```

   Or, if you're using Yarn:

   ```bash
   yarn install
   ```

3. **Run the Development Server**

   After installing the dependencies, run the development server:

   ```bash
   npm run dev
   ```

   Or, if using Yarn:

   ```bash
   yarn dev
   ```

   This will start the application on [http://localhost:3000](http://localhost:3000).

4. **Visit the Application**

   Open your browser and navigate to [http://localhost:3000](http://localhost:3000) to see the application running locally.

## Application Flow

1. **Login Screen**: The user can log in to access the product list and product details. Registration is optional.
2. **Product List**: After logging in, the customer will see a list of products fetched from the Fake Store API.
3. **Product Detail View**: Clicking on any product will open a detailed view of the product.
4. **Logout**: Users can log out at any time.

## Non-Functional Requirements

* The application is compatible with popular browsers such as **Safari**, **Google Chrome**, and **Firefox**.
* The application focuses on a consistent and user-friendly UI for a better customer experience.
* The GymBeam brand identity has been kept in mind while designing the UI.


## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

