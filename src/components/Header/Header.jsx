import React, { useState } from "react";
import s from "./index.module.css";
import date from "../../assets/icons/date.svg";
import swipe from "../../assets/icons/swipe.svg";
import drop from "../../assets/icons/drop.svg";
import CustomModal from "../Modal/Modal";

export const Header = () => {
  const [dropdownStates, setDropdownStates] = useState({
    dropdown1: false,
    dropdown2: false,
    dropdown3: false,
  });
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleDropdown = (dropdownKey) => {
    setDropdownStates((prevStates) => ({
      ...prevStates,
      [dropdownKey]: !prevStates[dropdownKey],
    }));
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <CustomModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <header className={s.header}>
        <div className={s.header__wrapper}>
          <div className={s.burger}>
            <button
              className={`${s.burgerButton} ${isMenuOpen ? s.active : ""}`}
              onClick={toggleMenu}
            ></button>
          </div>
          <div
            className={`${s.header__container} ${isMenuOpen ? s.active : ""}`}
          >
            <div className={s.header__content}>
              <div className={s.header__search}>
                <input
                  type="text"
                  className={s["header__search-input"]}
                  placeholder="Поиск медиа файлов по названию или ID"
                />
              </div>
              <div className={s.dropdown}>
                <button
                  className={s["dropdown__button"]}
                  onClick={() => toggleDropdown("dropdown1")}
                >
                  Все нейросети
                  <img
                    src={drop}
                    style={{
                      transform: dropdownStates.dropdown1
                        ? "rotate(180deg)"
                        : "rotate(0deg)",
                      transition: "transform 0.3s ease",
                    }}
                  />
                </button>
                {dropdownStates.dropdown1 && (
                  <ul className={s["dropdown__menu"]}>
                    <li className={s["dropdown__item"]}>Нейросеть 1</li>
                    <li className={s["dropdown__item"]}>Нейросеть 2</li>
                    <li className={s["dropdown__item"]}>Нейросеть 3</li>
                  </ul>
                )}
              </div>
              <div className={s.dropdown}>
                <button
                  className={s["dropdown__button"]}
                  onClick={() => toggleDropdown("dropdown2")}
                >
                  Все теги
                  <img
                    src={drop}
                    style={{
                      transform: dropdownStates.dropdown2
                        ? "rotate(180deg)"
                        : "rotate(0deg)",
                      transition: "transform 0.3s ease",
                    }}
                  />
                </button>
                {dropdownStates.dropdown2 && (
                  <ul className={s["dropdown__menu"]}>
                    <li className={s["dropdown__item"]}>Тег 1</li>
                    <li className={s["dropdown__item"]}>Тег 2</li>
                    <li className={s["dropdown__item"]}>Тег 3</li>
                  </ul>
                )}
              </div>
              <div className={s.dropdown}>
                <button
                  className={s["dropdown__button"]}
                  onClick={() => toggleDropdown("dropdown3")}
                >
                  Тип файлов
                  <img
                    src={drop}
                    style={{
                      transform: dropdownStates.dropdown3
                        ? "rotate(180deg)"
                        : "rotate(0deg)",
                      transition: "transform 0.3s ease",
                    }}
                  />
                </button>
                {dropdownStates.dropdown3 && (
                  <ul className={s["dropdown__menu"]}>
                    <li className={s["dropdown__item"]}>Тип 1</li>
                    <li className={s["dropdown__item"]}>Тип 2</li>
                    <li className={s["dropdown__item"]}>Тип 3</li>
                  </ul>
                )}
              </div>
              <div className={s.dateFilter}>
                <button className={s.dateFilter__button}>Период</button>
                <button className={s.dateFilter__button}>Дата с</button>
                <img src={swipe} className={s.dateFilter__separator} />
                <button className={s.dateFilter__button}>Дата по</button>
                <img src={date} className={s.dateFilter__calendarIcon} />
              </div>

              <div className={s.btnHeader}>
                <button onClick={() => setIsModalOpen(true)}>Добавить</button>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
