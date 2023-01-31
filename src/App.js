import { Link, Route, Switch } from 'react-router-dom';
import './App.css';
import TableComponent from './components/Table.js';
import ChartComponent from './components/Chart.js';

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/table">Table</Link>
        <Link to="/charts">Charts</Link>
      </nav>
      <Switch>
        <Route path="/table">
          <h1>Recommended &quot;I Think You Should Leave&quot; Sketches</h1>
          <TableComponent />
        </Route>
        <Route path="/charts">
          <h1>Animals in My Lifetime</h1>
          <ChartComponent />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
