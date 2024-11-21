import { View, StyleSheet, FlatList } from "react-native";
import { Card, Text } from "react-native-paper";

const category = [
    { name: "Blush", key: "blush" },
    { name: "Bronzer", key: "bronzer" },
    { name: "Eyebrow", key: "eyebrow" },
    { name: "Eyeliner", key: "eyeliner" },
    { name: "Eyeshadow", key: "eyeshadow" },
    { name: "Foundation", key: "foundation" },
    { name: "Lipliner", key: "lipliner" },
    { name: "Lipstick", key: "lipstick" },
    { name: "Mascara", key: "mascara" },
    { name: "Nail Polish", key: "nail_polish" }
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
        flexDirection: "row",
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
    }
});
