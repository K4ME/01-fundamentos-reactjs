import { Header } from "./components/Header"
import {Post} from "./components/Post"

import styles from './App.module.css'

import './global.css'
import { Sidebar } from "./components/Sidebar"

export function App() {
return (
  <div>
    <Header />
    
    <div className={styles.wrapper}>
      <Sidebar />
      
      <main>
        <Post 
          author="Diego Fernandes"
          content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente vero dolorem quo tempora quod sed molestiae rerum perferendis, repellat nemo. Facere veniam expedita velit eum eligendi repellat temporibus culpa cupiditate."
        />
        <Post 
          author="Gabriel Buzzi"
          content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente vero dolorem quo tempora quod sed molestiae rerum perferendis, repellat nemo. Facere veniam expedita velit eum eligendi repellat temporibus culpa cupiditate."
        />
      </main>
    </div>
  </div>    
  )
}