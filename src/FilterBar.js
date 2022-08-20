import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFireFlameCurved,
  faRankingStar,
  faChartLine,
} from "@fortawesome/free-solid-svg-icons";
import "./filterBar.css";

const FilterBar = () => {
  return (
    <div className="filter-bar">
      <div className="icon-wrapper">
        <FontAwesomeIcon
          id="hot"
          aria-label="Hot Posts"
          icon={faFireFlameCurved}
        />
        <p className="title">HOT</p>
      </div>
      <div className="icon-wrapper">
        <FontAwesomeIcon id="top" aria-label="Top Posts" icon={faRankingStar} />
        <p className="title">TOP</p>
      </div>{" "}
      <div className="icon-wrapper">
        <FontAwesomeIcon
          id="rising"
          aria-label="Rising Posts"
          icon={faChartLine}
        />
        <p className="title">rising</p>
      </div>
    </div>
  );
};

export default FilterBar;
