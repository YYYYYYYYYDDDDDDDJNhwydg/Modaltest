import './App.css'
import AnagramGroup from './components/AnagramGroup';
import Modal from './components/Modal'

function App() {
  const words = ["eat", "tea", "tan", "ate", "nat", "bat"];
  return (
    <div>
      <Modal title='title' content="content"/>
      <AnagramGroup words={words} />
    </div>
  )
}

export default App
