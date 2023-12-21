import {View, Text, Pressable} from 'react-native';
import React from 'react';

interface BodyCardProps {
  name: string;
  diseases: string;
  color: string;
}

const BodyCard: React.FC<BodyCardProps> = ({name, diseases, color}) => {
  return (
    <Pressable style={{marginTop: 20}}>
      <View
        style={{
          borderRadius: 10,
          borderColor: 'black',
          backgroundColor: color,
          padding: 20,
        }}>
        <Text style={{fontSize: 15, fontWeight: 'bold', color: 'white'}}>
          {name}
        </Text>
        <Text style={{fontSize: 10, color: 'white'}}>{diseases} diseases</Text>
      </View>
    </Pressable>
  );
};

export default BodyCard;
