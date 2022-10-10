import { FaTimes, FaEdit } from "react-icons/fa";
import Proptypes from "react";
import Card from "./shared/Card";
import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";

function Feedbackitem({ item }) {
  const { editFeedback, deleteFeedback } = useContext(FeedbackContext);

  return (
    <Card>
      <div className="num-display">{item.rating}</div>
      <button onClick={() => deleteFeedback(item.id)} className="close">
        <FaTimes color="purple"></FaTimes>
      </button>
      <button onClick={() => editFeedback(item)} className="edit">
        <FaEdit color="purple"> </FaEdit>
      </button>
      <div className="text-display">{item.text}</div>
    </Card>
  );
}
Feedbackitem.prototype = {
  item: Proptypes.object,
};
export default Feedbackitem;
