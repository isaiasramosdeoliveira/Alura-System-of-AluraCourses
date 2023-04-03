import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { letter } from "../../global/variables/variables";
import { Link, useNavigate, useNavigation } from "react-router-dom";
import Curse from "../../components/Curse/Curse";
import json from "../../json/db.json";
import { MdModeEditOutline, MdDelete } from "react-icons/md";
import CursesControllers from "../../assets/controllers/CursesCotrollers";
import Filter from "../../ts/Filter";
import Search from "../../ts/Search";

const Filters = styled.div`
  input {
    width: 300px;
    display: flex;
    margin: auto;
    margin-bottom: 25px;
    border: 1px solid;
    border-radius: 5px;
    padding: 10px;
  }
  ul {
    display: flex;
    justify-content: center;
    gap: 25px;
    li {
      button {
        cursor: pointer;
        padding: 10px 10px;
        background: rgb(39, 39, 40);
        border: none;
        border-radius: 5px;
        font-weight: 600;
        color: ${letter};
        &:hover {
          background: rgb(54, 52, 52);
        }
      }
    }
  }
`;

const Service = styled.div`
  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 20px;
    gap: 30px;
    a {
      text-decoration: none;
    }
    li {
      width: 250px;
      height: 300px;
      padding: 10px;
      border-radius: 10px;
      .btn {
        display: flex;
        justify-content: space-between;
        margin-top: 15px;
        button {
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 24px;
          width: 50px;
          height: 30px;
        }
      }
      img {
        display: flex;
        margin: auto;
        margin-top: 25px;
        height: 180px;
        width: 180px;
        border-radius: 5px;
      }
    }
  }
`;
const Services = () => {
  const [dice, setDice] = useState(json.curses);
  const [search, setSearch] = useState('')
  useEffect(() => {
    const searchCurses = async () => {
      const dice = await Search.SearchCurses(search);
      const json = await dice
      setDice(dice)
    }
    searchCurses();
  }, [search])
  
  const handleFilter = (e: React.MouseEvent<HTMLButtonElement, MouseEvent> | any): void =>{
    const type = e.target.dataset.filter; 
    const dice = Filter.FilterCurses(type)
    setDice(dice);
  }
  const navegation = useNavigate();
  return (
    <div>
      <section>
        <h1>Curses</h1>
        <Filters>
          <input onChange={(e) => setSearch(e.target.value)} type="text" name="curse" id="curse" placeholder="Buscar" />
          <ul>
            <li>
              <button onClick={(e) => handleFilter(e)} data-filter="todos">
                Todos
              </button>
            </li>
            <li>
              <button onClick={(e) => handleFilter(e)} data-filter="Front-end">
                Front-end
              </button>
            </li>
            <li>
              <button onClick={(e) => handleFilter(e)} data-filter="Back-end">
                Back-end
              </button>
            </li>
            <li>
              <button
                onClick={(e) => handleFilter(e)}
                data-filter="Data Science"
              >
                Data Science
              </button>
            </li>
          </ul>
        </Filters>
        <Service>
          <ul>
            {dice.map((service: any) => (
              <li className="curse" key={service.id}>
                <Curse
                  id={service.id}
                  title={service.title}
                  type={service.type}
                  to={service.id}
                  img={service.img}
                />
              </li>
            ))}
          </ul>
        </Service>
      </section>
    </div>
  );
};

export default Services;
