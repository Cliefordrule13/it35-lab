import {
  IonAlert,
  IonAvatar,
  IonButton,
  IonContent,
  IonIcon,
  IonInput,
  IonInputPasswordToggle,
  IonPage,
  IonToast,
  useIonRouter
} from '@ionic/react';
import { logoTwitter } from 'ionicons/icons'; // Not used but kept if needed
import { useState } from 'react';
import { supabase } from '../utils/supabaseClient';

// Reusable AlertBox Component
const AlertBox: React.FC<{ message: string; isOpen: boolean; onClose: () => void }> = ({ message, isOpen, onClose }) => {
  return (
    <IonAlert
      isOpen={isOpen}
      onDidDismiss={onClose}
      header="Notification"
      message={message}
      buttons={['OK']}
    />
  );
};

const Login: React.FC = () => {
  const navigation = useIonRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [alertMessage, setAlertMessage] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const doLogin = async () => {
    const { error } = await supabase.auth.signInWithPassword({ email, password });

    if (error) {
      setAlertMessage(error.message);
      setShowAlert(true);
      return;
    }

    setShowToast(true);
    setTimeout(() => {
      navigation.push('/it35-lab/app', 'forward', 'replace');
    }, 300);
  };

  return (
    <IonPage>
      <IonContent className="ion-padding instagram-background">
        <div
          style={{
            maxWidth: '400px',
            margin: 'auto',
            marginTop: '15%',
            padding: '20px',
            borderRadius: '16px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
            backgroundColor: 'linear-gradient(135deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)'
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              marginBottom: '20px'
            }}
          >
            <IonAvatar
              style={{
                width: '120px',
                height: '120px',
                marginBottom: '20px',
                overflow: 'hidden',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <img
                src="https://png.pngtree.com/png-clipart/20190613/original/pngtree-instagram-icon-logo-png-image_3560506.jpg"
                alt="Instagram logo"
                style={{
                  width: '100px',
                  height: '100px',
                  animation: 'float 1s ease-in-out infinite'
                }}
              />
            </IonAvatar>

            <div
              style={{
                background: 'linear-gradient(135deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'white orange',
                fontWeight: 'bold',
                fontSize: '28px',
                margin: 0
              }}
            >
              USER LOGIN
            </div>
          </div>

          <IonInput
            label="Email"
            labelPlacement="floating"
            fill="outline"
            type="email"
            placeholder="Enter Email"
            value={email}
            onIonChange={e => setEmail(e.detail.value!)}
          />
          <IonInput
            style={{ marginTop: '15px' }}
            fill="outline"
            type="password"
            placeholder="Password"
            value={password}
            onIonChange={e => setPassword(e.detail.value!)}
          >
            <IonInputPasswordToggle slot="end" />
          </IonInput>

          <IonButton
            onClick={doLogin}
            expand="block"
            shape="round"
            style={{ marginTop: '25px' }}
          >
            Login
          </IonButton>

          <IonButton
            routerLink="/it35-lab/register"
            expand="block"
            fill="clear"
            shape="round"
            style={{ marginTop: '10px' }}
          >
            Don't have an account? Register here
          </IonButton>
        </div>

        {/* Alert and Toast Components */}
        <AlertBox message={alertMessage} isOpen={showAlert} onClose={() => setShowAlert(false)} />
        <IonToast
          isOpen={showToast}
          onDidDismiss={() => setShowToast(false)}
          message="Login successful! Redirecting..."
          duration={1500}
          position="top"
          color="primary"
        />

        {/* Embedded Styles */}
        <style>
          {`
            @keyframes float {
              0% { transform: translateY(0px); }
              50% { transform: translateY(-5px); }
              100% { transform: translateY(0px); }
            }

            .instagram-background {
              --background: linear-gradient(135deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%);
              min-height: 100%;
            }
          `}
        </style>
      </IonContent>
    </IonPage>
  );
};

export default Login;
