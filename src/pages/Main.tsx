import { IonButton, IonCard, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonImg, IonItemSliding, IonLabel, IonPage, IonRow, IonSearchbar, IonSegment, IonText, IonTitle, IonToolbar } from '@ionic/react';
import { useState } from 'react';
import ExploreContainer from '../components/ExploreContainer';
import './Main.css';
import { arrowBack, colorFill, filter } from 'ionicons/icons';

import { Pet } from '../Classes/Pet';
import { getPetsCategory, petsDataList } from '../DataBase/PetList';

const Main: React.FC = () => {
    const [activeButton, setActiveButton] = useState("Perros");

    const filteredPets = getPetsCategory(activeButton);

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
                    {activeButton === "Perros" ? <IonButton style={{'text-transform' : 'none', '--background' : '#5C33FF', fontSize: '13px'}}>Perros</IonButton> : <IonButton onClick={() => setActiveButton("Perros")} style={{'text-transform' : 'none', '--background' : '#F2F2F2', fontSize: '13px', color: 'black'}}>Perros</IonButton>} 
                    {activeButton === "Gatos" ? <IonButton style={{'text-transform' : 'none', '--background' : '#5C33FF', fontSize: '13px'}}>Gatos</IonButton> : <IonButton onClick={() => setActiveButton("Gatos")} style={{'text-transform' : 'none', '--background' : '#F2F2F2', fontSize: '13px', color: 'black'}}>Gatos</IonButton>} 
                    {activeButton === "Hamsters" ? <IonButton style={{'text-transform' : 'none', '--background' : '#5C33FF', fontSize: '13px'}}>Hamsters</IonButton> : <IonButton onClick={() => setActiveButton("Hamsters")} style={{'text-transform' : 'none', '--background' : '#F2F2F2', fontSize: '13px', color: 'black'}}>Hamsters</IonButton>} 
                    {activeButton === "Reptiles" ? <IonButton style={{'text-transform' : 'none', '--background' : '#5C33FF', fontSize: '13px'}}>Reptiles</IonButton> : <IonButton onClick={() => setActiveButton("Reptiles")} style={{'text-transform' : 'none', '--background' : '#F2F2F2', fontSize: '13px', color: 'black'}}>Reptiles</IonButton>} 
                </div>
                <IonGrid>
                    <IonRow style={{display: 'flex', marginLeft: '25px'}}>
                        <IonCol>
                            <IonCard style={{paddingBottom: '10px'}}>
                                <IonImg src={filteredPets[0].img} style={{width: '100%', height: '88.25px', objectFit: 'cover'}}></IonImg>
                                <IonTitle style={{paddingLeft: '10px', paddingTop: '5px', paddingBottom: '5px'}}>{filteredPets[0].name}</IonTitle>
                                <div style={{display: 'flex', flexDirection: 'column', paddingLeft: '10px'}}>
                                    <IonText><strong style={{color: 'black'}}>Edad: </strong>{filteredPets[0].age} años</IonText>
                                    <IonText><strong style={{color: 'black'}}>Peso: </strong>{filteredPets[0].weight} kg</IonText>
                                    <IonText><strong style={{color: 'black'}}>Raza: </strong>{filteredPets[0].breed}</IonText>
                                </div>
                            </IonCard>
                        </IonCol>
                        <IonCol>
                            <IonCard style={{paddingBottom: '10px'}}>
                                <IonImg src={filteredPets[1].img} style={{width: '100%', height: '88.25px', objectFit: 'cover'}}></IonImg>
                                <IonTitle style={{paddingLeft: '10px', paddingTop: '5px', paddingBottom: '5px'}}>{filteredPets[1].name}</IonTitle>
                                <div style={{display: 'flex', flexDirection: 'column', paddingLeft: '10px'}}>
                                    <IonText><strong style={{color: 'black'}}>Edad: </strong>{filteredPets[1].age} años</IonText>
                                    <IonText><strong style={{color: 'black'}}>Peso: </strong>{filteredPets[1].weight} kg</IonText>
                                    <IonText><strong style={{color: 'black'}}>Raza: </strong>{filteredPets[1].breed}</IonText>
                                </div>
                            </IonCard>
                        </IonCol>
                    </IonRow>
                    <IonRow style={{display: 'flex', marginLeft: '25px'}}>
                        <IonCol>
                            <IonCard style={{paddingBottom: '10px'}}>
                                <IonImg src={filteredPets[2].img} style={{width: '100%', height: '88.25px', objectFit: 'cover'}}></IonImg>
                                <IonTitle style={{paddingLeft: '10px', paddingTop: '5px', paddingBottom: '5px'}}>{filteredPets[2].name}</IonTitle>
                                <div style={{display: 'flex', flexDirection: 'column', paddingLeft: '10px'}}>
                                    <IonText><strong style={{color: 'black'}}>Edad: </strong>{filteredPets[2].age} años</IonText>
                                    <IonText><strong style={{color: 'black'}}>Peso: </strong>{filteredPets[2].weight} kg</IonText>
                                    <IonText><strong style={{color: 'black'}}>Raza: </strong>{filteredPets[2].breed}</IonText>
                                </div>
                            </IonCard>
                        </IonCol>
                        <IonCol>
                            <IonCard style={{paddingBottom: '10px'}}>
                                <IonImg src={filteredPets[3].img} style={{width: '100%', height: '88.25px', objectFit: 'cover'}}></IonImg>
                                <IonTitle style={{paddingLeft: '10px', paddingTop: '5px', paddingBottom: '5px'}}>{filteredPets[3].name}</IonTitle>
                                <div style={{display: 'flex', flexDirection: 'column', paddingLeft: '10px'}}>
                                    <IonText><strong style={{color: 'black'}}>Edad: </strong>{filteredPets[3].age} años</IonText>
                                    <IonText><strong style={{color: 'black'}}>Peso: </strong>{filteredPets[3].weight} kg</IonText>
                                    <IonText><strong style={{color: 'black'}}>Raza: </strong>{filteredPets[3].breed}</IonText>
                                </div>
                            </IonCard>
                        </IonCol>
                    </IonRow>
                    <IonRow style={{display: 'flex', marginLeft: '25px'}}>
                        <IonCol>
                            <IonCard style={{paddingBottom: '10px'}}>
                                <IonImg src={filteredPets[4].img} style={{width: '100%', height: '88.25px', objectFit: 'cover'}}></IonImg>
                                <IonTitle style={{paddingLeft: '10px', paddingTop: '5px', paddingBottom: '5px'}}>{filteredPets[4].name}</IonTitle>
                                <div style={{display: 'flex', flexDirection: 'column', paddingLeft: '10px'}}>
                                    <IonText><strong style={{color: 'black'}}>Edad: </strong>{filteredPets[4].age} años</IonText>
                                    <IonText><strong style={{color: 'black'}}>Peso: </strong>{filteredPets[4].weight} kg</IonText>
                                    <IonText><strong style={{color: 'black'}}>Raza: </strong>{filteredPets[4].breed}</IonText>
                                </div>
                            </IonCard>
                        </IonCol>
                        <IonCol>
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonContent>
        </IonPage>
    );
}

export default Main;