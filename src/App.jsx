import Login from "./login/Login"
import Homepage from "./homepage/hhomepage"
import Register from "./register/Register"
import { BrowserRouter, Routes, Route } from "react-router";


const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App