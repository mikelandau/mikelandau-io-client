import styled from 'styled-components';
import Header from '../components/Header/Header';

const Main = styled.main`
    margin-top: 72px;
    height: 1000px;
`;

const layout: React.FC = (props) => {
    return (
        <>
            <Header />
            <Main>
                {props.children}
            </Main>
        </>
    )
}

export default layout;
