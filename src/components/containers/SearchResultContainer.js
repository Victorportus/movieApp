import { ScrollView, Text, View } from "@gluestack-ui/themed";
import SearchForm from "../forms/SearchForm";
import { Box } from "@gluestack-ui/themed";
import { useState } from "react";
import { StyleSheet } from "react-native";
import ShowCard from "../listItems/ShowCard";

const SearchResultContainer = ({ activetab }) => {
  const [resultPrograms, setResultPrograms] = useState([]);
  const [pageToSearch, setPageToSearch] = useState([]);
  return (
    <View>
      <Box>
        <SearchForm
          options={["movie", "multi", "tv"]}
          isActive={activetab ==="Search Results"}
          setResultPrograms={setResultPrograms}
          setPageToSearch={setPageToSearch}
        />
      </Box>
      <Box style={styles.scrollView}>
        {resultPrograms.length > 0 ? (
          <ScrollView>
            <ShowCard movies={resultPrograms} page ={pageToSearch}/>
          </ScrollView>
        ) : (
          <Text style={styles.instructionText}>Please initiate a search</Text>
        )}
      </Box>
    </View>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    paddingBottom: 500,
  },
  instructionText: {
    marginTop: 100,
    fontSize: 30,
    fontWeight: "bold",
    color: "#494949",
    textAlign: "center",
  },
});

export default SearchResultContainer;
