import pokemon_logo from "../assets/logo-pokemon.svg";
import linkedin_logo from "../assets/logo-linkedin.svg";
import github_logo from "../assets/logo-github.svg";

const TopBar = () => {
  return (
    <div className="flex justify-between items-center ">
      <div>
        <img src={pokemon_logo} alt="pokemon logo" />
      </div>

      <div className="flex justify-between items-center">
        <button>
          <a href="https://www.linkedin.com/in/josbeak" className="button">
            <img src={linkedin_logo} alt="linkedin logo" />
          </a>
        </button>
        <button>
          <a href="https://www.github.com/josbeak" className="button">
            <img src={github_logo} alt="linkedin logo" />
          </a>
        </button>
      </div>
    </div>
  );
};

export default TopBar;
