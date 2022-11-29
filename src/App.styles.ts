import styled from "styled-components";

import { spacing, StyledCaption, ISelectedProps } from "./shared_styles";

export const App = styled.div`
  text-align: center;
`;

export const AppHeader = styled.header`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: black;
  background-image: url("data:image/svg+xml,%3Csvg width='300' height='120' viewBox='0 0 300 120' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg filter='url(%23filter0_f_78_1842)'%3E%3Cellipse cx='284' cy='-28.8429' rx='95' ry='13.9848' fill='%2300FFBA'/%3E%3C/g%3E%3Cg filter='url(%23filter1_f_78_1842)'%3E%3Cellipse cx='220.5' cy='-53.1955' rx='50.5' ry='14.2259' fill='%23716EF4'/%3E%3C/g%3E%3Cg filter='url(%23filter2_f_78_1842)'%3E%3Cellipse cx='194' cy='-80.9237' rx='68' ry='18.3249' fill='%2388F3FD'/%3E%3C/g%3E%3Cg filter='url(%23filter3_f_78_1842)'%3E%3Cellipse cx='176' cy='-84.2995' rx='136' ry='21.7005' fill='%234A72F5'/%3E%3C/g%3E%3Cg filter='url(%23filter4_f_78_1842)'%3E%3Cellipse cx='74' cy='-85.746' rx='68' ry='13.5025' fill='url(%23paint0_radial_78_1842)'/%3E%3C/g%3E%3Cg filter='url(%23filter5_f_78_1842)'%3E%3Cellipse cx='28.5' cy='-24.985' rx='73.5' ry='13.9848' fill='url(%23paint1_radial_78_1842)' fill-opacity='0.68'/%3E%3C/g%3E%3Cdefs%3E%3Cfilter id='filter0_f_78_1842' x='69' y='-162.828' width='430' height='267.97' filterUnits='userSpaceOnUse' color-interpolation-filters='sRGB'%3E%3CfeFlood flood-opacity='0' result='BackgroundImageFix'/%3E%3CfeBlend mode='normal' in='SourceGraphic' in2='BackgroundImageFix' result='shape'/%3E%3CfeGaussianBlur stdDeviation='60' result='effect1_foregroundBlur_78_1842'/%3E%3C/filter%3E%3Cfilter id='filter1_f_78_1842' x='50' y='-187.421' width='341' height='268.452' filterUnits='userSpaceOnUse' color-interpolation-filters='sRGB'%3E%3CfeFlood flood-opacity='0' result='BackgroundImageFix'/%3E%3CfeBlend mode='normal' in='SourceGraphic' in2='BackgroundImageFix' result='shape'/%3E%3CfeGaussianBlur stdDeviation='60' result='effect1_foregroundBlur_78_1842'/%3E%3C/filter%3E%3Cfilter id='filter2_f_78_1842' x='6' y='-219.249' width='376' height='276.65' filterUnits='userSpaceOnUse' color-interpolation-filters='sRGB'%3E%3CfeFlood flood-opacity='0' result='BackgroundImageFix'/%3E%3CfeBlend mode='normal' in='SourceGraphic' in2='BackgroundImageFix' result='shape'/%3E%3CfeGaussianBlur stdDeviation='60' result='effect1_foregroundBlur_78_1842'/%3E%3C/filter%3E%3Cfilter id='filter3_f_78_1842' x='-80' y='-226' width='512' height='283.401' filterUnits='userSpaceOnUse' color-interpolation-filters='sRGB'%3E%3CfeFlood flood-opacity='0' result='BackgroundImageFix'/%3E%3CfeBlend mode='normal' in='SourceGraphic' in2='BackgroundImageFix' result='shape'/%3E%3CfeGaussianBlur stdDeviation='60' result='effect1_foregroundBlur_78_1842'/%3E%3C/filter%3E%3Cfilter id='filter4_f_78_1842' x='-114' y='-219.249' width='376' height='267.005' filterUnits='userSpaceOnUse' color-interpolation-filters='sRGB'%3E%3CfeFlood flood-opacity='0' result='BackgroundImageFix'/%3E%3CfeBlend mode='normal' in='SourceGraphic' in2='BackgroundImageFix' result='shape'/%3E%3CfeGaussianBlur stdDeviation='60' result='effect1_foregroundBlur_78_1842'/%3E%3C/filter%3E%3Cfilter id='filter5_f_78_1842' x='-165' y='-158.97' width='387' height='267.97' filterUnits='userSpaceOnUse' color-interpolation-filters='sRGB'%3E%3CfeFlood flood-opacity='0' result='BackgroundImageFix'/%3E%3CfeBlend mode='normal' in='SourceGraphic' in2='BackgroundImageFix' result='shape'/%3E%3CfeGaussianBlur stdDeviation='60' result='effect1_foregroundBlur_78_1842'/%3E%3C/filter%3E%3CradialGradient id='paint0_radial_78_1842' cx='0' cy='0' r='1' gradientUnits='userSpaceOnUse' gradientTransform='translate(74 -85.746) rotate(90) scale(13.5025 68)'%3E%3Cstop stop-color='%232600FF'/%3E%3Cstop offset='1' stop-color='%234D9CFA'/%3E%3C/radialGradient%3E%3CradialGradient id='paint1_radial_78_1842' cx='0' cy='0' r='1' gradientUnits='userSpaceOnUse' gradientTransform='translate(28.5 -24.985) rotate(90) scale(13.9848 73.5)'%3E%3Cstop stop-color='%23E84622'/%3E%3Cstop offset='1' stop-color='%23FF00D6'/%3E%3C/radialGradient%3E%3C/defs%3E%3C/svg%3E");
  background-repeat: no-repeat;
`;

