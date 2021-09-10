import "../App.css";

function TodoList({ todoList, setTodoList }) {
    
    const handleDelete = (item) => {

        let temp = todoList.filter((el) => {


            return el.id !== item
            
        })

        setTodoList(temp);
    
    }

    return <>
        {todoList.map((el) => {
            return (
              <div className="border todoBox">
                <div>
                  <h4>{el.title}</h4>
                </div>
                <button onClick={() => handleDelete(el.id)}>Done</button>
              </div>
            );
        })}
    </>

}


export default TodoList