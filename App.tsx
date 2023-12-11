import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

interface Contact {
  id: string;
  name: string;
  phone: string;
}

const contacts: Contact[] = [
  
    { id: '1', name: 'Rahul Kumar', phone: '123-456-7890' },
    { id: '2', name: 'Priya Patel', phone: '987-654-3210' },
    { id: '3', name: 'Arjun Singh', phone: '555-123-4567' },
    { id: '4', name: 'Deepika Sharma', phone: '444-555-6666' },
    { id: '5', name: 'Ajay Gupta', phone: '222-333-4444' },
    { id: '6', name: 'Meera Verma', phone: '777-888-9999' },
    { id: '7', name: 'Ankit Tiwari', phone: '666-777-8888' },
    { id: '8', name: 'Nisha Yadav', phone: '111-222-3333' },
    { id: '9', name: 'Vivek Joshi', phone: '999-888-7777' },
    { id: '10', name: 'Pooja Malhotra', phone: '333-444-5555' },
    { id: '11', name: 'Rohit Saini', phone: '111-222-3333' },
    { id: '12', name: 'Kavita Singhania', phone: '777-888-9999' },
    { id: '13', name: 'Manoj Reddy', phone: '555-123-4567' },
    { id: '14', name: 'Shikha Kapoor', phone: '987-654-3210' },
    { id: '15', name: 'Vishal Khanna', phone: '444-555-6666' },
    { id: '16', name: 'Anjali Choudhary', phone: '222-333-4444' },
    { id: '17', name: 'Ravi Rajput', phone: '777-888-9999' },
    { id: '18', name: 'Suman Mehta', phone: '666-777-8888' },
    { id: '19', name: 'Sameer Bajaj', phone: '111-222-3333' },
    { id: '20', name: 'Aishwarya Nair', phone: '999-888-7777' }
  ];
  

const ContactList: React.FC = () => {
  const [selectedAlphabet, setSelectedAlphabet] = useState<string>(''); 
  const filteredContacts = contacts.filter(
    (contact) => contact.name.toUpperCase().startsWith(selectedAlphabet)
  );

  const alphabetArray = Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i));

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Contact List</Text>
      <FlatList
        data={alphabetArray}
        keyExtractor={(item) => item}
        horizontal
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => setSelectedAlphabet(item)}>
            <Text style={[styles.alphabet, selectedAlphabet === item ? styles.selectedAlphabet : null]}>
              {item}
            </Text>
          </TouchableOpacity>
        )}
      />
      <FlatList
        data={filteredContacts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.contactItem}>
            <Text style={styles.contactText}>Name: {item.name}</Text>
            <Text style={styles.contactText}>Phone: {item.phone}</Text>
            <View style={styles.iconContainer}>
              <TouchableOpacity>
                <Icon name="pencil" size={20} color="blue" style={styles.icon} />
              </TouchableOpacity>
              <TouchableOpacity>
                <Icon name="trash" size={20} color="red" style={styles.icon} />
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 10,
  },
  alphabet: {
    fontSize: 18,
    fontWeight: 'bold',
    padding: 10,
  },
  selectedAlphabet: {
    color: 'blue',
  },
  contactItem: {
    margin: 10,
    padding: 10,
    borderStyle: 'solid',
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  contactText: {
    flex: 1,
  },
  iconContainer: {
    flexDirection: 'row',
  },
  icon: {
    margin: 5,
  },
});

const App: React.FC = () => {
  return (
    <ContactList />
  );
};

export default App;
