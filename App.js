import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';

import ImagePicker from 'react-native-image-crop-picker';

export default function App() {
  const [image, setImage] = useState(
    'https://www.gettyimages.com/gi-resources/images/500px/983794168.jpg',
  );

  const takePhoto = () =>{
    ImagePicker.openCamera({
      width: 300,
      height: 300,
      cropping: true,
    }).then((image) => {
      // this.uploadImageBackground(image.path)
      setImage(image.path);
      console.log(image);
    }).catch((err)=>{
      if (err.code === 'E_PICKER_CANCELLED') {
        return false;
      }
    })
  }

  const uploadPhoto = () => {
    ImagePicker.openPicker({
      width: 500,
      height: 500,
      cropping: true,
    }).then((image) => {
      setImage(image.path);
      console.log(image);
    });
  };

  return (
    <View
      style={{
        padding: 30,
        height: '100%',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}>
      <View
        style={{
          justifyContent: 'center',
          flexDirection: 'row',
          marginTop: 150,
        }}>
        <Image source={{uri: image}} style={{width: 300, height: 300}} />
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'flex-end',
        }}>
        <TouchableOpacity onPress={takePhoto}>
          <Text
            style={{
              paddingHorizontal: 10,
              paddingVertical: 5,
              color: 'white',
              backgroundColor: 'rgba(45,45,255,0.6)',
            }}>
            Take Picture
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={uploadPhoto}>
          <Text
            style={{
              paddingHorizontal: 10,
              paddingVertical: 5,
              color: 'white',
              backgroundColor: 'rgba(45,45,255,0.6)',
            }}>
            Upload Photo
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
