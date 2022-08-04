import './App.scss';
import { Routes, Route } from 'react-router-dom';
import { Sidebar } from "./components/Sidebar";
import { Home } from "./components/Home";
import { Users } from "./components/Users";
import { NotFound } from './components/NotFound';
import { CurrentUser } from './components/CurrentUser';
import { InfoPanel } from './components/InfoPanel';
import { TasksPanel } from './components/TasksPanel';
import { Articles } from './components/Articles';
import { PageInDevelop } from './components/PageInDevelop';

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
            element={<><Home /></>} 
          />
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
          <Route path="ideas" element={<PageInDevelop />} />
          <Route path="contacts" element={<PageInDevelop />} />
          <Route path="agents" element={<PageInDevelop />} />
          <Route path="articles" element={<PageInDevelop />} />
          <Route path="settings" element={<PageInDevelop />} />
          <Route path="subscription" element={<PageInDevelop />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>   
  )
}

export default App;
