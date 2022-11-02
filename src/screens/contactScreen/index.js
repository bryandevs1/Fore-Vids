import React, {useState, useEffect} from 'react';
import { View, FlatList, Text, StyleSheet, TextInput} from 'react-native'

import dummyContacts from '../../../assets/data/contacts.json'
const ContaactList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredContacts, setFilteredContacts] = useState(dummyContacts);

  useEffect(()=> {
    const newContacts = dummyContacts.filter(
      contact => contact.user_display_name.toLowerCase() .includes(searchTerm.toLowerCase()),
    );
    setFilteredContacts(newContacts);
  }, [searchTerm]);

    return (
        <View style={styles.page}>
        <TextInput
          value={searchTerm}
          onChangeText={setSearchTerm}
          placeholder={'UserName'}
          style={styles.input}
        />
        
      <FlatList 
        data={filteredContacts} 
        renderItem={({item}) => 
        <Text style={{color: '#000', fontSize: 16, marginVertical: 5, }}>{item.user_name}</Text>} 
        ItemSeparatorComponent= {() => <View style={styles.separator} />}
      />
      </View>
    )
};
const styles = StyleSheet.create({
    page: {
      paddingTop: 40,
      paddingLeft: 20,
      backgroundColor: '#fff',
    },
    separator: {
      width: '100%',
      height: 1,
      backgroundColor: '#f0f0f0'
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius:10,
    },
  });

export default ContaactList