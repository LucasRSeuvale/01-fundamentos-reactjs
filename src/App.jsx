
import { Header } from './Components/Header';
import {Post} from './post';
import './global.css'
export function App() {

  return (
    <div>
      <Header />
      
      <Post
        author="Eduardo Barros"
        content="testando react1"
      />

      <Post
        author="lucas Rodrigues"
        content="testando react2"
      />
    </div>
  )
}
