var addBtn = document.querySelector('#addToList');
addBtn.addEventListener('click', function(event){
    var itemText = document.querySelector('input[name="addToList"]').value;
    var list = document.querySelector('ul');
    var newLi = document.createElement('li');

    list.appendChild(newLi);
    newLi.innerText = itemText;            
})

var ul = document.querySelector('.qList');
ul.addEventListener('click', function(x) {
this.removeChild(x.target);
})
