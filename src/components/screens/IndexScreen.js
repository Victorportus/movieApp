import { useNavigationState } from "@react-navigation/native";
import MoviesContainers from "../containers/MoviesContainers";

const IndexScreen = () => {
    const routeName = useNavigationState(state => state.routes[state.index].name);

    return  <MoviesContainers activetab={routeName} />
}

export default IndexScreen;