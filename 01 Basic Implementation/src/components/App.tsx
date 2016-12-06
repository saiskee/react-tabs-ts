import * as React from 'react';
import {
  TabsComponent,
  TabPane,
} from './tabs';

export const App: React.StatelessComponent<{}> = () => (
  <div className="container">
    <TabsComponent selectedTab="Home" animate>
      <TabPane name="Home">
        <h1 className="text-center">Home Pane</h1>
      </TabPane>
      <TabPane name="Profile">
        <h1 className="text-center">Profile Pane</h1>
      </TabPane>
      <TabPane name="Messages">
        <h1 className="text-center">Messages Pane</h1>
      </TabPane>
      <TabPane name="Settings" disabled>
        <h1 className="text-center">Settings Pane</h1>
      </TabPane>
      <TabPane name="About">
        <h1 className="text-center">About Pane</h1>
      </TabPane>
    </TabsComponent>
  </div>
);
