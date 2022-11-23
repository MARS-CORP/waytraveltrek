import CommentIcon from '@mui/icons-material/Comment';

function CarReviewSection(props) {
  return (
    <div className="mt-4">
      <span className="text-slate-900 font-semibold">
        <CommentIcon /> {props.reviews} comentarios
      </span>
    </div>
  );
}

export default CarReviewSection;
