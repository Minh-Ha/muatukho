import React from "react";
import Link from "next/link";
import { makeStyles } from "@material-ui/core/styles";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import HeaderTab from "components/AnytrailsComponents/HeaderTab.js";
import styles from "styles/jss/nextjs-material-kit/pages/componentsSections/navbarsStyle.js";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Button from "components/CustomButtons/Button.js";
const useStyles = makeStyles(styles);
export default function TabMenuTivi (){
    const classes = useStyles(); 
    
    return (
<div >
    <div >

<GridContainer>
<GridItem xs={12} sm={12} md={12}>
            
            <HeaderTab
              //brand="Tivi"
              color="info"             

              leftLinks={
                <List className={classes.list}>
                  <ListItem className={classes.listItem}>
                    <Button
                      href="#pablo"
                      className={classes.navLink}
                      onClick={(e) => e.preventDefault()}
                      color="transparent"
                    >
                      Âm Thanh
                    </Button>
                  </ListItem>
                  <ListItem className={classes.listItem}>
                    <Button
                      href="#pablo"
                      className={classes.navLink}
                      onClick={(e) => e.preventDefault()}
                      color="transparent"
                    >
                      Điện Lạnh
                    </Button>
                  </ListItem>
                  <ListItem className={classes.listItem}>
                  
                    <Button
                      href="#pablo"
                      className={classes.navLink}
                      onClick={(e) => e.preventDefault()}
                      color="transparent"                    >
                      Điện Tử
                    </Button>                    
                  </ListItem>                 
                  
                </List>
              }
            />
          </GridItem>
</GridContainer>
    </div>
</div>

    );

}