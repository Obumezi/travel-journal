import './App.css';
import { Header } from './components/Header';
import { TravelCard } from './components/Travelcard';
import Data from './Data'

function App() {
  const travelEx = Data.map(item => {
    return <TravelCard
      item={item}
    />
  })
  return (
    <div >
      <Header />
      {travelEx}

    </div>
  );
}

export default App;
