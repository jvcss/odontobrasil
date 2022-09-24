import React, { useState } from "react";
import Card from '@mui/joy/Card';
import AspectRatio from "@mui/joy/AspectRatio"
import CardOverflow from '@mui/joy/CardOverflow';
import Typography from '@mui/joy/Typography';
import TextField from '@mui/joy/TextField';

//import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Whats from '../img/whats_bg.png';

import Insta from '../img/instagram.jpg';
import about from './about.module.css';

function getCurrentDate(separator = '') {
  let newDate = new Date();
  let date = newDate.getDate();
  let month = newDate.getMonth() + 1;
  let year = newDate.getFullYear();
  return (`${date}${separator}${month < 10 ? `0${month}` : `${month}`}${separator}${year}`);
}
function getHours() {
  let newDate = new Date();
  let hours = newDate.getHours();
  //let minutes = newDate.getMinutes();
  return hours
  //return (`${hours}:${minutes}`);
}

const About = () => {

  const [message, setMessage] = useState('');
  const handleChange = event => {
    setMessage(event.target.value);
    console.log('value is:', event.target.value);
  };
  return (

    <Grid container spacing={1} justifyContent="space-evenly"  >
      <Grid item xs={11} >
        <Card variant="outlined"
          sx={{
            //ml: 1,
            position: "right",
            minWidth: "270px",
            width: "95%",
            //display: 'flex'
          }}>
          <CardOverflow>
            <TextField className={about.styled}
              sx={{
                mt: 2,
                fontSize: "25px",
                fontStyle: "italic"
              }}
              onChange={handleChange}
              label="Entre em contato"
              placeholder="Gostaria de mais informações"
              // helperText="Você pode perguntar sobre valores médios, custos de planos entre outros"
              variant="soft"
              value={message}
              required
            />
          </CardOverflow>

          <Typography level="body2" sx={{
            //fontSize: 'md', mt: 1,
            textColor: "#ddd9ce",
            textAlign: "center",
            margin: "1px",
            fontFamily: 'Tangerine',
            fontSize: "30px",
            textShadow: "4px 4px 4px #8b8b88",
            fontWeight: "lighter"
          }}>
            Assunto: Mais Detalhes OdontoBrasil
          </Typography>
          <Typography level="body2" sx={{
            //fontSize: 'md',
            textColor: "#ddd9ce",
            textAlign: "center",
            margin: "1px",
            fontFamily: 'Tangerine',
            fontSize: "30px",
            textShadow: "4px 4px 4px #8b8b88",
            fontWeight: "lighter"
          }}>
            Para: adm.odontobrasil@gmail.com
          </Typography >
          <Typography level="h7" sx={{
            mt: 0.5, mb: 1,
            textColor: "#ddd9ce",
            textAlign: "center",
            margin: "1px",
            fontFamily: 'Tangerine',
            fontSize: "30px",
            textShadow: "4px 4px 4px #8b8b88",
            fontWeight: "lighter"
          }}>
            {getCurrentDate('/')}
          </Typography>

          <CardOverflow
            variant="soft"
            sx={{
              display: 'flex',
              gap: 1.5,
              py: 1.5,
              px: 'var(--Card-padding)',
              borderTop: '1px solid',
              borderColor: 'neutral.outlinedBorder',
              bgcolor: 'background.level1',
            }}
          >
            <Button onClick={function () { window.open(`mailto:adm.odontobrasil@gmail.com?subject=Mais%20Detalhes%20OdontoBrasil&body=${message}`) }} ><Typography sx={{
              textColor: "#ddd9ce",
              textAlign: "center",
              margin: "1px",
              fontFamily: 'Tangerine',
              fontSize: "25px",
              textShadow: "4px 4px 4px #8b8b88",
              fontWeight: "lighter"
            }}>Enviar</Typography></Button>
            
          </CardOverflow>
        </Card>
      </Grid>

      <Grid item xs={4} >
        <Card variant="outlined" sx={{ minWidth: "15vh" }}>
          <a href="https://wa.me/+556293729963?text=Oi%20gostaria%20de%20saber%20mais">
            <CardOverflow>
              <AspectRatio ratio="2">
                <img
                  src={Whats}//"https://images.unsplash.com/photo-1532614338840-ab30cf10ed36?crop=entropy&auto=format&fit=crop&w=3270"
                  alt=""
                />
              </AspectRatio>
            </CardOverflow>
          </a>
          <Typography level="h2" sx={{
            //  fontSize: 'md', mt: 2,
            textColor: "#ddd9ce",
            textAlign: "center",
            margin: "1px",
            fontFamily: 'Tangerine',
            fontSize: "25px",
            textShadow: "4px 4px 4px #8b8b88",
            fontWeight: "lighter"
          }}>
            Atendimento em horário comercial
          </Typography>
          <Typography level="body2" sx={{
            mt: 0.5, mb: 2, textColor: "#ddd9ce",
            textAlign: "center",
            margin: "1px",
            fontFamily: 'Tangerine',
            fontSize: "25px",
            textShadow: "4px 4px 4px #8b8b88",
            fontWeight: "lighter"
          }}>
            Goiânia - GO
          </Typography>
          <CardOverflow
            variant="soft"
            sx={{
              display: 'flex',
              gap: 1.5,
              py: 1.5,
              px: 'var(--Card-padding)',
              borderTop: '1px solid',
              borderColor: 'neutral.outlinedBorder',
              bgcolor: 'background.level1',
            }}
          >
            <Typography level="body3" sx={{
              //fontWeight: 'md', color: 'text.secondary', textColor: "#ddd9ce",
              textAlign: "center",
              margin: "1px",
              fontFamily: 'Tangerine',
              fontSize: "25px",
              textShadow: "4px 4px 4px #8b8b88",
              fontWeight: "lighter"
            }}>
              Agora estamos
            </Typography>
            <Box sx={{ width: 2, bgcolor: 'divider' }} />
            <Typography level="body3" sx={{
              //fontWeight: 'md', color: 'text.secondary', textColor: "#ddd9ce",
              textAlign: "center",
              margin: "1px",
              fontFamily: 'Tangerine',
              fontSize: "25px",
              textShadow: "4px 4px 4px #8b8b88",
              fontWeight: "lighter"
            }}>
              {getHours() < 18 && getHours() > 8 ? "Online" : "Offline"}
            </Typography>
          </CardOverflow>
        </Card>
      </Grid>




      <Grid item xs={4} >
        <Card variant="outlined" sx={{ minWidth: "15vh" }}>
          <a href="https://www.instagram.com/odontobrasil.go/">
            <CardOverflow>
              <AspectRatio ratio="2">
                <img
                  src={Insta}//"https://images.unsplash.com/photo-1532614338840-ab30cf10ed36?crop=entropy&auto=format&fit=crop&w=3270"
                  alt=""
                />
              </AspectRatio>
            </CardOverflow>
          </a>
          <Typography level="h2" sx={{
            //fontSize: 'md', 
            mt: 2,
            textColor: "#ddd9ce",
            textAlign: "center",
            margin: "1px",
            fontFamily: 'Tangerine',
            fontSize: "25px",
            textShadow: "4px 4px 4px #8b8b88",
            fontWeight: "lighter"
          }}>
            Siga para não perder nenhuma oferta
          </Typography>
          <Typography level="body2" sx={{
            mt: 0.5, mb: 2, textColor: "#ddd9ce",
            textAlign: "center",
            margin: "1px",
            fontFamily: 'Tangerine',
            fontSize: "25px",
            textShadow: "4px 4px 4px #8b8b88",
            fontWeight: "lighter"
          }}>
            Goiânia - GO
          </Typography>
          <CardOverflow
            variant="soft"
            sx={{
              display: 'flex',
              gap: 1.5,
              py: 1.5,
              px: 'var(--Card-padding)',
              borderTop: '1px solid',
              borderColor: 'neutral.outlinedBorder',
              bgcolor: 'background.level1',
            }}
          >
            <Typography level="body3" sx={{
              //fontWeight: 'md',
              color: 'text.secondary', textColor: "#ddd9ce",
              textAlign: "center",
              margin: "1px",
              fontFamily: 'Tangerine',
              fontSize: "25px",
              textShadow: "4px 4px 4px #8b8b88",
              fontWeight: "lighter"
            }}>
              Agora estamos
            </Typography>
            <Box sx={{ width: 2, bgcolor: 'divider' }} />
            <Typography level="body3" sx={{
              //fontWeight: 'md',
              color: 'text.secondary', textColor: "#ddd9ce",
              textAlign: "center",
              margin: "1px",
              fontFamily: 'Tangerine',
              fontSize: "25px",
              textShadow: "4px 4px 4px #8b8b88",
              fontWeight: "lighter"
            }}>
              {getHours() < 18 && getHours() > 8 ? "Online" : "Offline"}
            </Typography>
          </CardOverflow>
        </Card>
      </Grid>



    </Grid>

  );
}

export default About;