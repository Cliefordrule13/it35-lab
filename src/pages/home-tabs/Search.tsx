import { 
  IonButtons,
    IonContent, 
    IonHeader, 
    IonMenuButton,
    IonSearchbar, 
    IonPage, 
    IonTitle, 
    IonToolbar 
} from '@ionic/react';
import React from 'react';


const Search: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot='start'>
            <IonMenuButton></IonMenuButton>
          </IonButtons>
          <IonTitle>Search</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
      <IonHeader>
      <IonToolbar>
        <IonTitle></IonTitle>
      </IonToolbar>
      <IonToolbar>
        <IonSearchbar></IonSearchbar>
      </IonToolbar>
    </IonHeader>

      </IonContent>
    </IonPage>
  );
};

export default Search;