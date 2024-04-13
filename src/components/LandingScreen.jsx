import CharizardInfo from "./CharizardInfo";
import TopBar from "./TopBar";

const LandingScreen = () => {
  return (
    <div className="p-8 flex flex-col h-screen overflow-scroll mr-20 ml-20">
      <TopBar />
      <CharizardInfo />
    </div>
  );
};

export default LandingScreen;
