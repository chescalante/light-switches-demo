import React, { useState } from "react";

import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import OneSwitch from "./OneSwitch";
import TwoSwitches from "./TwoSwitches";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 500,
    margin: "0 auto",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

function App() {
  const classes = useStyles();

  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className={classes.root}>
      <Accordion expanded={expanded === "ex1"} onChange={handleChange("ex1")}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.heading}>Example 1</Typography>
        </AccordionSummary>
        <AccordionDetails style={{ height: "60vh" }}>
          <OneSwitch />
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === "ex2"} onChange={handleChange("ex2")}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.heading}>Example 2</Typography>
        </AccordionSummary>
        <AccordionDetails style={{ height: "60vh" }}>
          <TwoSwitches />
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default App;
