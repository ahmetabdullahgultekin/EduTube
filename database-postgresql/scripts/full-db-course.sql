--CREATE DATABASE edutube

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password TEXT NOT NULL,
    role VARCHAR(20) CHECK (role IN ('STUDENT', 'INSTRUCTOR', 'ADMIN')) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE courses (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    instructor_id INT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (instructor_id) REFERENCES users(id) ON DELETE CASCADE
);

CREATE TABLE videos (
    id SERIAL PRIMARY KEY,
    course_id INT NOT NULL,
    title VARCHAR(255) NOT NULL,
    url TEXT NOT NULL,
    duration INT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (course_id) REFERENCES courses(id) ON DELETE CASCADE
);

CREATE TABLE enrollments (
    id SERIAL PRIMARY KEY,
    user_id INT NOT NULL,
    course_id INT NOT NULL,
    enrolled_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (course_id) REFERENCES courses(id) ON DELETE CASCADE,
    UNIQUE (user_id, course_id)
);

CREATE TABLE quizzes (
    id SERIAL PRIMARY KEY,
    course_id INT NOT NULL,
    title VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (course_id) REFERENCES courses(id) ON DELETE CASCADE
);

CREATE TABLE questions (
    id SERIAL PRIMARY KEY,
    quiz_id INT NOT NULL,
    question_text TEXT NOT NULL,
    FOREIGN KEY (quiz_id) REFERENCES quizzes(id) ON DELETE CASCADE
);

CREATE TABLE answers (
    id SERIAL PRIMARY KEY,
    question_id INT NOT NULL,
    answer_text TEXT NOT NULL,
    is_correct BOOLEAN NOT NULL,
    FOREIGN KEY (question_id) REFERENCES questions(id) ON DELETE CASCADE
);

CREATE TABLE payments (
    id SERIAL PRIMARY KEY,
    user_id INT NOT NULL,
    course_id INT NOT NULL,
    amount DECIMAL(10, 2) NOT NULL,
    payment_status VARCHAR(20) CHECK (payment_status IN ('pending', 'completed', 'failed')) NOT NULL,
    payment_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (course_id) REFERENCES courses(id) ON DELETE CASCADE
);

CREATE TABLE certificates (
    id SERIAL PRIMARY KEY,
    user_id INT NOT NULL,
    course_id INT NOT NULL,
    issued_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (course_id) REFERENCES courses(id) ON DELETE CASCADE
);

-- Insert users (admin, instructor, and students)
INSERT INTO users (name, email, password, role) VALUES 
('admin_user', 'admin@example.com', 'hashed_password_admin', 'ADMIN'),
('instructor_1', 'instructor1@example.com', 'hashed_password_inst1', 'INSTRUCTOR'),
('student_1', 'student1@example.com', 'hashed_password_stud1', 'STUDENT'),
('student_2', 'student2@example.com', 'hashed_password_stud2', 'STUDENT');

-- Insert courses
INSERT INTO courses (title, description, instructor_id) VALUES 
('Introduction to AI', 'Learn the basics of Artificial Intelligence', 2),
('Web Development', 'Master HTML, CSS, and JavaScript', 2);

-- Insert videos
INSERT INTO videos (course_id, title, url, duration) VALUES 
(1, 'AI Basics', 'https://example.com/ai-basics.mp4', 600),
(1, 'Machine Learning Introduction', 'https://example.com/ml-intro.mp4', 900),
(2, 'HTML Fundamentals', 'https://example.com/html-fundamentals.mp4', 700);

-- Insert enrollments
INSERT INTO enrollments (user_id, course_id) VALUES 
(3, 1),  -- student_1 enrolled in AI
(4, 1),  -- student_2 enrolled in AI
(3, 2);  -- student_1 enrolled in Web Dev

-- Insert quizzes
INSERT INTO quizzes (course_id, title) VALUES 
(1, 'AI Fundamentals Quiz'),
(2, 'Web Basics Quiz');

-- Insert questions
INSERT INTO questions (quiz_id, question_text) VALUES 
(1, 'What is Artificial Intelligence?'),
(1, 'What is Machine Learning?'),
(2, 'What does HTML stand for?');

-- Insert answers
INSERT INTO answers (question_id, answer_text, is_correct) VALUES 
(1, 'A branch of computer science', TRUE),
(1, 'A type of hardware', FALSE),
(2, 'Training computers to learn from data', TRUE),
(3, 'HyperText Markup Language', TRUE);

-- Insert payments
INSERT INTO payments (user_id, course_id, amount, payment_status) VALUES 
(3, 1, 49.99, 'completed'),
(4, 1, 49.99, 'pending');

-- Insert certificates
INSERT INTO certificates (user_id, course_id) VALUES 
(3, 1); -- student_1 completed AI course