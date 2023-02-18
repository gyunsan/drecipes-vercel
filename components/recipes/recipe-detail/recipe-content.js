import classes from './recipe-content.module.css';

function RecipeContent(props) {
  return (
    <section className={classes.content}>
      {props.children}
    </section>
  );
}

export default RecipeContent;
