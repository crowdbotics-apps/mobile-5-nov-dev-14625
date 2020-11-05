import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import CopyOfBlankScreen414013Navigator from '../features/CopyOfBlankScreen414013/navigator';
import CopyOfBlankScreen214011Navigator from '../features/CopyOfBlankScreen214011/navigator';
import BlankScreen214008Navigator from '../features/BlankScreen214008/navigator';
import CopyOfBlankScreen013979Navigator from '../features/CopyOfBlankScreen013979/navigator';
import BlankScreen113977Navigator from '../features/BlankScreen113977/navigator';
import BlankScreen013974Navigator from '../features/BlankScreen013974/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
CopyOfBlankScreen414013: { screen: CopyOfBlankScreen414013Navigator },
CopyOfBlankScreen214011: { screen: CopyOfBlankScreen214011Navigator },
BlankScreen214008: { screen: BlankScreen214008Navigator },
CopyOfBlankScreen013979: { screen: CopyOfBlankScreen013979Navigator },
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
