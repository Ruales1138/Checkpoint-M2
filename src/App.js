import { Route } from "react-router-dom";
import Houses from "./components/Houses/Houses";
import Nav from "./components/Nav/Nav";
import HouseDetail from "./components/HouseDetail/HouseDetail";
import CreateHouse from "./components/CreateHouse/CreateHouse";

function App() {
  return (
    <div className="App">
      <Route path='/'>
        <Nav/>
      </Route>
      <Route exact path='/'>
        <Houses/>
      </Route>
      <Route exact path='/houses/:houseId'
        render={({match}) => <HouseDetail match={match}/>}
      />
      <Route exact path='/house/create'>
        <CreateHouse/>
      </Route>
    </div>
  );
}

export default App;
