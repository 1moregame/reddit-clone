import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFireFlameCurved,
  faRankingStar,
  faHourglassStart,
} from "@fortawesome/free-solid-svg-icons";
import "./filterBar.css";
import { setFilter } from "./features/posts/postsSlice";
import { useDispatch } from "react-redux";

const FilterBar = () => {
  const dispatch = useDispatch();
  const handleFilter = ({ currentTarget }) => {
    if (currentTarget.classList.contains("selected")) {
    } else {
      let selectedElement = document.getElementsByClassName("selected")[0];
      selectedElement.classList.remove("selected");
      currentTarget.classList.add("selected");
      dispatch(setFilter(currentTarget.firstChild.id));
    }
  };
  return (
    <div className="filter-bar">
      <div className="icon-wrapper selected" onClick={handleFilter}>
        <FontAwesomeIcon
          className="icon"
          id="hot"
          aria-label="Hot Posts"
          icon={faFireFlameCurved}
        />
        <p className="title">HOT</p>
      </div>
      <div className="icon-wrapper" onClick={handleFilter}>
        <FontAwesomeIcon
          id="top"
          className="icon"
          aria-label="Top Posts"
          icon={faRankingStar}
        />
        <p className="title">TOP</p>
      </div>{" "}
      <div className="icon-wrapper" onClick={handleFilter}>
        <FontAwesomeIcon
          id="new"
          className="icon"
          aria-label="New Posts"
          icon={faHourglassStart}
        />
        <p className="title">new</p>
      </div>
    </div>
  );
};

export default FilterBar;
