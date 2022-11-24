import CommentIcon from "@mui/icons-material/Comment";

const CarReviewSection = (props) => {
  return (
    <div className="mt-4">
      <span className="text-slate-900 font-semibold">
        <CommentIcon className="text-blue-600" /> {props.reviews} comentarios
      </span>
    </div>
  );
};

export { CarReviewSection };
