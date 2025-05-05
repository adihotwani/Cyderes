import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    productCard: {
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc'
    },
    title: { fontWeight: 'bold' },
    price: { color: 'green' },
    card: { flexDirection: "row", padding: 10, borderBottomWidth: 1, borderColor: "#ccc" },
    image: { width: 80, height: 80, borderRadius: 8 },
    info: { marginLeft: 10, justifyContent: "center" },
    title: { fontSize: 16, fontWeight: "bold" },
    price: { color: "#888" },
    category: { fontStyle: "italic", color: "#555" },
    container: { marginTop: 20},
    headContainer: {padding: 5}
})

export default styles;