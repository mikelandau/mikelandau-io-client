import styled from "styled-components"
import * as colors from "../../common/colors";

const Home = styled.div`
    background-color: ${colors.coolgray900};
    color: white;
    height: 1000px;
`

const home: React.FC = (props) => {
    return (
        <Home>
            Welcome to my webzone
        </Home>
    )
};

export default home;
