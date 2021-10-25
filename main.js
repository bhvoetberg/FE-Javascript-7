console.log("Hallo!!")

const element = document.getElementById("banaan");
element.textContent = "We hebben het element gevonden en aangepast!"

const trendingBooks = [
    {
        title: 'Eerste titel',
        author: 'eerste auteur'
    },
    {
        title: 'Tweede titel',
        author: 'tweede auteur'
    },
    {
        title: 'Derde titel',
        author: 'derde auteur'
    },
    {
        title: 'Vierde titel',
        author: 'Vierde auteur'
    }

];

console.log("Werkt het?")

const book1 = document.getElementById('book-1');
const book2 = document.getElementById('book-2');
const book3 = document.getElementById('book-3');

console.log(book1);
book1.textContent = trendingBooks[0].title;
book2.textContent = trendingBooks[1].title;
book3.textContent = trendingBooks[2].title;

const popularBook = document.getElementById('popular-book');
popularBook.innerHTML = `
    <h3>${trendingBooks[3].title}</h3>
    <p>Door ${trendingBooks[3].author}</p>
    `;

console.log(trendingBooks[3].author)
