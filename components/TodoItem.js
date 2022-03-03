import React from 'react'
import moment from 'moment'

function TodoItem({ title, index }) {
  const formatedDate = moment().add(index,'days').format('LLLL')
  return (
    <div className='list'>
      <p>
       date: {formatedDate}
      </p>
      <p>
        {title}
      </p>
    </div>
  )
}

export default TodoItem
