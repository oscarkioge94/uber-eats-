import React from 'react'
import { View, Text } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import AntDesign from "react-native-vector-icons/AntDesign";
export default function SearchBar() {
    return (
        <View style={{ marginTop: 15, flexDirection: 'row', }}>
            <GooglePlacesAutocomplete
                placeholder="Search"
                styles={{
                    textInput: {
                        backgroundColor: "#eeee",
                        borderRadius: 20,
                        fontWeight: '700',
                        marginTop: 7,
                    },
                    textInputContainer: {
                        backgroundColor: '#eeee',
                        borderRadius: 50,
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginRight: 10,
                    },
                }}
                renderLeftButton={() => (
                    <View style={{
                        flexDirection: 'row',
                    }}>
                        <Ionicons name="location-sharp" size={24} />
                    </View>
                )}
                renderRightButton={() => (
                    <View style={{
                        flexDirection: 'row',
                        marginRight: 8,
                        backgroundColor: 'white',
                        padding: 9,
                        alignItems: 'center',
                    }}>
                        <AntDesign
                            name="clockcircle"
                            size={11}
                            style={{ marginRight: 6 }}
                        />
                        <Text>Search</Text>
                    </View>
                )}
            />
        </View >
    )
}
