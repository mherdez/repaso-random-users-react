import './App.css';
import GridUsers from "./components/GridUsers";

const App = () => {

  return (
    <>
      <h1>Random Users</h1>
      <GridUsers limite={8} />
    </>
  );
};

export default App;