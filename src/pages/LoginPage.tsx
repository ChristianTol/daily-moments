import {
  IonButton,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import React from 'react';
import { useAuth } from '../auth';
import { Redirect } from 'react-router';

interface Props {
  onLogin: () => void;
}

const LoginPage: React.FC<Props> = ({ onLogin }) => {
  const { loggedIn } = useAuth();
  if (loggedIn) {
    return <Redirect to="/my/entries" />;
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Login</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonButton expand="block" onClick={onLogin}>Login</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default LoginPage;