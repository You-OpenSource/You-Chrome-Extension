import React from "react";
import * as Styles from "./SuiteComponent.styles"

interface SuiteComponentProps {
    suiteTitle: string
    logo: JSX.Element
    selected: boolean
    handleOnClick: () => void;
}

const SuiteComponent = ({
    suiteTitle,
    logo,
    selected,
    handleOnClick
} : SuiteComponentProps): JSX.Element => {
    return (
        <>
            <Styles.SuiteButtonWrapper
                onClick={handleOnClick}
            >
                <Styles.ButtonWrapper>
                <Styles.ButtonPadding selected={selected}>
                    <Styles.ButtonLogoContainer>
                        {logo}
                    </Styles.ButtonLogoContainer>
                </Styles.ButtonPadding>
                </Styles.ButtonWrapper>
                <Styles.SuiteButtonText selected={selected}>
                    {suiteTitle}
                </Styles.SuiteButtonText>
            </Styles.SuiteButtonWrapper>
        </>
    );
};

export default SuiteComponent;