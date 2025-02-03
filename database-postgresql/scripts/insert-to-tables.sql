-- Inserting Users
INSERT INTO users (name, email, password, role) VALUES
('Alice Johnson', 'alice@example.com', 'password123', 1),
('Bob Smith', 'bob@example.com', 'password123', 0),
('Charlie Brown', 'charlie@example.com', 'password123', 2),
('David Williams', 'david@example.com', 'password123', 0),
('Eva Green', 'eva@example.com', 'password123', 1);

-- Inserting Courses
INSERT INTO courses (title, description, instructor_id, price) VALUES
('Java Programming Basics', 'Learn the fundamentals of Java programming.', 1, 49.99),
('Web Development with Angular', 'Build dynamic web applications using Angular.', 5, 79.99),
('Machine Learning 101', 'Introduction to machine learning concepts and algorithms.', 1, 99.99);

-- Inserting Videos
INSERT INTO videos (course_id, title, video_url, duration) VALUES
(1, 'Introduction to Java', 'https://example.com/java_intro.mp4', 600),
(1, 'Variables and Data Types', 'https://example.com/java_variables.mp4', 800),
(2, 'Setting up Angular', 'https://example.com/angular_setup.mp4', 1200),
(2, 'Components and Directives', 'https://example.com/angular_components.mp4', 1500),
(3, 'Understanding Supervised Learning', 'https://example.com/ml_supervised.mp4', 1000);

-- Inserting Quizzes
INSERT INTO quizzes (course_id, question, answer_options, correct_answer) VALUES
(1, 'What is the correct syntax for a main method in Java?', 
  ARRAY['public static void main(String[] args)', 'public void main(String[] args)', 'void main(String[] args)', 'public static main(String[] args)'], 0),
(2, 'Which command is used to create a new Angular project?', 
  ARRAY['ng create project', 'ng new project', 'angular create project', 'npm create angular'], 1),
(3, 'What is the difference between supervised and unsupervised learning?', 
  ARRAY['Supervised learning uses labeled data, unsupervised does not', 'Supervised learning uses neural networks', 'Unsupervised learning uses labeled data', 'Supervised learning is faster'], 0);

-- Inserting Certificates
INSERT INTO certificates (user_id, course_id, issued_date) VALUES
(2, 1, '2025-01-01'),
(4, 2, '2025-01-10'),
(2, 3, '2025-01-15');