import * as React from 'react';
import {
  TabsComponent,
  TabNavigation,
  TabNavItem,
  TabPane,
  TabContent
} from './tabs';

export const App: React.StatelessComponent<{}> = () => (
  <div className="container">
    <h1>Sample using React, Bootstrap, SASS and TypeScript</h1>
    <TabsComponent>
      <TabNavigation>
        <TabNavItem href="home">Home</TabNavItem>
        <TabNavItem>Pane 2</TabNavItem>
        <TabNavItem>Pane 3</TabNavItem>
        <TabNavItem>Pane 4</TabNavItem>
        <TabNavItem>Pane 5</TabNavItem>
      </TabNavigation>
      <TabContent>
        <TabPane fade>
          Pane 1
      </TabPane>
        <TabPane fade>
          Pane 2
      </TabPane>
        <TabPane fade>
          Pane 3
      </TabPane>
        <TabPane fade>
          Pane 4
      </TabPane>
        <TabPane fade>
          Pane 5
      </TabPane>
      </TabContent>
    </TabsComponent>
  </div>
);
