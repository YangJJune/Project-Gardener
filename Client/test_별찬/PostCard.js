import React from 'react';
import './PostCard.scss';
// 제목, 요약, 날짜, 작가

const PostCard = ({ title, summary, date, username }) => {
  return (
    <div className="box">
      <div className="title">{title}</div>
      <div className="summary">{summary}</div>
      <div className="more-info">
        <div className="date">{date}</div>
        <div>{username}</div>
      </div>
    </div>
  );
};

export default PostCard;
