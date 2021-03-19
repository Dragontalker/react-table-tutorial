import { BasicTable } from './components/BasicTable';
import { SortingTable } from './components/SortingTable';
import { FilteringTable } from './components/FilteringTable';
import MOCK_DATA from './components/MOCK_DATA.json';
import { COLUMNS, GROUPED_COLUMNS } from './components/columns';

const App = () => {
  return (
    <div className="App">
      <FilteringTable columns={COLUMNS} data={MOCK_DATA}/>
    </div>
  );
};

export default App;
