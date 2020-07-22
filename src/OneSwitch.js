import React, { useEffect } from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";

import Switch, { useSwitchState } from "./components/Switch";
import Light, { useLightState } from "./components/Light";

import { handleLightOneSwitch } from "./handleLight";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    maxWidth: 500,
    margin: "0 auto",
  },
  switches: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
  },
}));

function OneSwitch() {
  const switchA = useSwitchState();

  const light = useLightState();

  useEffect(() => {
    handleLightOneSwitch(switchA, light);
  }, [switchA, switchA.status, light]);

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Light state={light} />
      <div className={classes.switches}>
        <Switch state={switchA} />
      </div>
    </div>
  );
}

export default OneSwitch;
