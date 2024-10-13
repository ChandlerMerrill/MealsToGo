import { CameraView } from "expo-camera";
import { View, TouchableOpacity, Text } from "react-native";
import styled from "styled-components/native";

export const Container = styled(View)`
  flex: 1;
  justify-content: center;
`;

export const MessageText = styled(Text)`
  text-align: center;
  padding-bottom: 10px;
`;

export const CameraContainer = styled(CameraView)`
  flex: 1;
  justify-content: flex-end;
`;

export const ButtonsContainer = styled(View)`
  flex-direction: row;
  background-color: transparent;
  margin: 25px;
  padding-right: 45px;
  justify-content: flex-end; /* Aligns items to the end (right) */
`;

export const CaptureButton = styled(TouchableOpacity)`
  background-color: ${(props) =>
    props.theme.colors.brand.primary}; /* Main color */
  padding: ${(props) => props.theme.space[2]}; /* Padding for the button */
  border-radius: 30px; /* Rounded corners */
  elevation: 5; /* Shadow effect */
`;

export const FlipButtonContainer = styled(View)`
  flex-direction: row;
  background-color: transparent;
  margin: 25px;
  justify-content: flex-end; /* Aligns items to the end (right) */
`;

export const FlipButton = styled(TouchableOpacity)`
  background-color: ${(props) =>
    props.theme.colors.brand.primary}; /* Main color */
  padding: ${(props) => props.theme.space[2]}; /* Padding for the button */
  border-radius: 30px; /* Rounded corners */
  elevation: 5; /* Shadow effect */
`;
