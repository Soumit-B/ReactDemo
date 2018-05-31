import { Navigation } from 'react-native-navigation';

import OnBoard from './OnBoard/OnBoard';
import Login from './Login/Login';
import HomeTab from './Home/tabs/Home.tab';
import OffersTab from './Home/tabs/Offers.tab';
import SearchTab from './Home/tabs/Search.tab';
import VacationsTab from './Home/tabs/Vacations.tab';
import ProfileTab from './Home/tabs/Profile.tab';
import CloseButton from '../components/layout/Button/Close.Button';

export function registerScreens(store, Provider) {

    Navigation.registerComponent('rci.OnBoard', () => OnBoard, store, Provider);
    Navigation.registerComponent('rci.Login', () => Login, store, Provider);
    Navigation.registerComponent('rci.Home.HomeTab', () => HomeTab, store, Provider);
    Navigation.registerComponent('rci.Home.OffersTab', () => OffersTab, store, Provider);
    Navigation.registerComponent('rci.Home.SearchTab', () => SearchTab, store, Provider);
    Navigation.registerComponent('rci.Home.VacationsTab', () => VacationsTab, store, Provider);
    Navigation.registerComponent('rci.Home.ProfileTab', () => ProfileTab, store, Provider);

    Navigation.registerComponent('rci.CloseButton', () => CloseButton, store, Provider);

}