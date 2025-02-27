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
      navigation.push('/it35-lab/app','forward','replace');
  }
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Login</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className='ion-padding'>
      <>
      <IonInput label="Email" labelPlacement="floating" fill="input" placeholder="Enter text"></IonInput>

      <br />

      <IonInput label="Password" labelPlacement="floating" fill="output" placeholder="Enter text"></IonInput>
    </>
          <IonButton onClick={() => doLogin()} expand="full">
              Login
          </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Login;