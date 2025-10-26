import { Link } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function TestPage() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>JS Test Page</Text>
      <Text style={styles.text}>
        This page is written in plain JavaScript (no TypeScript). It verifies
        that JS pages work alongside TS in this Expo Router app.
      </Text>

      <Link href="/" asChild>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Back to Home</Text>
        </Pressable>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 12,
    textAlign: 'center',
  },
  text: {
    fontSize: 14,
    color: '#333',
    marginBottom: 20,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#34C759',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 8,
    alignSelf: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
  },
});
