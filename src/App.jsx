import LoginContextProvider from "./context/LoginContextProvider"
import Login from "./Login"
import Profile from "./Profile"


function App() {

  return (
    <LoginContextProvider>
      <h1>Hello</h1>
      <Login />
      <Profile />
    </LoginContextProvider>
  )
}

export default App
