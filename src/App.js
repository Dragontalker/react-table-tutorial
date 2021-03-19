import logo from './logo.svg';
import './App.css';
import { BasicTable } from './components/BasicTable';
import MOCK_DATA from './components/MOCK_DATA.json';
import { COLUMNS } from './components/columns';

function App() {
  return (
    <div className="App">
      <BasicTable columns={COLUMNS} data={MOCK_DATA}/>
    </div>
  );
}

export default App;
