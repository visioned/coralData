import { useRouter } from "next/router";

import Card from "../ui/Card";
import classes from "./CoralItem.module.css";

function CoralItem(props) {
  const router = useRouter();

  function showDetailsHandler() {
    router.push("/" + props.id);
  };

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <highlight>{props.highlight}</highlight>
        </div>
        <div className={classes.actions}>
          <button onClick={showDetailsHandler}>check the carfax</button>
        </div>
      </Card>
    </li>
  );
}

export default CoralItem;
