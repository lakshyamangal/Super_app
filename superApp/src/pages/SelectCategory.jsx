import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Styles from "/Users/lakshya_mangal/Desktop/cuvette/super_app/Super_app/superApp/src/components/Category/category.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTriangleExclamation,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
function SelectCategory() {
  //variable declaration
  let visible = false;
  const navigate = useNavigate();
  const [items, setItems] = useState([]);
  let genreString = JSON.stringify(items);
  localStorage.setItem("genreArray", genreString);
  let retString = localStorage.getItem("genreArray");
  let retArray = JSON.parse(retString);

  //functions
  function handler(e) {
    console.log(e);
    let answer = e.target.id;
    let boo = false;

    items.map((genre) => {
      if (answer == genre.id) boo = true;
    });

    if (boo == false) {
      insertFunc(answer);
    } else {
      deleteFunc(answer);
    }
  }

  function insertFunc(answer) {
    setItems([...items, { id: answer }]);
  }
  function deleteFunc(answer) {
    setItems(items.filter((genre) => genre.id != answer));
  }
  //changing visible
  if (items.length < 3) visible = true;
  function errHndler() {
    if (!visible) navigate("/next");
  }

  return (
    <div className={Styles.container}>
      <div className={Styles.head}>
        <p className={Styles.super}>Super app</p>
        <p className={Styles.choose}>Choose your entertainment category</p>
        <div className={Styles.genre}>
          {items.map((i) => (
            <button className={Styles.genrebox}>
              {i.id}
              <span className={Styles.cancel} id={i.id} onClick={handler}>
                x
              </span>
            </button>
          ))}
        </div>
        {visible && (
          <div className={Styles.errMes}>
            <FontAwesomeIcon icon={faTriangleExclamation} /> minimum 3 category
            required
          </div>
        )}
      </div>

      <div className={Styles.options}>
        <button
          id="Action"
          className={`${Styles.mvbutton} ${Styles.action}`}
          onClick={handler}
        ></button>
        <button
          id="Drama"
          className={`${Styles.mvbutton} ${Styles.drama}`}
          onClick={handler}
        ></button>
        <button
          id="Fantasy"
          className={`${Styles.mvbutton} ${Styles.fantasy}`}
          onClick={handler}
        ></button>
        <button
          id="Fiction"
          className={`${Styles.mvbutton} ${Styles.fiction}`}
          onClick={handler}
        ></button>
        <button
          id="Horror"
          className={`${Styles.mvbutton} ${Styles.horror}`}
          onClick={handler}
        ></button>
        <button
          id="Music"
          className={`${Styles.mvbutton} ${Styles.music}`}
          onClick={handler}
        ></button>
        <button
          id="Romance"
          className={`${Styles.mvbutton} ${Styles.romance}`}
          onClick={handler}
        ></button>
        <button
          id="Thriller"
          className={`${Styles.mvbutton} ${Styles.thriller}`}
          onClick={handler}
        ></button>
        <button
          id="Western"
          className={`${Styles.mvbutton} ${Styles.western}`}
          onClick={handler}
        ></button>
      </div>
      <div className={Styles.next}>
        {!visible && (
          <button className={Styles.nxbutton} onClick={errHndler}>
            Next Page
          </button>
        )}
      </div>
    </div>
  );
}

export default SelectCategory;
