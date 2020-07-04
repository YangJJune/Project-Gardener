/*************************************************
 * PostCard를 모아 글 목록으로 보여주는 컴포넌트
 * 글이 없을 경우 다른 메시지를 띄운다.
 * -----------------------------------------------
 * FIXME
 * posts, with 등의 정보를 porps로 부모로부터 받는게
 * 아닌, redux에 connect해서 redux state로부터
 * 가져와야 한다.
 *
 *************************************************/
import React, { useEffect } from 'react';
import PostCard from './postCard/PostCard';
import './PostCardList.scss';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { articleListRequestGenerator } from '../../../helpers/requestToDBHelper';
import { fetchArticleListIfNotFetching } from '../../../redux/action/articleListAction';

// classify the number of postCards, horizontally,
// into common display resolutions depending on screen display width.
const getColumnCount = (width) => {
  const xWide = 1920;
  const wide = 1600;
  const xLarge = 1280;
  const large = 1024;

  if (!width) return 1;
  if (width < large) return 1;
  if (width < xLarge) return 2;
  if (width < wide) return 3;
  if (width < xWide) return 4;
  return 5;
};

const PostCardList = ({ width }) => {
  // // this scope has access to jsx
  // const columnCount = getColumnCount(width);

  const posts = useSelector((state) => state.articleList.articleList);
  const dispatch = useDispatch(); //this won't change on renders

  useEffect(() => {
    const emptyFilter = {};

    dispatch(
      fetchArticleListIfNotFetching(emptyFilter, articleListRequestGenerator)
    );
  }, [dispatch]);

  const postList = posts
    .slice(0, posts.length)
    .map((post) => (
      <PostCard
        title={post.title}
        summary={post.category}
        date={post.topic}
        userName={post.author}
        className='post-card'
      />
    ));

  return (
    <div className='post-card-list'>
      {/* {
        // check from left to right if operand is falsy
        // if operand is falsy, return the value of it
        // otherwise, if all of the operands are considered true, return div element.
        // boolean false and empty array is not rendered.
        postList && postList.length === 0 && (
          <div className='empty-list'>아직 작성한 포스트가 없습니다.</div>
        )
      }
      {postList} */}
      {postList}
      <Link to='/writer'>go to writer</Link>
    </div>
  );
};

export default PostCardList;
