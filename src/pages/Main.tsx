import { IonButton, IonCard, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonImg, IonItemSliding, IonLabel, IonPage, IonRow, IonSearchbar, IonSegment, IonText, IonTitle, IonToolbar } from '@ionic/react';
import { useState } from 'react';
import ExploreContainer from '../components/ExploreContainer';
import './Main.css';
import { arrowBack, colorFill } from 'ionicons/icons';
import dog1 from '../Recursos/perro1.avif';

const Main: React.FC = () => {
    const [activeButton, setActiveButton] = useState('1');

    return(
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButton color='light' slot='start' routerLink='/home' style={{border: 'none', '--box-shadow' : 'none'}}>
                        <IonIcon icon={arrowBack}></IonIcon>
                    </IonButton>
                    <IonTitle>Mascotas</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent fullscreen>
                <IonTitle color='primary' style={{marginTop: '20px', fontWeight: 'bold', fontSize: '25px'}}>Hola, Johan</IonTitle>
                <IonText color='medium' style={{display: 'flex', fontWeight: 'bold', color: '#C0C0C0', paddingLeft: '20px', paddingTop: '15px', fontSize: '16px'}}>Categorías</IonText>
                <div style={{display: 'flex', flexDirection: 'row', overflowX: 'auto', gap: '10px', marginLeft: '40px', paddingTop: '20px'}}>
                    {activeButton === '1' ? <IonButton id='1' style={{'text-transform' : 'none', '--background' : '#5C33FF', fontSize: '13px'}}>Perros</IonButton> : <IonButton id='1' onClick={() => setActiveButton('1')} style={{'text-transform' : 'none', '--background' : '#F2F2F2', fontSize: '13px', color: 'black'}}>Perros</IonButton>} 
                    {activeButton === '2' ? <IonButton id='2' style={{'text-transform' : 'none', '--background' : '#5C33FF', fontSize: '13px'}}>Gatos</IonButton> : <IonButton id='2' onClick={() => setActiveButton('2')} style={{'text-transform' : 'none', '--background' : '#F2F2F2', fontSize: '13px', color: 'black'}}>Gatos</IonButton>} 
                    {activeButton === '3' ? <IonButton id='3' style={{'text-transform' : 'none', '--background' : '#5C33FF', fontSize: '13px'}}>Hamsters</IonButton> : <IonButton id='3' onClick={() => setActiveButton('3')} style={{'text-transform' : 'none', '--background' : '#F2F2F2', fontSize: '13px', color: 'black'}}>Hamsters</IonButton>} 
                    {activeButton === '4' ? <IonButton id='4' style={{'text-transform' : 'none', '--background' : '#5C33FF', fontSize: '13px'}}>Reptiles</IonButton> : <IonButton id='4' onClick={() => setActiveButton('4')} style={{'text-transform' : 'none', '--background' : '#F2F2F2', fontSize: '13px', color: 'black'}}>Reptiles</IonButton>} 
                </div>
                <IonGrid>
                    <IonRow style={{display: 'flex', marginLeft: '25px'}}>
                        <IonCol>
                            <IonCard style={{paddingBottom: '10px'}}>
                                <IonImg src={dog1}></IonImg>
                                <IonTitle style={{paddingLeft: '10px', paddingTop: '5px', paddingBottom: '5px'}}>max</IonTitle>
                                <div style={{display: 'flex', flexDirection: 'column', paddingLeft: '10px'}}>
                                    <IonText><strong style={{color: 'black'}}>Edad: </strong>5 años</IonText>
                                    <IonText><strong style={{color: 'black'}}>Peso: </strong>20 kg</IonText>
                                    <IonText><strong style={{color: 'black'}}>Raza: </strong>Pit Bull</IonText>
                                </div>
                            </IonCard>
                        </IonCol>
                        <IonCol>
                            <IonCard style={{paddingBottom: '10px'}}>
                                <IonImg src={dog1}></IonImg>
                                <IonTitle style={{paddingLeft: '10px', paddingTop: '5px', paddingBottom: '5px'}}>max</IonTitle>
                                <div style={{display: 'flex', flexDirection: 'column', paddingLeft: '10px'}}>
                                    <IonText><strong style={{color: 'black'}}>Edad: </strong>5 años</IonText>
                                    <IonText><strong style={{color: 'black'}}>Peso: </strong>20 kg</IonText>
                                    <IonText><strong style={{color: 'black'}}>Raza: </strong>Pit Bull</IonText>
                                </div>
                            </IonCard>
                        </IonCol>
                    </IonRow>
                    <IonRow style={{display: 'flex', marginLeft: '25px'}}>
                        <IonCol>
                            <IonCard style={{paddingBottom: '10px'}}>
                                <IonImg src={dog1}></IonImg>
                                <IonTitle style={{paddingLeft: '10px', paddingTop: '5px', paddingBottom: '5px'}}>max</IonTitle>
                                <div style={{display: 'flex', flexDirection: 'column', paddingLeft: '10px'}}>
                                    <IonText><strong style={{color: 'black'}}>Edad: </strong>5 años</IonText>
                                    <IonText><strong style={{color: 'black'}}>Peso: </strong>20 kg</IonText>
                                    <IonText><strong style={{color: 'black'}}>Raza: </strong>Pit Bull</IonText>
                                </div>
                            </IonCard>
                        </IonCol>
                        <IonCol>
                            <IonCard style={{paddingBottom: '10px'}}>
                                <IonImg src={dog1}></IonImg>
                                <IonTitle style={{paddingLeft: '10px', paddingTop: '5px', paddingBottom: '5px'}}>max</IonTitle>
                                <div style={{display: 'flex', flexDirection: 'column', paddingLeft: '10px'}}>
                                    <IonText><strong style={{color: 'black'}}>Edad: </strong>5 años</IonText>
                                    <IonText><strong style={{color: 'black'}}>Peso: </strong>20 kg</IonText>
                                    <IonText><strong style={{color: 'black'}}>Raza: </strong>Pit Bull</IonText>
                                </div>
                            </IonCard>
                        </IonCol>
                    </IonRow>
                    <IonRow style={{display: 'flex', marginLeft: '25px'}}>
                        <IonCol>
                            <IonCard style={{paddingBottom: '10px'}}>
                                <IonImg src={dog1}></IonImg>
                                <IonTitle style={{paddingLeft: '10px', paddingTop: '5px', paddingBottom: '5px'}}>max</IonTitle>
                                <div style={{display: 'flex', flexDirection: 'column', paddingLeft: '10px'}}>
                                    <IonText><strong style={{color: 'black'}}>Edad: </strong>5 años</IonText>
                                    <IonText><strong style={{color: 'black'}}>Peso: </strong>20 kg</IonText>
                                    <IonText><strong style={{color: 'black'}}>Raza: </strong>Pit Bull</IonText>
                                </div>
                            </IonCard>
                        </IonCol>
                        <IonCol>
                            <IonCard style={{paddingBottom: '10px'}}>
                                <IonImg src={dog1}></IonImg>
                                <IonTitle style={{paddingLeft: '10px', paddingTop: '5px', paddingBottom: '5px'}}>max</IonTitle>
                                <div style={{display: 'flex', flexDirection: 'column', paddingLeft: '10px'}}>
                                    <IonText><strong style={{color: 'black'}}>Edad: </strong>5 años</IonText>
                                    <IonText><strong style={{color: 'black'}}>Peso: </strong>20 kg</IonText>
                                    <IonText><strong style={{color: 'black'}}>Raza: </strong>Pit Bull</IonText>
                                </div>
                            </IonCard>
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonContent>
        </IonPage>
    );
}

export default Main;