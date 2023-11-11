const tasks = [
  'Pair Socks',
  'Balance Books',
  'Sort Spices',
  'Wrangle Cords',
  'Match Lids',
  'Dust Shelves',
  'Organize Keys',
  'Archive Photos',
  'Collect Receipts',
  'Water Plants',
];

export const getRandomTask = () => {
  return tasks[Math.floor(Math.random() * tasks.length)];
};
