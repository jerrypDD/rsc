import React, { Suspense } from 'react'
import { AsyncResource } from '../AsyncResource'
import TodoItem from './TodoItem'
import TestItem from './TodoItem'
import TodoItemWrapper from './TodoItemWrapper.client'

const foodResource = new AsyncResource(
  fetch('https://jsonplaceholder.typicode.com/posts/?_start=0&_limit=100').then(data => data.json())
)


function Todos() {
  const todos = foodResource.read()


  return (
    <div>
      <Suspense fallback={<h1>loading</h1>}>
        <div className='list'>
        {todos.map((note, index) => (
          <TodoItemWrapper title={note.title} key={note.id}>
            <TodoItem title={note.body} index={index}/>
        </TodoItemWrapper>
        ))}
        </div>
      </Suspense>
   
    </div>
  )
}

export default Todos
