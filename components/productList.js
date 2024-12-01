import { View, FlatList, StyleSheet } from "react-native";
import { Text, IconButton, Card } from "react-native-paper";

export default function ProductList({ products = [], favourites = [], navigation, saveToFavourites }) {

    const favouriteStatus = (item) => {
        return favourites.some((favourite) => favourite.id === item.id)
            ? "cards-heart" : "cards-heart-outline";
    };

    return (
        <FlatList
            data={products}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
                <Card style={styles.listingStyle}>
                    <View style={styles.cardContainer}>
                        {item.image_link ? (
                            <Card.Cover
                                source={{ uri: item.image_link }}
                                style={styles.image}
                                resizeMode="cover"
                            />
                        ) : (
                            <Text style={styles.noImageText}>No Image Available</Text>
                        )}
                        <Card.Title
                            title={<Text style={{ fontSize: 18 }}>{item.name}</Text>}
                            titleNumberOfLines={2}
                        />
                        <Card.Actions>
                            {saveToFavourites && (
                                <IconButton
                                    icon={favouriteStatus(item)}
                                    onPress={() => saveToFavourites(item)}
                                />
                            )}
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
    noImageText: {
        height: 350,
        width: '100%',
        textAlign: 'center',
        textAlignVertical: 'center',
        fontSize: 16,
        color: 'gray',
        backgroundColor: '#f0f0f0',
    },
});
