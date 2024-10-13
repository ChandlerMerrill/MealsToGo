import { useCameraPermissions } from "expo-camera";
import React, { useState, useRef, useContext } from "react";
import { View } from "react-native";
import { Button } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons"; // Importing the icon library
import AsyncStorage from "@react-native-async-storage/async-storage";

import {
  Container,
  MessageText,
  CameraContainer,
  FlipButtonContainer,
  FlipButton,
  CaptureButton,
  ButtonsContainer,
} from "../components/camera.styles";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";

export const CameraScreen = ({ navigation }) => {
  const [facing, setFacing] = useState("front");
  const [permission, requestPermission] = useCameraPermissions();
  const cameraRef = useRef();

  const { user } = useContext(AuthenticationContext);

  const snap = async () => {
    if (cameraRef.current) {
      const photo = await cameraRef.current.takePictureAsync();
      AsyncStorage.setItem(`${user.uid}-photo`, photo.uri);
      navigation.goBack();
    } else {
      console.log("snap function failed");
    }
  };
  const toggleCameraFacing = () => {
    setFacing((current) => (current === "back" ? "front" : "back"));
  };

  if (!permission) {
    // Camera permissions are still loading.
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet.
    return (
      <Container>
        <MessageText>We need your permission to show the camera</MessageText>
        <Button onPress={requestPermission} title="Grant Permission" />
      </Container>
    );
  }

  return (
    <Container>
      <CameraContainer ref={cameraRef} facing={facing}>
        <ButtonsContainer>
          <CaptureButton onPress={snap}>
            <Icon name="camera" size={80} color="white" />
          </CaptureButton>
          <FlipButtonContainer>
            <FlipButton onPress={toggleCameraFacing}>
              <Icon name="camera-flip" size={30} color="white" />
            </FlipButton>
          </FlipButtonContainer>
        </ButtonsContainer>
      </CameraContainer>
    </Container>
  );
};
