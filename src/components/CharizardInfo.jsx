import fire_type from "../assets/pokemonTypes/fire.svg";
import flying_type from "../assets/pokemonTypes/flying.svg";
import BoltIcon from "../assets/icon-bolt.svg";
import FireDivider from "../assets/divider-fire.svg";
import CharizardImg from "../assets/img-charizard-min.png";
import { Grid } from "@mui/material";

const CharizardInfo = () => {
  return (
    <Grid container spacing={2}>
      {/* Grid 1 */}
      <Grid item xs={12} lg={5.5}>
        <div className="text-white">
          <p className="text-2xl font-bold">#006</p>
          <div className="flex pt-3 pb-3">
            <div className="bg-orange-400 rounded-lg p-1 flex justify-around items-center">
              <img src={fire_type} alt="type" />
              <p className="ml-2 mr-2"> Fire</p>
            </div>
            <div className="bg-blue-300 rounded-lg p-1 flex justify-around items-center ml-2">
              <img src={flying_type} alt="type" />
              <p className="ml-2 mr-2"> Flying</p>
            </div>
          </div>
          <div className="">
            <p className="text-4xl font-extrabold">CHARIZARD</p>
            <p className="pt-2 pb-2">
              Charizard resembles a large traditional European dragon. Despite
              the similarity, Charizard is explicitly a Fire and Flying-type
              Pokémon, and not a Dragon-type, except in its "Mega Charizard X"
              form; However, it can learn Dragon-type attacks.
            </p>
            <button className="bg-white flex w-full p-4 justify-center items-center rounded-lg ">
              <img src={BoltIcon} alt="" />
              <p className="text-red-800 font-bold ">More Details</p>
            </button>
          </div>
        </div>
      </Grid>

      {/* Grid 2 */}
      <Grid
        item
        xs={12}
        lg={1}
        className="hidden lg:flex items-center justify-center"
      >
        <div className="flex flex-col justify-between items-center mt-20">
          <div className="bg-gradient-to-b from-transparent to-white h-52 w-0.5 mx-auto " />

          <img
            src={FireDivider}
            alt="fire divider"
            className="w-[60%]  pt-1 pb-1"
          />

          <div className="bg-gradient-to-b from-white to-transparent h-52 w-0.5 mx-auto "></div>
        </div>
      </Grid>

      {/* Grid 3 */}
      <Grid item xs={12} lg={5.5}>
        <div className="flex justify-center ">
          <img src={CharizardImg} alt="charizard" className="w-full" />
        </div>
      </Grid>
    </Grid>
  );
};

export default CharizardInfo;
