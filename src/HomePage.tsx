import React from "react";
import Card from './components/Card';

import {
    StyleSheet,
    Text,
    View,
    Image,
    FlatList,
    SafeAreaView,
    Platform,
    StatusBar,
    TouchableOpacity
} from "react-native";

const HomePage = ({route,navigation}) => {
    const {username1} =route.params
    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                ListHeaderComponent={() =>
                    <View>
                        <View style={[styles.itemHoriz]}>
                            <View>
                                <Text style={styles.greeting}>Hello there</Text>
                                <Text style={styles.name}>{username1}</Text>
                            </View>
                            <TouchableOpacity onPress={()=>{navigation.navigate("UserProfile",
                            {
                                username1: username1
                            })}}>
                            <View style={styles.avatarContainer} >
                                <Image
                                    source={{
                                        uri:
                                            'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
                                    }}
                                    style={styles.avatarImage} 
                                />
                            </View>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.imgContainer}>
                            <Image style={styles.img} source={{ uri: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8Zm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60' }} />
                        </View>
                        <Text style={styles.subscribedServices}>Your Subscribed Services</Text>
                    </View>
                }
                data={[
                    { id: 1, name: "Tiffin Hut", image: "https://images.unsplash.com/photo-1484980972926-edee96e0960d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60", deliveryOption: "Delivery", rating: "4.4", vegOrNon: "Veg" },
                    { id: 2, name: "Food People", image: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60", deliveryOption: "Delivery", rating: "4.5", vegOrNon: "Veg" },
                    { id: 3, name: "Home Food", image: "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60", deliveryOption: "Delivery", rating: "4.3", vegOrNon: "Non-veg" },
                    { id: 4, name: "Tiffin Hut", image: "https://images.unsplash.com/photo-1484980972926-edee96e0960d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60", deliveryOption: "Delivery", rating: "4.4", vegOrNon: "Veg" },
                    { id: 5, name: "Tiffin Hut", image: "https://images.unsplash.com/photo-1484980972926-edee96e0960d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60", deliveryOption: "Delivery", rating: "4.4", vegOrNon: "Veg" },

                ]}
                renderItem={({ item }) =>
                    <Card style={styles.card}>
                        <Image style={styles.itemImg} source={{ uri: item.image }} />
                        <View style={[styles.itemHoriz, styles.top10Margin]}>
                            <Text style={styles.itemTitle}>{item.name}</Text>
                            <Text style={styles.itemRating}>{item.rating}</Text>
                        </View>
                        <View style={styles.itemHoriz}>
                            <Text style={styles.itemDelivery}>{item.deliveryOption}</Text>
                            <Text style={styles.itemVegOrNon}>{item.vegOrNon}</Text>
                        </View>

                    </Card>
                }
            />
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
    },
    imgContainer: {
        paddingLeft: 20,
        paddingRight: 20,
        width: '100%',
    },

    img: {
        width: '100%',
        height: 200,
        borderRadius: 10,
    },

    greeting: {
        textAlign: "left",
        fontSize: 18,
        color: "black",
        marginLeft: 20
    },
    name: {
        marginLeft: 20,
        textAlign: "left",
        fontSize: 38,
        fontWeight: "100",
        color: "#4CAF50",
        marginBottom: 10
    },

    avatarContainer: {
        marginTop: 15,
    },

    avatarImage: {
        borderColor: 'grey',
        borderWidth: 1,
        width: 50,
        height: 50,
        borderRadius: 50 / 2,
        marginRight: 20
    },

    subscribedServices: {
        fontSize: 15,
        fontWeight: "bold",
        color: "black",
        margin: 20
    },
    card: {
        padding: 0,
        height: 200,
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 20,
        backgroundColor: 'white',
        // justifyContent: 'center', //Centered vertically
        // alignItems: 'center', // Centered horizontally
    },

    top10Margin: {
        marginTop: 10
    },

    itemImg: {
        width: '100%',
        height: 120,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },

    itemHoriz: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
    },

    itemTitle: {
        fontSize: 16,
        marginHorizontal: 15,
        fontWeight: "bold",
    },

    itemRating: {
        marginHorizontal: 15,
        fontWeight: "bold",

    },
    itemDelivery: {
        marginHorizontal: 15,
    },

    itemVegOrNon: {
        marginHorizontal: 15,

    },

});

export default HomePage;