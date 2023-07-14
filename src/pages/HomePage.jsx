import {
  IonContent,
  IonPage,
  IonButton,
  IonAvatar,
  IonLabel,
} from '@ionic/react';
import Avatar from '../components/Avatar';
import InfoDataList from '../components/InfoData/infoDataList';
const HomePage = () => {
  const userProfile = {
    name: 'Jamie Forsyth',
    email: 'jamief@email.com',
    profilePicture: 'src/assets/profile/Teresia.png',
  };

  const handleEditProfile = () => {
    // Handle edit profile functionality
  };

  return (
    <IonPage className="h-full p-12">
      <IonContent>
        <Avatar {...userProfile} />
        <InfoDataList />
      </IonContent>
    </IonPage>
  );
};

export default HomePage;