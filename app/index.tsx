import { Link } from "expo-router";
import { Pressable, Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text className="font-roboto-bold">
        “Where Every Ayah Meets Understanding.”
      </Text>

      <Link href={"/quran"} asChild>
        <Pressable>
          <Text>Go to Quran</Text>
        </Pressable>
      </Link>
    </View>
  );
}
