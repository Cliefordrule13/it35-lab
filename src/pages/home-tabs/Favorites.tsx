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
  IonIcon
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
            src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.com%2Fpremium-ai-image%2Fbeautiful-sunset-beach-el-nido-palawan-philippines_48487039.htm&psig=AOvVaw29sB2T7bh8MdrIJX8Qzg6j&ust=1741939969333000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCPjw2Z3OhowDFQAAAAAdAAAAABAE"
            alt="Palawan" 
          />
          <IonCardHeader>
            <IonCardTitle>Palawan</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <IonText>
              <p>
                Palawan, known as the "Last Frontier" of the Philippines, is home to stunning beaches, crystal-clear waters, and breathtaking limestone cliffs. It's a paradise for nature lovers and adventure seekers.
              </p>
              <p>
                <IonIcon icon={heart} color="danger" /> **Save What You Love** – Keep track of your favorite items, places, or memories.
              </p>
              <p>
                <IonIcon icon={star} color="warning" /> **Your Top Picks** – A collection of things that make you happy and inspired.
              </p>
              <p>
                <IonIcon icon={bookmark} color="primary" /> **Easy Access** – Quickly revisit the things that matter most to you.
              </p>
            </IonText>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Favorites;
