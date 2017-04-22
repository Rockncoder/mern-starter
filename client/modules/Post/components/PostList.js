import React from 'react';
import propTypes from 'prop-types';

// Import Components
import PostListItem from './PostListItem/PostListItem';

function PostList(props) {
  return (
    <div className="listView">
      {
        props.posts.map(post => (
          <PostListItem
            post={post}
            key={post.cuid}
            onDelete={() => props.handleDeletePost(post.cuid)}
          />
        ))
      }
    </div>
  );
}

PostList.propTypes = {
  posts: propTypes.arrayOf(propTypes.shape({
    name: propTypes.string.isRequired,
    title: propTypes.string.isRequired,
    content: propTypes.string.isRequired,
    slug: propTypes.string.isRequired,
    cuid: propTypes.string.isRequired,
  })).isRequired,
  handleDeletePost: propTypes.func.isRequired,
};

export default PostList;
