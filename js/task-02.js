const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const node = ingredients.map((ingredient) => {
  
  const listEl = document.createElement('li');
  listEl.textContent = ingredient;

  return listEl;
});

const list = document.getElementById('ingredients');
list.append(...node);