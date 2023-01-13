import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Route, Routes } from 'react-router';
import ViewPost from './Components/ViewPost';
import AddPost from './Components/AddPost';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' exact element={<ViewPost/>}/>
        <Route path='/addpost' exact element={<AddPost/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
