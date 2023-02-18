import classes from './recipe-summary.module.css';

function RecipeSummary(props) {
  const { title } = props;

  return (
    <section className={classes.summary}>
      <h1>{title}</h1>
    </section>
  );
}

export default RecipeSummary;