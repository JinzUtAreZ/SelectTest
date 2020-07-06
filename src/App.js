import React from "react";
import CustomDropDown from "./components/Pages/Select";
import ReactSelect from "./components/SearchDropDown/SelectSearch";
//import ReactSelect1 from "./components/SearchDropDown/Select1";
/* eslint-disable no-use-before-define */
import SelectSearch from "./components/Select/AutoComplete";
function App() {
  return (
    <div className="App">
      <CustomDropDown />
      <ReactSelect />
      {/* <ReactSelect1 /> */}
      <br />
      <SelectSearch />
    </div>
  );
}

export default App;
