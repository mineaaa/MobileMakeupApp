import { useState } from "react";
import { View, StyleSheet, ActivityIndicator } from "react-native";
import { TextInput, Button, Text } from "react-native-paper";
import ProductList from "./components/productList";
import FetchProducts from "./productApi";

export default function Search({ navigation }) {

    const [productType, setProductType] = useState('');
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);

    const handleSearch = () => {
        setLoading(true);
        FetchProducts(productType)
            .then(data => {
                setProducts(data);
                setLoading(false);
            })
            .catch(error => {
                console.error("Error fetching products:", error);
                setLoading(false);
            });
    }

    return (
        <View style={styles.container}>
            <TextInput
                style={{ width: '80%', marginBottom: 10 }}
                label="Type in a product"
                mode="outlined"
                value={productType}
                onChangeText={text => setProductType(text)}
            />
            <Button
                loading={loading}
                mode="outlined"
                icon="search-web"
                onPress={handleSearch}>
                Search
            </Button>
            {loading ? (
                <ActivityIndicator size="large" style={{ marginTop: 20 }} />
            ) : (
                <ProductList products={products} navigation={navigation} />)}


        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 40,
        backgroundColor: '#ffecf2',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
