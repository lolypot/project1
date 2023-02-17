import React from "react";
import { SearchType } from "../../types";
import { SearchForm } from "../searchForm";

import "./index.css";

const searchChips = [
  { type: SearchType.Declaration, label: "Поиск декларации по номеру" },
  { type: SearchType.Goods, label: "Поиск деклараций по параметрам " },
  { type: SearchType.Transport, label: "Поиск транспортного средства" },
];

export const Search = () => {
  const [searchType, setSearchType] = React.useState(SearchType.Declaration);

  const chipOnClickHandler = (type: SearchType) => {
    setSearchType(type);
  };

  const searchFormTitle = searchChips.find(({ type }) => searchType === type)
    ?.label as string;

  return (
    <div className="Search">
      <div className="Search-ChipsContainer">
        <h4>Выберите тип поиска:</h4>
        {searchChips.map(({ type, label }) => (
          <button
            className={type === searchType ? "selected" : ""}
            key={type}
            onClick={() => chipOnClickHandler(type)}
          >
            {label}
          </button>
        ))}
      </div>
      <SearchForm searchType={searchType} title={searchFormTitle} />
    </div>
  );
};
