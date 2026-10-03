

const todoForm = document.querySelector("#todo-form")
const todoInput = document.querySelector("#todo-input")
const todoList = document.querySelector("#todo-list")
const formBtn = document.querySelector("#form-btn")
const taskCount = document.querySelector("#task-count")
const completeCount = document.querySelector("#complete-count")


let todos = JSON.parse(localStorage.getItem("todos")) || [];

let editTodoId = null // flag le liya

todoForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const todoValue = todoInput.value.trim();

    if (!todoValue) {
        return
    }

    console.log({ editTodoId, todoValue });


    if (editTodoId) {
        // editing
        todos = todos.map((todo) => {
            if (todo.id === Number(editTodoId)) {
                return {
                    ...todo,
                    text: todoValue
                }
            }
            return todo
        })

        localStorage.setItem("todos", JSON.stringify(todos))


    } else {
        //adding

        let newTodo = {
            id: Date.now(),
            text: todoValue,
            isCompleted: false
        }

        todos.push(newTodo)
        localStorage.setItem("todos", JSON.stringify(todos))

        // todos.push({
        //     id: Date.now(),
        //     text: todoValue,
        //     isCompleted: false
        // })

        // todos.push(todoValue)  // this is for saving
        // addTodo(newTodo)
    }
    todoInput.value = ""
    renderTodo()   // jab koi naya todo add hoga first updated todos render ho jayenge

})


function renderTodo() {
    todoList.innerHTML = ""
    // or
    // todoList.textContent = ""

    todos.forEach((todo) => {
        addTodo(todo)
    })
    taskCount.textContent = `TASKS(${todos.length})`
    completeCount.textContent = `COMPLETED:${todos.filter((todo) => todo.isCompleted).length}`
}

renderTodo() // jab first time file execute hogi tab existing todos render ho jayenge

function addTodo(todo) {

    const li = document.createElement("li") // <li></li>
    // li.textContent = todo.text // <li>{Actual Todo}</li>


    // li.setAttribute("class","flex gap-2 border border-slate-300 p-3 rounded-xl")
    //or
    li.className = `flex gap-2 border border-slate-300 p-3 rounded-xl`

    // li.setAttribute("data-id",todo.id) // this is jugad id ke liye
    // or
    li.dataset.id = todo.id // this is original method

    li.innerHTML = `
                    <input data-action = "toggle"  ${todo.isCompleted ? "chekced" : ""}  type="checkbox">
                    <p class="flex-1 ${todo.isCompleted ? "line-through" : ""}">${todo.text}</p>
                    <div class="flex gap-2">
                        <button data-action = "edit" data-id=${todo.id}>Edit</button>
                        <button data-action = "delete" data-id=${todo.id}>Delete</button>
                    </div>`


    todoList.append(li) // ul --> li  , here we want exact/valid html code

}


// event delegation //
todoList.addEventListener('click', (e) => {
    e.stopPropagation()

    // console.log(e.target);  // e.target --> jis element per click krte ho
    // console.log(e.currentTarget);  // e.currentTarget --> jis element per event listner attached hai

    let li = e.target.closest('li')
    let btn = e.target.closest('button');
    let action = btn?.dataset.action
    // or
    // let action = e.target.dataset.action

    // let id = li?.dataset?.id
    const id = li.dataset.id;

    // let checkbox = e.target.closest('input[type= "checkbox"]')  // css selector to select only checkbox input element


    if (action === "edit") {
        startEdit(id)
    }


    if (action === "delete") {
        deleteTodo(e, id)
    }

    if (action === "toggle") {
        todos = todos.map((todo) => {
            if (todo.id === Number(id)) {
                return {
                    ...todo,
                    isCompleted: !todo.isCompleted
                }
            }
            return todo
        })
        localStorage.setItem("todos", JSON.stringify(todos))
        renderTodo()
    }
})

function deleteTodo(e , id) {

    e.target.closest('li').remove()

    todos = todos.filter((todo) => {
        if (todo.id !== Number(id)) {
            return todo
        }
    })
    localStorage.setItem("todos", JSON.stringify(todos))
    renderTodo()

}


function startEdit(id) {

    editTodoId = id;

    let currentTodo = todos.find((todo) => {
        if (todo.id === Number(id)) {
            return todo
        }
    })

    todoInput.value = currentTodo.text

    formBtn.textContent = "Update"

}

