import './App.css';
import Filters from './components/Filters';
import TodoList from './components/TodoList';
import { Divider } from 'antd';

function App() {
  return (
    <div
      style={{
        width: 500,
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'white',
        padding: 20,
        boxShadow: '0 0 10px 4px #bfbfbf',
        borderRadius: 5,
        height: '90vh',
      }}
    >
      <h1 style={{ textAlign: 'center', marginBottom: 0 }}>Todo app of Andrew</h1>
      <h3 style={{
        textAlign: 'center',
        margin: 0
      }}>Ngô Quang Dũng</h3>

      <Filters />
      <Divider />
      <TodoList />
    </div>
  );
}

export default App;
