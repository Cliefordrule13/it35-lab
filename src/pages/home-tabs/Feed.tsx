import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
  IonList,
  IonItem,
  IonThumbnail,
  IonLabel,
  IonButton
} from '@ionic/react';

const feedData = [
  {
    id: 1,
    title: 'Beautiful Sunset',
    description: 'A stunning sunset view ',
    image: 'https://source.unsplash.com/random/100x100?sunset',
    details: {
      location: 'Santorini, Greece',
      time: '6:45 PM'
    }
  },
  {
    id: 2,
    title: 'City of Palawan',
    description: 'The city shines bright at night.',
    image: 'https://source.unsplash.com/random/100x100?city',
    details: {
      location: 'Puerto Princesa, Palawan, Philippines',
      time: '9:30 PM'
    }
  },
  {
    id: 3,
    title: 'Beach of Palawan',
    description: 'Relaxing at the beach with a fresh breeze.',
    image: 'https://source.unsplash.com/random/100x100?beach',
    details: {
      location: 'El Nido, Palawan, Philippines',
      time: '3:00 PM'
    }
  }
];

const Feed: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton></IonMenuButton>
          </IonButtons>
          <IonTitle>Feed</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonList>
          {feedData.map((item) => (
            <IonItem key={item.id}>
              <IonThumbnail slot="start">
                <img src={item.image} alt={item.title} />
              </IonThumbnail>
              <IonLabel>
                <h2>{item.title}</h2>
                <p>{item.description}</p>
                <p><strong>Location:</strong> {item.details.location}</p>
                <p><strong>Time:</strong> {item.details.time}</p>
              </IonLabel>
              <IonButton slot="end" fill="outline">See Details</IonButton>
            </IonItem>
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Feed;