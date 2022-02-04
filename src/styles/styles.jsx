import { css, Global } from "@emotion/react";
import facepaint from "facepaint";

export const breakpoints = [576, 768, 992, 1200, 1400];

export const mq = facepaint(
  breakpoints.map((bp) => `@media (min-width: ${bp}px)`)
);

const getGlobalStyles = (theme) => css`
      @font-face {
        font-family: "Mont";
        src: url("/fonts/Mont/Mont-Regular.otf");
        font-style: normal;
        font-weight: 400;
        font-display: swap;
      }
      @font-face {
        font-family: "Mont";
        src: url("/fonts/Mont/Mont-SemiBold.otf");
        font-style: normal;
        font-weight: 600;
        font-display: swap;
      }
      @font-face {
        font-family: "Mont";
        src: url("/fonts/Mont/Mont-Bold.otf");
        font-style: normal;
        font-weight: 700;
        font-display: swap;
      }
      @font-face {
        font-family: "Mont";
        src: url("/fonts/Mont/Mont-Heavy.otf");
        font-style: normal;
        font-weight: 800;
        font-display: swap;
      }
      @font-face {
        font-family: "AmaticSC";
        src: url("/fonts/AmaticSC-Bold.ttf");
        font-style: normal;
        font-weight: normal;
        font-display: swap;
      }
      @font-face {
        font-family: "Courgette";
        src: url("/fonts/Courgette-Regular.ttf");
        font-style: normal;
        font-weight: normal;
        font-display: swap;
      }
      @font-face {
        font-family: "DelaGothicOne";
        src: url("/fonts/DelaGothicOne-Regular.ttf");
        font-style: normal;
        font-weight: normal;
        font-display: swap;
      }
      @font-face {
        font-family: "Neucha";
        src: url("/fonts/Neucha-Regular.ttf");
        font-style: normal;
        font-weight: normal;
        font-display: swap;
      }
      @font-face {
        font-family: "Parisienne";
        src: url("/fonts/Parisienne-Regular.ttf");
        font-style: normal;
        font-weight: normal;
        font-display: swap;
      }
      @font-face {
        font-family: "PlayfairDisplay";
        src: url("/fonts/PlayfairDisplay-Regular.ttf");
        font-style: normal;
        font-weight: normal;
        font-display: swap;
      }
      @font-face {
        font-family: "AvenirNextWorld";
        src: url("/fonts/AvenirNextWorld/AvenirNextLTPro-Bold.otf");
        font-style: normal;
        font-weight: normal;
        font-display: swap;
      }
      @font-face {
        font-family: "AvenirNextWorld";
        src: url("/fonts/AvenirNextWorld/AvenirNextLTPro-Regular.otf");
        font-style: normal;
        font-weight: normal;
        font-display: swap;
      }
      
      html,
      body {
        background: ${theme.body.backgroundColor};
        font-family: Lato, Regular, Helvetica, Arial, sans-serif;
        font-size: 16px;
        margin: 0;
        color:  ${theme.body.color};
      }
      * {
        box-sizing: border-box;
      }
      h1 {
        font-size: ${theme.typography.h1.desktop.fontSize}px !important;
      }
      h2 {
        font-size: ${theme.typography.h2.desktop.fontSize}px !important;
      }
      h3 {
        font-size: ${theme.typography.h3.desktop.fontSize}px !important;
      }
      h4 {
        font-size: ${theme.typography.h4.desktop.fontSize}px !important;
      }
      h5 {
        font-size: ${theme.typography.h5.desktop.fontSize}px !important;
      }
 
      .link {
        font-family: ${theme.fonts.primary};
        font-size: 22px;
        font-weight: 500;
        cursor: 'pointer';
        line-height: 1.38;
      }
      .link:hover {
        opacity: 0.9;
        text-decoration: underline;
      }
      .lineHeightRegular {
        line-height: 1.38 !important;
      }
      .lineHeightMedium {
        line-height: 1.50 !important;
      }
      .initialButton {
        background-color: transparent;
        border: none;
        cursor: pointer;
      }
      .initialButton:hover {
        opacity: 0.8;
      }
      .button {
        border-radius: ${theme.button.borderRadius};
        padding: ${theme.button.padding || "initial"};
        cursor: pointer;
        border: 1px solid ${theme.colors.primary};
        line-height: 1;
        /* width: ${theme.button.width || "initial"};
        height: ${theme.button.height || "0px"}; */
      }
      .button-default {
        background-color: #fff;
        border: 1px solid #e0e0e0 !important;
        color: ${theme.colors.primary};
      }
      .button-default:hover,
      .button-default:focus {
        border: 1px solid #808080 !important;
        color: #000 !important;
        opacity: 0.9 !important;
      }
      .button-danger {
        background-color: ${theme.colors.errorPrimary};
        border: 1px solid ${theme.colors.errorPrimary} !important;
        color: #fff !important;
      }
      .button-danger:hover,
      .button-danger:focus {
        border: 1px solid ${theme.colors.errorPrimary};
        background-color: ${theme.colors.errorPrimary};
        opacity: 0.9;
      }
      .button-active {
        background-color: ${theme.button.active.backgroundColor};
        border: ${theme.button.active.border || "none !important"};
        color: ${theme.button.active.color};
      }
      .button-active:hover,
      .button-active:focus {
        background-color: ${theme.button.active.backgroundColor};
        border: ${theme.button.active.border || "none !important"};
        opacity: 0.9;
      }
      .button-primary {
        background-color: ${theme.button.primary.backgroundColor};
        border: ${theme.button.primary.border || "none !important"};
        color: ${theme.button.primary.color};
      }
      .button-primary:hover,
      .button-primary:focus {
        background-color: ${theme.button.primary.backgroundColor};
        border: ${theme.button.primary.border || "none !important"};
        opacity: 0.9;
      }
      .button-link-no-border:hover,
      .button-link-no-border {
        border: 1px solid transparent !important;
        /* color: ${theme.colors.infoPrimary} !important; */
        opacity: 0.9 !important;
      }
      .submitButton {
        margin-top: ${theme.spacing(1.3)}px;
        padding: 25px 12px !important;
      }
      .buttonLink {
        padding: 18px 33.2px !important;
      }
      .button:focus {
        border: 1px solid ${theme.colors.primary};
      }
      .button:hover {
        opacity: 0.8;
        border: 1px solid ${theme.colors.primary};
      }
      .button:disabled {
        background-color: ${theme.button.disabled.backgroundColor};
        border: ${theme.button.disabled.border || "none"};
        color: ${theme.button.disabled.color};
        pointer-events: none;
      }
      .buttonText {
        font-size: ${theme.button.fontSize};
        color: ${theme.colors.primary};
        font-style: normal;
        font-weight: ${theme.button.fontWeight};
      }
      .buttonLink {
        padding: 18px 33.2px 18.5px 33.2px !important;
        font-size: 20px;
        font-family: ${theme.fonts.primary};
      }
      .transparent {
        border: none !important;
        background: none !important;
      }
      .clickableText {
        border: none;
        background: none;
        cursor: pointer;
      }
      .orderReverse {
        order: -1;
      }
      .formItem {
        /* border-radius: 4px; */
        font-weight: 400;
        /* font-size: 15px; */
        flex: 1 0 auto;
        line-height: 1.4;
        margin: 0;
        width: 100%;
      }
      .formItem .ant-input-affix-wrapper {
        padding-top: 0;
        padding-bottom: 0;
      }
      .formItem .ant-form-item-control-input-content > input,
      .ant-input-password, .formItem .ant-select {
        padding: 15px 22px !important;
        transition: border-color .3s ease-out;
        background: #FFFFFF;
        border: 1px solid rgba(46, 46, 46, 0.16);
        box-sizing: border-box;
        border-radius: 40px;
      }
      .formItem input,
      .formItem textarea,
      .formItem .ant-select-selection-item  {
        font-family: ${theme.fonts.primary};
        font-style: normal;
        font-weight: 600;
        font-size: 22px;
      }
      .formItem .ant-select {
        padding-left: 0 !important;
        padding-right: 0 !important;
      }
      .formItem .ant-select .ant-select-selector {
        padding-left: 21px;
        padding-right: 21px;
      }
      .formItem .ant-select-selection-search {
        padding-left: 12px;
        padding-right: 12px;
      }
      .formItem .ant-select-focused .ant-select-selector,
      .formItem .ant-select:not(.ant-select-customize-input) .ant-select-selector {
        border: none;
        background-color: transparent;
        box-shadow: none !important;
      }
      .contactFormItem input,
      .contactFormItem textarea {
        border-radius: 5px !important;
        border: 2px solid ${theme.colors.primary} !important;
      }

      .contactFormItem input {
        border-radius: 5px !important;
        border: 2px solid ${theme.colors.primary} !important;
      }
      .contactFormItem .ant-form-item-control-input-content > input,
      .contactFormItem .ant-form-item-control-input-content > textarea {
        padding: 11px 22px !important;
        color: ${theme.colors.lightDark};
      }
      // checkbox
      .formItem .ant-checkbox {
        top: 1.2px;
      }
      .formItem .ant-checkbox .ant-checkbox-inner {
        width: 16px;
        height: 16px;
        background-color: transparent;
        border-color: ${theme.colors.primary};
      }
      .formItem .ant-checkbox-disabled .ant-checkbox-inner {
        width: 16px;
        height: 16px;
        background-color: gray;
      }

      .formItem .ant-checkbox-checked .ant-checkbox-inner {
        width: 16px;
        height: 16px;
        background-color: ${theme.colors.primary};
      }
      .noRoundedFormItem input {
        background: #FFFFFF !important;
        border: 2px solid ${theme.colors.darkGray} !important;
        border-radius: 5px !important;
        font-size: 14px;
      }
      .typography {
        font-family: ${theme.fonts.primary};
        line-height: 1.38;
      }
      .bold {
        font-weight: 800 !important;
      }
      .medium {
        font-weight: 500 !important;
      }
      .normal {
        font-weight: 300 !important;
      }
      .smallText {
        font-size: 18px !important;
      }
      .extraSmallText {
        font-size: 16px !important;
      }
      .fs-15 {
        font-size: 15px !important;
      }
      .primary {
        color: ${theme.colors.primary} !important;
      }
      .light {
        color: #fff !important;
      }
      .dark {
        color: ${theme.colors.dark} !important;
      }
      .lightDark {
        color: ${theme.colors.lightDark} !important;
      }
      .active, .active:hover, .active:focus {
        color: ${theme.colors.active} !important;
      }
      .default {
        color: #000 !important;
      }
      .initialFlex {
        align-self: normal !important;
        flex: none !important;
      }
      .noListStyle {
        list-style: none;
      }
      .noGutterBottom {
        margin-bottom: 0px !important;
      }

      .flexRow {
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        flex-wrap: wrap;
      }
      .flexColumn {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        flex-wrap: nowrap;
      }
      .flexCenter {
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        align-items: center;
        justify-content: center;
      }
      .flexStretch {
        display: flex;
        flex-direction: column;
        align-items: stretch;
      }
      .stretch {
        align-items: stretch;
      }
      .alignCenter {
        align-items: center;
      }
      .flexStart {
        align-items: flex-start;
      }
      .flexEnd {
        align-items: flex-end;
      }
      .spaceBetween {
        justify-content: space-between;
      }
      .spaceAround {
        justify-content: space-around;
      }
      .justifyStart {
        justify-content: flex-start;
      }
      .justifyEnd {
        justify-content: flex-end;
      }
      .justifyCenter {
        justify-content: center;
      }
      .stretchSelf {
        align-self: stretch;
      }
      .flexEndSelf {
        align-self: flex-end;
      }
      .centerSelf {
        align-self: center;
      }
      .flex1 {
        flex: 1;
      }
      .wrap {
        flex-wrap: wrap;
      }
      .nowrap {
        flex-wrap: nowrap;
      }
      .shrink0 {
        flex-shrink: 0;
      }
      .shrink1 {
        flex-shrink: 1;
      }

      .flexItem {
        padding: 10px;
      }
      /*------------------*/

      .textCenter {
        text-align: center;
      }
      .textLeft {
        text-align: left;
      }
      .textRight {
        text-align: right;
      }
      .errorColor {
        color: #ec554f;
      }
      .ellipsis {
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
      .gridBorder {
        border-right: 1px solid #e2e2e2;
        border-bottom: 1px solid #e2e2e2;
      }
      .width100 {
        width: 100%;
      }
      .height100 {
        height: 100%;
      }
      .height100vh {
        height: 100vh;
      }
      .minHeight100 {
        min-height: 100vh;
      }
      .minHeight50 {
        min-height: 50vh;
      }
      .top0 {
        top: 0;
      }
      .pointer {
        cursor: pointer;
      }
      .cursorInitial {
        cursor: initial !important;
      }
      .overflowHidden {
        overflow: hidden;
      }
      .overflowAuto {
        overflow: auto;
      }
      .positionRelative {
        position: relative;
      }
      .positionAbsolute {
        position: absolute;
      }
      .overParent {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }
      .floatRight {
        float: right;
      }
      .fullWidth {
        width: 100%;
      }
      .hidden {
        opacity: 0;
      }
      .visible {
        opacity: 1;
      }
      .transition300ms {
        transition: all 300ms ease-in-out;
      }
      .blackColor {
        color: #000 !important;
      }
      .bgWhite {
        background-color: #fff;
      }
      .bgTransparent {
        background-color: transparent !important;
      }
      .bgPrimary {
        background-color: ${theme.colors.primary} !important;
      }
      .br0 {
        border-radius: 0px !important;
      }
      .m-0 {
        margin: 0px;
      }
      .m-x-0 {
        margin-right: 0px;
        margin-left: 0px;
      }
      .m-x-5 {
        margin-right: 5px;
        margin-left: 5px;
      }
      .m-x-8 {
        margin-right: 8px;
        margin-left: 8px;
      }
      .m-x-10 {
        margin-right: 10px;
        margin-left: 10px;
      }
      .m-x-15 {
        margin-right: 15px;
        margin-left: 15px;
      }
      .m-x-20 {
        margin-right: 20px;
        margin-left: 20px;
      }
      .m-x-25 {
        margin-right: 25px;
        margin-left: 25px;
      }
      
      .m-y-5 {
        margin-top: 5px;
        margin-bottom: 5px;
      }
      .m-y-8 {
        margin-top: 8px;
        margin-bottom: 8px;
      }
      .m-y-10 {
        margin-top: 10px;
        margin-bottom: 10px;
      }
      .m-y-15 {
        margin-top: 15px;
        margin-bottom: 15px;
      }
      .m-y-20 {
        margin-top: 20px;
        margin-bottom: 20px;
      }
      .m-y-25 {
        margin-top: 25px;
        margin-bottom: 25px;
      }

      .m-r-5 {
        margin-right: 5px;
      }
      .m-r-8 {
        margin-right: 8px;
      }
      .m-r-10 {
        margin-right: 10px;
      }
      .m-r-15 {
        margin-right: 15px;
      }
      .m-r-20 {
        margin-right: 20px;
      }
      .m-r-25 {
        margin-right: 25px;
      }

      .m-t-0 {
        margin-top: 0px;
      }
      .m-t-2 {
        margin-top: 2px;
      }
      .m-t-3 {
        margin-top: 3px;
      }
      .m-t-5 {
        margin-top: 5px;
      }
      .m-t-10 {
        margin-top: 10px;
      }
      .m-t-15 {
        margin-top: 15px;
      }
      .m-t-20 {
        margin-top: 20px;
      }
      .m-t-25 {
        margin-top: 25px;
      }
      .m-t-30 {
        margin-top: 30px;
      }
      .m-t-50 {
        margin-top: 50px;
      }

      .m-l-0 {
        margin-left: 0px;
      }
      .m-l-5 {
        margin-left: 5px;
      }
      .m-l-8 {
        margin-left: 8px;
      }
      .m-l-10 {
        margin-left: 10px;
      }
      .m-l-15 {
        margin-left: 15px;
      }
      .m-l-20 {
        margin-left: 20px;
      }
      .m-l-25 {
        margin-left: 25px;
      }
      .m-b-3 {
        margin-bottom: 3px;
      }
      .m-b-5 {
        margin-bottom: 5px;
      }
      .m-b-8 {
        margin-bottom: 8px;
      }
      .m-b-10 {
        margin-bottom: 10px;
      }
      .m-b-15 {
        margin-bottom: 15px;
      }
      .m-b-20 {
        margin-bottom: 15px;
      }
      .m-b-25 {
        margin-bottom: 25px;
      }
      .m-b-30 {
        margin-bottom: 30px;
      }
      .m-b-35 {
        margin-bottom: 35px;
      }

      .p-x-5 {
        padding-right: 5px;
        padding-left: 5px;
      }
      .p-x-8 {
        padding-right: 8px;
        padding-left: 8px;
      }
      .p-x-10 {
        padding-right: 10px;
        padding-left: 10px;
      }
      .p-x-15 {
        padding-right: 15px;
        padding-left: 15px;
      }
      .p-x-20 {
        padding-right: 20px;
        padding-left: 20px;
      }
      .p-x-25 {
        padding-right: 25px;
        padding-left: 25px;
      }
      
      .p-y-5 {
        padding-top: 5px;
        padding-bottom: 5px;
      }
      .p-y-8 {
        padding-top: 8px;
        padding-bottom: 8px;
      }
      .p-y-10 {
        padding-top: 10px;
        padding-bottom: 10px;
      }
      .p-y-15 {
        padding-top: 15px;
        padding-bottom: 15px;
      }
      .p-y-20 {
        padding-top: 20px;
        padding-bottom: 20px;
      }
      .p-y-25 {
        padding-top: 25px;
        padding-bottom: 25px;
      }
      .p-y-50 {
        padding-top: 50px;
        padding-bottom: 50px;
      }
      .p-r-5 {
        padding-right: 5px;
      }
      .p-r-8 {
        padding-right: 8px;
      }
      .p-r-10 {
        padding-right: 10px;
      }
      .p-r-15 {
        padding-right: 15px;
      }
      .p-r-20 {
        padding-right: 20px;
      }
      .p-r-25 {
        padding-right: 25px;
      }
      .p-t-10 {
        padding-top: 10px;
      }
      .p-t-15 {
        padding-top: 15px;
      }
      .p-t-20 {
        padding-top: 20px;
      }
      .p-t-25 {
        padding-top: 25px;
      }
      .p-t-50 {
        padding-top: 50px;
      }
      .p-l-5 {
        padding-left: 5px;
      }
      .p-l-8 {
        padding-left: 8px;
      }
      .p-l-10 {
        padding-left: 10px;
      }
      .p-l-15 {
        padding-left: 15px;
      }
      .p-l-20 {
        padding-left: 20px;
      }
      .p-l-25 {
        padding-left: 25px;
      }
      .p-b-0 {
        padding-bottom: 0;
      }
      .p-b-3 {
        padding-bottom: 3px;
      }
      .p-b-5 {
        padding-bottom: 5px;
      }
      .p-b-8 {
        padding-bottom: 8px;
      }
      .p-b-10 {
        padding-bottom: 10px;
      }
      .p-b-15 {
        padding-bottom: 15px;
      }
      .p-b-25 {
        padding-bottom: 25px;
      }
      .p-t-0 {
        padding-top: 0;
      }
      .title12 {
        font-size: 12px;
      }
      .title14 {
        font-size: 14px;
      }
      .title18 {
        font-size: 18px;
      }
      .title22 {
        font-size: 22px;
      }
      .title28 {
        font-size: 28px;
      }
      .title38 {
        font-size: 38px;
      }
      .boxSizing {
        box-sizing: initial !important;
      }
      .r7 {
        border-radius: 7px;
      }
      .red {
        background-color: red;
      }
      .green {
        background-color: green;
      }
      .yellow {
        background-color: yellow;
      }
      .blue {
        background-color: blue;
      }
    `;

export const GlobalStyles = ({ theme }) => (
  <Global styles={getGlobalStyles(theme)} />
);
