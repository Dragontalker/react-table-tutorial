import { BasicTable } from './components/BasicTable';
import MOCK_DATA from './components/MOCK_DATA.json';
import { COLUMNS } from './components/columns';

const App = () => {
  return (
    <div className="App">
      <BasicTable columns={COLUMNS} data={MOCK_DATA}/>
    </div>
  );
}

export default App;
