import classes from './featured-posts.module.css';
import PostsGrid from '../posts-grid';
import { Fragment } from 'react';

function AllPosts(props) {
  return (
    <Fragment>
    <section className={classes.posts}>
      <PostsGrid posts={props.posts} />
    </section>
</Fragment>
  );
}

export default AllPosts;
