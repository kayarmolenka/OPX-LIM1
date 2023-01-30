import { Block } from "../../components";
import React, { useState } from "react";
import { letters, mockLetters } from "../../mockData";

export const BlockContainer = () => {
  const [characters, setCharacter] = useState<Array<mockLetters>>(letters);
  const isNeedInitialState = characters.every((block) => block.isOrange);
  const [orderClicked, setOrderClicked] = useState([]);

  const onClickBlock = (id: number) => {
    const newData = characters.map((element) => {
      if (element.id === id) {
        element.isOrange = !element.isOrange;
      }

      if (element.isOrange) {
        // @ts-ignore
        setOrderClicked((oldArray) => [...oldArray, element.id]);
      }

      return element;
    });

    setCharacter(newData);
  };

  const filledOrder = Array.from(new Set(orderClicked));

  if (isNeedInitialState) {
    const idInterval = setInterval(() => {
      const findElementId: any = filledOrder.pop();

      const newData = characters.map((element) => {
        if (element.id === findElementId) {
          element.isOrange = false;
        }
        return element;
      });

      setCharacter(newData);
    }, 1000);

    if (!filledOrder.length) {
      clearInterval(idInterval);
    }
  }

  return (
    <div className="block-wrapper">
      {characters.map(({ text, id, isOrange }) => (
        <Block
          handleBlock={onClickBlock}
          letter={text}
          key={id}
          id={id}
          isOrange={isOrange}
        />
      ))}
    </div>
  );
};
