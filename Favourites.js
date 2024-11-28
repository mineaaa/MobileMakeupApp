import { useState, useEffect } from "react";
import { app } from "./firebaseConfig";
import { getDatabase, onValue, ref, push } from "firebase/database";
import { View, StyleSheet } from "react-native";
import ProductList from "./components/productList";

const database = getDatabase(app);

export default function Favourites({ navigation }) {
    const [favourites, setFavourites] = useState([]);

    useEffect(() => {
        const favouritesRef = ref(database, "favourites/");
        onValue(favouritesRef, (snapshot) => {
            const data = snapshot.val();
            if (data) {
                setFavourites(Object.values(data));
            }
        });
    }, []);

    const saveToFavourites = (product) => {
        push(ref(database, 'favourites/'), product);
    };

    return (
        <View style={styles.container}>
            <ProductList
                products={favourites}
                saveToFavourites={saveToFavourites}
                navigation={navigation}
                showFavouriteButton={false}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 0,
        backgroundColor: '#ffecf2',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
