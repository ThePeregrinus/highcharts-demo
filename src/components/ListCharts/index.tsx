import { useContext, useState } from 'react';

import Grid from '@mui/material/Grid';

import { Context } from '../../App';
import { ModalSettings } from '../Modal/ModalSettings';

import { IChart } from '../../chartData';

export const ListCharts = () => {
  const value = useContext(Context);

  const deleteByIndex = (index: number) => {
    value.setChartsState((oldValues) => {
      return oldValues.filter((_, i) => i !== index);
    });
  };

  const [open, setOpen] = useState(false);
  const [id, setId] = useState(-1);

  const handleOpen = (id: number) => {
    setId(id);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Grid
        container
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: '100vh' }}
      >
        {value.chartsState.map((el, id) => (
          <Grid
            item
            onClick={() => handleOpen(id)}
            key={id}
            style={{ cursor: 'pointer', userSelect: 'none' }}
          >
            {el.title.text}
          </Grid>
        ))}
      </Grid>

      {open && (
        <ModalSettings
          open={open}
          id={id}
          setOpen={setOpen}
          handleClose={handleClose}
          value={value}
        />
      )}
    </>
  );
};
