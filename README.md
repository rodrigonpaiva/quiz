# Quiz App - Next.js

## Overview

This repository contains the source code for a quiz application developed using **Next.js**, a React framework that offers server-side rendering and static page generation. The goal of the app is to provide an interactive platform where users can answer quizzes and test their knowledge on various topics.

## Features

- **Question and Answer System:** Intuitive interface for multiple-choice questions.
- **Scoring:** Calculation and display of scores based on users' answers.
- **Timer (optional):** Time limitation for answering each question.
- **Immediate Feedback:** Users receive instant feedback on their answers (correct/incorrect).
- **Customizable Themes:** Option for users to choose different visual themes.
- **Responsive Design:** Layout adapted for desktops, tablets, and mobile devices.

## Technologies Used

- **Next.js:** React framework for server-side rendering and web application development.
- **React:** JavaScript library for building user interfaces.
- **CSS Modules/Styled Components:** For modular and isolated application styling.
- **TypeScript (optional):** For static typing and reducing errors during development.

## How to Run the Project

### Prerequisites

- **Node.js** (v14.x or higher)
- **npm** or **yarn**

### Steps to Run

1. **Clone the repository:**

   ```bash
   git clone https://github.com/rodrigonpaiva/quiz.git
   cd quiz
   ```

2. **Install dependencies:**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server:**

   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Access the application:**

   Open your browser and go to `http://localhost:3000`.

## Folder Structure

```bash
├── components      # Reusable application components
├── pages           # Next.js pages (routing)
│   ├── index.js    # Quiz home page
├── public          # Static files (images, icons, etc.)
├── styles          # Styling files (CSS/SASS)
└── utils           # Utility functions and helpers
```

## Deployment

To deploy the application in production, follow the steps below:

1. **Build the application:**

   ```bash
   npm run build
   # or
   yarn build
   ```

2. **Start the application:**

   ```bash
   npm start
   # or
   yarn start
   ```

   **Note:** For deployment on services like **Vercel**, **Netlify**, or **Heroku**, refer to their specific documentation.

## Contribution

If you want to contribute to the project, follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/feature-name`).
3. Commit your changes (`git commit -m 'Add new feature'`).
4. Push to the repository (`git push origin feature/feature-name`).
5. Open a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](https://fr.wikipedia.org/wiki/Licence_MIT) file for details.

---

**Developed by [Rodrigo Paiva]**  
[LinkedIn](https://www.linkedin.com/rodrigonpaiva) | [Email](mailto:contact@rodrigonpaiva.com)

---

I hope the quiz app is useful and fun! If you have any questions or suggestions, feel free to open an issue or get in touch
