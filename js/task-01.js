const totalCateg = document.querySelectorAll('.item')
console.log(`Number of categories: ${totalCateg.length}`);

const categories = totalCateg.forEach(category => {
    console.log(`Category: ${category.firstElementChild.textContent}`),
    console.log(`Elements: ${category.lastElementChild.children.length}`)
})