/*************************************************
 * 글 목록에 들어가는 각각의 포스트를 보여주는 컴포넌트
 * -----------------------------------------------
 * XXX
 * db CRUD 기능 정상작동 확인 안 함
 *************************************************/
import React from 'react';
import './PostCard.scss';

// 제목, 요약, 날짜, 작가

const PostCard = ({ title, summary, date, userName }) => {
  return (
    <div className='box'>
      <div className='title'>{title}</div>
      <div className='summary'>{summary}</div>
      <div className='more-info'>
        <div className='date'>{date}</div>
        <div>{userName}</div>
      </div>
    </div>
  )
}

export default PostCard
