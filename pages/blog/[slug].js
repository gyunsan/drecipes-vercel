import Head from 'next/head';
import { Fragment } from 'react';

import PostContent from '../../components/blog/post-detail/post-content';
import { getPostData, getPostsFiles } from '../../lib/posts-util';

function PostDetailPage(props) {
  return (
    <Fragment>
      <Head>
        <title>{props.post.title}</title>
        <meta name="title" content={props.post.title}/>
        <meta name='description' content={props.post.excerpt} />

        {/* Facebook Open Graph Markup */}
<meta property="og:url"                content='/' />
<meta property="og:type"               content="article" />
<meta property="og:title"              content={props.post.title} />
<meta property="og:description"        content={props.post.excerpt} />
<meta property="og:image"              content={props.post.image}  />
      </Head>
      <PostContent post={props.post} />
    </Fragment>
  );
}

export function getStaticProps(context) {
  const { params } = context;
  const { slug } = params;

  const postData = getPostData(slug);

  return {
    props: {
      post: postData,
    },
    revalidate: 600,
  };
}

export function getStaticPaths() {
  const postFilenames = getPostsFiles();

  const slugs = postFilenames.map((fileName) => fileName.replace(/\.md$/, ''));

  return {
    paths: slugs.map((slug) => ({ params: { slug: slug } })),
    fallback: false,
  };
}

export default PostDetailPage;
