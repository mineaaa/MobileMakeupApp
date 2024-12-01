import { ScrollView, Text, Image, StyleSheet } from 'react-native';

export default function ProductInformation({ route }) {
    const { makeupProduct } = route.params;

    //aluksi komponentti sisälsi perus View, mutta joidenkin tuotteiden
    //tuotetekstit oli niin pitkiä, että kyseiseen sivuun tarvittiin scrollaus mahdollisuus
    //sellaista ei automaattisesti tässä sivussa tullut, joten se tuotiin ScrollView-luokan avulla
    return (
        <ScrollView style={styles.container}>
            {makeupProduct.image_link && <Image source={{ uri: makeupProduct.image_link }} style={styles.image} />}
            <Text style={styles.name}>{makeupProduct.name}</Text>
            <Text style={styles.brand}>{makeupProduct.brand}</Text>
            <Text style={styles.brand}>{makeupProduct.tag_list}</Text>
            <Text style={styles.description}>{makeupProduct.description || " "}</Text>
            <Text style={styles.price}>Price: ${makeupProduct.price}</Text>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#ffecf2',
    },
    name: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    brand: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    description: {
        fontSize: 16,
        color: 'black',
        marginBottom: 10,
    },
    price: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black',
    },
    image: {
        width: '100%',
        height: 350,
        marginBottom: 20,
    },
});
