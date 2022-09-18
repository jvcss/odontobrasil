import { React
 /* ,useState,useEffect */
} from "react";
import "./Mainly.css";
//import autoBind from "auto-bind";
import Carousel from "nuka-carousel"
import {
  Card,
  //  CardContent,
  CardMedia,
  Typography,
  Grid
  //,    Button
} from "@mui/material";

import photo_faixada from '../img/frente_odontobrasil.jpeg';


function Banner(props) {
  if (props.newProp) console.log(props.newProp);
  const totalItems = props.length ? props.length : 2;
  const mediaLength = totalItems - 1;

  let items = [];

  for (let i = 0; i < mediaLength; i++) {
    const item = props.item.Items[i];
    const media = (
      <Grid item xs={12 / 1} key={item.Name}>
        <CardMedia className="Media" image={item.Image} title={item.Name}>
          <Typography className="MediaCaption">{item.Name}</Typography>
        </CardMedia>
      </Grid>
    );

    items.push(media);
  }
  return (
    <Card raised className="Banner">
      <Grid container spacing={0} className="BannerGrid">
        {items}
      </Grid>
    </Card>
  );
}

const items = [
  {
    Name: "Dentista 1",
    Image: "https://source.unsplash.com/featured/?macbook",
    contentPosition: "left",
    Items: [
      {
        Name: "Macbook Pro",
        Image: "https://source.unsplash.com/featured/?macbook"
      }
    ]
  },
  {
    Name: "Dentista 2",
    Caption: "Say no to manual home labour!",
    contentPosition: "middle",
    Items: [
      {
        Name: "Washing Machine WX9102",
        Image: "https://source.unsplash.com/featured/?washingmachine"
      }
    ]
  },
  {
    Name: "Dentista 3",
    Caption: "Give style and color to your living room!",
    contentPosition: "right",
    Items: [
      {
        Name: "Living Room Lamp",
        Image: "https://source.unsplash.com/featured/?lamp"
      }
    ]
  }
];


const Main = (props) => {
  // Declare a new state variable, which we'll call "autoPlay"
  // Declarando uma nova variável de estado, que chamamos de "autoPlay"
/*
  const [autoPlay, toggleAutoPlay] = useState(true)

  const [animation, changeAnimation] = useState('fade')

  const [indicators, toggleIndicators] = useState(true)

  const [timeout, setTimeout] = useState(500)

  const [navButtonsAlwaysVisible, toggleNavButtonsAlwaysVisible] = useState(false)

  const [navButtonsAlwaysInvisible, toggleNavButtonsAlwaysInvisible] = useState(true)

  const [cycleNavigation, toggleCycleNavigation] = useState(true)*/

  //?auto=format&fit=crop&w=800
  return (
    <div style={{ marginTop: "50px", color: "#494949" }}>
      <h2 style={{textAlign: "center"}}>Consultórios e Instalações</h2>
      <Carousel
      adaptiveHeight={true}
      adaptiveHeightAnimation={true}
      >
        {
        items.map((item, index) => {
           // return (
              <Banner
                item={item}
                key={index}
                contentPosition={item.contentPosition}
              />
        //   );
          })
          }
        
      </Carousel>
    </div>

  )
}

export default Main;
/*

<div style={{textAlign:"center" }}>
          <img  height="400" src={photo_faixada+"?auto=format&fit=crop&w=800"} />
        </div>
        <div style={{textAlign:"center" }}>
          <img  height="400" src={photo_faixada+"?auto=format&fit=crop&w=800"} />
</div>

 <Carousel
      className="Nothing"
      autoPlay={true}//{autoPlay}
      animation={'fade'}//{animation}
      indicators={500}//{indicators}
      timeout={false}//{timeout}
      cycleNavigation={true}//{cycleNavigation}
      navButtonsAlwaysVisible={false}//{navButtonsAlwaysVisible}
      navButtonsAlwaysInvisible={true}//{navButtonsAlwaysInvisible}

      next={(now, previous) =>
        console.log(
          `PROX User Callback: Now displaying child(${now}). ANTERIOR VIEW child(${previous})`
        )
      }
      prev={(now, previous) =>
        console.log(
          `ANTERIOR User Callback: Now displaying child(${now}). Previously displayed child(${previous})`
        )
      }
      onChange={(now, previous) =>
        console.log(
          `OnChange User Callback: Now displaying child(${now}). Previously displayed child(${previous})`
        )
      }
      >
        {items.map((item, index) => {
            return (
              <Banner
                item={item}
                key={index}
                contentPosition={item.contentPosition}
              />
            );
          })}
      </Carousel>
 */