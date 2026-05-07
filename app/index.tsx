import { Link } from "expo-router";
import { Pressable, Text, View } from "react-native";

export default function Index() {
  return (
    <View className="flex-1 justify-center items-center gap-5 bg-white dark:bg-black">
      <Text className="font-roboto-extra-bold text-2xl text-orange-400 text-center">
        “Where Every Ayah Meets Understanding.”
      </Text>

      <Link href={"/quran"} asChild>
        <Pressable className="bg-orange-400 px-6 py-3 rounded-full">
          <Text className="text-white font-roboto-bold text-lg">
            Explore the Quran
          </Text>
        </Pressable>
      </Link>
    </View>
  );
}
