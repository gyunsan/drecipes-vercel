import classes from "./recipe-item.module.css";
import Image from "next/image";
import slugify from "slugify";
import Link from "next/link";

function RecipeItem(props) {
  const {
    title,
    image,
    id,
    description,
    nutritionalValue,
    directions,
    isFeatured,
  } = props;

  const exploreLink = `/recipes/${slugify(title).toLocaleLowerCase()}`;

  return (
    <Link href={exploreLink}>
      <div className={classes.item}>
        {isFeatured && <div className={classes.feature}>Featured</div>}

        <Image
          src={"/" + image}
          alt={title}
          title={title}
          width={150}
          height={150}
        />
            <h3>{title}</h3>
            <div>
              <p>{nutritionalValue}</p>
            </div>
      </div>
    </Link>
  );
}

export default RecipeItem;
