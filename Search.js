import { useEffect, useState } from "react";
import { View, StyleSheet, ActivityIndicator } from "react-native";
import { TextInput, Button } from "react-native-paper";
import ProductList from "./components/productList";
import { fetchProducts, fetchBrands, fetchTags } from "./productApi";
import { getDatabase, push, ref, } from "firebase/database";
import { app } from "./firebaseConfig";

const database = getDatabase(app);


export default function Search({ navigation }) {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [typingQuery, setTypingQuery] = useState('');

    //kyselyn tekemisen avulla voidaan hakea joko tuotteen tyypillä, esim. onko poskipuna tai sitten sen merkillä esim. ny
    //productApissa on otettu molempien endpointit ja alapuolella olevat productsBrand ja productsType odottavat, 
    //mitä käyttäjä kirjoittaa inputkenttään.
    //käyttäjän hakusanan perusteella lähetetään API:lle pyyntö
    //laitetaan haun jälkeen kaikki allProducts taulukkoon ilman päällekkäisyyksiä

    const handleSearch = async () => {
        setLoading(true);
        const productsBrand = await fetchBrands(typingQuery);
        const productsType = await fetchProducts(typingQuery);
        const productTags = await fetchTags(typingQuery);
        const allProducts = [...productsBrand, ...productsType, ...productTags];

        setProducts(allProducts);
        setLoading(false);

    };

    const saveToFavourites = (product) => {
        push(ref(database, "favourites/"), product);
    };

    return (
        <View style={styles.container}>
            <View style={styles.searchingStyle}>
                <TextInput
                    style={styles.textInput}
                    label="Search..."
                    mode="outlined"
                    value={typingQuery}
                    onChangeText={setTypingQuery}
                />
                <Button
                    icon="search-web"
                    onPress={handleSearch}
                    labelStyle={{ fontSize: 35, color: 'black' }}
                >
                </Button>
            </View>
            {loading ? (
                <ActivityIndicator size="large" style={{ marginTop: 20 }} />
            ) : (
                <ProductList
                    products={products}
                    saveToFavourites={saveToFavourites}
                    navigation={navigation}
                />
            )}
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
    searchingStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '90%',
        marginBottom: 10,
        marginTop: 10,
    },
    textInput: {
        flex: 1,
        marginRight: 10,
    },

});