export const YouLogoContainer = styled.img`
  padding: ${spacing.md} 0;
  height: 24px;
  width: 82px;
`;

export const Title = styled.div`
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  letter-spacing: -0.28px;
  text-align: center;
`;

export const SubTitle = styled(StyledCaption)`
  font-size: 12px;
  font-weight: 400;
  padding: ${spacing.xxs} 0;
`;

export const SuiteWrapper = styled.div`
  display: flex;
  justifiy-content: center;
  align-items: center;
  padding-top: ${spacing.md};
  box-sizing: border-box;
`;

export const SeparatorContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  padding-top: ${spacing.md};
  padding-bottom: ${spacing.sl};
`;

export const SeparationLine = styled.div`
  align-self: center;
  height: 1px;
  width: 100%;
  border-top: 1px solid black;
  opacity: 0.1;
  margin: 10px;
`;

export const SeparationText = styled(StyledCaption)`
  width: 70%;
  font-size: 12px;
  font-color: #aeaeb2;
  white-space: nowrap;
`;

export const AlternativeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justifiy-content: center;
  margin-bottom: ${spacing.ml};
  align-items: center;
  box-sizing: border-box;
`;

export const AlternativeWrapperRow = styled.div`
  display: flex;
  justifiy-content: center;
  align-items: center;
  box-sizing: border-box;
  margin-bottom: ${spacing.xxs};
  flex-wrap: wrap;
`;

export const GoogleContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 85px;
  box-sizing: border-box;
`;

export const DdgContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 125px;
  box-sizing: border-box;
`;

export const YouCodeContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 105px;
  box-sizing: border-box;
`;

export const YouComContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 95px;
  box-sizing: border-box;
`;

export const AlternativeButton = styled.button<ISelectedProps>`
  border: ${({ selected }) =>
    selected ? "2px solid #4A72F5" : "1px solid #E7E7EB"};
  background-color: transparent;
  display: flex;
  justifiy-content: center;
  align-items: center;
  border-radius: 54px;
  padding: 0 ${spacing.xxs};
  height: ${spacing.lg};
  box-sizing: border-box;
`;

export const AlternativeText = styled.div<ISelectedProps>`
  color: ${({ selected }) => (selected ? "#696B6C" : "black")};
  font-weight: ${({ selected }) => (selected ? "600" : "400")};
  padding: 0 ${spacing.xxs};
`;
