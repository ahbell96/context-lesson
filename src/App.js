import "./App.css";
import UserComponent from "./components/UserComponent";
import { useUser } from "./context/context.user";

function App() {
  const { state, dispatch } = useUser();

  return (
    <div className="App">
      <h2>hello {state.user?.name}</h2>
      <UserComponent />
    </div>
  );
}

export default App;
