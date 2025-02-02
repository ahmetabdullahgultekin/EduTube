-- Database: EduTube

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    role VARCHAR(50) CHECK (role IN ('student', 'instructor', 'admin')) NOT NULL
);

CREATE TABLE courses (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    instructor_id INT REFERENCES users(id),
    price DECIMAL(10, 2) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE videos (
    id SERIAL PRIMARY KEY,
    course_id INT REFERENCES courses(id),
    title VARCHAR(255) NOT NULL,
    video_url TEXT NOT NULL,
    duration INT NOT NULL, -- in seconds
    uploaded_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE quizzes (
    id SERIAL PRIMARY KEY,
    course_id INT REFERENCES courses(id),
    question TEXT NOT NULL,
    answer_options TEXT[],  -- Array of options
    correct_answer INT NOT NULL -- Index of correct option in the array
);

CREATE TABLE certificates (
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(id),
    course_id INT REFERENCES courses(id),
    issued_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_users_email ON users(email);
CREATE INDEX idx_courses_instructor_id ON courses(instructor_id);
CREATE INDEX idx_videos_course_id ON videos(course_id);
CREATE INDEX idx_quizzes_course_id ON quizzes(course_id);
