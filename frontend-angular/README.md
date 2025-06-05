# Angular Course Management Application

This is an Angular-based web application for managing and displaying courses. The application allows users to view a list of courses and navigate to specific sections of the page with smooth scrolling functionality.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Scripts](#scripts)
- [Contributing](#contributing)
- [License](#license)

---

## Features

- **Course List**: Displays a list of courses fetched from a backend service.
- **Smooth Scrolling**: Navigate to specific sections of the page without reloading.
- **Responsive Design**: Fully responsive UI for various screen sizes.
- **Material Design**: Uses Angular Material for a modern and clean design.
- **Dynamic Routing**: Supports dynamic navigation with Angular Router.

---

## Technologies Used

- **Frontend**: Angular, TypeScript, HTML, CSS
- **Styling**: Angular Material, Custom CSS
- **Backend Integration**: HTTP Client for API calls
- **Build Tool**: Angular CLI
- **Package Manager**: npm

---

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/your-repo-name.git
   ```

2. Navigate to the project directory:
   ```bash
   cd repo-name
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   ng serve
   ```

5. Open the application in your browser:
   ```
   http://localhost:4200
   ```

---

## Usage

### Viewing Courses
- Navigate to the "Courses" page to view the list of available courses.
- Each course is displayed in a card format with details like title, description, and more.

### Smooth Scrolling
- Use the navigation menu to scroll to specific sections of the page (e.g., Courses, Services, Apply, Contact Us).

---

## Project Structure

```
src/
├── app/
│   ├── pages/
│   │   ├── course-pages/
│   │   │   ├── course-list-page/
│   │   │   │   ├── course-list-page.component.ts
│   │   │   │   ├── course-list-page.component.html
│   │   │   │   ├── course-list-page.component.css
│   ├── services/
│   │   ├── course.service.ts
│   ├── interfaces/
│   │   ├── course.ts
│   ├── app.module.ts
│   ├── app.config.ts
├── assets/
│   ├── css/
│   │   ├── templatemo-edu-meeting.css
├── index.html
```

---

## Scripts

- **Start Development Server**: `ng serve`
- **Build for Production**: `ng build`
- **Run Unit Tests**: `ng test`
- **Run End-to-End Tests**: `ng e2e`
- **Lint Code**: `ng lint`

---

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add feature description"
   ```
4. Push to the branch:
   ```bash
   git push origin feature-name
   ```
5. Open a pull request.

---
