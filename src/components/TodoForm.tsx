import React from 'react';

export const TodoForm: React.FC = () => {
    return (
        <div className='input-field px1 mt2'>
            <input type="text" id="title" placeholder="Введите текст" />
            <label htmlFor="title" className="active px1">
                Введите текст
            </label>
        </div>
    )
}