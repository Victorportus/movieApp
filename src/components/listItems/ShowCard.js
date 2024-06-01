import React from "react";
import { Button, ButtonText } from "@gluestack-ui/themed";
import { HStack, Heading, Image, Text, VStack } from "@gluestack-ui/themed";
import { StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

const ShowCard = ({ movies, page }) => {
  const navigation = useNavigation();

  const handlePress = (movie) => {
    if (page === "multi"){
      page = movie.media_type;
    }
    navigation.navigate("Show", {
      id: movie.id,
      title: movie.title,
      page: page,
      name: movie.name,
    });
  };

  return (
    <VStack style={styles.container}>
      {movies.map((movie, index) => (
        <HStack key={index} style={styles.card}>
          <Image
            size="lg"
            borderRadius="$none"
            source={{
              uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
            }}
            alt="Movie Poster Image"
            style={styles.image}
          />
          <VStack style={styles.textContainer}>
            <Heading size="sm" style={styles.title}>
              {movie.title ? movie.title : movie.name}
            </Heading>
            <Text size="sm" style={styles.text}>
              Popularity: {movie.popularity}
            </Text>
            <Text size="sm" style={styles.text}>
              Release Date: {movie.release_date}
            </Text>
            <Button
              variant="solid"
              bg="#06b6d4"
              onPress={() => handlePress(movie)}
              style={styles.button}
            >
              <ButtonText>More Details</ButtonText>
            </Button>
          </VStack>
        </HStack>
      ))}
    </VStack>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  card: {
    marginBottom: 10,
    padding: 10,
    backgroundColor: "#fff",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    width: 100,
    height: 150,
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
    justifyContent: "center",
  },
  title: {
    marginBottom: 5,
  },
  text: {
    marginBottom: 5,
  },
  button: {
    alignSelf: "flex-start",
  },
});

export default ShowCard;
