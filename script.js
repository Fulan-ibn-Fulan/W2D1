// # welcome-to-js 🥚

// ### Release 0. Напишите код  в отдельном файле, выполнив задание из каждого пункта отдельной строкой: 

// - Создайте файл script с расширением .js (должно получиться script.js)
// - Создайте пустой объект `student`.
// - Добавьте свойство firstName со значением `Petr`.
// - Добавьте свойство lastName со значением `Perviy`.
// - Измените значение свойства firstName на `Petya`.
// - Удалите свойство firstName из объекта.

const student=[];
student.firstName ='Petr';
student.lastName ='Perviy';
student.firstName='Petya';
delete student.firstName;

let group=[];
group.push(student.lastName);
group.lastName='Aleks';
group.firstName='Olga';
console.log(group)

// ### Release 1. Напишите код, выполнив задание из каждого пункта отдельной строкой: 

// - Создайте массив `group`
// - Добавьте в него студента из предыдущего задания
// - Добавьте в массив еще 2 случайных студентов с заполненными свойствами firstName, lastName.

