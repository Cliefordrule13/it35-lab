import { 
  IonButtons,
  IonContent, 
  IonHeader, 
  IonMenuButton, 
  IonPage, 
  IonTitle, 
  IonToolbar,
  IonAvatar,
  IonImg
} from '@ionic/react';

const About: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot='start'>
            <IonMenuButton></IonMenuButton>
          </IonButtons>
          <IonTitle>About</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="ion-padding" style={{ textAlign: 'center' }}>
        <IonAvatar style={{ margin: '0 auto', width: '100px', height: '100px' }}>
          <IonImg src="https://www.gravatar.com/avatar?d=mp" alt="Avatar" />
        </IonAvatar>
      </IonContent>
    </IonPage>
  );
};

export default About;
