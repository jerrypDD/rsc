import React, { Suspense } from 'react'
import { AsyncResource } from '../AsyncResource'
import TodoItem from './TodoItem'
import TestItem from './TodoItem'

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
          <div className='box'>
            <h2>{note.title}</h2>
            <TodoItem title={note.body} index={index} key={index}/>
            </div>
        ))}
        </div>
      </Suspense>
   
    </div>
  )
}

export default Todos
