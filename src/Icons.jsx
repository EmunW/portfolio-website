export const Icons = (props) => {
  return (
    <svg
      id={props.id}
      className={props.className}
      fill={props.fill}
      viewBox={props.viewBox}
      xmlns={props.link}
    >
      <path
        d={props.d}
        fillRule={props.fillRule}
        clipRule={props.clipRule}
      ></path>
    </svg>
  );
};
