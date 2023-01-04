import React, { useState } from 'react'

export const AddCategory = ({onNewCategory}) => {
    const [inputValue, setInputValue] = useState("");

 
    const onInputChange = ({ target }) => {
        setInputValue(target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        if (inputValue.trim().length < 1) return;

        setInputValue("");
        onNewCategory(inputValue.trim());
    }

  return (
    <form onSubmit={onSubmit}>
        <input
        type={"text"}
        placeholder={"Find Gifs"}
        value={inputValue}
        onChange={onInputChange}
        />
    </form>
  );
};
