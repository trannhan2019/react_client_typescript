import React, { useState } from 'react';
import { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Header from '../components/quantri/Header';

export interface IState extends MuiAppBarProps {
  open?: boolean;
}

const Quantri: React.FC = () => {
  const drawerWidth: number = 240;

  const toggleDrawer = (): void => {
    setOpen(!open);
  };

  const [open, setOpen] = useState<IState['open']>(true);

  return (
    <Header
      open={open}
      drawerWidth={drawerWidth}
      toggleDrawer={toggleDrawer}
    />
  );
};

export default Quantri;
