import './App.css';
import AddItemForm from './container/addItemForm/AddItemForm';
import Header from './container/header/Header';
import { StageState } from './context/StageContext';
import HomePage from './page/HomePage';
// import SelectBar from './container/selectBar/SelectBar';

function App() {
  const {hasAddItemClick,todos} = StageState();
  return (
    <div className="App">
      <Header />
      {hasAddItemClick ? <AddItemForm /> : null}
      <HomePage />
      {/* <SelectBar /> */}
    </div>
  );
}

export default App;
