const students = [
    {id: 21, name: 'Omar sunny'},
    {id: 31, name: 'Maanna'},
    {id: 41, name: 'Moyuri'},
    {id: 71, name: 'Deepjol'},
];

const names = students.map( s => s.name);
const ids = students.map(s => s.id);
const bigger = students.map(s => s.id > 40);
const biggerOne = students.find(s => s.id > 40);

console.log(biggerOne);