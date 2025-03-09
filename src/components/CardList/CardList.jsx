import React from "react";
import { mockData } from "../../mockData/cards";
import { Card } from "../Card/Card";
import s from "./index.module.css";
export const CardList = () => {
  return (
    <div className={s.cardList}>
      {mockData.map((item) => (
        <Card key={item.id + 1} {...item} />
      ))}
    </div>
  );
};
