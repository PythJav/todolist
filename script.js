let project = document.querySelector('.project');


let projectList= [];



let projectOptionDom =document.querySelector('.allProject');

let projectOption=[];





if (!localStorage.getItem("toDoList")) {
  
  
  console.log("No Local Storage");
 
} else {
  let getIt= localStorage.getItem("toDoList");
  projectList = JSON.parse(getIt);
}

toDo= (title,description,dueDate,priority) => {
  
  dueDate=new Date(dueDate);
  

  return {title,description,dueDate,priority}
};
const newProject =(title)=>{
  return {title};
}

const createProject =()=>{
  let newAddProject = newProject(projectName.title.value);

  console.log(newAddProject);
  projectOption.push(newAddProject);
  renderProject();

}

const renderProject=()=> {
  projectOptionDom.innerHTML="";
  // doStorage();
  // sortProject();
 



  projectOption.forEach(function renderOptions (value,index){
      
    createProjectList(value,index);
      // console.log(projectList[index]);
    });
  
  
  
  }
  function createProjectList(eachProject,index){
    const newList = document.createElement('div');
    newList.id=index;
    newList.textContent=eachProject.title;
    projectOptionDom.append(newList);
  
  }


const createDo =() =>{
    let newTodo =toDo(todoForm.title.value,todoForm.desc.value,todoForm.date.value,todoForm.priority.value);
    
    projectList.push(newTodo);
    
    
    renderList();
    }



function createDom(eachToDo,index){

    
    const newDo= document.createElement('div');

    const   toTitle= document.createElement('div');
    toTitle.id =index;
    toTitle.textContent= eachToDo.title;


    const toDesc= document.createElement('div');
    toDesc.textContent= eachToDo.description;


    const toDate= document.createElement('div');
    toDate.textContent= eachToDo.dueDate;

    const toPrio= document.createElement('div');
    toPrio.textContent= eachToDo.priority;



    const toDel=document.createElement('button');
    toDel.textContent = "delete todo";
    toDel.setAttribute("onclick",`delToDoEach(${index})`)

    const toCheck=document.createElement('input');
    toCheck.setAttribute("type","checkbox");

    

  toCheck.addEventListener('change', function() {
    if (this.checked) {
      newDo.style.textDecoration = "line-through";
    } else {
      newDo.style.textDecoration = "";
    }
  });
  

    newDo.append(toTitle);
    newDo.append(toDesc);
    newDo.append(toDate);
    newDo.append(toPrio);



    newDo.append(toDel);
    newDo.append(toCheck);


    project.append(newDo);

  }

 const sortProject=()=>{ 
projectList.sort((a, b) => {return  a.dueDate-b.dueDate} );
// console.log(projectList);

}

const doStorage=()=>{
  let stringProject= JSON.stringify(projectList);
  localStorage.setItem("toDoList", stringProject);
  console.log(stringProject);


}


const renderList=()=> {
  project.innerHTML="";
  doStorage();
  sortProject();
 



    projectList.forEach(function renderDo (value,index){
      
      createDom(value,index);
      // console.log(projectList[index]);
    });
  
  
  
  }



const showForm = () =>{
// console.log("hello");
document.querySelector("#todoForm").style.display="";


}

renderList();

const delToDoEach =(index)=>{

  projectList.splice(index,1);
  renderList();
  console.log(projectList)

}

document.querySelector("#projectName").addEventListener("submit",function(event){
  event.preventDefault();
  createProject();
  console.log(projectOption)
  // document.getElementById("bookForm").style.display="none";


  
})


document.querySelector("#todoForm").addEventListener("submit",function(event){
    event.preventDefault();
    createDo();
    console.log(projectList)
    // document.getElementById("bookForm").style.display="none";
  
  
    
  })
