import { StackNavigator } from 'react-navigation';
import HomeScreen from './screens/HomeScreen';
import HurufHijaiyahViewerScreen from './screens/HurufHijaiyahViewerScreen';

export const RootNavigator = StackNavigator({
  Home: {
    screen: HomeScreen
  },
  HurufHijaiyah: {
    screen: HurufHijaiyahViewerScreen
  }
}, {
  headerMode: 'none'
});