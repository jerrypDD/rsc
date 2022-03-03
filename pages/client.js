import dynamic from 'next/dynamic'
import { lazy, Suspense } from 'react'
import TodosClient from '../components/Todos.client'

function test() {
  return (
    <div>
     <h1 className='ct-my'>Todos Client</h1>
      <TodosClient/>
    </div>
  )
}

export default test
