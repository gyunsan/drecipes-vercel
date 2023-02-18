import { Fragment } from "react";
import CategoryLinks from "../../../components/recipes/categories/category-links";

function BreakfastAndBrunch() {
  return (
    <Fragment>
      <h1>Breakfast and Brunch</h1>
      <p>
        Discover tasty recipes for pancakes, waffles, bacon, eggs, brunch
        casseroles, coffee cakes, muffins, quiche, and so much more.
      </p>
      <CategoryLinks />
    </Fragment>
  );
}

export default BreakfastAndBrunch;
