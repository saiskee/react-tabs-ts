import * as React from 'react';
import {
  TabsComponent,
  TabPane,
} from './tabs';

const callback = (...args) => {
  console.log('onSelect callback triggered', ...args);
};

export const App: React.StatelessComponent<{}> = () => (
  <div className="container">
    <TabsComponent selectedTab="Home" onSelect={callback}>
      <TabPane name="Home">
        <h1 className="text-center">Home Pane</h1>
      </TabPane>
      <TabPane name="Profile">
        <h1 className="text-center">Profile Pane</h1>
      </TabPane>
      <TabPane name="Messages">
        <h1 className="text-center">Messages Pane</h1>
      </TabPane>
      <TabPane name="Settings">
        <h1 className="text-center">Settings Pane</h1>
      </TabPane>
      <TabPane name="About">
        <h1 className="text-center">About Pane</h1>
      </TabPane>
    </TabsComponent>
  </div>
);
