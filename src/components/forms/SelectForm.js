import {
  ChevronDownIcon,
  Icon,
  Select,
  SelectBackdrop,
  SelectContent,
  SelectDragIndicator,
  SelectDragIndicatorWrapper,
  SelectIcon,
  SelectInput,
  SelectItem,
  SelectPortal,
  SelectTrigger,
  View,
} from "@gluestack-ui/themed";
import { StyleSheet } from "react-native";
import { useSelectedValue } from "../../hooks/SelectedValue";
import { useEffect, useState } from "react";
import { fetchData } from '../../services/apiGet';

const SelectForm = ({ options, setMovies, page , isActive}) => {
  const { selectedValue, setSelectedValue} = useSelectedValue();
  
  useEffect(() => {
    if (selectedValue && isActive) {
      fetchMovies(selectedValue);
    }
  }, [selectedValue, isActive]);

  const fetchMovies = async (value) => {
    try {
      const movies = await fetchData(page, value);
      setMovies(movies);
    } catch (error) {
      console.error('Error fetching movies:', error); 
      alert(`Error: Something went wrong ${error.message}`);
    }
  };

  return (
    <View style={styles.container}>
      <Select onValueChange={(value) => setSelectedValue(value)}>
        <SelectTrigger variant="outline" size="md">
          <SelectInput placeholder={selectedValue.replace(/_/g, " ")} />
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
                  style={formattedValue === selectedValue ? styles.selectedOption : {}}
                >
                  {option}
                </SelectItem>
              );
            })}
          </SelectContent>
        </SelectPortal>
      </Select>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingLeft: 100,
    paddingRight: 100,
  },
  selectedOption: {
    backgroundColor: "#0e7a6e",
    color: "#fff",
  },
  selectContent: {
    paddingBottom: 60,
    color: "#fff",
  },
  colorWhite: {
    color: "#fff",
  },
});

export default SelectForm;
