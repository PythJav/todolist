let project = document.querySelector('.project');
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
    
    
    renderList();
    }



function createDom(eachToDo,index){

    
    const newDo= document.createElement('div');

    const   toTitle= document.createElement('div');
    toTitle.id =index;
    toTitle.textContent= eachToDo.title;


    const toDel=document.createElement('button');
    toDel.textContent = "delete todo";
    toDel.setAttribute("onclick",`delToDoEach(${index})`)

    const toCheck=document.createElement('input');
    toCheck.setAttribute("type","checkbox");
    toCheck.addEventListener("click",console.log("test"));
    
  if(toCheck.checked== true){
    console.log("Hello");

  }
  

    newDo.append(toTitle);
    newDo.append(toDel);
    newDo.append(toCheck);


    project.append(newDo);

  }


const renderList=()=> {
  project.innerHTML="";
    projectList.forEach(function renderDo (value,index){
      
      createDom(value,index);
      console.log(projectList[index]);
    });
  
  
  
  }



const showForm = () =>{
console.log("hello");
document.querySelector("#todoForm").style.display="";


}

renderList();

const delToDoEach =(index)=>{

  projectList.splice(index,1);
  renderList();
  console.log(projectList)

}

document.querySelector("#todoForm").addEventListener("submit",function(event){
    event.preventDefault();
    createDo();
    console.log(projectList)
    // document.getElementById("bookForm").style.display="none";
  
  
    
  })
