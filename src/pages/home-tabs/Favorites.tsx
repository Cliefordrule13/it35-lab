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
  IonImg,
  IonIcon,
  IonCardSubtitle
} from '@ionic/react';
import { heart, star, bookmark } from 'ionicons/icons';

const Favorites: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Favorites</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="ion-padding">
        <IonCard>
          <IonImg 
            alt="Silhouette of mountains" 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkqeGGoNp2qghqgF5yC37xTS94bTcOujOX0g&s" 
          />
          <IonCardHeader>
            <IonCardTitle>Sabangan Malaybalay</IonCardTitle>
            <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
          </IonCardHeader>
          <IonCardContent>
            Enjoy Life while Exploring this kind of view.
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Favorites;
