let searchvalue = document.getElementById('searchbox');
let addbtn = document.getElementById('add_task');
let tasks = document.getElementById('tasks');

addbtn.addEventListener('click',function(){
    let taskadded = document.createElement('div');
    taskadded.classList.add('task');

    let li = document.createElement('li');
    li.innerText = searchvalue.value;
    taskadded.appendChild(li);

    let donebtn = document.createElement('button');
    donebtn.innerText = 'done';
    donebtn.classList.add('donetask');
    taskadded.appendChild(donebtn);

    let deletebtn = document.createElement('button');
    deletebtn.innerText = 'delete';
    deletebtn.classList.add('del');
    taskadded.appendChild(deletebtn);

    if(searchvalue.value === ""){
        alert('please enter value');
    }
    else{
        tasks.appendChild(taskadded);
    }

    searchvalue.value="";

    donebtn.addEventListener('click',function(){
        donebtn.parentElement.style.textDecoration = 'line-through';
        donebtn.style.backgroundColor = 'gray';
        donebtn.style.color = 'white';
        deletebtn.style.backgroundColor = 'gray';
        deletebtn.style.color = 'white';
        li.style.color = 'gray';
    });

    deletebtn.addEventListener('click',function(e){
        let target = e.target;
        target.parentElement.remove();
    });

});
