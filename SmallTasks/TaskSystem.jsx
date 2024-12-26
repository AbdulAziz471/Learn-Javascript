    let Tasks = [ 
        {
            id: 1,  
            name: "task1"
        }
    ]
    function addTask(taskName , taskId){
    
    const newId =  Tasks.length === 0 ? 1 : Math.max(...Tasks.map(task => task.id) )+ 1 ;

    const newtask = {

        id: newId,
        name: taskName
    }
        Tasks.push(newtask);
    }

    function uodateTask(taskId, newName){

        const index = Tasks.findIndex( task=> task.id === taskId )

        if(index !== -1){
            Tasks[index].name = newName;
        }
        else{
            console.log("Not Find Task");
        }

 
    }


    function removeTask(taskId){
        
        const index = Tasks.findIndex(task => task.id === taskId)
        if(index !== -1){
            Tasks.splice(index , 1) 
    }   else{

        console.log("No Task Found ") 
    }
    }


    addTask("task2");
    removeTask(4);
    uodateTask(1, "Updated task name");

    console.log(Tasks);