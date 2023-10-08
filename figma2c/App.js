import { StatusBar } from "expo-status-bar";
import { Image, StyleSheet, Text, TextInput, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
export default function App() {
  return (
    <View style={styles.container}>
      <View
        style={{
          backgroundColor: "rgba(35, 35, 91, 1)",
          height: 605,
          width: 350,
          top: 19,
          left: 19,
          borderRadius: 15,
        }}
      >
        <View
          style={{
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            width: 181,
            height: 64,
            top: 50,
            left: 80,
          }}
        >
          <Text
            style={{
              fontSize: 25,
              fontWeight: 700,
              color: "rgba(255, 255, 255, 1)",
            }}
          >
            PASSWORD
          </Text>
          <Text
            style={{
              fontSize: 25,
              fontWeight: 700,
              color: "rgba(255, 255, 255, 1)",
            }}
          >
            GENERATOR
          </Text>
        </View>
        <View
          style={{
            backgroundColor: "rgba(21, 21, 55, 1)",
            width: 310,
            height: 60,
            top: 100,
            left: 20,
          }}
        ></View>
        <View
          style={{
            flexDirection: "row",
            top: 150,
            left: 38,
          }}
        >
          <Text
            style={{
              fontSize: 20,
              fontWeight: 700,
              color: "rgba(255, 255, 255, 1)",
              right: 20,
            }}
          >
            Password length
          </Text>
          <TextInput
            style={{
              backgroundColor: "rgba(255, 255, 255, 1)",
              width: 150,
              height: 33,
            }}
          ></TextInput>
        </View>
        <View
          style={{
            flexDirection: "row",
            top: 170,
            left: 38,
          }}
        >
          <Text
            style={{
              fontSize: 20,
              fontWeight: 700,
              color: "rgba(255, 255, 255, 1)",
              right: 20,
            }}
          >
            Include lower case letters
          </Text>
          <Image
            source={require("/icon.png")}
            style={{ width: 25, height: 25, left: 30 }}
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            top: 190,
            left: 38,
          }}
        >
          <Text
            style={{
              fontSize: 20,
              fontWeight: 700,
              color: "rgba(255, 255, 255, 1)",
              right: 20,
            }}
          >
            Include upcase letters
          </Text>
          <Image
            source={require("/icon2.png")}
            style={{ width: 25, height: 25, left: 65 }}
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            top: 210,
            left: 38,
          }}
        >
          <Text
            style={{
              fontSize: 20,
              fontWeight: 700,
              color: "rgba(255, 255, 255, 1)",
              right: 20,
            }}
          >
            Include number
          </Text>
          <Image
            source={require("/icon.png")}
            style={{ width: 25, height: 25, left: 120 }}
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            top: 230,
            left: 38,
          }}
        >
          <Text
            style={{
              fontSize: 20,
              fontWeight: 700,
              color: "rgba(255, 255, 255, 1)",
              right: 20,
            }}
          >
            Include special symbol
          </Text>
          <Image
            source={require("/icon2.png")}
            style={{ width: 25, height: 25, left: 55 }}
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(59, 59, 152, 1)",
            width: 300,
            height: 55,
            top: 265,
            left: 25,
          }}
        >
          <Text style={{ fontWeight: "bold", fontSize: 18, color: "#FFFFFF" }}>
            GENERATE PASSWORD
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(59, 59, 152, 1),rgba(196, 196, 196, 0)",
    height: 640,
    width: 360,
  },
});
