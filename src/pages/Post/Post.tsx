import React from 'react'
import json from '../../json/db.json';
import { useNavigate, useParams } from 'react-router-dom';
const Post = () => {
  const params = useParams();
  const dice = json.curses.find(curse => Number(params.id) == curse.id);
  window.scrollTo(0, document.body.scrollTop);
  return (
    <div>
      <h1>{dice?.title}</h1>
      <img
        style={{ display: "flex", margin: "auto", borderRadius: "5px" }}
        src={dice?.img}
        alt={dice?.title}
      />
      <p style={{ textAlign: "center", marginTop: "20px" }}>{dice?.type}</p>
    </div>
  );
}

export default Post