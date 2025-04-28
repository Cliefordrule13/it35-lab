import { 
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonContent, 
  IonHeader, 
  IonMenuButton, 
  IonPage, 
  IonTitle, 
  IonToolbar 
} from '@ionic/react';

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
          <img
            alt="Canada"
            src="https://a.cdn-hotels.com/gdcs/production159/d204/01ae3fa0-c55c-11e8-9739-0242ac110006.jpg"
            style={{ width: '100%', height: '200px', objectFit: 'cover' }}
          />
          <IonCardHeader>
            <IonCardTitle style={{ textAlign: 'center' }}>CANADA</IonCardTitle>
          </IonCardHeader>
          <IonCardHeader>
            <IonCardTitle style={{ textAlign: 'center' }}>Canada is a vast and rugged land. From north to south it spans more than half the Northern Hemisphere.</IonCardTitle>
          </IonCardHeader>
        </IonCard>

        <IonCard>
          <img
            alt="Tokyo Japan"
            src="https://a.cdn-hotels.com/gdcs/production71/d736/0e1d9f4d-9743-47b7-814b-9a10e978d4c5.jpg"
            style={{ width: '100%', height: '200px', objectFit: 'cover' }}
          />
          <IonCardHeader>
            <IonCardTitle style={{ textAlign: 'center' }}>TOKYO, JAPAN</IonCardTitle>
          </IonCardHeader>
          <IonCardHeader>
            <IonCardTitle style={{ textAlign: 'center' }}>Tokyo is the capital of Japan and a sprawling metropolis that blends modern innovation with rich cultural traditions. It's a major global hub for finance, culture, and industry, located on the Pacific Ocean side of Honshu, Japan's main island.</IonCardTitle>
          </IonCardHeader>
        </IonCard>

        <IonCard>
          <img
            alt="Switzerland"
            src="https://images.travelandleisureasia.com/wp-content/uploads/sites/4/2023/11/29134158/lauterbrunnen.jpeg"
            style={{ width: '100%', height: '200px', objectFit: 'cover' }}
          />
          <IonCardHeader>
            <IonCardTitle style={{ textAlign: 'center' }}>SWITZERLAND</IonCardTitle>
          </IonCardHeader>
          <IonCardHeader>
            <IonCardTitle style={{ textAlign: 'center' }}>Switzerland is renowned for its stunning natural beauty, particularly its majestic Swiss Alps, and is also famous for its luxury watchmaking industry, high-quality chocolate, and efficient public transportation.</IonCardTitle>
          </IonCardHeader>
        </IonCard>

        <IonCard>
          <img
            alt="Land of Wano"
            src="https://i.pinimg.com/originals/a9/12/9c/a9129cdacbc1fda63b758120a4056549.jpg"
            style={{ width: '100%', height: '200px', objectFit: 'cover' }}
          />
          <IonCardHeader>
            <IonCardTitle style={{ textAlign: 'center' }}>LAND OF WANO</IonCardTitle>
          </IonCardHeader>
          <IonCardHeader>
            <IonCardTitle style={{ textAlign: 'center' }}>In the fictional world of One Piece, the "Land of Wano" is a country in the New World, known for its unique samurai culture and being ruled by a Shogun.</IonCardTitle>
          </IonCardHeader>
        </IonCard>

      </IonContent>
    </IonPage>
  );
};

export default Favorites;
