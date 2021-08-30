import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react components for routing our app without refresh
import Link from "next/link";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components
//import Header from "components/Header/Header.js";
import HeaderMuatukho from "components/Muatukho/HeaderMuatukho.js";
//import HeaderLinks from "components/Header/HeaderLinks.js";
import HeaderLeftLinks from "components/Muatukho/HeaderLeftLinks.js";
import HeaderRightLinks from "components/Muatukho/HeaderRightLinks.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Parallax from "components/Parallax/Parallax.js";
// sections for this page
import styles from "styles/jss/nextjs-material-kit/pages/components.js";
import SectionHomePage from "../components/muatukho/HomePage/SectionHomePage";

const useStyles = makeStyles(styles);

export default function Home(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <HeaderMuatukho
        leftLinks={<HeaderLeftLinks/>}
        rightLinks={<HeaderRightLinks />}
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 400,
          color: "white",
        }}
        {...rest}
      />
      <Parallax image="/img/muatukho/mua-tu-kho-02.jpg">
        <div className={classes.container}>
          <GridContainer>
            <GridItem>
              <div className={classes.brand}>
                <h1 className={classes.title}>Mua Từ Kho.</h1>
                <h3 className={classes.subtitle}>
                  Cách mạng bán hàng - Từ kho nhà sản xuất đến người tiêu dùng.
                </h3>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>

      <div className={classNames(classes.main, classes.mainRaised)}>
        <SectionHomePage />
        
        
      </div>
      <Footer />
    </div>
  );
}
