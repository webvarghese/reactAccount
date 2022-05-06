
import RightPanel from "./RightPanel";
import LeftPanel from "./LeftPanel"

const Home = ({transactions}) => {
  return (
    <div className="container">
      <LeftPanel/>
      <RightPanel list={transactions} />
    </div>
  );
};
export default Home;
