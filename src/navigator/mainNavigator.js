import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import CopyOfBlankScreen013978Navigator from '../features/CopyOfBlankScreen013978/navigator';
import BlankScreen113977Navigator from '../features/BlankScreen113977/navigator';
import BlankScreen013974Navigator from '../features/BlankScreen013974/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
CopyOfBlankScreen013978: { screen: CopyOfBlankScreen013978Navigator },
BlankScreen113977: { screen: BlankScreen113977Navigator },
BlankScreen013974: { screen: BlankScreen013974Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
