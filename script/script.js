"use strict";

const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана",];
const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"];
const marks = [4, 5, 5, 3, 4, 5];

// 1. Розділіть студентів на пари(хлопець + дівчина) для работи над проєктом. У вас повинен вийти вкладений масив з парами студентів: [["Олександр", "Олена"], [..], [...]];
const getStudentsPair = (stud = []) => {
  let pairs = stud.slice();
  pairs = [
    [pairs[0], pairs[2],],
    [pairs[1], pairs[3],],
    [pairs[4], pairs[5],],
  ];
  return pairs;
}
console.log('1. Students divided to pairs:', getStudentsPair(students));

// 2. Зіставте пари з попереднього завдання та теми проєктів, над якими студенти будуть працювати. Повинен вийти вкладений масив виду: [["Олександр і Олена", "Теорія автоматів"], [...], [...]]

const studentsWithThemes = (stud, theme) => {
  const newStudents = getStudentsPair(stud.slice());
  const newThemes = theme.slice();
  let result = [];
  for (let i = 0; i < newStudents.length; i++) {
    result.push([newStudents[i].join(' i '), newThemes[i]]);
}
return result;
}
console.log('2. Pair of students with project themes:', studentsWithThemes(students, themes));

// 3. Зіставте оцінки(marks) зі студентом(students): [["Саша", 4], [...], [...]]
// const assignMarks = (a = [], b = []) => {

const assignMarksToStudent = (stud, mark) => {
  const students = stud.slice();
  const marks = mark.slice();
  let value = [];
  for (let i = 0; i < students.length; i++) {
    value.push([students[i], marks[i]]);
  }
    return value;
  } 
console.log('3. Individual students marks:', assignMarksToStudent(students, marks));

// 4. Поставте кожній парі випадкову оцінку(від 1 до 5) за проєкт(тут функція буде нечистою, але не повинна мутувати массив): [["Олександр і Олена", "Теорія автоматів", 5], [...], [...]]

const randomProjectScore = (pair) => {
  const newPairAndThemes = pair.slice();
  const max = 5;
  const min = 1;
  for (let i = 0; i < newPairAndThemes.length; i++) {
    const score = (Math.random() * (max - min) + min).toFixed(0);
    newPairAndThemes[i].push(Number(score));
  }
    return newPairAndThemes;
  } 

console.log('4. Random score for each pair of students:', randomProjectScore(studentsWithThemes(students, themes)));