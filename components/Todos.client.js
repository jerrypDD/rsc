import React, { Suspense, useEffect, useState } from 'react'
import { AsyncResource } from '../AsyncResource'
import TodoItem from './TodoItem'
import TestItem from './TodoItem'
import TodoItemWrapper from './TodoItemWrapper.client'


export const notes = [
  {
    id: 1,
    title: 'Note 1',
    body: 'hej hej',
    date: '2020-01-01',
  },
  {
    id: 2,
    title: 'Note 2',
    body: 'hej hej hej',
    date: '2021-01-01',
  },
  {
    id: 3,
    title: 'Note 3',
    body: 'hej hej hej hej',
    date: '2022-01-01',
  },
]

function TodosClient() {
    const [todos, setTodos] = useState([])
    
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts/?_start=0&_limit=100')
        .then(data => data.json())
        .then(res => setTodos(res))
    },[])

  return (

    <div className='list'>
        {todos.map((note, index) => (
          <div className='box'>
          <h2>{note.title}</h2>
          <TodoItem title={note.body} index={index} key={index}/>
        </div>
        ))}
        </div>
   
  )
}

export default TodosClient
