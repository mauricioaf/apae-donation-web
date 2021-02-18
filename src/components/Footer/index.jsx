import React from "react";
import { makeStyles } from '@material-ui/core/styles'
import Background from '../../assets/images/grey-background.jpg';

const useStyles = makeStyles({
    root: {
        position: 'fixed',
        left: 0,
        bottom: 0,
        width: '100%',
        // background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
        // boxShadow: '0 3px 5px 2px rgba(33, 203, 243, .3)',
        color: 'rgba(0, 0, 0, 0.54)',
        textAlign: 'center',
        backgroundImage: "url(" + Background + ")",
        backgroundRepeat: 'round'
      },
})

const Footer = () => {
  return (
    <div className={useStyles().root}>
    {/* <div style={{ backgroundImage: "url(" + Background + ")", backgroundRepeat: 'round' }}> */}
      {/* <img className="imagem-logo" src={logo} alt="Logo APAE" /> */}
      <p>Copyright 2021. Todos os direitos reservados a Apae Campo Limpo Paulista.</p>
    </div>
  );
};

export default Footer;