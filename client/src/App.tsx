import { Footer, Header, Results, Search } from "./components";

import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Search />
      <Results />
      <Footer />
    </div>
  );
};

export default App;
