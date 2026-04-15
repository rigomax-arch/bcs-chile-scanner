import React from 'react';
import { Tabs, Tab } from 'react-bootstrap';

const StockScanner = () => <div>Stock Scanner Component</div>;
const ChartComparison = () => <div>Chart Comparison Component</div>;

const App = () => {
  return (
    <Tabs defaultActiveKey="stock-scanner" id="uncontrolled-tab-example">
      <Tab eventKey="stock-scanner" title="Stock Scanner">
        <StockScanner />
      </Tab>
      <Tab eventKey="chart-comparison" title="Chart Comparison">
        <ChartComparison />
      </Tab>
    </Tabs>
  );
};

export default App;