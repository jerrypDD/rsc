
import ClientComponent from '../components/ClientComponent.client'
import ServerComponent from '../components/ServerComponent'
import Todos from '../components/Todos.server'

export default function Index() {

  return (
    <div>
    <h1 className='ct-my'>React Server Components</h1>
    <div className='flex'>
      <ServerComponent/>
      <ClientComponent/>
    </div>
    </div>
  )
}
