import { View, FlatList, StyleSheet } from "react-native";
import { Text, IconButton, Card } from "react-native-paper";

export default function ProductList({ products, navigation }) {
    return (
        <FlatList
            data={products}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
                <Card style={styles.listingStyle}>
                    <View style={styles.cardContainer}>
                        <Card.Cover
                            source={{ uri: item.image_link }}
                            style={styles.image}
                            resizeMode="cover"
                        />
                        <Card.Title
                            title={<Text style={{ fontSize: 18 }}>{item.name}</Text>}
                            titleNumberOfLines={2}
                        />
                        <Card.Actions>
                            <IconButton
                                icon="cards-heart-outline"
                                onPress={() => {
                                    /*lemppariksi lisäämisen metodi tulee tähän*/
                                }}
                            />
                            <IconButton
                                icon="information-outline"
                                onPress={() => navigation.navigate("ProductInformation", { makeupProduct: item })}
                            />
                        </Card.Actions>
                    </View>
                </Card>
            )}
            contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 20 }}
            style={{ marginTop: 10, width: '100%' }}
        />
    );
}

const styles = StyleSheet.create({
    listingStyle: {
        backgroundColor: 'white',
        marginBottom: 12,
        borderRadius: 10,
        overflow: 'hidden',
    },
    cardContainer: {
        overflow: 'visible',
    },
    image: {
        height: 350,
        width: '100%',
        backgroundColor: 'white',
    },
});
