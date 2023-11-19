// // TODO: write your code here
import sum from './basic';

console.log('worked');

console.log(sum([1, 2]));

// const character = {
//   name: 'Лучник',
//   type: 'Bowman',
//   health: 50,
//   level: 3,
//   attack: 40,
//   defence: 10,
//   special: [
//     {
//       id: 8,
//       name: 'Двойной выстрел',
//       icon: 'http://...',
//       description: 'Двойной выстрел наносит двойной урон'
//     },
//     {
//       id: 9,
//       name: 'Нокаутирующий удар',
//       icon: 'http://...'
//       // <- обратите внимание, описание "засекречено"
//     }
//   ]
// }

export default function showDescription({ special: [...restObj] }) {
  for (let i = 0; i <= restObj.length - 1; i++) {
    if (!('description' in restObj[i])) {
      restObj[i].description = 'Описание недоступно';
    }
  }
  console.log(restObj)
  return restObj;
}