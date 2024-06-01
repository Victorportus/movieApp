import {
  ButtonIcon,
  ButtonText,
  FormControlHelper,
  FormControlHelperText,
  HStack,
  Icon,
  InputField,
  InputSlot,
  SearchIcon,
  Select,
  SelectBackdrop,
  SelectDragIndicator,
  SelectIcon,
  SelectInput,
  SelectItem,
  SelectPortal,
  SelectTrigger,
} from "@gluestack-ui/themed";
import { ChevronDownIcon } from "@gluestack-ui/themed";
import { SelectDragIndicatorWrapper } from "@gluestack-ui/themed";
import { SelectContent } from "@gluestack-ui/themed";
import {
  FormControl,
  FormControlLabel,
  FormControlLabelText,
  Input,
  InputIcon,
  View,
  Button,
} from "@gluestack-ui/themed";
import { useState } from "react";
import { StyleSheet } from "react-native";
import { fetchSearchData } from "../../services/apiSearch";

const SearchForm = ({ options, setResultPrograms, setPageToSearch }) => {
  const [searchType, setSearchType] = useState("multi");
  const [toSearch, setToSearch] = useState("");

  const fetchSearch = async (searchType, toSearch) => {
    try {
      const movies = await fetchSearchData(searchType, toSearch);
      setResultPrograms(movies);
      setPageToSearch(searchType);
    } catch (error) {
      console.error("Error fetching movies:", error);
      alert(`Error: Something went wrong ${error.message}`);
    }
  };

  return (
    <View style={styles.container}>
      <FormControl isRequired={true}>
        <FormControlLabel>
          <FormControlLabelText>Search Movie/TV Show Name</FormControlLabelText>
        </FormControlLabel>
        <Input style={styles.input} bg="#e4e4e6">
          <InputSlot>
            <InputIcon as={SearchIcon} size="sm" />
          </InputSlot>
          <InputField
            onChangeText={(value) => setToSearch(value)}
            placeholder="i.e. James Bond, CSI"
            placeholderTextColor="#c6c5c7"
          />
        </Input>
      </FormControl>
      <HStack style={styles.hStack}>
        <FormControl isRequired={true}>
          <FormControlLabel>
            <FormControlLabelText>Choose Search Type</FormControlLabelText>
          </FormControlLabel>
          <Select onValueChange={(value) => setSearchType(value)}>
            <SelectTrigger variant="outline" size="md" style={styles.input}>
              <SelectInput placeholder={searchType.replace(/_/g, " ")} />
              <SelectIcon mr="$3">
                <Icon as={ChevronDownIcon} />
              </SelectIcon>
            </SelectTrigger>
            <SelectPortal>
              <SelectBackdrop />
              <SelectContent style={styles.selectContent}>
                <SelectDragIndicatorWrapper>
                  <SelectDragIndicator />
                </SelectDragIndicatorWrapper>
                {options.map((option, index) => {
                  const formattedValue = option.replace(/_/g, " ");
                  return (
                    <SelectItem
                      label={formattedValue}
                      key={index}
                      value={option}
                      style={
                        formattedValue === searchType
                          ? styles.selectedOption
                          : {}
                      }
                    >
                      {formattedValue}
                    </SelectItem>
                  );
                })}
              </SelectContent>
            </SelectPortal>
          </Select>
          <FormControlHelper>
            <FormControlHelperText>
              Please select a search type
            </FormControlHelperText>
          </FormControlHelper>
        </FormControl>
        <Button
          style={styles.button}
          onPress={() => fetchSearch(searchType, toSearch)}
        >
          <ButtonIcon as={SearchIcon} size="sm" />
          <ButtonText paddingStart={10}>Search</ButtonText>
        </Button>
      </HStack>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingLeft: 30,
    paddingRight: 30,
    alignItems: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    width: "100%",
    marginVertical: 10,
  },
  hStack: {
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  button: {
    marginTop: 5,
    backgroundColor: "#01b6d4",
    padding: 10,
    borderRadius: 5,
  },
  selectedOption: {
    backgroundColor: "#0e7a6e",
    color: "#fff",
  },
  selectContent: {
    paddingBottom: 60,
    color: "#fff",
    width: "100%",
  },
});

export default SearchForm;
