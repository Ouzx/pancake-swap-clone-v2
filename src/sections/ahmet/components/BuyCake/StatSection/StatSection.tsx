import { BlockArray } from "../../../../../types/ahmet";
import "./StatSection.scss";

const StatSection = ({ entry, data }: BlockArray) => {
  return (
    <div className="stat-section-div">
      <div className="entry-div">{entry}</div>
      <div className="data-div">{data}</div>
    </div>
  );
};

export default StatSection;
