import { ReactComponent as InititialSort } from "../assets/sort-solid.svg";
import PropTypes from "prop-types";
import { ReactComponent as UpSort } from "../assets/sort-up-solid.svg";
import { ReactComponent as DownSort } from "../assets/sort-down-solid.svg";
import { useState } from "react";

const TableHeader = ({ dataTitle, setStateTable, stateTable }) => {
  const sorting = (column) => {
    const sortedTable = stateTable.slice().sort();
    setStateTable(sortedTable);
    console.log(stateTable);
  };

  return (
    <thead className="table-header">
      <tr className="table-row">
        {dataTitle.map((valueTitle, keyTitle) => (
          <th key={keyTitle} className="table-title">
            <div className="table-title-container">
              <span className="table-title-text">
                {valueTitle.charAt(0).toUpperCase() +
                  valueTitle.slice(1).replace(/([A-Z])/g, " $1")}
              </span>
              <button
                className={"table-title-button sort." + valueTitle}
                onClick={() => sorting(valueTitle)}
              >
                <InititialSort height={15} />
              </button>
            </div>
          </th>
        ))}
      </tr>
    </thead>
  );
};

TableHeader.propTypes = {
  stateTable: PropTypes.array.isRequired,
  dataTitle: PropTypes.array.isRequired,
  setStateTable: PropTypes.func.isRequired,
};

export default TableHeader;
