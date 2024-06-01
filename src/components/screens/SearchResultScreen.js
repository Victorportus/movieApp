import { useNavigationState } from "@react-navigation/native";
import SearchResultContainer from "../containers/SearchResultContainer";

const SearchResultScreen = () => {
    const routeName = useNavigationState(state => state.routes[state.index].name);

    return <SearchResultContainer activetab={routeName} />;
};

export default SearchResultScreen;
