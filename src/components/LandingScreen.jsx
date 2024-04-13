import CharizardInfo from "./CharizardInfo";
import TopBar from "./TopBar";

const LandingScreen = () => {
  return (
    <div className="lg:p-8 md:p-4 xs:p-2 flex flex-col h-screen overflow-scroll lg:mr-20 lg:ml-20 md:mr-10 md:ml-10 xs:ml-4 xs:mr-4">
      <TopBar />
      <CharizardInfo />
    </div>
  );
};

export default LandingScreen;
