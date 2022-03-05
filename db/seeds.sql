INSERT INTO department
    (name)
VALUES
    ('horology'),
    ('ontology'),
    ('planting'),
    ('gleaning'),
    ('janitorial'),
    ('research and development'),
    ('off book'),
    ('director');

INSERT INTO role
    (manager, title, salary, department)
VALUES 
    (121, 'director of horology', 380000, 1),
    (null, 'experimental horologist', 300000, 1),
    (null, 'horological intern', 120000, 1),
    (122, 'existing onotologist', 300000, 2),
    (null, 'potentialists', 280000, 2),
    (null, 'schrödingerean felines', 120000, 2),
    (123, 'cheif botanist', 600000, 3),
    (null, 'botanical specialism', 400000, 3),
    (null, 'botanical generalism', 450000, 3),
    (null, 'plant whispering', 280000, 3),
    (null, 'pickerery', 140000, 4),
    (124, 'cultural janitor', 160000, 5),
    (null, 'cleaners', 200000, 5),
    (null, 'plumbing', 300000, 5),
    (null, 'electric', 300000, 5),
    (125, 'director of shenanigans', 500000, 6),
    (null, 'assistant to the DOS', 250000, 6),
    (null, 'assistant DOS', 350000, 6),
    (126, 'consultantation', 38000000, 7),
    (null, 'agent consultantationists', 8000000, 7),
    (363, 'director', 3000000, 8);

INSERT INTO employee
    (first_name, last_name, role_id, manager_id)
VALUES
    ('Aja', 'Monk', 21, 363),
    ('Mud', 'Cearly', 1, 363),
    ('Xana', 'Parsol', 4, 363),
    ('Olga', 'Therin', 7, 363),
    ('Begget', 'Bar', 12, 363),
    ('Reed', 'Ragged', 16, 363),
    ('Oryn', 'Maja', 19, 363),
    ('Parson', 'Erith', 2, 121),
    ('Morana', 'Kays', 3, 121),
    ('Porro', 'Fuga', 5, 122),
    ('Ella', 'Fugata', 5, 122),
    ('Rama', 'Querra', 6, 122),
    ('Portia', 'Guy', 8, 123),
    ('Manga', 'Tellahson', 9, 123),
    ('Zek', 'Alegro', 9, 123),
    ('Groo', 'Leone', 10, 123),
    ('Hunta', 'Thena', 11, 123),
    ('Maria', 'Martine', 13, 124),
    ('Caixo', 'Brint', 14, 124),
    ('Sela', 'Sese', 15, 124),
    ('Sly', 'Familystone', 17, 125),
    ('Natasha', 'Zhou', 18, 125),
    ('Greg', 'Cousins', 20, 126);
