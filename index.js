/**
 * @format
 */

import {AppRegistry} from 'react-native'
import App from './App'
import {name as appName} from './app.json'
import ScreenWidthHeight from './screens/ScreenWidthHeight'
import ScreenOrientation from './screens/ScreenOrientation'
import InternetConnnectionStatus from './screens/InternetConnnectionStatus';
import LinkPhoneSMSEmailURL from './screens/LinkPhoneSMSEmailURL';

AppRegistry.registerComponent(appName, () => ScreenWidthHeight)
