import { 
  IonButtons,
  IonContent, 
  IonHeader, 
  IonMenuButton, 
  IonPage, 
  IonTitle, 
  IonToolbar,
  IonText,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonImg,
  IonIcon
} from '@ionic/react';
import { star, peopleCircle, rocket } from 'ionicons/icons';

const About: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>About Me</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="ion-padding">
        <IonCard>
          <IonImg src="https://scontent.fcgm1-1.fna.fbcdn.net/v/t39.30808-6/475808309_2379921092383857_3048698168313806314_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeEOre5jioyxFXgOyDlX1QZ3q2uIKcuJbLOra4gpy4lssyiWYYQJd8DWpPamyGmGJqfOMbZSVu_OZCZv7zud7xi9&_nc_ohc=KXauC5uF96UQ7kNvgHjh6O-&_nc_oc=AdiH9tPD6NgOaaz3y5aNCtPNUgWxNQAnk9-XClhL_oX2FfnXpnbCo0ljZVfR0iACVLQ&_nc_zt=23&_nc_ht=scontent.fcgm1-1.fna&_nc_gid=AqUcTCp_siCvvG4Jvr5Yn5V&oh=00_AYFCPO10pTJM7SJr9Tx3YtmUhcH00pukOk7Iagdyo0jLZg&oe=67D88960" alt="Clieford Dalauta Rule" />
          <IonCardHeader>
            <IonCardTitle>Clieford Dalauta Rule</IonCardTitle>
            <IonCardSubtitle>Age: 23 | Passion for Innovation & Technology</IonCardSubtitle>
          </IonCardHeader>
          <IonCardContent>
            <IonText>
              <p>
                <IonIcon icon={star} color="warning" /> **Innovative Thinker** - Always exploring new ideas and solutions.
              </p>
              <p>
                <IonIcon icon={peopleCircle} color="primary" /> **Community Builder** - Passionate about bringing people together and making meaningful connections.
              </p>
              <p>
                <IonIcon icon={rocket} color="danger" /> **Driven by Technology** - Enthusiastic about pushing boundaries and creating impactful innovations.
              </p>
            </IonText>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default About;
