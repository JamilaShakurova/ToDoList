import React from 'react'
import {Button, Checkbox, Input, List, ListItem} from '@mui/material';
import styles from '../styles/Todo.module.scss';

type Task = {
    userId: number,
    id: number,
    title: string,
    completed: boolean,
}

type TodoProps = {
    tasksList: Task[]
}


const Todo: React.FC<TodoProps> = ({tasksList}) => {
    return (<div className={styles.main}>
        <h2>To do List</h2>
        <div className={styles.main__inputWrap}>
            <Input fullWidth placeholder='Enter todo item'></Input>
            <Button variant="outlined">Add&nbsp;item</Button>
        </div>
        <List>
            {
                tasksList.map(task => {
                        return <ListItem key={task.id}><Checkbox/><span>{task.title}</span></ListItem>
                    }
                )
            }
        </List>
    </div>)
};

export default Todo;

export const getServerSideProps = async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/todos?_limit=20`)
    const data = await res.json()
    return {
        props: {
            tasksList: data,
        }
    }
}
