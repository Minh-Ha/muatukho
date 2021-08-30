import React from "react";
import Link from "next/link";
import { makeStyles } from "@material-ui/core/styles";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
//import Header from "components/Header/Header.js";
import HeaderTab from "components/AnytrailsComponents/HeaderTab.js";
import styles from "styles/jss/nextjs-material-kit/pages/componentsSections/navbarsStyle.js";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Button from "components/CustomButtons/Button.js";
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";

const useStyles = makeStyles(styles);
export default function TabMenu (){
    const classes = useStyles(); 
    
    return (
<div >
    <div >

<GridContainer>
<GridItem xs={12} sm={12} md={12}>
            
            <HeaderTab
              //brand="Hàng Mới"
              color="primary"             

              leftLinks={
                <List className={classes.list}>
                  <ListItem className={classes.listItem}>
                  <CustomDropdown
                      navDropdown
                      buttonText="HÀNG HOT"                      
                      buttonProps={{
                        className: classes.navLink,
                        color: "transparent",
                      }}
                      dropdownList={[
                        "Tất Cả",                        
                        { divider: true },
                        "Âm Thanh",
                        { divider: true },
                        "Điện Lạnh",
                        { divider: true },
                        "Điện Tử",
                        
                      ]}
                    />
                  </ListItem>
                  <ListItem className={classes.listItem}>
                  <CustomDropdown
                      navDropdown
                      buttonText="ÂN THANH"                      
                      buttonProps={{
                        className: classes.navLink,
                        color: "transparent",
                      }}
                      dropdownList={[
                        "Tất Cả",                        
                        { divider: true },
                        "Âm Ly",                        
                        "Dàn Âm Thanh",                        
                        "Dàn Đầu Vi Tính",                        
                        "Hàng Khuyến Mại",                        
                        "Khác",                        
                        "Loa",                        
                        "Khác",                        
                        "Màn Hình Cảm Ứng",                        
                        "Mic",
                        "Tạo Vang",
                      ]}
                    />
                  </ListItem>
                  <ListItem className={classes.listItem}>
                  <CustomDropdown
                      navDropdown
                      buttonText="CÔNG CỤ"                      
                      buttonProps={{
                        className: classes.navLink,
                        color: "transparent",
                      }}
                      dropdownList={[
                        "Tất Cả",                        
                        { divider: true },
                        "lò Vi Sóng",
                        
                      ]}
                    />
                  </ListItem>
                  <ListItem className={classes.listItem}>
                  <CustomDropdown
                      navDropdown
                      buttonText="ĐIỆN LẠNH"                      
                      buttonProps={{
                        className: classes.navLink,
                        color: "transparent",
                      }}
                      dropdownList={[
                        "Tất Cả",                        
                        { divider: true },
                        "Điều Hòa Bỏ Mẫu",                        
                        "Điều Hòa Treo Tường",                        
                        "Điều Hòa Cục Lạnh Âm Trần",                        
                        "Điều Hòa Tử Đứng",                        
                        "Giá Treo",
                        "Máy Giặt",
                        "Máy Rửa Bát",
                        "Máy Sấy Quần Áo",
                        "Sản Phẩm Giá Sốc",
                        "Tủ Đông",
                        "Tủ Lạnh",
                        "Tủ Mát",
                      ]}
                    />
                  </ListItem>
                  <ListItem className={classes.listItem}>
                  <CustomDropdown
                      navDropdown
                      buttonText="ĐIỆN TỬ"                      
                      buttonProps={{
                        className: classes.navLink,
                        color: "transparent",
                      }}
                      dropdownList={[
                        "Tất Cả",                        
                        { divider: true },
                        "Tivi",
                        "Bàn Phím MáyTính",                        
                        "Cát Sét",                        
                        "Bộ Chảo Phát Sóng",
                        "Chuột Máy Tính",
                        "Dàn Ăng Ten",
                        "Điện Thoại Di Động",
                        "Giá Treo",
                        "Linh Kiện",
                        "Loa Vi Tính",
                        "Màn Hình Máy Vi Tính",
                        "Máy In",
                        "Máy Tính Để Bàn",
                        "Máy Tính Xách Tay",
                        "Ổn Áp",
                        "Thẻ Cào",                        
                      ]}
                    />
                  </ListItem>
                  <ListItem className={classes.listItem}>
                  <CustomDropdown
                      navDropdown
                      buttonText="GIA dỤNG"                      
                      buttonProps={{
                        className: classes.navLink,
                        color: "transparent",
                      }}
                      dropdownList={[
                        "Tất Cả",                        
                        { divider: true },
                        "Ấm Siêu Tốc",
                        "Âu Vi Sóng",
                        "Bàn Là",
                        "Bếp Điện Hồng Ngoại",
                        "Bếp Điện Từ",
                        "Bếp Ga",
                        "Bếp Nướng",
                        "Bình Giữ Nhiệt",
                        "Bình Nướng Nóng Năng Lượng Mặt Trời",
                        "Bình Nóng Lạnh",
                        "Bơm",
                        "Bộ Nối",
                        "Cây Nước",
                        "Chảo",
                        "Chổi Lau Nhà",
                        "Đèn",
                        "Ga",
                        "Gia Dụng Bỏ Mẫu",

                        
                      ]}
                    />
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