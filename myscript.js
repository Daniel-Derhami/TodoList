function get_todos(){
    var todos = new Array;
    var todos_str = localStorage.getItem('todo');
    if(todo_str !== null){
        todos = JSON.parse(todos_str);
    }
    return todos;
}

function add(){
    var task = document.getElementById('task').value;

    var todos = get_todos();
    todos.push(task);
    /* store the string into local storage */
    localStorage.setItem('todo' , JSON.stringify(todos));

    show();

    return false;
}
/* if any value left around after adding a task, it will be removed  */
 function clearDefault (a){
     if (a.defaultValue==a.value){a.value=""}
 };

/* remove any task when user click on them and triger the remove button */
function remove() {
    /* get the specific task id from the array */
    var id = this.getAttribute('id');
    var todos = get_todos();
    /* remove the specific element from the array */
    todos.splice(id, 1);
    /* Store what's left on the storage */
    localStorage.setItem('todo', JSON.stringify(todos));

    show();

    return false;
}

function show(){
    /* call to get the list of array */
    var todos = get_todos();
    /* manualy created snippet html tag */
    var html = '<ul>';
    for (var i=0; i<todos.lenght; i++){
        html += '<li>' + todos[i] + '<button class="remove" id="' + i + '">Delete</button> </li>';
    };
    html += '</ul>';
/* it will insert a newly generated html snipet into orginal document loaded from server - replace the content with id of todos */
    document.getElementById('todos').innerHTML = html;

    /* fetch all the buttons that are in remove class */
    var buttons = document.getElementsByClassName('remove');
    for (var i=0; i<buttons.length; i++){
        buttons[i].addEventListener('click',remove);
    };
}

document.getElementById('add').addEventListener('click',add);
show();
