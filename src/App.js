import './App.scss';
import { Routes, Route } from 'react-router-dom';
import { Sidebar } from "./components/Sidebar";
import { Home } from "./components/Home";
import { Users } from "./components/Users";
import { NotFound } from './components/NotFound';
import { CurrentUser } from './components/CurrentUser';
import { InfoPanel } from './components/InfoPanel';
import { TasksPanel } from './components/TasksPanel';

const App = () => {
  return (
    <div className="App">
      <div className="App__navigation">
        <Sidebar />        
      </div>

      <div className="App__content">
        <Routes>
          <Route 
            index
            path="/" 
            element={<><InfoPanel /><Home /></>} />
          <Route 
            path="users" 
            element={
              <>
                <InfoPanel />
                <Users />
                <TasksPanel />
              </>
            } 
          />
          <Route 
            path="users/:userId" 
            element={<><InfoPanel /><CurrentUser /></>} 
          />
          <Route path="ideas" element={<Home />} />
          <Route path="about" element={<Home />} />
          <Route path="contacts" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>   
  )
}

export default App;
