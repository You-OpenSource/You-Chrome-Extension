import React from "react";

import { CodeLogo } from "./logos/codeLogo";
import { GoogleLogo } from "./logos/googleLogo";
import { DdgLogo } from "./logos/ddgLogo";
import { SearchLogo } from "./logos/searchLogo";

import { YOUALL, YOUCODE, DDG, GOOGLE, CDN_YDC_BASE } from "./constants";

import * as Styles from "./App.styles";

import SuiteComponent from "./SuiteComponent/SuiteComponent";

function clickedAll() {
  chrome.runtime.sendMessage(chrome.runtime.id, YOUALL);
}

function clickedCode() {
  chrome.runtime.sendMessage(chrome.runtime.id, YOUCODE);
}

function clickedDdg() {
  chrome.runtime.sendMessage(chrome.runtime.id, DDG);
}

function clickedGoogle() {
  chrome.runtime.sendMessage(chrome.runtime.id, GOOGLE);
}

function App() {

  const [selected, setSelected] = React.useState("");

  const storeNewDefault = (newDefault: string) => {
    chrome.storage.local.set({selected: newDefault}, ()=>{});
    setSelected(newDefault)
  }

  const getLastDefault = () => {
    try {
      chrome.storage.local.get("selected", ({ selected }) => {
        setSelected(selected)
      });   
    } catch(err) {
      console.log(err)
    }
  }

  React.useEffect(() => {
    getLastDefault()
  }, [])

  return (
    <Styles.App>
      <Styles.AppHeader>
        <Styles.YouLogoContainer
          src={ `${CDN_YDC_BASE}/shared/logos/ydc-logo-lightdarkmode.svg` }
          alt="Logo"
        />
        <Styles.Title>Search Experience</Styles.Title>
        <Styles.SubTitle>Search from the URL bar using</Styles.SubTitle>

        <Styles.SuiteWrapper>

          <SuiteComponent 
            suiteTitle="You.com"
            logo={<SearchLogo />}
            selected={selected === YOUALL}
            handleOnClick={() => {
              storeNewDefault(YOUALL)
              clickedAll();
              }}
          />

          <SuiteComponent 
            suiteTitle="YouCode"
            logo={<CodeLogo />}
            selected={selected === YOUCODE}
            handleOnClick={() => {
              storeNewDefault(YOUCODE)
              clickedCode();
            }}
          />

        </Styles.SuiteWrapper>

        <Styles.SeparatorContainer>
          <Styles.SeparationLine />
          <Styles.SeparationText>
            or
          </Styles.SeparationText>
          <Styles.SeparationLine />
        </Styles.SeparatorContainer>

        <Styles.AlternativeWrapper>

          <Styles.DdgContainer>
            <Styles.AlternativeButton
              selected={selected === DDG}
              onClick={() => {
                storeNewDefault(DDG)
                clickedDdg();
              }}
            >
              <DdgLogo />
              <Styles.AlternativeText selected={selected === DDG}>
                DuckDuckGo
              </Styles.AlternativeText>
            </Styles.AlternativeButton>
          </Styles.DdgContainer>

          <Styles.GoogleContainer>
            <Styles.AlternativeButton
              selected={selected === GOOGLE}
              onClick={() => {
                storeNewDefault(GOOGLE)
                clickedGoogle();
              }}
            >
              <GoogleLogo />
              <Styles.AlternativeText selected={selected === GOOGLE}>
                Google
              </Styles.AlternativeText>
            </Styles.AlternativeButton>
          </Styles.GoogleContainer>

        </Styles.AlternativeWrapper>
        
      </Styles.AppHeader>
    </Styles.App>
  );
}

export default App;
