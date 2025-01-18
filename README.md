# 📚 ExpressBooks

A comprehensive web-based library management system built with Node.js, Express, MongoDB, and vanilla JavaScript.

## 🌟 Features

- 📖 Book Management (Add, Edit, Delete, View)
- 👥 Student Management (Add, Edit, Delete, View)
- 📝 Borrowing System (Borrow books, Return books, Track history)
- 📊 Most Popular Books Analytics
- 🎨 Modern, Responsive UI with Glass-morphism design

## 🛠️ Tech Stack

### Backend
- Node.js
- Express.js
- MongoDB with Mongoose
- RESTful API architecture

### Frontend
- HTML5
- CSS3 (Modern Glass-morphism design)
- Vanilla JavaScript
- Responsive Design

## 📋 Project Structure

```
📦 expressbooks
 ┣ 📂 config/
 ┃ ┗ 📜 database.js        # Database configuration
 ┣ 📂 controllers/
 ┃ ┣ 📜 bookController.js  # Book operations logic
 ┃ ┣ 📜 borrowController.js # Borrowing operations logic
 ┃ ┗ 📜 studentController.js # Student operations logic
 ┣ 📂 models/
 ┃ ┣ 📜 Book.js           # Book schema
 ┃ ┣ 📜 Borrow.js         # Borrow schema
 ┃ ┗ 📜 Student.js        # Student schema
 ┣ 📂 public/
 ┃ ┣ 📂 css/
 ┃ ┃ ┗ 📜 styles.css      # Global styles
 ┃ ┗ 📂 js/
 ┃ ┣ 📜 books.js          # Books page logic
 ┃ ┣ 📜 borrow.js         # Borrowing page logic
 ┃ ┗ 📜 students.js       # Students page logic
 ┣ 📂 routes/
 ┃ ┣ 📜 bookRoutes.js     # Book endpoints
 ┃ ┣ 📜 borrowRoutes.js   # Borrowing endpoints
 ┃ ┗ 📜 studentRoutes.js  # Student endpoints
 ┣ 📂 views/
 ┃ ┣ 📜 books.html        # Books page
 ┃ ┣ 📜 borrow.html       # Borrowing page
 ┃ ┣ 📜 index.html        # Home page
 ┃ ┗ 📜 students.html     # Students page
 ┣ 📜 .env
 ┣ 📜 .gitignore
 ┣ 📜 package.json
 ┗ 📜 server.js           # Application entry point
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v14+ recommended)
- MongoDB
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/expressbooks.git
   cd expressbooks
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment variables**
   
   Create a `.env` file in the root directory:
   ```
   MONGODB_URI=your_mongodb_connection_string
   PORT=3000
   ```

4. **Start the application**
   ```bash
   npm run dev  # Development mode
   npm start    # Production mode
   ```

## 📱 Features Walkthrough

### 1. Home Page
The landing page provides quick access to all major features through a clean, intuitive interface.

### 2. Book Management
- Add new books with title and author
- View all books in a tabular format
- Edit existing book details
- Delete books from the system
- Track borrowing count for each book
<img width="700" alt="image" src="https://github.com/user-attachments/assets/9289dcdd-f119-4a1e-8944-cc6112c94e92" />


### 3. Student Management
- Register new students
- View all registered students
- Update student information
- Remove students from the system
<img width="695" alt="image" src="https://github.com/user-attachments/assets/43ab0dc1-2fb5-49b0-b969-36b70cd1e208" />


### 4. Borrowing System
- Create new borrowing records
- Track borrowed and returned books
- View borrowing history
- Return books to the library
<img width="713" alt="image" src="https://github.com/user-attachments/assets/d4389ade-bedb-4955-b432-db309a795386" />



## 🔒 API Endpoints

### Books
```
GET    /api/books     # Get all books
POST   /api/books     # Create new book
GET    /api/books/:id # Get specific book
PUT    /api/books/:id # Update book
DELETE /api/books/:id # Delete book
```

### Students
```
GET    /api/students     # Get all students
POST   /api/students     # Register new student
GET    /api/students/:id # Get specific student
PUT    /api/students/:id # Update student
DELETE /api/students/:id # Delete student
```

### Borrowing
```
GET    /api/borrow      # Get all borrowing records
POST   /api/borrow      # Create borrowing record
DELETE /api/borrow/:id  # Return book
```

## 🎨 UI/UX Features

- Glass-morphism Design: Modern translucent UI elements
- Responsive Layout: Works on desktop and mobile devices
- Interactive Elements: Smooth animations and transitions
- Clean Typography: Enhanced readability
- Intuitive Navigation: Easy access to all features

## 🔧 Error Handling

- Proper validation for all form inputs
- Meaningful error messages
- Graceful error recovery
- Database error handling
- API error responses

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request


## 🙏 Acknowledgments

- MongoDB documentation
- Express.js community
- Node.js documentation
- Glass-morphism design inspiration from modern UI trends

