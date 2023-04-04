import { ListCharts } from '../../components/ListCharts';
import { useContext, useEffect, useState } from 'react';

import { Context } from '../../App';

export const Setting = () => {
  const value = useContext(Context);

  return <ListCharts />;
};
