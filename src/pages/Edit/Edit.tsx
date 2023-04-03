import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import json from "../../json/db.json";
import { Form } from "../../global/themes/ThemeGlobal";
import CursesControllers from "../../assets/controllers/CursesCotrollers";

const Edit = () => {
    const navegate = useNavigate();
  function handleEditCurse(e: any, id: any) {
    e.preventDefault();
    const inputs = document.querySelectorAll("[data-value]") as any;
    CursesControllers.editCurse(inputs, id);
    navegate('/curses')
    window.location.reload()
  }
  const params = useParams();
  const dice = json.curses.find((curse) => Number(params.id) == curse.id);
  const [title, setTitle] = useState(dice?.title);
  const [type, setType] = useState(dice?.type);
  const [img, setImg] = useState(dice?.img);
  return (
    <Form action="">
      <div>
        <label htmlFor="title">Título</label>
        <input
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          data-value
          placeholder="Título do curso"
          type="text"
          name="title"
          id="title"
        />
      </div>
      <div>
        <label htmlFor="">Área</label>
        <select
          onChange={(e) => setType(e.target.value)}
          value={type}
          data-value
          name="type"
          id="type"
        >
          <option value="Front-end">Front-end</option>
          <option value="Data Science">Data Science</option>
          <option value="Back-end">Back-end</option>
        </select>
      </div>
      <div>
        <label htmlFor="">Capa do curso</label>
        <input
          data-value
          onChange={(e) => setImg(e.target.value)}
          value={img}
          placeholder="URL da imagem"
          type="text"
          name="img"
          id="img"
        />
      </div>
      <input
        onClick={(e) => handleEditCurse(e, dice?.id)}
        type="submit"
        value="Salvar"
      />
    </Form>
  );
};

export default Edit;
