import React, { useEffect, useState } from "react";
import {View, Text, FlatList, TouchableOpacity, ActivityIndicator, Image} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { selectUserName } from "../../redux/userSlice";
import { getProducts, setFilteredProducts } from "../../redux/productsSlice";
import styles from "./styles";
import { formatPrice } from "../../utils/formatPrice";
import SearchBar from "../../components/SearchBar";

const Home = ({navigation}) => {
    const dispatch = useDispatch();
    const {items , loading, error } = useSelector((state) => state.products);
    const [search, setsearch] = useState("");

    useEffect(()=>{
        dispatch(getProducts());
    },[dispatch]);

    useEffect(()=>{
        if (search === "") {
            dispatch(getProducts());
        }
        else{
            const filtered = items.filter((p) =>
             p.title.toLowerCase().includes(search.toLowerCase())
            );
            dispatch(setFilteredProducts(filtered));
        }
    },[search]);
    

    const username = useSelector(selectUserName);

    const renderItem = ({ item }) => (
        <View style={styles.productCard}>
            <TouchableOpacity style={styles.card} onPress={()=>{
                navigation.navigate("ProductDetails", {productId: item.id })
            }} >
            <Image
                source={item.image}
                style={styles.image}
                accessibilityLabel={item.title}
            />
            <View style={styles.info}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.price}>{formatPrice(item.price)}</Text>
                <Text style={styles.category}>{item.category.name}</Text>
            </View>
            </TouchableOpacity>
        </View>
    )

    if (loading) return <ActivityIndicator style={{ flex: 1 }} />;
    if (error) return <View><Text>{error}</Text></View>;
    return(
        <View style={styles.headContainer}>
            <Text>Welcome {username.name}</Text>

            <SearchBar value={search} onChangeText={setsearch} />

            <FlatList
                data = {items}
                keyExtractor={(item) => item.id.toString()}
                renderItem={ renderItem }
            />
        </View>
    )
}

export default Home;