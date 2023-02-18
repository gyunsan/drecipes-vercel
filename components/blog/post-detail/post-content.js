import ReactMarkdown from 'react-markdown';
import Image from 'next/image';
import PostHeader from './post-header';
import classes from './post-content.module.css';


// SyntaxHighlighter.registerLanguage('js', js);

function PostContent(props) {
  const { post } = props;

  const imagePath = `/images/blog/${post.slug}/${post.image}`;

  const customRenderers = {
    // img(image) {
    //   return (
    //     <Image
    //       src={`/images/blog/${post.slug}/${image.src}`}
    //       alt={image.alt}
    //       width={375}
    //       height={250}
    //     />
    //   );
    // },
    p(paragraph) {
      const { node } = paragraph;

      if (node.children[0].tagName === 'img') {
        const image = node.children[0];

        return (
          <div className={classes.image}>
            <Image
              src={`/images/posts/${post.slug}/${image.properties.url}`}
              alt={image.alt}
              width={600}
              height={300}
            />
          </div>
        );
      }

      return <p>{paragraph.children}</p>;
    },
};

  return (
    <article className={classes.content}>
      <PostHeader title={post.title} image={imagePath} />
      <ReactMarkdown components={customRenderers}>{post.content}</ReactMarkdown>
    </article>
  );
}

export default PostContent;
