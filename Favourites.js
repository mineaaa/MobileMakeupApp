import { useState, useEffect } from "react";
import { app } from "./firebaseConfig";
import { getDatabase, onValue, ref, remove, set } from "firebase/database";
import { View, StyleSheet } from "react-native";
import ProductList from "./components/productList";
import * as FileSystem from 'expo-file-system';
import * as Sharing from 'expo-sharing';
import { Button } from "react-native-paper";


const database = getDatabase(app);

export default function Favourites({ navigation }) {
    const [favourites, setFavourites] = useState([]);

    useEffect(() => {
        const favouritesRef = ref(database, "favourites/");
        const unsubscribe = onValue(favouritesRef, (snapshot) => {
            const data = snapshot.val();
            if (data) {
                setFavourites(Object.values(data));
            } else {
                setFavourites([]);
            }
        });
        return () => unsubscribe();
    }, []);

    const putFavouritesFile = async () => {
        if (await Sharing.isAvailableAsync()) {
            try {
                const makeUpFavourites = favourites.map(favourite =>
                    `Product Name: ${favourite.name}\n Brand: ${favourite.brand}\n\n Description: ${favourite.description}\n Price: ${favourite.price}\n\n `
                ).join('');

                const fileUri = FileSystem.documentDirectory + 'favouriteMakeup.txt';
                await FileSystem.writeAsStringAsync(fileUri, makeUpFavourites);
                await Sharing.shareAsync(fileUri);
            } catch (error) {
                console.log(error);
                Alert.alert("Error", "There was an issue generating the file.");
            }
        } else {
            Alert.alert('Sharing is not available on this device.');
        }
    };

    //favourites taulukossa on suosikkituotteita
    //javascriptin .some() metodi käy taulukon läpi ja tarkistaa täyttää jokin tuote ehdon
    //käydään taulukko läpi yksittäisellä suosikilla, jota verrataan sillä hetkellä tarkasteltavaan tuotteeseen

    const saveToFavourites = (product) => {
        const productRef = ref(database, `favourites/${product.id}`);
        const isFavourite = favourites.some((favourite) => favourite.id === product.id);

        if (isFavourite) {
            remove(productRef);
        } else {
            set(productRef, product);
        }
    };

    return (
        <View style={styles.container}>
            <Button
                labelStyle={{ fontSize: 35 }}
                icon="share-circle"
                onPress={putFavouritesFile}
                style={styles.buttonShare}
                textColor="black"

            />
            <ProductList
                products={favourites}
                favourites={favourites}
                saveToFavourites={saveToFavourites}
                navigation={navigation}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffecf2',
    },
    buttonShare: {
        marginLeft: 325,
    }


});
