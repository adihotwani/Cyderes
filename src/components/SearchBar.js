import React from "react";
import { View, TextInput, StyleSheet } from "react-native";

const SearchBar = ({value, onChangeText}) =>{
    return(
        <View style={styles.container}>
            <TextInput 
                placeholder="Search here...."
                style={styles.input}
                value={value}
                onChangeText={onChangeText}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      padding: 10,
      borderWidth: 1,
      borderRadius: 15
    },
    input: {
      backgroundColor: "#f0f0f0",
      paddingHorizontal: 10,
      height: 40,
      borderRadius: 8,
    },
});

export default SearchBar;