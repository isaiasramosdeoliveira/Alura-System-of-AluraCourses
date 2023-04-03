import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { letter } from "../../global/variables/variables";
import CursesControllers from "../../assets/controllers/CursesCotrollers";
import { Form } from "../../global/themes/ThemeGlobal";
import { useNavigate } from "react-router-dom";

export default () => {
  const navigate = useNavigate()
  function handleCreateCurse(
    e: React.MouseEvent<HTMLInputElement, MouseEvent>
  ) {
    e.preventDefault();
    const inputs = document.querySelectorAll(
      "[data-value]"
    ) as NodeListOf<Element>;
    CursesControllers.createCurse(inputs);
    navigate("/curses");
    window.location.reload();
  }
  
  return (
    <Form action="">
      <div>
        <label htmlFor="title">Título</label>
        <input
          data-value
          placeholder="Título do curso"
          type="text"
          name="title"
          id="title"
        />
      </div>
      <div>
        <label htmlFor="">Área</label>
        <select data-value name="type" id="type">
          <option value="Front-end">Front-end</option>
          <option value="Data Science">Data Science</option>
          <option value="Back-end">Back-end</option>
        </select>
      </div>
      <div>
        <label htmlFor="">Capa do curso</label>
        <input
          data-value
          placeholder="URL da imagem"
          type="text"
          name="img"
          id="img"
        />
      </div>
      <input
        onClick={(e: React.MouseEvent<HTMLInputElement, MouseEvent>) =>
          handleCreateCurse(e)
        }
        type="submit"
        value="Criar"
      />
    </Form>
  );
};
