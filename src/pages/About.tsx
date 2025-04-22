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
            <IonMenuButton></IonMenuButton>
          </IonButtons>
          <IonTitle>About</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="ion-padding" style={{ textAlign: 'center' }}>
        {/* First Image */}
        <div
          style={{
            margin: '0 auto',
            width: '300px',
            height: '300px',
            overflow: 'hidden',
            borderRadius: '10px',
          }}
        >
          <IonImg
            src="https://scontent.fmnl25-1.fna.fbcdn.net/v/t39.30808-6/486468886_2425761707799795_6380238260994033547_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeGa-kE65Fo-93lgl5UdsejI9hOve_mI61z2E697-YjrXM4G2za3FhBDEGlH52FuiO8iQUrLSnFdB2bxbMLXSS2o&_nc_ohc=u7NavJtLE-gQ7kNvwEb9vqy&_nc_oc=AdmOZsLnBD9fmBCZTOyQq0rNm2HW3phPiJC6LLPn5d7f9is-xotbMOPObm5YUZFX534&_nc_zt=23&_nc_ht=scontent.fmnl25-1.fna&_nc_gid=HNXEKom66n4xzFmmpgykug&oh=00_AfEw2HLIAvq66Qh08aErwcjO-JoSAjmvGzAOTgQ3riw_BQ&oe=680CE96A"
            alt="Profile 1"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
        <p style={{ marginTop: '16px', fontSize: '18px' }}>
          CONNECT TO THE NATURE. LOVE MOTHER EARTH.
        </p>

        {/* Second Image */}
        <div
          style={{
            margin: '40px auto 0',
            width: '300px',
            height: '300px',
            overflow: 'hidden',
            borderRadius: '10px',
          }}
        >
          <IonImg
            src="https://scontent.fmnl25-1.fna.fbcdn.net/v/t39.30808-6/487733825_2428026224240010_2677444397557203613_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeFGLAWAjkExAdvyqtHfGwyIQoq8F6XXCghCirwXpdcKCPMe17v1JGqH2hoK31W-vsPUTNPEnBdDO4qNTQYd1Zpj&_nc_ohc=oIi6Knl31doQ7kNvwEZCUcv&_nc_oc=AdkDvDFgYT-OnGPmDW1lDe4R0kbS4p9T7DjF7lCr-f96n5_xk3OqRaMGuytia491BwM&_nc_zt=23&_nc_ht=scontent.fmnl25-1.fna&_nc_gid=ySCbtLneznfHEPU4WTCqQQ&oh=00_AfE0HIfXcRNj3MuZawik4Q6CBFiYDTb6TZTdUd7LBKWjtQ&oe=680CF326" // Replace with another image URL if you have one
            alt="Profile 2"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
        <p style={{ marginTop: '16px', fontSize: '18px' }}>
          SLOW LEARNER BUT WAILING TO LEARN!
        </p>
      </IonContent>
    </IonPage>
  );
};

export default About;
