import React, { useState } from 'react';
import { Box, View, Text, ScrollView } from '@gluestack-ui/themed';
import SelectForm from '../forms/SelectForm';
import ShowCard from '../listItems/ShowCard';
import { StyleSheet } from "react-native";

const MoviesContainers =({ activetab }) => {
  const [movies, setMovies] = useState([]);

  return (
    <View>
      <Box>
        <SelectForm
          options={["now_playing", "popular", "top_rated", "upcoming"]}
          setMovies={setMovies}
          isActive={activetab ==="Movies"}
          page={"movie"}
        />
      </Box>
      <Box style={styles.scrollView}>
        {movies.length > 0 ? (
          <ScrollView>
            <ShowCard movies={movies} page={"movie"}/>
          </ScrollView>
        ) : (
          <Text>No movies available</Text>
        )}
      </Box>
    </View>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    paddingBottom: 170,
  },
});

export default MoviesContainers;
