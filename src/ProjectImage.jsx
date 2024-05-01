export default function ProjectImage(props) {
  return (
    <a href={props.link}>
      <div className="container">
        <img src={props.image} className="rounded-md" />
        <div className="overlay bg-teal-700 rounded-md">
          <div className="projectText text-4xl">{props.summary}</div>
        </div>
      </div>
    </a>
  );
}
