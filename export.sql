INSERT INTO location (longitude, latitude, active, created_at, updated_at) VALUES
                                                                               (-74.005974, 40.712776, 1, NOW(), NOW()), -- Nueva York, NY
                                                                               (-118.243683, 34.052235, 1, NOW(), NOW()), -- Los Ángeles, CA
                                                                               (-87.629798, 41.878114, 1, NOW(), NOW()), -- Chicago, IL
                                                                               (-95.369804, 29.760427, 1, NOW(), NOW()), -- Houston, TX
                                                                               (-71.058884, 42.360082, 1, NOW(), NOW()), -- Boston, MA
                                                                               (-97.743061, 30.267153, 1, NOW(), NOW()), -- Austin, TX
                                                                               (-122.419418, 37.774929, 1, NOW(), NOW()), -- San Francisco, CA
                                                                               (-74.172367, 40.735657, 1, NOW(), NOW()), -- Jersey City, NJ
                                                                               (-80.191790, 25.761680, 1, NOW(), NOW()), -- Miami, FL
                                                                               (-80.843127, 35.227085, 1, NOW(), NOW()); -- Charlotte, NC

INSERT INTO driver (first_name, last_name, dni, email, active, created_at, updated_at, location_id)
VALUES
    ('John', 'Doe', '123456789', 'john.doe@example.com', 1, '2023-07-24 10:30:00', '2023-07-24 10:30:00', 1),
    ('Jane', 'Smith', '987654321', 'jane.smith@example.com', 1, '2023-07-24 11:15:00', '2023-07-24 11:15:00', 2),
    ('Michael', 'Johnson', '456789123', 'michael.johnson@example.com', 1, '2023-07-24 12:00:00', '2023-07-24 12:00:00', 3),
    ('Emily', 'Williams', '321654987', 'emily.williams@example.com', 1, '2023-07-24 12:45:00', '2023-07-24 12:45:00', 4),
    ('William', 'Brown', '789456123', 'william.brown@example.com', 1, '2023-07-24 13:30:00', '2023-07-24 13:30:00', 5),
    ('Sophia', 'Jones', '654123789', 'sophia.jones@example.com', 1, '2023-07-24 14:15:00', '2023-07-24 14:15:00', 6),
    ('James', 'Davis', '987321654', 'james.davis@example.com', 1, '2023-07-24 15:00:00', '2023-07-24 15:00:00', 7),
    ('Olivia', 'Miller', '789123456', 'olivia.miller@example.com', 1, '2023-07-24 15:45:00', '2023-07-24 15:45:00', 8),
    ('Liam', 'Wilson', '321987654', 'liam.wilson@example.com', 1, '2023-07-24 16:30:00', '2023-07-24 16:30:00', 9),
    ('Ava', 'Taylor', '456789321', 'ava.taylor@example.com', 1, '2023-07-24 17:15:00', '2023-07-24 17:15:00', 10);



INSERT INTO passenger (first_name, last_name, dni, email, created_at, updated_at)
VALUES ('John', 'Doe', '123456789', 'john.doe@example.com', NOW(), NULL);

INSERT INTO passenger (first_name, last_name, dni, email, created_at, updated_at)
VALUES ('Jane', 'Smith', '987654321', 'jane.smith@example.com', NOW(), NULL);

INSERT INTO passenger (first_name, last_name, dni, email, created_at, updated_at)
VALUES ('Michael', 'Johnson', '564738291', 'michael.johnson@example.com', NOW(), NULL);

INSERT INTO passenger (first_name, last_name, dni, email, created_at, updated_at)
VALUES ('Emily', 'Williams', '837465192', 'emily.williams@example.com', NOW(), NULL);

INSERT INTO passenger (first_name, last_name, dni, email, created_at, updated_at)
VALUES ('David', 'Brown', '192837465', 'david.brown@example.com', NOW(), NULL);

INSERT INTO passenger (first_name, last_name, dni, email, created_at, updated_at)
VALUES ('Sophia', 'Lee', '918273645', 'sophia.lee@example.com', NOW(), NULL);

INSERT INTO passenger (first_name, last_name, dni, email, created_at, updated_at)
VALUES ('Daniel', 'Miller', '273645819', 'daniel.miller@example.com', NOW(), NULL);

INSERT INTO passenger (first_name, last_name, dni, email, created_at, updated_at)
VALUES ('Olivia', 'Garcia', '819273645', 'olivia.garcia@example.com', NOW(), NULL);

INSERT INTO passenger (first_name, last_name, dni, email, created_at, updated_at)
VALUES ('Ethan', 'Martinez', '657483921', 'ethan.martinez@example.com', NOW(), NULL);

INSERT INTO passenger (first_name, last_name, dni, email, created_at, updated_at)
VALUES ('Ava', 'Lopez', '453627819', 'ava.lopez@example.com', NOW(), NULL);



