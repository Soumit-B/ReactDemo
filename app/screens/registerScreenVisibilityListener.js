import { ScreenVisibilityListener } from 'react-native-navigation';

export function registerScreenVisibilityListener() {
    new ScreenVisibilityListener({
      willAppear: ({screen}) => console.log(`Displaying screen ${screen}`),
      didAppear: ({screen, startTime, endTime, commandType}) => console.log('screenVisibility', `Screen ${screen} displayed in ${endTime - startTime} millis [${commandType}]`),
      willDisappear: ({screen}) => console.log(`Screen will disappear ${screen}`),
      didDisappear: ({screen}) => console.log(`Screen disappeared ${screen}`)
    }).register();
  }
  