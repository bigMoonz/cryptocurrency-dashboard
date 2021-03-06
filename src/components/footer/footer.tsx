import React, { SFC } from 'react';
import Grid from '@material-ui/core/Grid';
import { withStyles, WithStyles } from '@material-ui/core/styles';

import { WalletConnected as Wallet } from '@src/components/wallet';
import { RefreshButtonConnected as RefreshButton } from '@src/components/refreshButton';
import { styles, ClassNames } from './styles';

export interface IFooterProps {
  loading: boolean;
}

export const FooterRaw: SFC<
IFooterProps & WithStyles<ClassNames>
> = ({ classes, loading }) => (
  <footer className={classes.footer}>
    <Grid
      alignItems={'flex-end'}
      container={true}
      justify={'space-between'}
      spacing={0}
    >
      <Grid item={true}>
        {!loading && <Wallet />}
      </Grid>
      <Grid item={true}>
        <RefreshButton />
      </Grid>
    </Grid>
  </footer>
);

export const Footer = withStyles(styles)(FooterRaw);
