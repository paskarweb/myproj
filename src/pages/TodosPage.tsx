import React from "react"
import { useState, useEffect } from 'react'
import { TodoForm } from '../components/TodoForm'
import { TodoList } from '../components/TodoList'
import { ITodo } from '../interfaces'

declare var confirm: (question: string) => boolean

export const TodosPage: React.FC = () => {
    const [todos, setTodos] = useState<ITodo[]>([])

    //выводим массив из localStorage
    useEffect(() => {
        //если null, то передаем/парсим пустой массив || '[]'
        //const saved = JSON.parse(localStorage.getItem('todos') || '[]') as ITodo[]
        //setTodos(saved)
        const saved = JSON.parse(localStorage.getItem('todos') || '[]') as ITodo[]
        if (saved) {
            setTodos(saved);
        }
    }, [])


    //Сохраняем в localStorage
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])

    const addHandler = (title: string) => {
        //console.log('Add new Todo (TodoForm)', title);
        const newTodo: ITodo = {
            title: title,
            id: Date.now(),
            completed: false
        }
        setTodos(prev => [newTodo, ...prev]);  //prev - предыдущее состояние 
    }

    const toggleHandler = (id: number) => {
        setTodos(prev => prev.map(todo => {
            if (todo.id === id) {
                return {
                    ...todo,
                    completed: !todo.completed
                }
            }
            return todo
        })
        )
    }

    const removeHandler = (id: number) => {
        const shoudRemowe = confirm('Вы уверены что хотите удалить элемент?')
        if (shoudRemowe) {
            setTodos(prev => prev.filter(todo => todo.id !== id))
        }
    }
    return (
        <>
            <TodoForm onAdd={addHandler} />

            <TodoList
                todos={todos}
                onToggle={toggleHandler}
                onRemove={removeHandler}
            />
        </>
    )
}