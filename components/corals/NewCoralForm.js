import { useRef } from 'react';

import Card from '../ui/Card';
import classes from './NewCoralForm.module.css';

function NewCoralForm(props) {
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const highlightInputRef = useRef();
  const descriptionInputRef = useRef();

  function submitHandler(e) {
    e.preventDefault();

    const enteredTitle = titleInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredHighlight = highlightInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;

    const coralData = {
      title: enteredTitle,
      image: enteredImage,
      highlight: enteredHighlight,
      description: enteredDescription,
    };

    props.onAddCoral(coralData);
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor='title'>coral title</label>
          <input type='text' required id='title' ref={titleInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='image'>coral image</label>
          <input type='url' required id='image' ref={imageInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='highlight'>highlight</label>
          <input type='text' required id='highlight' ref={highlightInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='description'>description</label>
          <textarea
            id='description'
            required
            rows='5'
            ref={descriptionInputRef}
          ></textarea>
        </div>
        <div className={classes.actions}>
          <button>add coral</button>
        </div>
      </form>
    </Card>
  );
}

export default NewCoralForm;
