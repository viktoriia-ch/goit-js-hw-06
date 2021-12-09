const totalCategory = document.querySelectorAll('.item')
console.log(`Number of categoties: ${totalCategory.length}`)

const categories = totalCategory.forEach(category => {
    console.log(`Categories: ${category.firstElementChild.textContent}`)
    console.log(`Elements: ${category.lastElementChild.children.length}`)
})