import {styled, withExpoSnack} from 'nativewind';
// import React, {useEffect, useState} from 'react';
import {
  Image,
  Platform,
  Pressable,
  ScrollView,
  TextInput,
  Text,
  View,
  ImageSourcePropType,
  TouchableOpacity,
} from 'react-native';
// import {Pressable, Text, View, Image} from 'react-native';
import Logo from './assests/images/orderloop-logo.svg';
import LogoMobile from './assests/images/orderloop-logo-mobile.svg';
import {DefaultInputField} from './InputField';
import EmailIcon from './assests/images/email-icon.svg';
import Password from './assests/images/password.svg';
// import { nw } from 'react-native-native-wind';
// import {tw} from 'nativewind'
// import ReactDOM from 'react-dom';
// import { tw } from 'nativewind';
import {apply} from 'twind';
import tw from 'twrnc';
// import { NativeWind, Text, View } from 'nativewind';
// import {style} from 'nativewind';

import React from 'react';

const StyledText = styled(Text);
const StyledView = styled(View);
const StyledPressable = styled(Pressable);
const StyledImage = styled(Image);
const StyledTextInput = styled(TextInput);
const StyledTouch = styled(TouchableOpacity);

const onPress = () => console.log("Pressed");

function Login() {
  return (

    
    // <NativeWind style="bg-blue-500 p-4">
    //   <View className="bg-white rounded-lg">
    //     <NativeWind style="text-center text-red-500 font-bold">
    //       <Text>Hello, World!</Text>
    //     </NativeWind>
    //   </View>
    // </NativeWind>
    

    // below code to provide styling to code using nativewind
    // <View style={tw`bg-red-500 p-4`}>
    //   <View style={tw`bg-[#695AD3] rounded-lg h-30 items-center justify-center`}>
    //     <Text style={tw`font-extrabold text-5xl text-yellow-400 leading-[44px] -tracking-[0.02em]`}>Hello, World!</Text>
    //   </View>
    // </View>

    // below code works in web but not in android native:
    // <ScrollView horizontal={true}>
    // <StyledView
    //   tw="max-w-[1440px] w-full mx-auto bg-white min-h-[1024px] md:min-h-0 flex flex-row justify-between">
    //   {/* {Platform.OS === 'web' ? ( */}
    //     <StyledView
    //       tw='h-full max-w-[825px] w-full bg-[#695AD3] lg:hidden1'></StyledView>
    //    {/* ) : null} */}
    //   <StyledView
    //     tw="max-w-[615px] w-full lg:bg-[#695AD3] lg:px-[76px] relative lg:max-w-full md:px-0 md:h-full">
    //     <StyledView tw="h-full bg-white px-4">
    //       <StyledView tw="mb-[184px] pt-10 md:pt-4 md:mb-[50px]">
    //         {/* <img
    //           src={Logo}
    //           alt="Logo"
    //           className="w-[200px] mx-auto md:hidden"
    //         /> */}
    //         {/* <img src={LogoMobile} alt="Logo" className="hidden md:block" /> */}
    //         {Platform.OS === 'android' ? (
    //           <LogoMobile />
    //         ) : null}
    //         {Platform.OS === 'web' ? (
    //           <Logo tw="w-[200px] mx-auto md:hidden" />
    //         ) : null}
    //       </StyledView>
    //       <StyledView tw="max-w-[375px] w-full mx-auto md:max-w-full">
    //         <StyledView tw="mb-10 md:mb-[25px]">
    //           <StyledText
    //             tw="font-bold text-[40px] text-4xl text-[#6C5DD3] leading-[48px] -tracking-[0.02em]">
    //             Hello there!
    //           </StyledText>
    //           <StyledText
    //             tw="font-normal text-sm text-neutral-900 leading-5">
    //             Sign in and start your wonderful day with the Orderloop.
    //           </StyledText>
    //         </StyledView>
    //         {/* <div className="mb-6">
    //           <DefaultInputField
    //             Label="Email"
    //             PlaceHolder="Enter email address"
    //             PlaceHolderIcon={EmailIcon}
    //           />
    //         </div> */}
    //         {/* <div className="mb-10 md:mb-6">
    //           <DefaultInputField
    //             Label="Password"
    //             PlaceHolder="Enter password"
    //             PlaceHolderIcon={Password}
    //             AddonIcon={VisibleIcon}
    //           />
    //         </div> */}
    //         <StyledView tw="flex flex-row justify-between mb-[26px]">
    //           <StyledText>Remember Me</StyledText>
    //           {/* <a href="/">
    //             <span className="paragraphSmallMedium text-primary-500">
    //               Forgot password?
    //             </span>
    //           </a> */}
    //         </StyledView>
    //         {/* <View className="mb-6 h-12">
    //           <LargePrimayButton Name="Sign In" />
    //         </View> */}

    //         <StyledView
    //           tw="text-center md:fixed md:bottom-0 md:pb-2 md:pt-2.5 md:left-0 md:right-0 md:bg-white">
    //           <StyledText
    //             tw="font-medium text-sm text-neutral-900 leading-5">
    //             New to OrderLoop?
    //           </StyledText>
    //           {/* <a href="/">
    //             <span className="text-primary-500 paragraphSmallMedium ml-0.5">
    //               Contact us
    //             </span>
    //           </a> */}
    //         </StyledView>
    //       </StyledView>
    //       <StyledText
    //         tw="text-center absolute bottom-10 left-0 right-0 text-neutral-500 font-normal text-xs text-neutral-900 leading-5 md:hidden">
    //         &copy; 2022 Orderloop. All rights reserved.
    //       </StyledText>
    //     </StyledView>
    //   </StyledView>
    // </StyledView>
    //  </ScrollView>

    <>
    <StyledView className='flex-1 justify-center items-center'>
    </StyledView>
      <StyledView className="max-w-[1440px] w-full mx-auto bg-white min-h-[1024px] md:min-h-0 flex flex-row justify-between h-screen">
        <StyledView className="h-full max-w-[825px] w-full bg-[#695AD3] lg:hidden"></StyledView>
        <StyledView className="max-w-[615px] w-full lg:bg-[#695AD3] lg:px-[76px] relative lg:max-w-full md:px-0 md:h-full">
          <StyledView className="h-full bg-white px-4">
            <StyledView className="mb-[184px] pt-10 md:pt-4 md:mb-[50px]">
            {/* <img
                src={Logo}
                alt="Logo"
                className="w-[200px] mx-auto md:hidden"
              /> */}
              {/* <img src={LogoMobile} alt="Logo" className="hidden md:block" /> */}
              <Logo/>
            </StyledView>
            <StyledView className="max-w-[375px] w-full mx-auto md:max-w-full">
              <StyledView className="mb-10 md:mb-[25px]">
                <StyledText className="text-primary-500 headingH1BoldDesktop mb-2">
                  Hello there!
                </StyledText>
                <StyledText className="paragraphSmallRegular">
                  Sign in and start your wonderful day with the Orderloop.
                </StyledText>
              </StyledView>
              {/* <div className="mb-6">
                <DefaultInputField
                  Label="Email"
                  PlaceHolder="Enter email address"
                  PlaceHolderIcon={EmailIcon}
                />
              </div> */}
              {/* <div className="mb-10 md:mb-6">
                <DefaultInputField
                  Label="Password"
                  PlaceHolder="Enter password"
                  PlaceHolderIcon={Password}
                  AddonIcon={VisibleIcon}
                />
              </div> */}
              <StyledView className="flex flex-row justify-between mb-[26px]">
                <StyledText>Remember Me</StyledText>
                {/* <a href="/">
                  <span className="paragraphSmallMedium text-primary-500">
                    Forgot password?
                  </span>
                </a> */}
              </StyledView>
              {/* <div className="mb-6 h-12">
                <LargePrimayButton Name="Sign In" />
              </div> */}

              <StyledView className="text-center md:fixed md:bottom-0 md:pb-2 md:pt-2.5 md:left-0 md:right-0 md:bg-white">
                <StyledText className="paragraphSmallMedium">New to OrderLoop?</StyledText>
                {/* <a href="/">
                  <span className="text-primary-500 paragraphSmallMedium ml-0.5">
                    Contact us
                  </span>
                </a> */}
              </StyledView>
            </StyledView>
            <StyledText className="text-center absolute bottom-10 left-0 right-0 text-neutral-500 paragraphXSmallRegular md:hidden">
              &copy; 2022 Orderloop. All rights reserved.
            </StyledText>
          </StyledView>
        </StyledView>
      </StyledView>
    </>



    
  );
}

let componentToExport;

if (Platform.OS === 'android') {
  componentToExport = Login;
} else {
  componentToExport = withExpoSnack(Login);
}

export default componentToExport;
