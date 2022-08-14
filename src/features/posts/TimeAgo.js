import { formatDistanceToNowStrict, parseISO } from "date-fns";

const TimeAgo = ({ epochTime }) => {
  const MILLISECONDS = 1000;
  let timeAgo = "";
  if (epochTime) {
    const date = new Date(epochTime * MILLISECONDS);
    const timePeriod = formatDistanceToNowStrict(date);
    timeAgo = `${timePeriod} ago`;
  }
  return (
    <span className="timeago" title={epochTime}>
      &nbsp; <i>{timeAgo}</i>
    </span>
  );
};

export default TimeAgo;
