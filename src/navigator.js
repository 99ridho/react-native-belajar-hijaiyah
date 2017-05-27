import { StackNavigator } from 'react-navigation';
import Home from './screens/Home';
import HurufHijaiyah from './screens/HurufHijaiyah';

export const RootNavigator = StackNavigator({
  Home: {
    screen: Home
  },
  HurufHijaiyah: {
    screen: HurufHijaiyah
  }
}, {
  headerMode: 'none'
});