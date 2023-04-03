import { Link } from "react-router-dom";
import React, { useState } from "react";
import { MdHomeRepairService, MdAddToPhotos } from "react-icons/md";
import { BsLightbulbFill, BsLightbulbOffFill } from "react-icons/bs";
import { FaHome, FaUserAlt } from "react-icons/fa";
import styled from "styled-components";
import react, { useContext } from "react";
import { corPrimary, letter } from "../../global/variables/variables";
import { GlobalThemeContext } from "../../contexts/ThemeContext";
import { set } from "mongoose";
import { ThemeDark, ThemeLight } from "../Content/Content";

interface Ways {
  ways: string;
  setWays: Function;
}

const Menu = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-around;
  background: ${corPrimary};
  ul {
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 10px 0px;
    gap: 20px;
    li {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 20px;
      a,
      button {
        display: flex;
        align-items: center;
        justify-content: center;
        color: ${letter};
        font-size: 35px;
      }
      button {
        cursor: pointer;
        border: none;
        background: transparent;
        color: ${letter};
        font-size: 30px;
      }
      .user {
        padding: 10px;
        background: #193da7;
        border-radius: 100px;
        border: 2px solid;
        font-size: 30px;
      }
    }
  }
`;
export default () => {
  const [icon, setIcon] = useState(false);
  const { ways, setWays }: any =
    useContext(GlobalThemeContext);
  const handleModeChange = () => {
    setIcon(!icon);
    setWays(!icon ? ThemeDark : ThemeLight);
  };
  return (
    <Menu>
      <ul>
        <li>
          <Link to="/">
            <FaHome />
          </Link>
          <Link to="/curses">
            <MdHomeRepairService />
          </Link>
          <Link to="/form">
            <MdAddToPhotos />
          </Link>
        </li>
      </ul>
      <ul>
        <li>
          <button onClick={handleModeChange}>
            {icon == false ? <BsLightbulbFill /> : <BsLightbulbOffFill />}
          </button>
        </li>
        <li>
          <Link className="user" to='/login'>
            <FaUserAlt/>
          </Link>
        </li>
      </ul>
    </Menu>
  );
};
