import Immutable from 'seamless-immutable';
import Reactotron, { trackGlobalErrors } from 'reactotron-react-native';
import apisaucePlugin from 'reactotron-apisauce';
import { reactotronRedux } from 'reactotron-redux';

// If you want to use a physical device and connect it to reactotron, execute first `adb reverse tcp:9090 tcp:9090`
let reactotron;
if (__DEV__) {
  reactotron = Reactotron.configure({ name: 'Library App' })
    .use(trackGlobalErrors())
    .use(apisaucePlugin())
    .useReactNative()
    .use(reactotronRedux({ onRestore: state => Immutable(state) }))
    .connect();
}

export default reactotron;
