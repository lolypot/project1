import React from "react";
import {
  DeclarationParams,
  GoodsRequestData,
  SearchType,
  TransportRequestData,
} from "../../types";
import {
  declarationSearchData,
  goodsSearchData,
  transportSearchData,
} from "./config";

import "./index.css";

interface Props {
  searchType: SearchType;
  title: string;
}

const searchDataMap = {
  [SearchType.Goods]: goodsSearchData,
  [SearchType.Transport]: transportSearchData,
  [SearchType.Declaration]: declarationSearchData,
};

export const SearchForm: React.FC<Props> = ({ searchType, title }) => {
  const { searchControls, initialState, serviceGetter } =
    searchDataMap[searchType];
  const [state, setState] = React.useState<
    GoodsRequestData | TransportRequestData | DeclarationParams
  >(initialState);

  React.useEffect(() => {
    setState(initialState);
  }, [initialState]);

  const inputOnChangeHandler: React.ChangeEventHandler<HTMLInputElement> = ({
    target: { name, value },
  }) => {
    const newState = { ...state, [name as keyof typeof initialState]: value };
    setState(newState);
  };

  const clearStateHandler = () => setState(initialState);

  const searchHandler = async () => {
    const getData = serviceGetter as (
      data: GoodsRequestData | TransportRequestData | DeclarationParams
    ) => any;
    const data = await getData(state);
    console.log("data=", data);
  };

  return (
    <div className="SearchControl">
      <h3>{title}</h3>
      {searchControls.map(({ name, label }) => (
        <div className="SearchControl-row" key={name}>
          <label>{label}</label>
          <input
            type="text"
            name={name}
            value={state[name as keyof typeof initialState]}
            onChange={inputOnChangeHandler}
          />
        </div>
      ))}
      <div className="SearchControl-buttons">
        <button onClick={searchHandler}>Искать</button>
        <button onClick={clearStateHandler}>Очистить</button>
      </div>
    </div>
  );
};
