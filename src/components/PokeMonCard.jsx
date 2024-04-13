import fire from "../assets/pokemonTypes/fire.svg";
import water from "../assets/pokemonTypes/water.svg";
import electric from "../assets/pokemonTypes/electric.svg";
import grass from "../assets/pokemonTypes/grass.svg";
import ice from "../assets/pokemonTypes/ice.svg";
import fighting from "../assets/pokemonTypes/fighting.svg";
import poison from "../assets/pokemonTypes/poison.svg";
import ground from "../assets/pokemonTypes/ground.svg";
import flying from "../assets/pokemonTypes/flying.svg";
import psychic from "../assets/pokemonTypes/psychic.svg";
import bug from "../assets/pokemonTypes/bug.svg";
import rock from "../assets/pokemonTypes/rock.svg";
import ghost from "../assets/pokemonTypes/ghost.svg";
import dragon from "../assets/pokemonTypes/dragon.svg";
import dark from "../assets/pokemonTypes/dark.svg";
import steel from "../assets/pokemonTypes/steel.svg";
import fairy from "../assets/pokemonTypes/fairy.svg";
import normal from "../assets/pokemonTypes/normal.svg";
import WeightIcon from "../assets/icon-weight.svg";
import RulerIcon from "../assets/icon-ruler.svg";
import BoltIcon from "../assets/icon-bolt.svg";

const PokeMonCard = ({ pokemon }) => {
  const imgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${pokemon.id}.png`;

  const getTypeIcon = (type) => {
    switch (type) {
      case "fire":
        return fire;
      case "water":
        return water;
      case "electric":
        return electric;
      case "grass":
        return grass;
      case "ice":
        return ice;
      case "fighting":
        return fighting;
      case "poison":
        return poison;
      case "ground":
        return ground;
      case "flying":
        return flying;
      case "psychic":
        return psychic;
      case "bug":
        return bug;
      case "rock":
        return rock;
      case "ghost":
        return ghost;
      case "dragon":
        return dragon;
      case "dark":
        return dark;
      case "steel":
        return steel;
      case "fairy":
        return fairy;
      default:
        return normal;
    }
  };

  const renderTypes = () => {
    return pokemon.types.map((item, index) => (
      <div
        key={index}
        className={`bg-${item.type.name} rounded-lg p-1  flex ml-1 items-center`}
      >
        <img src={getTypeIcon(item.type.name)} alt="type" />
        <p className="ml-2 mr-2 font-bold">
          {item.type.name.charAt(0).toUpperCase() + item.type.name.slice(1)}
        </p>
      </div>
    ));
  };

  let id = `#${pokemon.id.toString().padStart(3, "0")}`;

  const pokemonName =
    pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
  return (
    <div className="pt-[11rem] ">
      <div className="w-[90%] bg-gradient-to-br from-green-800 via-teal-900 to-teal-800 shadow-3xl rounded-2xl ">
        <div className="flex items-center justify-center relative">
          <img
            src={imgUrl}
            alt=""
            className="w-60 h-60 absolute top-[-10.5rem]"
          />
        </div>

        <div className="text-white flex flex-col items-center justify-center mt-[6rem]">
          {/* Info div */}
          <div className="flex flex-col justify-center items-center ">
            <p className="text-xl font-bold pb-1">{id}</p>
            <p className="text-4xl font-bold">{pokemonName}</p>
          </div>

          <div className="flex pt-3 pb-3 justify-center">{renderTypes()}</div>

          <div className="flex items-center justify-center">
            <div className="flex flex-col justify-center items-center">
              <div className="p-2 flex">
                <img src={WeightIcon} alt="" />
                <p className="font-bold ml-2">{pokemon?.weight / 10} Kg</p>
              </div>
              <p className="font-bold">Weight</p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <div className="p-2 flex">
                <img src={RulerIcon} alt="" />
                <p className="font-bold ml-2">{pokemon?.height / 10} m</p>
              </div>
              <p className="font-bold">Height</p>
            </div>
          </div>
        </div>
        <div className="bg-customGreen mt-6 rounded-b-3xl">
          <button className="w-full rounded-b-lg p-3 flex  justify-center items-center">
            <img src={BoltIcon} alt="" />
            <p className="text-white font-black ">More Details</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PokeMonCard;
