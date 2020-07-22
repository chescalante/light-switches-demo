import React, { useState } from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import MuiSwitch from "@material-ui/core/Switch";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
  rotateSwitch: {
    transform: "rotate(270deg)",
  },
  thumbSwitch: {
    boxShadow: "none",
    backgroundColor: "#1f1f1f",
  },
}));

const useSwitchState = (defaultValue = "down") => {
  const [option, setOption] = useState(defaultValue);

  return {
    status: option,

    isUp: () => {
      return option === "up";
    },

    onChange: () => {
      if (option === "up") setOption("down");
      else setOption("up");
    },
  };
};

const Switch = ({ state }) => {
  const classes = useStyles();

  return (
    <Paper style={{ padding: 10 }}>
      <MuiSwitch
        color="primary"
        checked={state.isUp()}
        onChange={state.onChange}
        classes={{ root: classes.rotateSwitch, thumb: classes.thumbSwitch }}
      />
    </Paper>
  );
};

export default Switch;
export { useSwitchState };
