import React, {useState} from 'react'
import {Button, Input, List} from '@mui/material';
import styles from '../styles/Todo.module.scss';
import TodoItem from "../components/TodoItem/TodoItem";
import {Task} from "../types/const";


type TodoListProps = {
    tasksList: Task[]
}


const TodoList: React.FC<TodoListProps> = ({tasksList}) => {
    const [text, setText] = useState('');
    const [todos, setTodos] = useState<Task[]>(tasksList);

    const deleteTask = (taskId: number) => {
        setTodos(todos.filter(task => task.id !== taskId))
    }

    return (<div className={styles.todo}>
        <h2>To do List</h2>
        <div className={styles.todo__inputWrap}>
            <Input value={text} fullWidth placeholder='Enter todo item'
                   onChange={(e) => setText(e.target.value)}></Input>
            <Button variant="outlined">Add&nbsp;item</Button>
        </div>

        <List>
            {
                todos.map(task => {
                        return <TodoItem deleteTask={deleteTask} task={task} key={task.id}/>
                    }
                )
            }
        </List>
    </div>)
};

export default TodoList;

export const getServerSideProps = async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/todos?_limit=20`)
    const data = await res.json()
    return {
        props: {
            tasksList: data,
        }
    }
}
