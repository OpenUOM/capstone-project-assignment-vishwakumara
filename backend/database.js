const knex_db = require("./db-config");

const readTeachers = async () => {
    const sql = `SELECT * FROM teacher`;
    return knex_db.raw(sql);
}

const readTeacherInfo = async (id) => {
    const sql = `SELECT * FROM teacher WHERE id = ?`;
    return knex_db.raw(sql, [id]);
}

const addTeacher = async (id, name, age) => {
    const sql = `INSERT INTO teacher(id, name, age) VALUES (?, ?, ?)`;
    return knex_db.raw(sql, [id, name, age]);
}

const updateTeacher = async (name, age, id) => {
    const sql = `UPDATE teacher SET name=?, age=? WHERE id=?`;
    return knex_db.raw(sql, [name, age, id]);
}

const deleteTeacher = async (id) => {
    const sql = `DELETE FROM teacher WHERE id = ?`;
    return knex_db.raw(sql, [id]);
}

const readStudents = async () => {
    const sql = `SELECT * FROM student`;
    return knex_db.raw(sql);
}

const readStudentInfo = async (id) => {
    const sql = `SELECT * FROM student WHERE id = ?`;
    return knex_db.raw(sql, [id]);
}

const addStudent = async (id, name, age, religion) => {
    const sql = `INSERT INTO student(id, name, age, religion) VALUES (?, ?, ?, ?)`;
    return knex_db.raw(sql, [id, name, age, religion]);
}

const updateStudent = async (name, age, religion, id) => {
    const sql = `UPDATE student SET name=?, age=?, religion=? WHERE id=?`;
    return knex_db.raw(sql, [name, age, religion, id]);
}

const deleteStudent = async (id) => {
    const sql = `DELETE FROM student WHERE id = ?`;
    return knex_db.raw(sql, [id]);
}

module.exports = {
    readTeachers,
    readStudents,
    addStudent,
    addTeacher,
    deleteTeacher,
    deleteStudent,
    readStudentInfo,
    readTeacherInfo,
    updateStudent,
    updateTeacher
};
