const s01 = [
  [6, 5, 0, 0, 0, 3, 0, 0, 7],
  [0, 4, 8, 0, 0, 0, 0, 9, 0],
  [0, 7, 2, 0, 8, 1, 0, 0, 0],
  [0, 2, 0, 0, 0, 5, 0, 0, 8],
  [1, 0, 0, 4, 7, 0, 0, 0, 3],
  [0, 0, 7, 6, 2, 0, 0, 0, 0],
  [0, 8, 6, 4, 0, 0, 0, 7, 0],
  [9, 3, 0, 0, 5, 0, 0, 0, 0],
  [2, 5, 0, 0, 1, 6, 0, 0, 3],
];

const s02 = [
  [4, 8, 0, 0, 0, 6, 0, 0, 7],
  [9, 6, 0, 0, 5, 0, 0, 8, 0],
  [0, 0, 0, 0, 8, 3, 0, 0, 2],
  [0, 4, 0, 7, 2, 0, 0, 6, 0],
  [5, 7, 0, 0, 0, 0, 0, 0, 2],
  [0, 0, 6, 8, 0, 0, 0, 4, 0],
  [0, 0, 4, 6, 0, 1, 0, 0, 0],
  [8, 2, 0, 0, 0, 9, 0, 3, 0],
  [0, 1, 0, 5, 0, 8, 0, 6, 0],
];

const s03 = [
  [0, 8, 7, 0, 0, 0, 0, 0, 2],
  [9, 0, 0, 0, 7, 0, 0, 4, 0],
  [0, 5, 0, 9, 2, 6, 0, 0, 0],
  [0, 4, 0, 0, 1, 9, 0, 0, 0],
  [8, 0, 7, 0, 5, 6, 0, 0, 0],
  [5, 0, 3, 7, 0, 0, 6, 0, 0],
  [3, 0, 5, 0, 0, 0, 9, 2, 0],
  [0, 9, 4, 0, 0, 5, 0, 0, 3],
  [0, 0, 1, 0, 0, 9, 4, 0, 5],
];

const s04 = [
  [0, 2, 5, 0, 8, 0, 0, 0, 9],
  [0, 0, 0, 0, 7, 0, 0, 3, 2],
  [0, 1, 9, 6, 0, 0, 0, 8, 0],
  [0, 4, 0, 1, 3, 0, 0, 0, 8],
  [0, 0, 0, 0, 5, 4, 0, 0, 7],
  [1, 0, 8, 0, 0, 6, 0, 5, 0],
  [0, 1, 4, 8, 0, 0, 9, 0, 0],
  [6, 9, 0, 0, 4, 0, 0, 2, 0],
  [5, 0, 7, 2, 9, 0, 0, 0, 4],
];

const s05 = [
  [0, 2, 6, 5, 7, 0, 0, 0, 0],
  [9, 0, 0, 3, 8, 0, 0, 0, 4],
  [3, 4, 0, 0, 0, 9, 0, 0, 1],
  [6, 0, 1, 0, 0, 5, 0, 0, 2],
  [0, 4, 0, 0, 1, 0, 5, 7, 0],
  [7, 0, 0, 0, 2, 3, 6, 0, 0],
  [0, 5, 0, 0, 0, 9, 0, 1, 8],
  [0, 9, 8, 0, 0, 0, 0, 0, 6],
  [4, 3, 6, 0, 8, 0, 0, 5, 0],
];

const s06 = [
  [7, 8, 0, 0, 5, 0, 0, 9, 0],
  [3, 0, 1, 0, 7, 4, 0, 0, 0],
  [0, 6, 2, 9, 0, 0, 8, 0, 0],
  [0, 7, 0, 5, 0, 0, 3, 6, 0],
  [9, 0, 0, 2, 4, 0, 0, 1, 0],
  [0, 5, 6, 3, 0, 0, 0, 4, 0],
  [0, 0, 1, 0, 4, 5, 0, 0, 7],
  [0, 0, 8, 1, 2, 9, 0, 0, 0],
  [0, 2, 0, 0, 3, 8, 0, 0, 0],
];

const s07 = [
  [9, 2, 0, 0, 0, 6, 0, 0, 5],
  [0, 4, 0, 0, 7, 5, 0, 0, 1],
  [0, 0, 6, 1, 3, 0, 4, 0, 0],
  [7, 9, 0, 5, 0, 0, 0, 6, 0],
  [0, 0, 3, 0, 2, 0, 0, 9, 4],
  [2, 6, 5, 0, 0, 8, 0, 0, 0],
  [4, 5, 0, 0, 3, 2, 0, 0, 0],
  [0, 0, 0, 8, 1, 9, 0, 0, 2],
  [0, 0, 0, 5, 7, 4, 6, 0, 0],
];

