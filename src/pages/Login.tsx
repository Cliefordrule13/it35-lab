import { 
  IonButton,
  IonButtons,
  IonContent, 
  IonHeader, 
  IonInput, 
  IonItem, 
  IonList, 
  IonMenuButton, 
  IonPage, 
  IonText, 
  IonTitle, 
  IonToolbar, 
  useIonRouter
} from '@ionic/react';

const Login: React.FC = () => {
  const navigation = useIonRouter();
  
  const doLogin = () => {
    navigation.push('/it35-lab/app', 'forward', 'replace');
  };

  const goToSignup = () => {
    navigation.push('/signup', 'forward');
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Login</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className='ion-padding'>
        <IonInput label="Email" labelPlacement="floating" fill="solid" placeholder="Enter email"></IonInput>
        <br />
        <IonInput label="Password" labelPlacement="floating" fill="outline" placeholder="Enter password" type="password"></IonInput>
        <br />
        <IonButton onClick={doLogin} expand="full">
          Login
        </IonButton>
        <IonButton onClick={goToSignup} expand="full" fill="outline" color="secondary">
          Signup
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Login;