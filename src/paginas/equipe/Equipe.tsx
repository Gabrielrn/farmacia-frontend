import { Box, Button, Container, Typography } from "@mui/material";
import { Avatar, Grid, Link } from "@mui/material";
import React from "react";
import "./Equipe.css";
import michelle from "../../img/equipe/michelle.jpg";
import gabriel from "../../img/equipe/gabriel.svg";
import gustavo from "../../img/equipe/Gustavo.jpg";
import { GitHub } from "@mui/icons-material";
import { LinkedIn } from "@mui/icons-material";

function Equipe() {
  return (
    <>
      <Grid container>
        <Grid
          xs={12}
          style={{ justifyContent: "center", display: "flex" }}
          className="margin-titulo-equipe"
        >
          <Typography className='titulo-equipe'>
            Equipe
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <Box style={{ display: "flex", justifyContent: "center" }}>
          </Box>
          <Grid xs={8} style={{ justifyContent: "center", display: "flex", gap: '200px'}} className='margin-equipe'>
            <Box className="margin-foto">
              <Typography className='nome-integrante'>Gabriel</Typography>
              <Avatar alt="Andrei" src={gabriel} className="tamanho-avatar" /> 
            </Box>
            <Box className="margin-foto">
              <Typography className='nome-integrante'>Gustavo</Typography>
              <Avatar alt="Gabriel" src={gustavo} className="tamanho-avatar" />
            </Box>
            <Box className="margin-foto">
              <Typography className='nome-integrante'>Michelle</Typography>
              <Avatar alt="Letícia" src={michelle} className="tamanho-avatar" />
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default Equipe;
