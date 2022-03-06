const express = require('express');
const router = express.Router();
const db = require('../db/connection');


//return list of departments formated for inquirer 'choices' list
router.get('/departments', (req, res) => {
    const sql = `SELECT * FROM department`;
    db.query(sql, (err, rows) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json({ rows });
    });
});

//return list of management formated for inquirer 'choices' list
router.get('/management', (req, res) => {
    const sql = `SELECT id, title FROM management`;

    db.query(sql, (err, rows) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json({ rows });
    });
});

//return list of roles formated for inquirer 'choices' list
router.get('/role', (req, res) => {
    const sql = `SELECT id, title FROM role`;

    db.query(sql, (err, rows) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json({ rows });
    });
});

//return list of managers formated for inquirer 'choices' list
router.get('/managers', (req, res) => {
    const sql = `SELECT manager.id, manager.first_name, manager.last_name, management.title 
    FROM management INNER JOIN manager 
    ON management.id = manager.management_id`;

    db.query(sql, (err, rows) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json({ rows });
    });
});

//return list of employees formatted for inquirer 'choices' list
router.get('/employees', (req, res) => {
    const sql = `SELECT employee.id, employee.first_name, employee.last_name, role.title
    FROM employee INNER JOIN role 
    ON role.id = employee.role_id`;

    db.query(sql, (err, rows) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json({ rows });
    });
});

module.exports = router;