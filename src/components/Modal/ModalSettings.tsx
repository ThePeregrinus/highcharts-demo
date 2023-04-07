import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
  Button,
} from '@mui/material';

import { ChartContextType } from '../../App';
import { IChart } from '../../chartData';

export const ModalSettings = (props: {
  open: boolean;
  id: number;
  value: ChartContextType;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  handleClose: () => void;
}) => {
  const changeDatas = () => {
    props.value.setChartsState(
      props.value.chartsState.map((el, ind): IChart => {
        console.log(el);
        if (props.id !== ind) {
          return el;
        } else {
          return {
            title: { text: `Chart ${ind + 1} fixed` },
            legend: {
              enabled: false,
            },

            series: [
              {
                color: el.series[0].color,
                type: el.series[0].type,
                name: 'some useful value',
                pointInterval: el.series[0].pointInterval,
                pointStart: el.series[0].pointStart,
                data: el.series[0].data,
              },
            ],
            xAxis: {
              type: 'datetime',
            },
          };
        }
      })
    );
    //props.setOpen(false);
  };

  return (
    <Dialog open={props.open}>
      <DialogTitle>
        <Typography variant="h4">Setting chart</Typography>
      </DialogTitle>
      <DialogContent>
        <Typography variant="h6">
          Are you sure you want to delete this user?
        </Typography>
        <Typography variant="subtitle2">
          You can't undo this operation
        </Typography>
      </DialogContent>
      <DialogActions>
        <Button variant="contained" onClick={() => changeDatas()}>
          Save changes
        </Button>
        <Button
          variant="contained"
          onClick={() => props.setOpen(false)}
          color="error"
        >
          Exit
        </Button>
      </DialogActions>
    </Dialog>
  );
};
