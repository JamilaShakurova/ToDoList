import React, {useState} from "react";
import styles from "./TodoItem.module.scss";
import {Checkbox, FormControlLabel, IconButton, ListItem} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import {Task} from "../../pages";

type TodoItemProps = {
    task: Task;
}

const TodoItem: React.FC<TodoItemProps> = ({task}) => {
    const [done, setDone] = useState(false)

    return (<ListItem>
        <FormControlLabel
            value={task.title}
            control={<Checkbox onChange={() => setDone(!done)} />}
            label={task.title}
            className={`${styles['todoList__span']} ${done ? styles['todoList__span--completed']: ''}`}
            labelPlacement="end"
        />
        <IconButton className={styles['todoList__itemClose']} aria-label="delete" size="small">
            <DeleteIcon fontSize="small"/>
        </IconButton></ListItem>)
};

export default TodoItem;
