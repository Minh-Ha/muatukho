import React from 'react';
import Link from "next/link";
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import RegularButton from "components/CustomButtons/Button"
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import { createMuiTheme } from '@material-ui/core/styles';
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import SectionHangHot from 'components/Muatukho/HangHot/SectionHangHot';
import TabHangHot from 'components/Muatukho/HangHot/TabHangHot';
import TabMenuHomePage from "components/muatukho/HomePage/TabMenuHomePage.js";
import TabAmThanh from 'components/Muatukho/AmThanh/TabAmThanh';
import SectionAmThanh from 'components/Muatukho/AmThanh/SectionAmThanh';
import SectionDienLanh from 'components/Muatukho/DienLanh/SectionDienLanh';
import TabDienLanh from 'components/Muatukho/DienLanh/TabDienLanh';


const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#4dac6b",
    },
    secondary: {
      main: "#0471b3",
    },
  },
  shape: {
    
    borderRadius: 20
},
});

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 5),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(0, 0, 0),
    paddingBottom: theme.spacing(0, 0,0),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%',  16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
  
}));

const cards = [1, 2, 3, 4, 5, 6, 7, 8,];

export default function SectionHomePage() {
  const classes = useStyles();
  

  return (
    <React.Fragment>
      
      
      <main>
        <div className={classes.heroContent}> 
        
        <Container className={classes.cardGrid} maxWidth="lg">  
         
          
            <TabMenuHomePage />
            <ThemeProvider theme={theme}>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Button href="/vietnam/hanoi"  variant="outlined" color="primary">
                    Hàng Hot
                  </Button>
                </Grid>
                <Grid item>
                  <Button href="/vietnam/hue" variant="outlined" color="primary">
                    Âm Thanh
                  </Button>
                  </Grid>
                  <Grid item>
                  
                  <Button href="/vietnam/hoian" variant="outlined" color="primary">
                  Công Cụ
                  </Button>
          
                  </Grid>
                  <Grid item>
                  <Button href="#" variant="outlined" color="primary">
                    Điện Lạnh
                  </Button>
                </Grid>
                <Grid item>
                  <Button href="#" variant="contained" color="green">
                    Điện Tử
                  </Button>
                </Grid>
                <Grid item>
                  <Button href="#" variant="contained" color="green">
                    Gia Dụng
                  </Button>
                </Grid>
                
                
              </Grid>
            </div>
            </ThemeProvider>           
          
          
          
          
        </Container>
        <Container className={classes.cardGrid} maxWidth="lg">         
          <div>
            <h2>
              SẢN PHẨM HOT
            </h2>
          </div>
          <SectionHangHot />
          </Container>
          <Container className={classes.cardGrid} maxWidth="lg">         
          <div>
            <h2>
              ÂM THANH
            </h2>
          </div>
          <TabAmThanh />
          <SectionAmThanh />
          </Container>
          <Container className={classes.cardGrid} maxWidth="lg">         
          <div>
            <h2>
              ĐIỆN LẠNH
            </h2>
          </div>
          <TabDienLanh />
          <SectionDienLanh />
          </Container>
        </div>
      </main>
      
    </React.Fragment>
  );
}