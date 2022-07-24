// Release 0
const student = {};
student.firstName = 'Petr'
student.lastName = 'Perviy'
student.firstName = 'Petya'
delete(student.firstName);

// Release 1
const group = [];
 group.push(student)
const student_1 = {
    firstName: 'Ivan',
    lastName: 'Petrow'
};
const student_2 = {
    firstName: 'Tony',
    lastName: 'Stark'
};
group.push(student_1, student_2);
