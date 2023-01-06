import React from "react";

import {
  YOUALL,
  YOUCODE,
  YOUCHAT,
  GOOGLE,
  CDN_YDC_BASE,
  YOUCODE_LINKAPP,
  YOUCHAT_LINKAPP,
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

function clickedChatApp() {
  chrome.runtime.sendMessage(chrome.runtime.id, YOUCHAT_LINKAPP);
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

function clickedYouChat() {
  chrome.runtime.sendMessage(chrome.runtime.id, YOUCHAT);
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
            suiteTitle="Chat"
            logo={
              <img
                src={`${CDN_YDC_BASE}/images/extension/ChatSquareLogo.svg`}
                alt="YouChat Logo"
              />
            }
            selected={false}
            handleOnClick={() => {
              clickedChatApp();
            }}
          />

          <SuiteComponent
            suiteTitle="Write"
            logo={
              <img
                src={`${CDN_YDC_BASE}/images/extension/WriteSquareLogo.svg`}
                alt="YouWrite Logo"
              />
            }
            selected={false}
            handleOnClick={() => {
              clickedWriteApp();
            }}
          />

          <SuiteComponent
            suiteTitle="Code"
            logo={
              <img
                src={`${CDN_YDC_BASE}/images/extension/CodeSquareLogo.svg`}
                alt="YouCode Logo"
              />
            }
            selected={false}
            handleOnClick={() => {
              clickedCodeApp();
            }}
          />

          <SuiteComponent
            suiteTitle="Draw"
            logo={
              <img
                src={`${CDN_YDC_BASE}/images/extension/DrawSquareLogo.svg`}
                alt="YouCode Logo"
              />
            }
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
                <img
                  src={`${CDN_YDC_BASE}/images/extension/YouComRoundLogo.svg`}
                  alt="You Logo"
                />
                <Styles.AlternativeText selected={selected === YOUALL}>
                  You.com
                </Styles.AlternativeText>
              </Styles.AlternativeButton>
            </Styles.YouComContainer>
            <Styles.YouChatContainer>
              <Styles.AlternativeButton
                selected={selected === YOUCHAT}
                onClick={() => {
                  storeNewDefault(YOUCHAT);
                  clickedYouChat();
                }}
              >
                <img
                  src={`${CDN_YDC_BASE}/images/extension/YouChatRoundLogo.svg`}
                  alt="YouChat Logo"
                />
                <Styles.AlternativeText selected={selected === YOUCHAT}>
                  YouChat
                </Styles.AlternativeText>
              </Styles.AlternativeButton>
            </Styles.YouChatContainer>
          </Styles.AlternativeWrapperRow>
          <Styles.AlternativeWrapperRow>
            <Styles.YouCodeContainer>
              <Styles.AlternativeButton
                selected={selected === YOUCODE}
                onClick={() => {
                  storeNewDefault(YOUCODE);
                  clickedCode();
                }}
              >
                <img
                  src={`${CDN_YDC_BASE}/images/extension/YouCodeRoundLogo.svg`}
                  alt="YouCode Logo"
                />
                <Styles.AlternativeText selected={selected === YOUCODE}>
                  YouCode
                </Styles.AlternativeText>
              </Styles.AlternativeButton>
            </Styles.YouCodeContainer>

            <Styles.GoogleContainer>
              <Styles.AlternativeButton
                selected={selected === GOOGLE}
                onClick={() => {
                  storeNewDefault(GOOGLE);
                  clickedGoogle();
                }}
              >
                <img
                  src={`${CDN_YDC_BASE}/images/extension/GoogleLogo.svg`}
                  alt="Google Logo"
                />
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
