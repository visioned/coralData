import classes from "./CoralDetail.module.css"

function CoralDetail(props) {
  return (
    <section className={classes.detail}>
      <img
        src={props.image}
        alt={props.title}
      />
      <h1>{props.title}</h1>
      <highlight>{props.highlight}</highlight>
      <p>{props.description}</p>
    </section>
  );
}

export default CoralDetail;