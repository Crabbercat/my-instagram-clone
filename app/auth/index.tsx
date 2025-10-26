import { Link } from 'expo-router';
import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function AuthLanding(): React.ReactElement {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome — Auth</Text>

      <View style={styles.buttons}>
        <Link href="/auth/register" asChild>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>Register</Text>
          </Pressable>
        </Link>
      </View>

      <View style={styles.buttons}>
        <Link href="/auth/login" asChild>
          <Pressable style={styles.buttonAlt}>
            <Text style={styles.buttonTextAlt}>Login</Text>
          </Pressable>
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20, backgroundColor: '#fff' },
  title: { fontSize: 26, fontWeight: '700', textAlign: 'center', marginBottom: 24 },
  buttons: { marginVertical: 8 },
  button: { backgroundColor: '#007AFF', paddingVertical: 12, paddingHorizontal: 16, borderRadius: 8 },
  buttonText: { color: '#fff', fontWeight: '600', textAlign: 'center' },
  buttonAlt: { backgroundColor: '#fff', borderColor: '#007AFF', borderWidth: 1, paddingVertical: 12, paddingHorizontal: 16, borderRadius: 8 },
  buttonTextAlt: { color: '#007AFF', fontWeight: '600', textAlign: 'center' },
});
