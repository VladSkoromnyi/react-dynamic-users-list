import { Sidebar } from "./components/Sidebar"
import { Users } from "./components/Users";

const App = () => {
  return (
    <div className="App">
      <Sidebar />
      <div className="container">
        <Users />        
      </div>
    </div>   
  )
}

export default App;
