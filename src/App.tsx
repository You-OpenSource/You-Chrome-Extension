import React from "react";

import { GoogleLogo } from "./logos/googleLogo";
import { DdgLogo } from "./logos/ddgLogo";
import { YouComRoundLogo } from "./logos/youComRoundLogo";
import { YouCodeRoundLogo } from "./logos/youCodeRoundLogo";
import { WriteSquareLogo } from "./logos/writeSquareLogo";
import { CodeSquareLogo } from "./logos/codeSquareLogo";
import { DrawSquareLogo } from "./logos/drawSquareLogo";

import {
  YOUALL,
  YOUCODE,
  DDG,
  GOOGLE,
  CDN_YDC_BASE,
  YOUCODE_LINKAPP,
  YOUWRITE_LINKAPP,
  YOUDRAW_LINKAPP,
} from "./constants";

import * as Styles from "./App.styles";

import SuiteComponent from "./SuiteComponent/SuiteComponent";

function clickedAll() {
  chrome.runtime.sendMessage(chrome.runtime.id, YOUALL);
}

function clickedCode() {
  chrome.runtime.sendMessage(chrome.runtime.id, YOUCODE);
}

function clickedWriteApp() {
  chrome.runtime.sendMessage(chrome.runtime.id, YOUWRITE_LINKAPP);
}

function clickedCodeApp() {
  chrome.runtime.sendMessage(chrome.runtime.id, YOUCODE_LINKAPP);
}

function clickedDrawApp() {
  chrome.runtime.sendMessage(chrome.runtime.id, YOUDRAW_LINKAPP);
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
    chrome.storage.local.set({ selected: newDefault }, () => {});
    setSelected(newDefault);
  };

  const getLastDefault = () => {
    try {
      chrome.storage.local.get("selected", ({ selected }) => {
        setSelected(selected);
      });
    } catch (err) {
      console.log(err);
    }
  };

  React.useEffect(() => {
    getLastDefault();
  }, []);

  return (
    <Styles.App>
      <Styles.AppHeader>
        <Styles.YouLogoContainer
          src={`${CDN_YDC_BASE}/shared/logos/ydc-logo-lightdarkmode.svg`}
          alt="Logo"
        />
        <Styles.Title>Create with AI</Styles.Title>
        <Styles.SubTitle>Generative AI tools to do more</Styles.SubTitle>

        <Styles.SuiteWrapper>
          <SuiteComponent
            suiteTitle="Write"
            logo={<WriteSquareLogo />}
            selected={false}
            handleOnClick={() => {
              clickedWriteApp();
            }}
          />

          <SuiteComponent
            suiteTitle="Code"
            logo={<CodeSquareLogo />}
            selected={false}
            handleOnClick={() => {
              clickedCodeApp();
            }}
          />

          <SuiteComponent
            suiteTitle="Draw"
            logo={<DrawSquareLogo />}
            selected={false}
            handleOnClick={() => {
              clickedDrawApp();
            }}
          />
        </Styles.SuiteWrapper>

        <Styles.SeparatorContainer>
          <Styles.SeparationLine />
          <Styles.SeparationText>Set your default search</Styles.SeparationText>
          <Styles.SeparationLine />
        </Styles.SeparatorContainer>

        <Styles.AlternativeWrapper>
          <Styles.AlternativeWrapperRow>
            <Styles.YouComContainer>
              <Styles.AlternativeButton
                selected={selected === YOUALL}
                onClick={() => {
                  storeNewDefault(YOUALL);
                  clickedAll();
                }}
              >
                <YouComRoundLogo />
                <Styles.AlternativeText selected={selected === YOUALL}>
                  You.com
                </Styles.AlternativeText>
              </Styles.AlternativeButton>
            </Styles.YouComContainer>

            <Styles.YouCodeContainer>
              <Styles.AlternativeButton
                selected={selected === YOUCODE}
                onClick={() => {
                  storeNewDefault(YOUCODE);
                  clickedCode();
                }}
              >
                <YouCodeRoundLogo />
                <Styles.AlternativeText selected={selected === YOUCODE}>
                  YouCode
                </Styles.AlternativeText>
              </Styles.AlternativeButton>
            </Styles.YouCodeContainer>
          </Styles.AlternativeWrapperRow>
          <Styles.AlternativeWrapperRow>
            <Styles.DdgContainer>
              <Styles.AlternativeButton
                selected={selected === DDG}
                onClick={() => {
                  storeNewDefault(DDG);
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
                  storeNewDefault(GOOGLE);
                  clickedGoogle();
                }}
              >
                <GoogleLogo />
                <Styles.AlternativeText selected={selected === GOOGLE}>
                  Google
                </Styles.AlternativeText>
              </Styles.AlternativeButton>
            </Styles.GoogleContainer>
          </Styles.AlternativeWrapperRow>
        </Styles.AlternativeWrapper>
      </Styles.AppHeader>
    </Styles.App>
  );
}

export default App;
