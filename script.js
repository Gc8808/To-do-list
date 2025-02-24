//init an array to store tasks
 let tasks = []
 //add an event listener to add tasks to the task btn
 document.getElementById('addTaskBtn').addEventListener('click', function() {
    // Saving value of the textbox as a variable taskInput
    let taskInput = document.getElementById('taskInput').value
    //Checks if value in the textbox is empty if it is it wont activate  also clears textbox when clicking enter
     if (taskInput) {
    tasks.push(taskInput)
    document.getElementById('taskInput').value = ''
    displayTasks ()
}
 })