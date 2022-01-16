import React from "react"
import styled from "styled-components"
import Section from "./Section"

function Home() {
    return (
        <Container>
            <Section 
                id="model_S"
                title="Model S" 
                src="./images/model-s.jpg"
                description="Order Online For "
                underlinedDescription="Touchless Delivery"
                leftBtnText="Custom Order"
                rightBtnText="Existing Inventory"
                lastSection="false"
            />
            <Section 
                id="model_3"
                title="Model 3" 
                src="./images/model-3.jpg"
                description="Order Online For "
                underlinedDescription="Touchless Delivery"
                leftBtnText="Custom Order"
                rightBtnText="Existing Inventory"
                lastSection="false"
            />
            <Section 
                id="model_X"
                title="Model X" 
                src="./images/model-x.jpg"
                description="Order Online For "
                underlinedDescription="Touchless Delivery"
                leftBtnText="Custom Order"
                rightBtnText="Existing Inventory"
                lastSection="false"
            />
            <Section 
                id="model_Y"
                title="Model Y" 
                src="./images/model-y.jpg"
                description="Order Online For "
                underlinedDescription="Touchless Delivery"
                leftBtnText="Custom Order"
                rightBtnText="Existing Inventory"
                lastSection="false"
            />
            <Section 
                id="solar_roof"
                title="Solar Roof"
                src="./images/solar-roof.jpg"
                description="Produce Clean Energy From Your Roof"
                underlinedDescription=""
                leftBtnText="Order Now"
                rightBtnText="Learn More"
                lastSection="false"
            />
            <Section 
                id="solar_panels"
                title="Solar Panels"
                src="./images/solar-panel.jpg"
                description="Lowest Cost Solar Panels In America"
                underlinedDescription=""
                leftBtnText="Order Now"
                rightBtnText="Learn More"
                lastSection="false"
            />
            <Section 
                id="accessories"
                title="Accessories"
                src="./images/accessories.jpg"
                description=""
                underlinedDescription=""
                leftBtnText="Shop Now"
                rightBtnText=""
                lastSection="true"
            />
        </Container>
    )
}

export default Home

const Container = styled.div`
    height: 100vh;
`