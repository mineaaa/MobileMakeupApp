import { View, StyleSheet, FlatList, Image } from "react-native";
import { Card, Text } from "react-native-paper";

const category = [
    { name: "Blush", key: "blush", image: require("./assets/dior_poskipuna.jpg") },
    { name: "Bronzer", key: "bronzer", image: require("./assets/bronzer.jpg") },
    { name: "Eyebrow", key: "eyebrow", image: require("./assets/eyebrowpencil.jpg") },
    { name: "Eyeliner", key: "eyeliner", image: require("./assets/lanina_eyeliner.jpeg") },
    { name: "Eyeshadow", key: "eyeshadow", image: require("./assets/eyeshadow_palette.jpg") },
    { name: "Foundation", key: "foundation", image: require("./assets/foundation.jpg") },
    { name: "Lipliner", key: "lipliner", image: require("./assets/lipliner.jpg") },
    { name: "Lipstick", key: "lipstick", image: require("./assets/lipstick.jpg") },
    { name: "Mascara", key: "mascara", image: require("./assets/mascara.jpg") },
    { name: "Nail Polish", key: "nail_polish", image: require("./assets/nailpolish.jpg") },
];

export default function Home({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.welcomeText}>Welcome to my makeup app!</Text>
            <FlatList
                data={category}
                keyExtractor={(item) => item.key}
                renderItem={({ item }) => (
                    <Card style={styles.card} onPress={() => navigation.navigate("Search", { productType: item.key })}>
                        <Card.Content style={styles.cardContent}>
                            <Text style={styles.cardText}>{item.name}</Text>
                            <Image source={item.image} style={styles.cardImage} />
                        </Card.Content>
                    </Card>
                )}
                contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 20 }}
                numColumns={2}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ffecf2",
        paddingVertical: 40,

    },
    card: {
        flex: 1,
        marginBottom: 10,
        backgroundColor: "white",
        borderRadius: 10,
        marginHorizontal: 8,
        marginVertical: 25,
    },
    cardContent: {
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
    cardText: {
        fontSize: 18,
        fontWeight: "bold",
        textAlign: 'center',
    },
    welcomeText: {
        fontSize: 18,
        fontWeight: "bold",
        textAlign: 'center',
    },
    cardImage: {
        width: 70,
        height: 120,
    }

});
