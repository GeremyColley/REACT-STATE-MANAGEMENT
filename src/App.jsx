import { useState , createContext } from 'react'
import './App.css'
import Toolbar from './ToolBar'
import Content from './Content'

function App() {
  console.log("App rendered");
  const [switchEmoji, setSwitchEmoji] = useState(false);
  return (
    <>
      <Toolbar switchEmoji={switchEmoji} setSwitchEmoji={setSwitchEmoji} />
      <Content switchEmoji={switchEmoji} />
    </>
  );
}

export default App
