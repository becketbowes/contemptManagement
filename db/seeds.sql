INSERT INTO department
    (name)
VALUES
    ('executive'),
    ('horology'),
    ('ontology'),
    ('planting'),
    ('gleaning'),
    ('janitorial'),
    ('research and development'),
    ('off book');

INSERT INTO management
    (title, salary, department_id)
VALUES
    ('director', 3000000, 1),
    ('director of horology', 380000, 2),
    ('existing onotologist', 300000, 3),
    ('cheif botanist', 600000, 4),
    ('pickerery', 140000, 5),
    ('cultural janitor', 160000, 6),
    ('director of shenanigans', 500000, 7),
    ('consultantation', 38000000, 8);

INSERT INTO manager
    (first_name, last_name, management_id)
VALUES
    ('Aja', 'Monk', 1),
    ('Mud', 'Cearly', 2),
    ('Begget', 'Bar', 3),
    ('Parson', 'Erith', 4),
    ('Ella', 'Fugata', 5),
    ('Manga', 'Tellahson', 6),
    ('Maria', 'Martine', 7),
    ('Sly', 'Familystone', 8);

INSERT INTO role
    (title, salary, department_worker_id)
VALUES 
    ('experimental horologist', 300000, 2),
    ('horological intern', 120000, 2),
    ('existing onotologist', 300000, 3),
    ('potentialists', 280000, 3),
    ('schrödingerean felines', 120000, 3),
    ('botanical specialism', 400000, 4),
    ('botanical generalism', 450000, 4),
    ('plant whispering', 280000, 4),
    ('cleaners', 200000, 6),
    ('plumbing', 300000, 6),
    ('electric', 300000, 6),
    ('assistant to the DOS', 250000, 7),
    ('assistant DOS', 350000, 7),
    ('agent consultantationists', 8000000, 8);

INSERT INTO employee
    (first_name, last_name, role_id, manager_id)
VALUES
    ('Xana', 'Parsol', 1, 2),
    ('Olga', 'Therin', 2, 2),
    ('Reed', 'Ragged', 3, 3),
    ('Oryn', 'Maja', 4, 3),
    ('Morana', 'Kays', 5, 4),
    ('Porro', 'Fuga', 6, 4),
    ('Rama', 'Querra', 7, 4),
    ('Portia', 'Guy', 8, 4),
    ('Zek', 'Alegro', 9, 6),
    ('Groo', 'Leone', 10, 6),
    ('Hunta', 'Thena', 11, 6),
    ('Caixo', 'Brint', 12, 7),
    ('Sela', 'Sese', 13, 7),
    ('Natasha', 'Zhou', 14, 8),
    ('Greg', 'Cousins', 14, 8);
