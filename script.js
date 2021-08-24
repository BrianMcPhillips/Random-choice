// Import DOM Elements
const tagsEl = document.getElementById('tags'),
  textarea = document.getElementById('textarea');

//Automatically focus cursor in text area on page load
textarea.focus();

textarea.addEventListener('keyup', (e) => {
  createTags(e.target.value);
});

const createTags = input => {
  const tags = input
    .split(',')
    .filter(tag => tag.trim() !== '')
      .map(tag => tag.trim());

  tagsEl.innerHTML = '';
  tags.forEach(tag => {
    const tagEl = document.createElemnt('span');
    tagEl.classList.add('tag');
    tagEl.innerText = tag;
    tagsEl.appendChild(tagEl);
  });

};
