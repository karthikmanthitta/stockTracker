import { Pressable, StyleSheet, Text, View } from "react-native";
import { GlobalColors } from "../global/colors";
import Chip from "./chip";

export const TransactionCard = ({ name, date, type, onPress }) => {
  return (
    <Pressable
      style={({ pressed }) => [styles.container, pressed && styles.pressed]}
      onPress={onPress}
    >
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text style={styles.text}>{name}</Text>
        <View style={styles.chip}>
          <Chip color={GlobalColors.purple} content={type.toUpperCase()} />
        </View>
      </View>
      <Text style={styles.text}>{date}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: GlobalColors.secondary,
    justifyContent: "center",
    height: 120,
    width: "100%",
    borderRadius: 20,
  },
  text: {
    color: "white",
    padding: 10,
    fontSize: 18,
  },
  pressed: { backgroundColor: "#12448a" },
  chip: { marginRight: 10 },
});
