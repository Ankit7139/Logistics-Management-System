import "./App.css";
import { EditLoad } from "./Components/EditLoad/EditLoad";
import { Feilds } from "./Components/Feilds";
import { Heading } from "./Components/Heading";

function App() {
  return (
    <div className="App">
      <Heading />
      <Feilds />
      <EditLoad />
    </div>
  );
}

export default App;
