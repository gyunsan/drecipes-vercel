import Image from 'next/image';
import classes from './hero.module.css';
import Link from "next/link";

function Hero() {
  return (


    <Link href="/contact">
    <section className={classes.hero}>
      <div id={classes.image}>
        <Image 
        src='/shopska-salad.jpg'
          alt='the first recipe to show on the website'
          width={256}
          height={170}
        />
        <div id={classes.heading}>
<h2>A healthy lifestyle starts with good nutrition</h2>
<p>The keys to a really good Shopska salad is to use the best tomatoes, the right amount of salt, top with lots of good creamy feta, and eat it right away.

</p>
      </div>
      </div>
   </section>
   </Link>
  );
}

export default Hero;
