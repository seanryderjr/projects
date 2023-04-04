const form = document.querySelector('form');
const input = document.querySelector('input');
const incompleteItems = document.querySelector('.incompleteItems');
const completeItems = document.querySelector('.completeItems');



form.addEventListener('submit', () => {
    event.preventDefault();
    const item = input.value;
    if (item) {
        const li = document.createElement('li');
        li.innerHTML = item;
        incompleteItems.appendChild(li);
        input.value = '';
    }

    incompleteItems.addEventListener('click', (event) => {
        const clickedItem = event.target;
        if (clickedItem.tagName === 'LI') {
          clickedItem.style.textDecorationLine = 'line-through';
          clickedItem.style.textDecorationThickness = '2px';
          incompleteItems.removeChild(clickedItem);
          completeItems.appendChild(clickedItem);
          clickedItem.classList.add('complete');
        }
      });
    
      const deleteAllButton = document.querySelector('#delete-all');
      deleteAllButton.addEventListener('click', () => {
        incompleteItems.innerHTML = '';
        completeItems.innerHTML = '';
      });
});


