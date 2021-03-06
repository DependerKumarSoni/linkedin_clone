import { Link } from "react-router-dom";
import styled from "styled-components";

const Leftside = (props) => {
    return <Container>
        <ArtCard>
            <UserInfo>
                <CardBackground/>
                <a href="/home">
                    <Photo/>
                    <Link>Welcome There</Link>
                </a>
                <a href="/home">
                    <addPhotoText>Add a Photo</addPhotoText>
                </a>
            </UserInfo>
        </ArtCard>
    </Container>;
};

const Container = styled.div`
grid-area: leftside;
`;

const ArtCard = styled.div`
text-align: center;
overflow: hidden;
margin-bottom: 8px;
background-color: #fff;
border-radius: 5px;
transition: box-shadow 83ms;
position: relative;
border: none;
box-shadow: 0 0 0 1px rgb(0 0 0 /15%), 0 0 0 rgb(0 0 0 / 20%);
`;

export default Leftside;