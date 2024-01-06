const itemEl = document.querySelectorAll('.item');
console.log(`Number of categories: ${itemEl.length}`);
itemEl.forEach(element => {
    const categoryName = element.querySelector('h2').textContent;
    const itemCount = element.querySelectorAll('li').length;
    console.log(`Category: ${categoryName}`);
    console.log(`Elements: ${itemCount}`);
})
