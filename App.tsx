import { useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import logo from "./assets/logo.png";
import { Button } from "./shared/Button/Button";
import { ErrorNotification } from "./shared/ErrorNotification/ErrorNotification";
import { Input } from "./shared/Input/Input";
import { COLORS, GAPS } from "./shared/tokens";

export default function App() {
  const [errorMessage, setErrorMessage] = useState<string | undefined>(
    undefined,
  );
  const alert = () => {
    setErrorMessage("Invalid email or password");
    setTimeout(() => {
      setErrorMessage(undefined);
    }, 4000);
  };

  return (
    <View style={styles.container}>
      <ErrorNotification errorMessage={errorMessage} />
      <View style={styles.content}>
        <Image source={logo} style={styles.logo} resizeMode="contain" />
        <View style={styles.form}>
          <Input placeholder="Email" />
          <Input isPassword placeholder="Password" />
          <Button text="Sign in" onPress={alert} />
        </View>
        <Text style={styles.restorePassword}>Restore Password</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    flex: 1,
    padding: 55,
    backgroundColor: COLORS.black,
  },
  content: {
    alignItems: "center",
    gap: GAPS.g50,
  },
  form: {
    alignSelf: "stretch",
    gap: GAPS.g16,
  },
  logo: {
    width: 220,
  },
  restorePassword: {
    color: COLORS.link,
    textAlign: "center",
  },
});
