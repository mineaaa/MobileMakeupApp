import { View, FlatList, StyleSheet } from "react-native";
import { Text, IconButton, Card } from "react-native-paper";

export default function ProductList({ products, navigation }) {
    return (
        <FlatList
            data={products}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
                <Card style={styles.listItem}>
                    <Card.Cover
                        source={{ uri: item.image_link }}
                        style={styles.image}
                        resizeMode="cover"
                    />
                    <Card.Title
                        title={item.name}
                        titleNumberOfLines={2}
                    />
                    <Card.Actions>
                        <IconButton
                            icon="cards-heart-outline"
                            onPress={() => {/*lemppariksi lisäämisen metodi tulee tähän*/ }}
                        />
                        <IconButton
                            icon="information-outline"
                            onPress={() => navigation.navigate("ProductInformation", { makeupProduct: item })}
                        />
                    </Card.Actions>
                </Card>
            )}
            contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 20 }}
            style={{ marginTop: 20, width: '100%' }}
        />
    );
}

const styles = StyleSheet.create({
    listItem: {
        backgroundColor: 'white',
        marginBottom: 12,
        borderRadius: 10,
        overflow: 'hidden',
    },
    image: {
        height: 250,
        width: '100%',
        backgroundColor: '#f0f0f0',
    },
});