const s08 = [
  [8, 7, 0, 0, 0, 4, 0, 9, 0],
  [0, 5, 0, 1, 6, 0, 0, 0, 3],
  [6, 0, 9, 0, 0, 7, 0, 5, 0],
  [0, 0, 5, 6, 3, 8, 0, 0, 0],
  [2, 1, 0, 0, 9, 7, 0, 0, 0],
  [0, 0, 3, 4, 0, 1, 9, 0, 0],
  [5, 6, 7, 0, 1, 0, 0, 0, 2],
  [0, 3, 8, 0, 0, 5, 0, 4, 0],
  [1, 0, 2, 3, 7, 8, 0, 0, 0],
];

const s09 = [
  [2, 8, 4, 0, 0, 0, 0, 3, 0],
  [9, 0, 0, 8, 3, 1, 0, 0, 0],
  [0, 6, 0, 0, 5, 0, 0, 0, 9],
  [4, 0, 0, 0, 2, 8, 0, 0, 9],
  [6, 0, 9, 7, 0, 3, 0, 0, 0],
  [0, 2, 8, 9, 0, 0, 6, 0, 0],
  [1, 0, 0, 8, 4, 0, 0, 0, 5],
  [3, 4, 0, 0, 0, 6, 1, 0, 0],
  [0, 9, 6, 0, 1, 0, 0, 3, 0],
];

const s10 = [
  [0, 9, 8, 0, 0, 2, 0, 0, 3],
  [0, 2, 4, 0, 0, 8, 1, 0, 0],
  [0, 3, 5, 0, 0, 7, 2, 0, 0],
  [4, 0, 9, 8, 0, 0, 0, 0, 5],
  [2, 0, 0, 0, 1, 6, 8, 0, 0],
  [0, 7, 8, 0, 9, 0, 0, 0, 1],
  [3, 0, 0, 2, 7, 4, 0, 0, 0],
  [0, 4, 5, 0, 0, 0, 0, 8, 2],
  [7, 0, 0, 0, 0, 9, 0, 1, 3],
];

const s11 = [
  [0, 8, 9, 0, 0, 7, 3, 0, 0],
  [0, 4, 2, 8, 0, 0, 6, 0, 0],
  [7, 1, 0, 0, 5, 2, 0, 0, 0],
  [0, 3, 6, 0, 9, 0, 0, 0, 8],
  [2, 0, 4, 0, 0, 8, 5, 0, 0],
  [5, 9, 0, 0, 4, 0, 0, 6, 0],
  [0, 2, 4, 0, 5, 0, 0, 0, 3],
  [1, 7, 6, 0, 0, 0, 0, 8, 0],
  [0, 0, 0, 0, 7, 4, 0, 2, 1],
];

const s12 = [
  [8, 2, 6, 0, 0, 0, 0, 0, 9],
  [0, 0, 4, 0, 6, 3, 0, 0, 1],
  [0, 0, 3, 9, 7, 0, 0, 2, 0],
  [2, 8, 0, 0, 0, 0, 1, 0, 5],
  [0, 4, 6, 1, 0, 0, 0, 0, 2],
  [5, 0, 1, 0, 4, 2, 0, 0, 0],
  [0, 0, 2, 6, 0, 4, 0, 9, 0],
  [0, 3, 7, 8, 1, 0, 0, 0, 0],
  [8, 6, 9, 0, 0, 0, 0, 1, 0],
];

const s13 = [
  [0, 2, 0, 0, 0, 0, 9, 3, 6],
  [3, 0, 0, 0, 2, 1, 0, 5, 0],
  [0, 6, 7, 5, 0, 3, 0, 0, 0],
  [7, 0, 3, 0, 0, 4, 8, 0, 0],
  [2, 6, 0, 0, 9, 0, 0, 0, 7],
  [0, 1, 8, 0, 0, 0, 0, 4, 5],
  [3, 4, 0, 0, 7, 5, 0, 0, 0],
  [9, 1, 2, 0, 0, 6, 0, 0, 0],
  [7, 0, 6, 0, 3, 0, 0, 0, 4],
];

const s14 = [
  [0, 0, 0, 5, 6, 2, 7, 0, 0],
  [0, 0, 5, 4, 9, 0, 0, 6, 0],
  [0, 0, 0, 7, 1, 8, 0, 4, 0],
  [0, 1, 4, 9, 0, 0, 0, 3, 0],
  [8, 5, 0, 3, 4, 0, 0, 0, 0],
  [0, 0, 6, 8, 7, 1, 0, 0, 0],
  [0, 2, 1, 0, 8, 0, 0, 0, 5],
  [5, 3, 0, 0, 0, 4, 0, 2, 0],
  [6, 9, 7, 0, 0, 0, 0, 8, 0],
];

