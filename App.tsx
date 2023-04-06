import {styled, withExpoSnack} from 'nativewind';
import React, {useEffect, useState} from 'react';
import {Platform, TextInput} from 'react-native';
import {Pressable, Text, View, Image} from 'react-native';
import Logo from './assests/images/orderloop-logo.svg';
import LogoMobile from './assests/images/orderloop-logo-mobile.svg';
import {DefaultInputField} from './InputField';
import EmailIcon from './assests/images/email-icon.svg';
import Password from './assests/images/password.svg';
// import { nw } from 'react-native-native-wind';
// import {tw} from 'nativewind'

const StyledText = styled(Text);
const StyledView = styled(View);
const StyledPressable = styled(Pressable);
const StyledImage = styled(Image);
const StyledTextInput = styled(TextInput);
function Login() {
  return (
    <StyledView className="max-w-[1440] w-full mx-auto bg-black min-h-[1024px] md:min-h-0 flex flex-row justify-between h-screen">
      <StyledView className="h-full max-w-[825px] w-full bg-[#695AD3] lg:hidden"></StyledView>
      <StyledView className="max-w-[615px] w-full lg:bg-[#695AD3] lg:px-[76px] relative lg:max-w-full md:px-0 md:h-full">
        <StyledView className="h-full bg-white px-4">
          <StyledView className="mb-[184px] pt-10 md:pt-4 md:mb-[50px]">
            <StyledView>
              <LogoMobile />
            </StyledView>
            <StyledView className="mt-5 h-20 w-20">
              {/* <LogoMobile/> */}
            </StyledView>
            {/* <img src={LogoMobile} alt="Logo" className="hidden md:block" /> */}
          </StyledView>
          <StyledView className="max-w-[375px] w-full mx-auto md:max-w-full">
            <StyledView className="mb-10 md:mb-[25px]">
              <StyledText className="text-primary-400 headingH1BoldDesktop mb-2">
                Hello there!
              </StyledText>
              <StyledText className="paragraphSmallRegular">
                Sign in and start your wonderful day with the Orderloop.
              </StyledText>
            </StyledView>
            {/* <StyledView className="mb-6">
                    <DefaultInputField
                      Label="Email"
                      PlaceHolder="Enter email address"
                      PlaceHolderIcon={EmailIcon}
                    />
                  </StyledView> */}
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
              {/* <span className="paragraphSmallMedium">New to OrderLoop?</span>
                    <a href="/">
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
  );
}

let componentToExport;

if (Platform.OS === 'android') {
  componentToExport = Login;
} else {
  componentToExport = withExpoSnack(Login);
}

export default componentToExport;
