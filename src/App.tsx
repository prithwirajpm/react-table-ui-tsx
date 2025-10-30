import "./App.css";
import TableView from "./Components/Table/TableView";
import "./Styles/main.scss";
import { data } from "./data/row";
import { headers } from "./data/header";

function App() {
  return (
    <div className="App">
      <TableView headers={headers} data={data} />
    </div>
  );
}

export default App;
