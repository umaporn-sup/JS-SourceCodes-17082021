//Document Object Model (DOM)
const displayChapter = document.querySelector('#chapterTitle')
const titleElement = document.querySelector('title')
const myChapterTitle = document.createElement('h2')
myChapterTitle.textContent = titleElement.textContent
displayChapter.appendChild(myChapterTitle)
