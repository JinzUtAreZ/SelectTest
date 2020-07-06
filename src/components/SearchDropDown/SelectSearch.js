import React, { useState, useEffect } from "react";
import SearchSelect from "react-select";
import { groupedOptions } from "../data/data";

/////

const colourOptions = {
  value: "blue",
  label: "Please Select",
  color: "#0052CC",
  isDisabled: true,
  isFixed: true,
};

const groupStyles = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
};
const groupBadgeStyles = {
  backgroundColor: "#EBECF0",
  borderRadius: "2em",
  color: "#172B4D",
  display: "inline-block",
  fontSize: 20,
  fontWeight: "normal",
  lineHeight: "1",
  minWidth: 1,
  padding: "0.16666666666667em 0.5em",
  textAlign: "center",
};

function createData(value, label, group) {
  return { value, label, group };
}

let rows = [
  createData(0, "Please Select", ""),
  createData(1, "Crap", "what"),
  createData(2, "Shit", "when"),
  createData(3, "Pee", "where"),
];

function addRowData() {
  // let alter = false;
  let x = 1,
    y = 4;

  for (var i = 0; i < 5; i++) {
    //console.log(alter);

    const newId = Number(y);
    const newName = rows[x].label + Number(i);
    const newGroup = rows[x].group;

    const rowsNew = createData(newId, newName, newGroup);
    //console.log(rowsNew);
    rows.push(rowsNew);

    y = y + i + 1;
    x = x + 1;
    if (x === 2) {
      x = 1;
    }
  }
  console.log(rows);
}

// const formatGroupLabel = (rows) => (
//   <div style={groupStyles}>
//     <span>{rows.name}</span>
//     <span style={groupBadgeStyles}>{rows.options.length}</span>
//   </div>
// );

const SelectSearch = () => {
  const [load, setLoad] = useState(false);
  const [selectData, setSelectData] = useState({});

  const selectChange = (key, attr) => {
    const { group, label, value } = key;
    const { action, name, option } = attr;
    setSelectData({ ...selectData, [name]: value });
    console.log("select state", selectData);
  };

  useEffect(() => {
    addRowData();
    //console.log(rows);
    setLoad(true);
  }, []);

  return (
    load && (
      <SearchSelect
        defaultValue={colourOptions}
        options={rows}
        onChange={selectChange}
        name="Searching"
        // formatGroupLabel={formatGroupLabel}
      />
    )
  );
};

export default SelectSearch;
