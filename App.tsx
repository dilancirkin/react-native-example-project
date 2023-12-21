import React from 'react';
import {FlatList, Text, View} from 'react-native';
import BodyCard from './src/components/BodyCard';

interface IData {
  id: string;
  name: string;
  diseases: string;
  color: string;
}

var data: IData[] = [
  {id: '1', name: 'Head & Face', diseases: 11, color: '#eb7662'},
  {id: '2', name: 'Back & Neck', diseases: 9, color: '#8dc4bb'},
  {id: '3', name: 'Elbow & Shoulders', diseases: 12, color: '#f2982f'},
  {id: '4', name: 'Hand & Arm', diseases: 2, color: '#327389'},
];

function App(): React.JSX.Element {
  const renderItem: React.FC<{item: DataItem}> = ({item}) => (
    <BodyCard name={item.name} diseases={item.diseases} color={item.color} />
  );

  return (
    <>
      <View style={{padding: 20}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text style={{color: 'gray'}}>Friday, 15 Dec</Text>
          <Text style={{color: 'gray'}}>Search</Text>
        </View>
        <View>
          <Text style={{fontSize: 30, fontWeight: 'bold'}}>Learn</Text>
          <Text>Choose part of the body</Text>
        </View>
        <FlatList
          data={data}
          keyExtractor={item => item.id}
          renderItem={renderItem}
        />
      </View>
    </>
  );
}

export default App;
