import { useContext, useEffect, useState } from 'react';
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
  Button,
} from '@mui/material';

import Grid from '@mui/material/Grid';

import { Context } from '../../App';
import { ModalSettings } from '../Modal/ModalSettings';

export const ListCharts = () => {
  const value = useContext(Context);

  const deleteByIndex = (index: number) => {
    console.log(value);
    value.setChartsState((oldValues) => {
      return oldValues.filter((_, i) => i !== index);
    });
  };

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
    console.log(1);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <ModalSettings open={open} setOpen={setOpen} handleClose={handleClose} />
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: '100vh' }}
      >
        {value.chartsState.map((el, id) => (
          <Grid
            item
            onClick={() => handleOpen()}
            style={{ cursor: 'pointer', userSelect: 'none' }}
          >
            {el.title.text}
          </Grid>
        ))}
      </Grid>
    </>
  );
};
