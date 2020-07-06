/* eslint-disable no-use-before-define */
import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { top100Films } from "../data/dataAutoComp";
export default function ComboBox() {
  const [selectData, setSelectData] = useState({});
  const [nameKey, setNameKey] = useState();

  //// ipasa muna dito ung name ////
  const handleName = (nameKey) => {
    setNameKey(nameKey);
  };

  const selectChange = (event, newValue) => {
    setSelectData({ ...selectData, [nameKey]: newValue });
    console.log("select state", selectData);
  };

  const options = top100Films.map((option) => {
    const firstLetter = option.title[0].toUpperCase();
    return {
      firstLetter: /[0-9]/.test(firstLetter) ? "0-9" : firstLetter,
      ...option,
    };
  });

  const optionsGroup = options.sort(
    (a, b) => -b.firstLetter.localeCompare(a.firstLetter)
  );

  return (
    <Autocomplete
      id="SearchSelect1"
      //options={top100Films}
      //// grouping options /////
      options={optionsGroup}
      groupBy={(option) => option.firstLetter}
      getOptionSelected={(option, valueSelected) =>
        //console.log(option.value, valueSelected.value)
        {
          return option.value === valueSelected.value;
        }
      }
      //// grouping options /////

      getOptionLabel={(option) => option.title}
      style={{ width: 300 }}
      onChange={selectChange}
      onSelect={() => handleName("SearchSelect1")}
      renderInput={(params) => (
        <TextField {...params} label="My Selection" variant="outlined" />
      )}
    />
  );
}

//   id="grouped-demo"
//       options={options.sort((a, b) => -b.firstLetter.localeCompare(a.firstLetter))}
//       groupBy={(option) => option.firstLetter}
//       getOptionLabel={(option) => option.title}
//       style={{ width: 300 }}
//       renderInput={(params) => <TextField {...params} label="With categories" variant="outlined" />}
