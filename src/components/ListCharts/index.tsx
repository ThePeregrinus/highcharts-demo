import { useContext, useState } from 'react';

import { Grid, Container, Typography, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

import { Context } from '../../App';
import { ModalSettings } from '../Modal/ModalSettings';

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
      <Container maxWidth="sm">
        <Grid container>
          {value.chartsState.map((el, id) => (
            <>
              <Grid
                item
                onClick={() => handleOpen(id)}
                key={id}
                style={{ cursor: 'pointer' }}
                xs={8}
              >
                <Grid item container>
                  <Grid item>
                    <Typography variant="h4">{el.title.text}</Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={2}>
                <IconButton onClick={() => handleOpen(id)}>
                  <EditIcon fontSize="large" />
                </IconButton>
              </Grid>
              <Grid item xs={2}>
                <IconButton
                  onClick={() => {
                    deleteByIndex(id);
                  }}
                >
                  <DeleteIcon fontSize="large" />
                </IconButton>
              </Grid>
            </>
          ))}
        </Grid>
      </Container>
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
