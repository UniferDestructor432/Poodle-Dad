import { IonButton, IonContent, IonHeader, IonImg, IonPage, IonText, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <IonImg src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTI_2EDD_Caq9eueFaNi7WrB0qErupkm6M6EA&s' style={{height : '20%', justifyContent: 'center', alignContent: 'center', marginTop: '55%'}}></IonImg>
        <IonTitle style={{textAlign: 'center', fontFamily: "Pacifico", fontWeight: 400, }}>Poodle-Master</IonTitle>
        <IonText color='medium' style={{display: 'flex', justifyContent: 'center', marginTop: '20px'}}>¿Están listos para ser mi nueva familia?</IonText>
        <IonButton routerLink='/main' style={{display: 'flex', justifyContent: 'center', marginRight: '30%', marginLeft: '30%', '--border-radius' : '15px', marginTop: '20%', '--background': 'salmon'}}>WOOF!</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Home;
