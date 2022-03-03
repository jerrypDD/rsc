import React, { useState } from 'react'

function TodoItemWrapper({title, children}) {
    const [open, setOpen] = useState(false)
  return (
    <div className='box list' onClick={() => setOpen(!open)}>
        <div>{title}</div>
        {open && children}
    </div>
  )
}

export default TodoItemWrapper