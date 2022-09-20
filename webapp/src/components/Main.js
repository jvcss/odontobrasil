import {
  React
} from "react";
import "./Mainly.css";
import Carousel from "nuka-carousel"
import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import CardCover from '@mui/joy/CardCover';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';

import imagepaths from '../img/imagepaths';

function Banner(props) {
 // if (props.newProp) console.log("VAI CARAI " + props.newProp);
  //else console.table(Object.keys(props).length);
  //else console.table(props.item.contents[0].Image);

  return (
    <Box
      component="ul"
      sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', p: 0, m: 0 }}
    >
      <Card component="li" sx={{ minWidth: 300, flexGrow: 1, minHeight: 600 }}>
        <CardCover>
          <img
            src={props.item.contents[0].Image}//+"?auto=format&fit=crop&w=800"
            srcSet={props.item.contents[0].Image}// ?auto=format&fit=crop&w=800&dpr=2 2x"
            alt=""
          />
        </CardCover>
        <CardContent sx={{ textAlign: 'top', gap: 1 ,  }}>
          <Typography
            sx={{
              //textShadow: "4px 1px 4px #000",
              //margin: 1
              //textColor: "#ddd9ce",
              margin: "1px",
              fontFamily: 'Tangerine',
              fontSize: "52px",
              textShadow: "4px 3px 18px #000",
              fontWeight: "lighter"
            }}
            level="h2"
            //  fontWeight="lg"

            textColor="#ddd9ce"
            fontWeight="lighter"

            //mt={{ xs: 24, sm: 18 }}
          >
            {props.item.contents[0].Name}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );

}

/*
* AFTER DECOMPOSE THIS FUNCTION I'M ABLE TO CREATE AN INLINE RECURSIVE GETTER AS AN SIMPLE OBJECT

* em outras palavras eu criei manualmente uma lista aleatoria a partir de uma importação de objeto
* fazendo uso recursivo de metodos da propria variavel objeto para ser capaz de usar dentro de um 
* outro objeto diretamente.


var randomProperty = function (imagepaths) {
  var keys = Object.keys(imagepaths);
  
  return imagepaths[keys[Math.floor(keys.length * Math.random())]];
};
console.table(randomProperty)
*/

// imagepaths[Object.keys(imagepaths)[Math.floor(Object.keys(imagepaths).length * Math.random())]];
const items = [
  {
    Name: "Instalacoes",
    caption: "Give style and color to your living room!",
    contents: [
      {
        Name: "Excelência",
        Image: imagepaths[Object.keys(imagepaths)[Math.floor(Object.keys(imagepaths).length * Math.random())]]//imagepaths.consultorio_1 //"https://source.unsplash.com/featured/?dentist"
      }
    ]
  },
  {
    name: "Ilustracao",
    caption: "Consultórios",
    contents: [
      {
        Name: "Inovação",
        Image: "https://source.unsplash.com/featured/?dentist"
      }
    ]
  },
  {
    name: "Demonstracao",
    caption: "Say no to manual home labour!",
    contents: [
      {
        Name: "Responsabilidade",
        Image: "https://source.unsplash.com/featured/?orthodontist"
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
    <div style={{ marginTop: "1px" }}>
      <h2 style={{
        textColor: "#ddd9ce",
        textAlign: "center",
        margin: "1px",
        fontFamily: 'Tangerine',
        fontSize: "48px",
        textShadow: "4px 4px 4px #8b8b88",
        fontWeight: "lighter"
      }}>Consultórios e Instalações</h2>

      <Carousel
        autoplay={true}
        // autoplayReverse={true}
        speed={2000}
        wrapAround={true}
        autoplayInterval={4000}
        adaptiveHeight={true}
        adaptiveHeightAnimation={true}
        animation={'fade'}
        withoutControls={true}
      >
        {items.map((item, index) => {
          return (
            <Banner
              key={index}
              item={item}
            />
          );
        })}
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