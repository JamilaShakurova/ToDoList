import React, {useState} from "react";
import styles from "./TodoItem.module.scss";
import {Checkbox, FormControlLabel, IconButton, ListItem} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import {Task} from "../../types/const";

type TodoItemProps = {
    task: Task;
    deleteTask: (taskId: number | string) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({task, deleteTask}) => {
    const [done, setDone] = useState(false);

    return (<ListItem>
        <FormControlLabel
            value={task.title}
            control={<Checkbox onChange={() => setDone(!done)}/>}
            label={task.title}
            className={`${styles['todoList__span']} ${done ? styles['todoList__span--completed'] : ''}`}
            labelPlacement="end"
        />
        {
            done && <IconButton onClick={() => deleteTask(task.id)} className={styles['todoList__itemClose']}
                                          aria-label="delete" size="small">
                <DeleteIcon fontSize="small"/>
            </IconButton>
        }
    </ListItem>)
};

export default TodoItem;
