import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {Alert, Platform} from 'react-native';
import {Pressable, Text, View} from 'react-native';
import {NativeWindStyleSheet, styled, StyledComponent } from 'nativewind';
import {s} from "react-native-wind";

// import styles from './styles';
import {withExpoSnack} from 'nativewind';

const onPress = () => {
  console.log('NativeWind');
};
const StyledText = styled(Text);
const StyledView = styled(View);
const StyledPressable = styled(Pressable);

function App() {
  return (
    <StyledView className="flex-1 items-center justify-center bg-yellow-400">
      <StyledText className="text-red-800 mt-2 text-sm font-mono">
        Open up App.js to start working on your app!
      </StyledText>
      <StyledView className="flex flex-row flex-initial space-x-3 ">
        <StyledPressable
          className="bg-green-400 rounded-xl items-center justify-center border-4 mt-2 "
          onPress={onPress}>
          <StyledText className="text-3xl text-center text-lime-700">
            Save1
          </StyledText>
        </StyledPressable>
       
        <StyledPressable className="bg-green-400 rounded-xl items-center justify-center mt-2 border-4 ">
          <StyledText className="text-3xl text-center text-lime-700">
            Save2
          </StyledText>
        </StyledPressable>
        <StyledPressable
          className="bg-green-400 rounded-xl items-center justify-center mt-2 border-4 py-2 "
          onPress={onPress}>
          <StyledText className="text-3xl text-center text-lime-700 ">
            Save3
          </StyledText>
        </StyledPressable>
      </StyledView>
      <StyledText className='mt-2 oldstyle-nums text-3xl'>0675896</StyledText>

      <StatusBar style="auto" />
    </StyledView>
  );
}

// const demo =
// Platform.OS === 'android'? answer :
// export const demo = (Platform.OS === 'android'?  App:  withExpoSnack(App))
// export default App() {
//   if(Platform.OS === 'android') {
//          return App;
//   }
//   return withExpoSnack(App);
// }
// if(Platform.OS === 'android'){
// export default App;
// }else {
// export {withExpoSnack(App)}
// }
// export const myFunc = Platform.OS === 'android'? () => {App} : () => {withExpoSnack(App)}

let componentToExport;

if (Platform.OS === 'android') {
  componentToExport = App;
} else {
  componentToExport = withExpoSnack(App);
}

export default componentToExport;