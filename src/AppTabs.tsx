import {
  IonApp, 
  IonIcon, 
  IonLabel, 
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { home as homeIcon, settings as settingsIcon } from 'ionicons/icons';
import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AddEntryPage from './pages/AddEntryPage';
import EntryPage from './pages/EntryPage';
import SettingsPage from './pages/SettingsPage';
import { useAuth } from './auth';

const AppTabs: React.FC = () => {
  const { loggedIn } = useAuth();
  if (!loggedIn) {
    return <Redirect to="/login" />;
  }
  return (
    <IonApp>
      <IonReactRouter>
        <IonTabs>
          <IonRouterOutlet>
            <Route exact path="/my/entries">
              <HomePage />
            </Route>
            <Route exact path="/my/entries/add">
              <AddEntryPage />
            </Route>
            <Route exact path="/my/entries/view/:id">
              <EntryPage />
            </Route>
            <Route exact path="/my/settings">
              <SettingsPage />
            </Route>
            <Redirect exact path="/" to="/my/entries"/>
          </IonRouterOutlet>
          <IonTabBar slot="bottom">
            <IonTabButton tab="home" href="/my/entries">
              <IonIcon icon={homeIcon}/>
              <IonLabel>Home</IonLabel>
            </IonTabButton>
            <IonTabButton tab="settings" href="/my/settings">
              <IonIcon icon={settingsIcon}/>
              <IonLabel>Settings</IonLabel>
            </IonTabButton>
          </IonTabBar>
        </IonTabs>
      </IonReactRouter>
    </IonApp>
  );
};

export default AppTabs;
