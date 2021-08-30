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


export default function TabAmThanh (){
    const classes = useStyles(); 
    
    return (
<div >
    <div >

<GridContainer>
<GridItem xs={12} sm={12} md={12}>
            
            <HeaderTab
              //brand="Tivi"
              color="white"             

              leftLinks={
                <List className={classes.list}>
                  <ListItem className={classes.listItem}>
                    <Button
                      href="#pablo"
                      className={classes.navLink}
                      onClick={(e) => e.preventDefault()}
                      color="transparent"
                    >
                      Điều Hòa Bỏ Mẫu
                    </Button>
                  </ListItem>
                  <ListItem className={classes.listItem}>
                    <Button
                      href="#pablo"
                      className={classes.navLink}
                      onClick={(e) => e.preventDefault()}
                      color="transparent"
                    >
                      Điều Hòa Treo Tường
                    </Button>
                  </ListItem>
                  <ListItem className={classes.listItem}>
                  
                    <Button
                      href="#pablo"
                      className={classes.navLink}
                      onClick={(e) => e.preventDefault()}
                      color="transparent"                    >
                      Điều Hòa Cục Lạnh Âm Trần
                    </Button>                    
                  </ListItem>
                  <ListItem className={classes.listItem}>
                  
                    <Button
                      href="#pablo"
                      className={classes.navLink}
                      onClick={(e) => e.preventDefault()}
                      color="transparent"                    >
                      Điều Hòa Tủ Đứng
                    </Button>                    
                  </ListItem>                    
                  <ListItem className={classes.listItem}>
                  
                    <Button
                      href="#pablo"
                      className={classes.navLink}
                      onClick={(e) => e.preventDefault()}
                      color="transparent"                    >
                      Giá Treo
                    </Button>                    
                  </ListItem> 
                  <ListItem className={classes.listItem}>
                  
                    <Button
                      href="#pablo"
                      className={classes.navLink}
                      onClick={(e) => e.preventDefault()}
                      color="transparent"                    >
                      Máy Giặt
                    </Button>                    
                  </ListItem> 
                  <ListItem className={classes.listItem}>
                  
                    <Button
                      href="#pablo"
                      className={classes.navLink}
                      onClick={(e) => e.preventDefault()}
                      color="transparent"                    >
                      Máy Rửa Bát
                    </Button>                    
                  </ListItem>   
                  <ListItem className={classes.listItem}>
                  
                    <Button
                      href="#pablo"
                      className={classes.navLink}
                      onClick={(e) => e.preventDefault()}
                      color="transparent"                    >
                      Máy Sấy Quần Áo
                    </Button>                    
                  </ListItem> 
                  <ListItem className={classes.listItem}>
                  
                    <Button
                      href="#pablo"
                      className={classes.navLink}
                      onClick={(e) => e.preventDefault()}
                      color="transparent"                    >
                      Sản Phẩm Giá Sốc
                    </Button>                    
                  </ListItem>         
                  <ListItem className={classes.listItem}>
                  
                    <Button
                      href="#pablo"
                      className={classes.navLink}
                      onClick={(e) => e.preventDefault()}
                      color="transparent"                    >
                      Tủ Đông
                    </Button>                    
                  </ListItem>
                  <ListItem className={classes.listItem}>
                  
                    <Button
                      href="#pablo"
                      className={classes.navLink}
                      onClick={(e) => e.preventDefault()}
                      color="transparent"                    >
                      Tủ Lạnh
                    </Button>                    
                  </ListItem>
                  <ListItem className={classes.listItem}>
                  
                    <Button
                      href="#pablo"
                      className={classes.navLink}
                      onClick={(e) => e.preventDefault()}
                      color="transparent"                    >
                      Tủ Mát
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