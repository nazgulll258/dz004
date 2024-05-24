import { Route, Routes } from "react-router-dom"
import Layout from "./components/Layout"
import Home from "./pages/Home"
import Counter from "./pages/Counter"
import Post from "./pages/Post"
import Todos from "./pages/Todos"
import User from "./pages/User"

const App = () => {
  
  return (
    <div>
      <Routes>
  <Route path="/" element={<Layout/>}>
    <Route index element={<Home/>}/>
    <Route path="Counter" element={<Counter/>}/>
    <Route path="post" element={<Post/>}/>
    <Route path="todos" element={<Todos/>}/>
    <Route path="Users" element={<User/>}/>
  </Route>
</Routes>
    </div>
  )
}

export default App
