import { StyleSheet, View } from "react-native";
import { JsonItem } from "~/utils/misc";
import Tile from "./tile";

export default function Row(props: { rowIndex: number; tileSet: JsonItem[] }) {
    const { tileSet } = props;
    return (
        <View style={styles.row}>
            {tileSet.map((tile, index) => (
                <Tile key={`tile_${index}`} slug={tile.slug} />
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    row: {
        flexDirection: "row",
        flex: 1,
        backgroundColor: "red",
    },
});
