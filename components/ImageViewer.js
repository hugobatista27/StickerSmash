import { StyleSheet, Image } from "react-native";

export default function ImageViewer({ placeHolderImageSource }) {
    return (
        <Image source={placeHolderImageSource} style={styles.img}/>
    );
}

const styles = StyleSheet.create({
    image: {
        width: 320,
        height: 440,
        borderRadius: 18,
    }
});