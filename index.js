/**
 * @format
 */

import {AppRegistry} from 'react-native';
import mainNavigator from './app/navigators/navigator';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => mainNavigator);
