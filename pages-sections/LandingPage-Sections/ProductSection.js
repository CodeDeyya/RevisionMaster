import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

import AddBoxRoundedIcon from '@material-ui/icons/AddBoxRounded';
import GamesRoundedIcon from '@material-ui/icons/GamesRounded';
import LocalHospitalRoundedIcon from '@material-ui/icons/LocalHospitalRounded';
import AccountBalanceRoundedIcon from '@material-ui/icons/AccountBalanceRounded';
import SortByAlphaRoundedIcon from '@material-ui/icons/SortByAlphaRounded';
import WavesRoundedIcon from '@material-ui/icons/WavesRounded';

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";

import styles from "assets/jss/nextjs-material-kit/pages/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>Online Revision Kit</h2>
          <h5 className={classes.description}>
          A level Revision සඳහා අප හා එක් වන්න. කාලානුරූපී MCQ ප්‍රශ්න කරන්න. Improve your subject knowledge and time management skills. We provide revision for Maths, Physics, Chemistry, Economics and English. අපගේ ප්‍රශ්න පදනම් වී ඇත්තේ අතීත පත්‍රිකා මත ය (past papers). Watch the video above to learn how to use.
          </h5>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Biology"
              description="Biology is a Science which is focused on studying of living organisms. Biology is a subject which is very complex and vast. Hence for the convenience of studying, it has been divided into three primary braches: Zoology (the study of animals), Botany (study of plants) and Microbiology(study of microorganisms)."
              icon={LocalHospitalRoundedIcon}
              iconColor="primary"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Econ"
              description="Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough."
              icon={AccountBalanceRoundedIcon}
              iconColor="success"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Maths"
              description="Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough."
              icon={AddBoxRoundedIcon}
              iconColor="danger"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Physics"
              description="Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough."
              icon={GamesRoundedIcon}
              iconColor="warning"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="English"
              description="Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough."
              icon={SortByAlphaRoundedIcon}
              iconColor="rose"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Chemistry"
              description="Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough."
              icon={WavesRoundedIcon}
              iconColor="info"
              vertical
            />
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
