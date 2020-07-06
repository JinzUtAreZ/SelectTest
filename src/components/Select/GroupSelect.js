import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import NativeSelect from "@material-ui/core/NativeSelect";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const GroupSelect = (props) => {
  const { label, name, value, datas, helpertext, onChange } = props;
  let { isNative, isGroup } = props;
  const classes = useStyles();

  const handleChange = (event) => {
    onChange(event.target.value);
  };
  //////// dynamic component ///////

  if (isNative === undefined) {
    isNative = false;
  }

  const selcomp = {
    true: NativeSelect,
    false: Select,
  };

  const SelComponent = selcomp[isNative || false];

  const cats = datas.reduce((catsSoFar, { group, name, id }) => {
    if (!catsSoFar[group]) catsSoFar[group] = [];
    catsSoFar[group].push({ name: name, id: id });

    return catsSoFar;
  }, {});

  //console.log(cats);
  const catdatas = cats;

  return (
    <Fragment>
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor={name + "-native-select"}>{label}</InputLabel>
        <Select native defaultValue="" id={name + "-native-select"}>
          {Object.keys(cats).map((cat, index) => (
            <optgroup key={index} label={cat}>
              {catdatas[cat].map((data) => (
                <option key={data.name} value={data.id}>
                  {data.name}
                </option>
              ))}
            </optgroup>
          ))}
        </Select>
      </FormControl>
    </Fragment>
  );
};

export default GroupSelect;

// function groupBy(list, keyGetter) {
//   const map = new Map();
//   list.forEach((item) => {
//     const key = keyGetter(item);
//     const collection = map.get(key);
//     if (!collection) {
//       map.set(key, [item]);
//     } else {
//       collection.push(item);
//     }
//   });
//   return map;
// }

//const grouped = groupBy(datas, (data) => data.group);
