// pak de lijst 
const ul = document.getElementById("list");

//laat de taken zien
const getTasks = async () => {
    const tasks = await getData();
    const listItems = tasks.map((task) => {
        // maak een li item, tekst is gelijk aan de description van de task.
        const li = document.createElement("li");
        li.innerText = task.description;

        //maak een button icon en bepaal de value en classname
        const deleteButton = document.createElement("i");
        deleteButton.value = task.id;
        deleteButton.className = "fa fa-trash";

        // maak een eventlistener vast aan de deletebutton
        deleteButton.addEventListener("click", deleteTask);
        li.appendChild(deleteButton);
        return li;

        function deleteTask() {
            deleteTaskData(task.id);
            setTimeout("window.location.reload();", 500);
        }

    });
    listItems.forEach((task) => {
        ul.appendChild(task)
    })

}

function addPost() {
    var taskInput = document.getElementById("getData").value;
    document.getElementById("getData").value = "";
    const inputData = { description: taskInput, done: false }

    postData(inputData);
    setTimeout("window.location.reload();", 500);

}
document.getElementById("addButton").addEventListener("click", addPost);

getTasks();