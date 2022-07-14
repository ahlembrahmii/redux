import "./App.css";
import TaskList from "./components/TaskList";
import AddTask from "./components/AddTask";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <h1>TODO-APP-REDUX</h1>
      <AddTask />
      <TaskList />
    </div>
  );
}

export default App;
