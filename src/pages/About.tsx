import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
  IonImg
} from '@ionic/react';

const About: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot='start'>
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Instagram Profile</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen className="ion-padding">
        {/* Profile Header */}
        <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', marginBottom: '20px' }}>
          <div
            style={{
              width: '300px',
              height: '300px',
              borderRadius: '50%',
              overflow: 'hidden',
              border: '3px solid #ccc',
              marginBottom: '10px'
            }}
          >
            <IonImg
              src="https://scontent.fmnl25-1.fna.fbcdn.net/v/t39.30808-6/464465944_2301231156919518_3765555643357167404_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeF5mDe294rBDMDl19FXsLOyJfk8Ak0G9IAl-TwCTQb0gA1Q8EuWJL-K463NS1xneQv1CgjHEVvN0XYyrvsyBwRj&_nc_ohc=UuEMQ8WEPCUQ7kNvwGBDT2c&_nc_oc=AdkkZnx04h50ms2TEtAgmX2CRIJep3PbMUkc3wF2Gh3uRDxWIQEfVjjfawvslAvHRV4&_nc_zt=23&_nc_ht=scontent.fmnl25-1.fna&_nc_gid=Oi-S1vN68ebtPh6ENUAxFA&oh=00_AfG2bCYRiVE8mgc3uJ2_cxoZCU8Vl1CJ90NpSoAmPlm5hA&oe=680CECB3"
              alt="Profile Pic"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          <h2 style={{ margin: 0 }}>Clieford jay Rule</h2>
          <p style={{ fontSize: '14px', color: '#555', textAlign: 'center', maxWidth: '80%' }}>
            CONNECT TO THE NATURE, LOVE MOTHER EARTH. 🌿🌎
          </p>
        </div>

        {/* Post Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '5px',
            padding: '0 5px'
          }}
        >
          {/* Post 1 */}
          <div style={{ width: '100%', aspectRatio: '1 / 1', overflow: 'hidden' }}>
            <IonImg
              src="https://scontent.fmnl25-1.fna.fbcdn.net/v/t39.30808-6/487733825_2428026224240010_2677444397557203613_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeFGLAWAjkExAdvyqtHfGwyIQoq8F6XXCghCirwXpdcKCPMe17v1JGqH2hoK31W-vsPUTNPEnBdDO4qNTQYd1Zpj&_nc_ohc=oIi6Knl31doQ7kNvwEZCUcv&_nc_oc=AdkDvDFgYT-OnGPmDW1lDe4R0kbS4p9T7DjF7lCr-f96n5_xk3OqRaMGuytia491BwM&_nc_zt=23&_nc_ht=scontent.fmnl25-1.fna&_nc_gid=ySCbtLneznfHEPU4WTCqQQ&oh=00_AfE0HIfXcRNj3MuZawik4Q6CBFiYDTb6TZTdUd7LBKWjtQ&oe=680CF326"
              alt="Post 1"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>

          {/* Post 2 */}
          <div style={{ width: '100%', aspectRatio: '1 / 1', overflow: 'hidden' }}>
            <IonImg
              src="https://scontent.fmnl25-1.fna.fbcdn.net/v/t39.30808-6/475808309_2379921092383857_3048698168313806314_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeEOre5jioyxFXgOyDlX1QZ3q2uIKcuJbLOra4gpy4lssyiWYYQJd8DWpPamyGmGJqfOMbZSVu_OZCZv7zud7xi9&_nc_ohc=j_FXdQgRLnEQ7kNvwFzIa8Z&_nc_oc=AdkULW7jEhDmJT8MHNKO0Ks7uW5ObWmY-6aYnODL7hU2n02yX24hY12lztq0XZn109c&_nc_zt=23&_nc_ht=scontent.fmnl25-1.fna&_nc_gid=DQjhhihjthI8DLgqaJsRow&oh=00_AfEM7d4vyprp_tWFPNEXSWwJ1B8bDFVMafl7N4L8FPep4Q&oe=680CD4E0"
              alt="Post 2"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>

          {/* Placeholder for more posts */}
          <div style={{ width: '100%', aspectRatio: '1 / 1', backgroundColor: '#eee' }}></div>
        </div>

        {/* Tagline */}
        <p style={{ textAlign: 'center', marginTop: '24px', fontWeight: 'bold', fontSize: '16px' }}>
          SLOW LEARNER BUT WILLING TO LEARN 💪📚
        </p>
      </IonContent>
    </IonPage>
  );
};

export default About;
