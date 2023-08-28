project = document.querySelectorAll('project');
let projectList= [];



function toDo (title,description,dueDate,priority) {
  this.title= title;
  this.description=description;
  this.dueDate=dueDate;
  this.priority=priority;
};


const createDo =() =>{
    let newTodo =new toDo(todoForm.title.value,todoForm.desc.value,todoForm.date.value,todoForm.priority.value);

    projectList.push(newTodo);
    console.log(projectList);


}

const showForm = () =>{
console.log("hello");
document.querySelector("#todoForm").style.display="";


}

document.querySelector("#todoForm").addEventListener("submit",function(event){
    event.preventDefault();
    createDo();
    // document.getElementById("bookForm").style.display="none";
  
  
    
  })
