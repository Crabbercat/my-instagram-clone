import { Link } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Instagram Clone</Text>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Welcome</Text>
        <Text style={styles.cardText} numberOfLines={3}>
          This is a small demo home screen. Use the button below to open the
          test page or the auth screens.
        </Text>

        <Link href="/test" asChild>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>Open test page</Text>
          </Pressable>
        </Link>

        <View style={{ height: 12 }} />

        <Link href="/auth" asChild>
          <Pressable style={styles.buttonAlt}>
            <Text style={styles.buttonTextAlt}>Open Auth (Register / Login)</Text>
          </Pressable>
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
    textAlign: "center",
    marginBottom: 20,
  },
  card: {
    backgroundColor: "#f6f6f8",
    padding: 16,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 8,
  },
  cardText: {
    fontSize: 14,
    color: "#444",
    marginBottom: 12,
  },
  button: {
    backgroundColor: "#007AFF",
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderRadius: 8,
    alignSelf: "flex-start",
  },
  buttonText: {
    color: "white",
    fontWeight: "600",
  },
  buttonAlt: {
    backgroundColor: "#fff",
    borderColor: "#007AFF",
    borderWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderRadius: 8,
    alignSelf: "flex-start",
  },
  buttonTextAlt: {
    color: "#007AFF",
    fontWeight: "600",
  },
});
