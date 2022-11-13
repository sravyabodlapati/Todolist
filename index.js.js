class ToDo {
    constructor(title, description, id) {
        this.title = title;
        this.description = description;
        this.id = id;
        this.completed = false;
    }
    get getStatus() {
        return this.completed
    }
    set setStatus(val) {
        this.completed = val
    }
    get createdTime() {
        return new Date().toString();
    }
    get getHtml() {
        return `<div class="todoparent ${this.completed ? "completed" : ""}">
            <h3>${this.title}</h3>
            <h4>${this.description}</h4>
            <label for="Completed${this.id}">Completed</label><input type="checkbox" id ="Completed${this.id}" data-id="${this.id}" ${this.completed ? "checked" : ""}/>
        </div>`
    }
}

const arrayList = [];


function refreshData() {
    $("#result").html("");
    arrayList.forEach(function(todo) {
        let html = todo.getHtml;
        $("#result").append(html)
    })
}

$(document).ready(function () {
    $("#addToDo").click(function () {
        $("form").toggle()
    });
    $("#addForm").submit(function (e) {
        e.preventDefault();
        let description = $(this).find("#d1").val();
        let title = $(this).find("#d2").val();
        let id = arrayList.length + 1;
        const todo = new ToDo(title, description, id);
        arrayList.push(todo);
        refreshData();
        $("#reset").click();
    });
    $(document).on("click", ".todoparent input", function() {
        let id = $(this).data().id;
        const filterTodo = arrayList.find(function(todo){
            return todo.id == id;
        });
        const exitingStatus = filterTodo.getStatus;
        filterTodo.setStatus = !exitingStatus;
        refreshData();
    })
});