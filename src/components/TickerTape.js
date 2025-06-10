import React, { memo } from 'react';
import { TickerTape } from "react-ts-tradingview-widgets";

const TickerTapeWidget = () => {
  return (
    <div className="w-full">
      <TickerTape
        colorTheme="light"
        is24h={true}
        locale="en"
        symbols={[
          { "proName": "FOREXCOM:SPXUSD", "title": "S&P 500" },
          { "proName": "NASDAQ:NDX", "title": "Nasdaq 100" },
          { "proName": "FX_IDC:EURUSD", "title": "EUR/USD" },
          { "proName": "FX_IDC:GBPUSD", "title": "GBP/USD" },
          { "proName": "BITSTAMP:BTCUSD", "title": "Bitcoin" },
          { "proName": "BINANCE:ETHUSDT", "title": "Ethereum" },
          { "description": "Gold", "proName": "COMEX:GC1!" },
          { "description": "Crude Oil", "proName": "NYMEX:CL1!" },
        ]}
      />
    </div>
  );
};

export default memo(TickerTapeWidget); 