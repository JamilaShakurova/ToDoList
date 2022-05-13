import React from 'react'
import {Button, Input, List } from '@mui/material';
import styles from '../styles/Todo.module.scss';
import TodoItem from "../components/TodoItem/TodoItem";

export type Task = {
    userId: number,
    id: number,
    title: string,
    completed: boolean,
}

type TodoListProps = {
    tasksList: Task[]
}


const TodoList: React.FC<TodoListProps> = ({tasksList}) => {
    return (<div className={styles.todo}>
        <h2>To do List</h2>
        <div className={styles.todo__inputWrap}>
            <Input fullWidth placeholder='Enter todo item'></Input>
            <Button variant="outlined">Add&nbsp;item</Button>
        </div>
        <List>
            {
                tasksList.map(task => {
                        return <TodoItem task={task} key={task.id} />

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
