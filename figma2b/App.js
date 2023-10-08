import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      ,
      <View
        style={[
          {
            flexDirection: "row",
          },
        ]}
      >
        <Image
          source={require("/usb.png")}
          style={{ width: 70, height: 70, marginTop: 13, marginLeft: 16 }}
        ></Image>
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 16,
            marginLeft: 10,
            marginTop: 19,
          }}
        >
          USB Bluetooth Music Receiver HJX-001- Biến loa thường thành loa
          bluetooth
        </Text>
      </View>
      <View
        style={[
          {
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          },
        ]}
      >
        <Text
          style={{
            width: 259,
            height: 21,
            top: 60,
            left: 51,
            fontSize: 18,
            fontWeight: 700,
          }}
        >
          Cực kỳ hài lòng
        </Text>
      </View>
      <View
        style={[
          {
            flexDirection: "row",
          },
        ]}
      >
        <Image
          source={require("/Star 1.png")}
          style={{ width: 39, height: 39, marginTop: 80, marginLeft: 60 }}
        ></Image>
        <Image
          source={require("/Star 1.png")}
          style={{ width: 39, height: 39, marginTop: 80, marginLeft: 15 }}
        ></Image>
        <Image
          source={require("/Star 1.png")}
          style={{ width: 39, height: 39, marginTop: 80, marginLeft: 15 }}
        ></Image>
        <Image
          source={require("/Star 1.png")}
          style={{ width: 39, height: 39, marginTop: 80, marginLeft: 15 }}
        ></Image>
        <Image
          source={require("/Star 1.png")}
          style={{ width: 39, height: 39, marginTop: 80, marginLeft: 15 }}
        ></Image>
      </View>
      <View
        style={[
          {
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#FFFFFF",
            width: 320,
            height: 68,
            top: 30,
            left: 34,
            borderRadius: 5,
            borderWidth: 1,
            borderColor: "#1511EB",
          },
        ]}
      >
        <Image
          source={require("/camera.png")}
          style={{ width: 39, height: 32 }}
        ></Image>
        <Text
          style={{
            fontWeight: 700,
            fontSize: 18,
            Width: 259,
            Height: 21,
            marginLeft: 10,
          }}
        >
          Thêm hình ảnh
        </Text>
      </View>
      <View
        style={[
          {
            flexDirection: "column",

            backgroundColor: "#FFFFFF",
            width: 320,
            height: 180,
            top: 40,
            left: 34,
            borderRadius: 5,
            borderWidth: 1,
            borderColor: "#1511EB",
          },
        ]}
      >
        <Text
          style={{
            fontSize: 18,
            fontWeight: 700,
            top: 10,
            left: 10,
            color: "#C4C4C4",
          }}
        >
          Hãy chi sẻ những điều mà bạn thích về sản phẩm
        </Text>
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 12,
            top: 110,
            left: 90,
          }}
        >
          https://meet.google.com/nsj-ojwi-xpp
        </Text>
      </View>
      <View
        style={[
          {
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#0D5DB6",
            width: 320,
            height: 50,
            top: 70,
            left: 34,
            borderRadius: 5,
            borderWidth: 1,
            borderColor: "#1511EB",
          },
        ]}
      >
        <Text style={{ fontWeight: 700, fontSize: 20, color: "#FFFFFf" }}>
          Gửi
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
