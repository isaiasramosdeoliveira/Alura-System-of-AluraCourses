import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { MdModeEditOutline, MdDelete } from "react-icons/md";
import CursesControllers from '../../assets/controllers/CursesCotrollers';

const Curse = ({id, title, type, to, img}: any) => {
  const navegation = useNavigate();
  const handleEdit = (id: any) => {
    navegation(`/curses/edit/${id}`);
  }
  const handleDeleteCurse = (id: any) => {
    CursesControllers.deleteCurse(id);
    window.location.reload();
  };
  return (
    <div>
      <Link key={id} to={`/curses/${to}`}>
        <div>
          <h3>{title}</h3>
          <h5>{type}</h5>
          <img src={img} alt={title} />
        </div>
      </Link>
      <div className="btn">
        <button onClick={() => handleEdit(id)}>
          <MdModeEditOutline />
        </button>
        <button onClick={() => handleDeleteCurse(id)}>
          <MdDelete />
        </button>
      </div>
    </div>
  );
}

export default Curse