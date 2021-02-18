import React from "react";
import { makeStyles } from '@material-ui/core/styles'
import logo from "../../assets/images/logo-footer.png";

const useStyles = makeStyles({
    root: {
        position: 'fixed',
        left: 0,
        bottom: 0,
        width: '100%',
        background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
        boxShadow: '0 3px 5px 2px rgba(33, 203, 243, .3)',
        color: 'white',
        textAlign: 'center',
      },
})

const Footer = () => {
  return (
    <div className={useStyles().root}>
      <img className="imagem-logo" src={logo} alt="Logo APAE" />
    </div>
  );
};

export default Footer;