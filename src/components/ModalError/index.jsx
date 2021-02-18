import React, { useState, useEffect } from "react";
import {Card, CardHeader, CardContent, Modal, Button} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

function TransitionsModal({show, close}) {
    
  const classes = useStyles();
  const [open, setOpen] = useState(show);

  useEffect(() => {
    setOpen(show);
  });

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={() => {
          close(true);
        }}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
            <Card margin="normal" component="div" className={classes.paper}>
                <CardHeader margin="normal"title="Erro" component="div" className={classes.paper}>

                </CardHeader>
                <CardContent margin="normal"component="div" className={classes.paper}>
                    <p>
                        Usuário inválido!
                    </p>
                </CardContent>
                    <Button margin="normal" variant="contained" color="secondary" onClick={() => {
                        close();
                    }}>Tentar Novamente</Button>
            </Card>
          {/* <div className={classes.paper}>
            <h2 id="transition-modal-title">Transition modal</h2>
            <p id="transition-modal-description">
              react-transition-group animates me.
            </p>
          </div> */}
        </Fade>
      </Modal>
    </div>
  );
}

export default TransitionsModal;
