import LandingScreen from "./components/LandingScreen";
import PokemonList from "./components/PokemonList";

function App() {
  return (
    <>
      <div className="w-full bg-gradient-to-r from-orange-500 via-red-500 to-red-900  h-screen">
        <LandingScreen />
      </div>
      <div className="bg-customBlue w-full h-auto ">
        <PokemonList />
      </div>
    </>
  );
}

export default App;
