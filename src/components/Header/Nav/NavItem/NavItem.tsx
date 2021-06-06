import styled from "styled-components";

const navItem: React.FC<{ title: string }> = (props) => {
    const NavItem = styled.div`
        margin: 0;
        display: flex;
        height: 100%;
        width: auto;
        align-items: center;
    `;

    const NavLink = styled.a`
        color: white;
        height: 100%;
        padding: 16px 10px;
        border-bottom: 4px solid transparent;
    `;

    return (
        <NavItem>
            <NavLink>
                {props.title}
            </NavLink>
        </NavItem>
    )
}

export default navItem;