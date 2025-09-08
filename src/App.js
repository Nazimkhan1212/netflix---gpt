import { Provider } from "react-redux";
import Hero from "./components/Hero";
import store from "./store";
function App() {
  return (
    <Provider store={store}>
      <Hero />
    </Provider>
  );
}

export default App;
