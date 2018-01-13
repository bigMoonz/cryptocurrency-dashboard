import React, { PureComponent } from 'react';
import ReactGridLayout, { WidthProvider } from 'react-grid-layout';
import { withStyles, WithStyles } from 'material-ui/styles';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';

import { styles, ClassNames } from './styles';
import { Currency, IFetchCurrenciesAction } from '@src/redux_/currencies';
import { CurrencyPickerConnected as CurrencyPicker } from '@src/components/currencyPicker';
import { TargetSelectorConnected as TargetSelector } from '@src/components/targetSelector';
import { CurrencyWidgetConnected as CurrencyWidget } from '@src/components/currencyWidget';

interface IAppProps {
  fetchCurrencies: () => IFetchCurrenciesAction;
  currencies: Currency[];
}

const GridLayout = WidthProvider(ReactGridLayout);

export class AppRaw extends PureComponent<
  IAppProps & WithStyles<ClassNames>,
  {}
> {
  public componentDidMount() {
    this.props.fetchCurrencies();
  }

  public render() {
    const { currencies } = this.props;

    const layout = [
      { i: 'currency-picker', x: 0, y: 0, w: 1, h: 1, static: true },
      { i: 'target-selector', x: 1, y: 0, w: 1, h: 1, static: true },
    ];

    const renderCurrencies = currencies.map((currency, index) => (
      <div key={currency.id}>
        <CurrencyWidget currency={currency} />
      </div>
    ));

    return (
      <GridLayout
        className={'layout'}
        cols={3}
        isResizable={false}
        layout={layout}
        rowHeight={100}
      >
        <div key={'currency-picker'} style={{ zIndex: 2 }}>
          <CurrencyPicker />
        </div>
        <div key={'target-selector'}>
          <TargetSelector />
        </div>
        {renderCurrencies}
      </GridLayout>
    );
  }
}

export const App = withStyles(styles)(AppRaw);
