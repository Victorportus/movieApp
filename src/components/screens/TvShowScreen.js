import { useNavigationState } from "@react-navigation/native";
import TvShowContainer from "../containers/TvShowContainer";

const TvShowScreen = () =>{
    const routeName = useNavigationState(state => state.routes[state.index].name);

    return <TvShowContainer activetab={routeName}/>
} 

export default TvShowScreen;