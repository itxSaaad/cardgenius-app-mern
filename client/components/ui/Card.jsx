function Card({ children, className: additionalClassNames, ...props }) {
  let classes = 'w-full bg-white border-2 border-violet-600 rounded-md';

  if (additionalClassNames) {
    classes += ` ${additionalClassNames}`;
  }
  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
}

export default Card;
