import React, { useEffect } from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";

import Switch, { useSwitchState } from "./components/Switch";
import Light, { useLightState } from "./components/Light";

import { handleLightTwoSwitches } from "./handleLight";

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
    minWidth: 170,
  },
}));

function App() {
  const switchA = useSwitchState("up");
  const switchB = useSwitchState("up");

  const light = useLightState();

  useEffect(() => {
    handleLightTwoSwitches(switchA, switchB, light);
  }, [switchA, switchA.status, switchB, switchB.status, light]);

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Light state={light} />
      <div className={classes.switches}>
        <Switch state={switchA} />
        <Switch state={switchB} />
      </div>
    </div>
  );
}

export default App;