const s15 = [
  [8, 3, 0, 9, 0, 0, 0, 0, 1],
  [9, 0, 1, 2, 4, 0, 0, 0, 0],
  [0, 5, 2, 3, 0, 0, 0, 0, 8],
  [0, 2, 4, 0, 7, 0, 0, 0, 3],
  [0, 0, 0, 0, 9, 6, 8, 2, 0],
  [0, 0, 0, 2, 4, 3, 1, 0, 0],
  [0, 8, 0, 4, 5, 0, 0, 1, 0],
  [6, 0, 2, 3, 8, 9, 0, 0, 0],
  [0, 0, 0, 7, 0, 1, 8, 6, 0],
];

const s16 = [
  [3, 0, 2, 0, 4, 6, 0, 0, 0],
  [0, 1, 8, 0, 7, 9, 0, 0, 0],
  [5, 9, 0, 0, 0, 1, 0, 2, 0],
  [7, 1, 0, 0, 0, 0, 6, 3, 4],
  [0, 0, 0, 3, 9, 4, 0, 8, 0],
  [8, 4, 0, 1, 7, 0, 0, 0, 2],
  [0, 2, 3, 0, 5, 8, 0, 0, 0],
  [0, 5, 1, 7, 0, 6, 0, 0, 0],
  [7, 0, 0, 0, 0, 9, 0, 1, 5],
];

const s17 = [
  [0, 0, 0, 2, 7, 1, 0, 6, 0],
  [3, 1, 7, 0, 6, 0, 0, 0, 8],
  [0, 0, 2, 4, 8, 0, 1, 0, 0],
  [9, 0, 7, 1, 8, 0, 0, 0, 0],
  [0, 0, 3, 4, 0, 0, 0, 5, 6],
  [0, 0, 4, 7, 3, 5, 0, 0, 0],
  [6, 1, 9, 0, 0, 4, 0, 0, 0],
  [0, 3, 4, 0, 0, 0, 0, 9, 1],
  [2, 7, 8, 0, 0, 0, 0, 4, 0],
];

const s18 = [
  [5, 1, 0, 0, 0, 0, 0, 3, 4],
  [0, 7, 3, 0, 2, 1, 0, 0, 0],
  [8, 6, 0, 0, 3, 0, 0, 5, 0],
  [0, 9, 8, 4, 0, 1, 0, 0, 0],
  [0, 0, 6, 3, 9, 7, 0, 0, 0],
  [0, 0, 0, 0, 8, 5, 1, 0, 3],
  [0, 6, 9, 0, 0, 0, 1, 7, 0],
  [0, 3, 4, 2, 0, 5, 0, 0, 0],
  [0, 1, 8, 0, 7, 6, 0, 0, 0],
];

const s19 = [
  [0, 0, 0, 0, 4, 7, 0, 3, 6],
  [7, 4, 1, 0, 3, 0, 0, 0, 8],
  [0, 6, 9, 2, 0, 5, 0, 0, 0],
  [4, 0, 3, 6, 0, 0, 0, 0, 1],
  [2, 0, 0, 0, 5, 7, 0, 6, 0],
  [0, 5, 6, 1, 0, 3, 0, 0, 0],
  [8, 0, 0, 7, 9, 0, 0, 0, 5],
  [0, 9, 3, 0, 0, 5, 0, 0, 2],
  [0, 7, 0, 6, 0, 4, 0, 0, 1],
];

const s20 = [
  [0, 2, 7, 3, 9, 0, 0, 0, 0],
  [0, 8, 4, 0, 2, 5, 0, 0, 0],
  [1, 9, 3, 0, 8, 0, 0, 0, 2],
  [0, 0, 4, 7, 0, 9, 2, 0, 0],
  [0, 0, 0, 2, 6, 3, 0, 5, 0],
  [3, 2, 0, 4, 1, 0, 0, 0, 0],
  [6, 7, 0, 9, 0, 8, 0, 0, 0],
  [0, 0, 8, 5, 0, 2, 0, 7, 0],
  [0, 4, 1, 0, 3, 0, 0, 5, 0],
];

const solucoes = [
  s01,
  s02,
  s03,
  s04,
  s05,
  s06,
  s07,
  s08,
  s09,
  s10,
  s11,
  s12,
  s13,
  s14,
  s15,
  s16,
  s17,
  s18,
  s19,
  s20,
];

export default solucoes;