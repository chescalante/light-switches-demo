import React, { useState } from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import LightOnIcon from "@material-ui/icons/EmojiObjects";
import LightOffIcon from "@material-ui/icons/EmojiObjectsOutlined";

const useStyles = makeStyles((theme) => ({
  on: {
    fontSize: 100,
    color: "#ffc400",
  },
  off: {
    fontSize: 100,
    color: "#cdcdcd",
  },
}));

const useLightState = () => {
  const [isOn, setIsOn] = useState(false);

  return {
    isOn: isOn,

    on: () => {
      setIsOn(true);
    },

    off: () => {
      setIsOn(false);
    },
  };
};

const Light = ({ state }) => {
  const classes = useStyles();

  return (
    <div style={{ padding: 80 }}>
      {state.isOn && <LightOnIcon className={classes.on} />}
      {!state.isOn && <LightOffIcon className={classes.off} />}
    </div>
  );
};

export default Light;
export { useLightState };
