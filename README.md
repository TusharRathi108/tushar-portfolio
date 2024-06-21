# Tushar Rathi Portfolio

Welcome to my portfolio repository! This project showcases my skills and expertise as a Fullstack Developer, featuring a modern and responsive design built with React, Vite, and other cutting-edge technologies. Feel free to explore, use it as a template for your own portfolio, and contribute to make it even better!

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Features

- Responsive Design
- Dynamic Routing
- SEO Optimization with React Helmet Async
- Typewriter Effect for Text Animation
- Downloadable Resume Button
- Social Media Integration
- Interactive Skills Section
- Project and Work Showcase

## Technologies Used

- **Frontend**: React, Vite, Tailwind CSS, React Router
- **Icons**: React Icons
- **Animations**: react-simple-typewriter
- **SEO**: React Helmet Async
- **Font**: JetBrains Mono

## Getting Started

Follow these steps to get a copy of this project up and running on your local machine.

### Prerequisites

- Node.js
- Git

### Installation

1. Clone the repository

   ```bash
   git clone https://github.com/TusharRathi108/tushar-portfolio.git
   ```

2. Navigate to the project directory

   ```bash
   cd tushar-portfolio
   ```

3. Install dependencies

   ```bash
   npm install
   ```

## Environment Variables Setup

To configure your environment variables for EmailJS, you need to populate the `.env` file with the following variables. These variables are required for sending emails using EmailJS:

### Steps to Get Your EmailJS Credentials

1. **Sign in to EmailJS:**
   Go to [EmailJS](https://www.emailjs.com/) and sign in to your account. If you don't have an account, you can create one for free.

2. **Create a New Email Service:**

   - Navigate to the "Email Services" section.
   - Click on "Add New Service" and follow the prompts to set up your email service.
   - Once the service is created, you'll get a `Service ID`. Copy this ID and paste it into the `VITE_SERVICE_ID` field in your `.env` file.

3. **Create a New Email Template:**

   - Go to the "Email Templates" section.
   - Click on "Create New Template" and design your email template.
   - Save the template, and you'll get a `Template ID`. Copy this ID and paste it into the `VITE_TEMPLATE_ID` field in your `.env` file.

4. **Get Your Public Key:**
   - Navigate to the "API Keys" section.
   - You will find your `Public Key` there. Copy this key and paste it into the `VITE_PUBLIC_KEY` field in your `.env` file.

### Example .env File

```plaintext
VITE_SERVICE_ID=your_service_id_here
VITE_TEMPLATE_ID=your_template_id_here
VITE_PUBLIC_KEY=your_public_key_here
```

By following these steps, you will ensure that your EmailJS configuration is correctly set up in your project.

### Running the Project

1. Start the development server

   ```bash
   npm run dev
   ```

2. Open your browser and visit http://localhost:5173

### Usage

This project is designed to be an intuitive and attractive portfolio template. Customize it with your own information, projects, and styles:

1. Update Profile Information: Modify the HomePage.tsx component to include your name, skills, and a brief introduction.
2. Add Your Projects: Create new pages or modify existing ones to showcase your projects.
3. Customize Styles: Adjust the Tailwind CSS classes to match your personal branding.

### Contributing

Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository

2. Create your feature branch

   ```bash
   git checkout -b feature/AmazingFeature
   ```

3. Commit your changes

   ```bash
   git commit -m 'Add some AmazingFeature'
   ```

4. Push to the branch

   ```bash
   git push origin feature/AmazingFeature
   ```

5. Open a Pull Request

License

This project is licensed under the MIT License - see the LICENSE file for details.

Contact

Feel free to reach out for collaboration, questions, or feedback:

1. Email: [Mail - Tushar Rathi](tushar.rathi860@gmail.com)
2. LinkedIn: [LinkedIn - Tushar Rathi](https://www.linkedin.com/in/tushar-rathi-2ab6b1230)

Thank you for visiting my portfolio repository! I hope you find it useful and inspiring. Happy coding! 🚀
