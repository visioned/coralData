import CoralItem from './CoralItem';
import classes from './CoralList.module.css';

function CoralList(props) {
  return (
    <ul className={classes.list}>
      {props.corals.map((coral) => (
        <CoralItem
          key={coral.id}
          id={coral.id}
          image={coral.image}
          title={coral.title}
          highlight={coral.highlight}
          description={coral.description}
        />
      ))}
    </ul>
  );
}

export default CoralList;
