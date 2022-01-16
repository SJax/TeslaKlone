import React from "react"
import styled from "styled-components"
import Fade from 'react-reveal/Fade';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

function Section(props) {
    return (
        <Wrap bgImg={props.src}>
            
                <ItemText>
                    <h1>{props.title}</h1>
                    <p>{props.description}<span>{props.underlinedDescription}</span></p>
                </ItemText>
            <ButtonSection>
                <Fade bottom>
                    <ButtonGroup>
                        <LeftButton>
                            {props.leftBtnText}
                        </LeftButton>
                        { props.rightBtnText && 
                            <RightButton>
                                {props.rightBtnText}
                            </RightButton>
                        }
                        
                    </ButtonGroup>
                </Fade>
                {/*<DownArrow src="/images/down-arrow.svg" />*/}
                { (props.lastSection === "false") && 
                    <DownArrow2 fontSize="large"></DownArrow2>
                }
                
            </ButtonSection>
        </Wrap>
    )
}

export default Section

const Wrap = styled.div`
    width: 100vw;
    height: 100vh;
    scroll-snap-align: start;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image: ${props => `url("${props.bgImg}")`};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`

const ItemText = styled.div`
    font-size: 1.1em;
    padding-top: 13vh;
    text-align: center;
    p {
        font-size: 0.8em;
    }
    p span {
        text-decoration: underline;
        cursor: pointer;
    }
`

const ButtonGroup = styled.div`
    display: flex;
    margin-bottom: 20px;
    @media (max-width: 768px) {
        flex-direction: column;
    }
`

const LeftButton = styled.div`
    background-color: rgba(23, 26, 32, 0.8);
    height: 40px;
    width: 256px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    opacity: 0.85;
    text-transform: uppercase;
    font-size: 12px;
    font-weight: bold;
    cursor: pointer;
    margin: 8px;
`

const RightButton = styled(LeftButton)`
    background-color: white;
    opacity: 0.65;
    color: black;
`

const DownArrow = styled.img`
    height: 40px;
    overflow-x: hidden;
    animation: animateDown infinite 1.5s;
`

const DownArrow2 = styled(ExpandMoreIcon)`
    height: 40px;
    overflow-x: hidden;
    animation: animateDown infinite 1.5s;
`

const ButtonSection = styled.div``