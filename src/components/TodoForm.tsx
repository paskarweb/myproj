import React, { useState } from 'react';

interface TodoFormProps {
    onAdd(title: string): void;
}

export const TodoForm: React.FC<TodoFormProps> = (props) => {
    const [title, setTitle] = useState<string>('');

    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value);
    }

    const keyPressHandler = (event: React.KeyboardEvent) => {
        if (event.key === 'Enter') {
            //console.log(title);
            props.onAdd(title);
            setTitle(''); //--очистка значения в поле Input, после Enter
        }
    }

    return (
        <div className='input-field px1 mt2'>
            <input
                onChange={changeHandler}
                value={title}
                type="text"
                id="title"
                placeholder="Введите текст"
                onKeyPress={keyPressHandler}
            />
            <label htmlFor="title" className="active purple-text text-darken-1 px1">
                Введите текст (for UseState)
            </label>
        </div>
    )
}