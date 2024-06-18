(function (exports, litElement, cssTag_js, litHtml) {
    'use strict';

    /******************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise, SuppressedError, Symbol */


    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
        var e = new Error(message);
        return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
    };

    const style = litElement.css `
  ha-card {
    cursor: pointer;
    position: relative;
  }
            
.spacer {
  padding-top: 1em;
  border-top: solid 1px var(--primary-text-color);
}
        
.variations {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  font-weight: 300;
  color: var(--primary-text-color);
  list-style: none;
  padding: 3px 1em;
  margin: 0;
  // border-top: solid 1px var(--primary-text-color);
}

      .variations ha-icon {
        height: 22px;
        margin-right: 5px;
        color: var(--paper-item-icon-color);
      }
      
      .variations svg {
        height: 15px;
        margin-right: 5px;
        fill: var(--paper-item-icon-color);
      }
      
      .variations li {
        flex-basis: auto;
        width: 50%;
      }

      .variations li:nth-child(2n) {
        text-align: right;
      }

      .variations li:nth-child(2n) ha-icon {
        margin-right: 0;
        margin-left: 8px;
        float: right;
      }    
      
      .variations li:nth-child(2n) svg {
        margin-right: 0;
        margin-left: 8px;
        float: right;
      }    
      
`;

    const styleSummary = litElement.css `
  .current {
    padding-top: 1.2em;
    margin-bottom: 3.5em;
  }
  
  .icon.bigger {
    width: 10em;
    height: 10em;
    margin-top: -4em;
    position: absolute;
    left: 0em;
  }
  
  .title {
    position: absolute;
    left: calc(140px + (26 - 14) * ((100vw - 300px) / (1600 - 300)));
    top: 0.6em;
    font-weight: 300;
    font-size: calc(14px + (26 - 14) * ((100vw - 300px) / (1600 - 300)));
    color: var(--primary-text-color);
  }
  .moon {
    position: absolute;
    left: calc(115px + (26 - 14) * ((100vw - 300px) / (1600 - 300)));
    top: calc(63px - (26 - 14) * ((100vw - 300px) / (1600 - 300)));
    font-weight: 300;
    font-size: calc(14px + (26 - 14) * ((100vw - 300px) / (1600 - 300)));
    color: var(--primary-text-color);
    line-height:20px;
    display: inline-block;
  }
            
  .temp {
    position: absolute;
    // top: 0.65em;
    font-weight: 300;
    font-size: calc(35px + (26 - 14) * ((100vw - 300px) / (1600 - 300)));
    color: var(--primary-text-color);
    right: 1em;
    margin-top: 2px;
  }

  .tempc {
    position: absolute;
    font-weight: 300;
    font-size: calc(12px + (26 - 14) * ((100vw - 300px) / (1600 - 300)));
    // font-size: 1.5em;
    vertical-align: super;
    color: var(--primary-text-color);
    right: 0.7em;
    margin-top: -11px;
    margin-right: 7px;
  }      
     
`;

    const styleMeter = litElement.css `
  .meter {
    background: #efefef; /* Grigio */
    border-radius: 8px;
    border: 1px solid transparent; /* 2 */
    box-shadow:
      0 1px 3px 1px rgba(0,0,0,0.15) inset,
      0 0 0 1px #333; /* 1 */
    height: .75em;
    max-width: 5.5em;
    overflow: hidden;
    width: 100%;
  }

  /* WebKit */
  .meter::-webkit-meter-bar {
    background: #efefef; /* Grigio */
    border: 1px solid transparent; /* 2 */
    border-radius: 8px;
  }

  .meter::-webkit-meter-optimum-value,
  .meter::-webkit-meter-suboptimum-value,
  .meter::-webkit-meter-even-less-good-value {
    border-radius: 8px; 
  }

  .meter::-webkit-meter-optimum-value {
    background: #85cc00; /* verde #3C5C00; */
  }
      
  .meter::-webkit-meter-suboptimum-value {
    background: #F5D000;
  }
      
  .meter::-webkit-meter-even-less-good-value  {
    background: #e65000 ; /* Rosso #D14900; */
  }

  /* Firefox */
  .meter::-moz-meter-bar {
    border-radius: 8px;
  }

  .meter:-moz-meter-optimum::-moz-meter-bar {
    background: #3C5C00;
  }

  .meter:-moz-meter-sub-optimum::-moz-meter-bar {
    background: #F5D000;
  }

  .meter:-moz-meter-sub-sub-optimum::-moz-meter-bar {
    background: #D14900;
  }

`;

    const styleForecast = litElement.css `
  .day {
    flex: 1;
    display: block;
    text-align: center;
    color: var(--primary-text-color);
    border-right: 0.1em solid #d9d9d9;
    line-height: 2;
    box-sizing: border-box;
  }
  
  .dayname {
    text-transform: uppercase;
  }
      
  .icon {
    width: 50px;
    height: 50px;
    margin-right: 5px;
    display: inline-block;
    vertical-align: middle;
    background-size: contain;
    background-position: center center;
    background-repeat: no-repeat;
    text-indent: -9999px;
  }   
      
  .forecast {
    width: 100%;
    margin: 0 auto;
    display: flex;
  }
  
  .forecast .day:first-child {
    margin-left: 0;
  }
  
  .forecast .day:nth-last-child(1) {
    border-right: none;
    margin-right: 0;
  }  
`;

    const styleCamera = litElement.css `
      .camera-container {
        margin-top: 10px;
        height: 100%;
        width: 100%;
        display: flex;
        align-items: stretch;
        // position: absolute;
        // background: #000;
      } 
      .camera-image {
        flex: 3;
        height: 100%;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
      }
      .camera-image > img {
        display: inline-block;
        max-width: 100%;
        max-height: 100%;
      }
`;

    const styleNightAndDay = litElement.css `
  .nd-container {
    margin: auto;
    padding-top: 1.3em;
    padding-bottom: 1.3em;
    padding-left: 1em;
    padding-right: 1em;
    
    position: relative;
    // background: #5C97FF;
    overflow: hidden;
  }
// .ha-card-night:before {
//   content: ' ';
//   display: block;
//   position: absolute;
//   left: 0;
//   top: 0;
//   width: 100%;
//   height: 100%;
//   z-index: 0;
//   opacity: calc(attr(data-opacity));
//   background-image: url('https://raw.githubusercontent.com/tingletech/moon-phase/gh-pages/background.jpg');
//   background-repeat: no-repeat;
//   background-position: 50% 0;
//  
//   -ms-background-size: cover;
//   -o-background-size: cover;
//   -moz-background-size: cover;
//   -webkit-background-size: cover;
//   background-size: cover;
// }
`;

    const getSeaStyle = (path) => {
        return `
  
  
.synoptic {
  width: 100%;
  border-collapse: collapse;
}

table.synoptic tr:not(:last-child) {
  border-bottom: 1px solid #476b6b;
  // background-color: cadetblue;
}
  
table.synoptic td {
  vertical-align: top;
}
  
.msw-sw
{
    display:            inline-block;
    width:              30px;
    height:             30px;
    background:         url("${path}/we-sprite.png") no-repeat top left;
}
.msw-sw-1{ background-position: 0 0; width: 30px; height: 30px; } 
.msw-sw-10{ background-position: 0 -60px; width: 30px; height: 30px; } 
.msw-sw-11{ background-position: 0 -120px; width: 30px; height: 30px; } 
.msw-sw-12{ background-position: 0 -180px; width: 30px; height: 30px; } 
.msw-sw-13{ background-position: 0 -240px; width: 30px; height: 30px; } 
.msw-sw-14{ background-position: 0 -300px; width: 30px; height: 30px; } 
.msw-sw-15{ background-position: 0 -360px; width: 30px; height: 30px; } 
.msw-sw-16{ background-position: 0 -420px; width: 30px; height: 30px; } 
.msw-sw-17{ background-position: 0 -480px; width: 30px; height: 30px; } 
.msw-sw-18{ background-position: 0 -540px; width: 30px; height: 30px; } 
.msw-sw-19{ background-position: 0 -600px; width: 30px; height: 30px; } 
.msw-sw-2{ background-position: 0 -660px; width: 30px; height: 30px; } 
.msw-sw-20{ background-position: 0 -720px; width: 30px; height: 30px; } 
.msw-sw-21{ background-position: 0 -780px; width: 30px; height: 30px; } 
.msw-sw-22{ background-position: 0 -840px; width: 30px; height: 30px; } 
.msw-sw-23{ background-position: 0 -900px; width: 30px; height: 30px; } 
.msw-sw-24{ background-position: 0 -960px; width: 30px; height: 30px; } 
.msw-sw-25{ background-position: 0 -1020px; width: 30px; height: 30px; } 
.msw-sw-26{ background-position: 0 -1080px; width: 30px; height: 30px; } 
.msw-sw-27{ background-position: 0 -1140px; width: 30px; height: 30px; } 
.msw-sw-28{ background-position: 0 -1200px; width: 30px; height: 30px; } 
.msw-sw-29{ background-position: 0 -1260px; width: 30px; height: 30px; } 
.msw-sw-3{ background-position: 0 -1320px; width: 30px; height: 30px; } 
.msw-sw-30{ background-position: 0 -1380px; width: 30px; height: 30px; } 
.msw-sw-31{ background-position: 0 -1440px; width: 30px; height: 30px; } 
.msw-sw-32{ background-position: 0 -1500px; width: 30px; height: 30px; } 
.msw-sw-33{ background-position: 0 -1560px; width: 30px; height: 30px; } 
.msw-sw-34{ background-position: 0 -1620px; width: 30px; height: 30px; } 
.msw-sw-35{ background-position: 0 -1680px; width: 30px; height: 30px; } 
.msw-sw-36{ background-position: 0 -1740px; width: 30px; height: 30px; } 
.msw-sw-37{ background-position: 0 -1800px; width: 30px; height: 30px; } 
.msw-sw-38{ background-position: 0 -1860px; width: 30px; height: 30px; } 
.msw-sw-4{ background-position: 0 -1920px; width: 30px; height: 30px; } 
.msw-sw-5{ background-position: -60px 0; width: 30px; height: 30px; } 
.msw-sw-6{ background-position: -60px -60px; width: 30px; height: 30px; } 
.msw-sw-7{ background-position: -60px -120px; width: 30px; height: 30px; } 
.msw-sw-8{ background-position: -60px -180px; width: 30px; height: 30px; } 
.msw-sw-9{ background-position: -60px -240px; width: 30px; height: 30px; }

.msw-swa /* Inherits from swell arrows */
{
    background:         url("${path}/sa-sprite.png") no-repeat top left;
}
.msw-swa-10{ background-position: 0 0; width: 26px; height: 26px; } 
.msw-swa-100{ background-position: 0 -52px; width: 26px; height: 26px; } 
.msw-swa-105{ background-position: 0 -104px; width: 26px; height: 26px; } 
.msw-swa-110{ background-position: 0 -156px; width: 26px; height: 26px; } 
.msw-swa-115{ background-position: 0 -208px; width: 26px; height: 26px; } 
.msw-swa-120{ background-position: 0 -260px; width: 26px; height: 26px; } 
.msw-swa-125{ background-position: 0 -312px; width: 26px; height: 26px; } 
.msw-swa-130{ background-position: 0 -364px; width: 26px; height: 26px; } 
.msw-swa-135{ background-position: 0 -416px; width: 26px; height: 26px; } 
.msw-swa-140{ background-position: 0 -468px; width: 26px; height: 26px; } 
.msw-swa-145{ background-position: 0 -520px; width: 26px; height: 26px; } 
.msw-swa-15{ background-position: 0 -572px; width: 26px; height: 26px; } 
.msw-swa-150{ background-position: 0 -624px; width: 26px; height: 26px; } 
.msw-swa-155{ background-position: 0 -676px; width: 26px; height: 26px; } 
.msw-swa-160{ background-position: 0 -728px; width: 26px; height: 26px; } 
.msw-swa-165{ background-position: 0 -780px; width: 26px; height: 26px; } 
.msw-swa-170{ background-position: 0 -832px; width: 26px; height: 26px; } 
.msw-swa-175{ background-position: 0 -884px; width: 26px; height: 26px; } 
.msw-swa-180{ background-position: 0 -936px; width: 26px; height: 26px; } 
.msw-swa-185{ background-position: 0 -988px; width: 26px; height: 26px; } 
.msw-swa-190{ background-position: 0 -1040px; width: 26px; height: 26px; } 
.msw-swa-195{ background-position: 0 -1092px; width: 26px; height: 26px; } 
.msw-swa-20{ background-position: 0 -1144px; width: 26px; height: 26px; } 
.msw-swa-200{ background-position: 0 -1196px; width: 26px; height: 26px; } 
.msw-swa-205{ background-position: 0 -1248px; width: 26px; height: 26px; } 
.msw-swa-210{ background-position: 0 -1300px; width: 26px; height: 26px; } 
.msw-swa-215{ background-position: 0 -1352px; width: 26px; height: 26px; } 
.msw-swa-220{ background-position: 0 -1404px; width: 26px; height: 26px; } 
.msw-swa-225{ background-position: 0 -1456px; width: 26px; height: 26px; } 
.msw-swa-230{ background-position: 0 -1508px; width: 26px; height: 26px; } 
.msw-swa-235{ background-position: 0 -1560px; width: 26px; height: 26px; } 
.msw-swa-240{ background-position: 0 -1612px; width: 26px; height: 26px; } 
.msw-swa-245{ background-position: 0 -1664px; width: 26px; height: 26px; } 
.msw-swa-25{ background-position: 0 -1716px; width: 26px; height: 26px; } 
.msw-swa-250{ background-position: 0 -1768px; width: 26px; height: 26px; } 
.msw-swa-255{ background-position: 0 -1820px; width: 26px; height: 26px; } 
.msw-swa-260{ background-position: 0 -1872px; width: 26px; height: 26px; } 
.msw-swa-265{ background-position: 0 -1924px; width: 26px; height: 26px; } 
.msw-swa-270{ background-position: -52px 0; width: 26px; height: 26px; } 
.msw-swa-275{ background-position: -52px -52px; width: 26px; height: 26px; } 
.msw-swa-280{ background-position: -52px -104px; width: 26px; height: 26px; } 
.msw-swa-285{ background-position: -52px -156px; width: 26px; height: 26px; } 
.msw-swa-290{ background-position: -52px -208px; width: 26px; height: 26px; } 
.msw-swa-295{ background-position: -52px -260px; width: 26px; height: 26px; } 
.msw-swa-30{ background-position: -52px -312px; width: 26px; height: 26px; } 
.msw-swa-300{ background-position: -52px -364px; width: 26px; height: 26px; } 
.msw-swa-305{ background-position: -52px -416px; width: 26px; height: 26px; } 
.msw-swa-310{ background-position: -52px -468px; width: 26px; height: 26px; } 
.msw-swa-315{ background-position: -52px -520px; width: 26px; height: 26px; } 
.msw-swa-320{ background-position: -52px -572px; width: 26px; height: 26px; } 
.msw-swa-325{ background-position: -52px -624px; width: 26px; height: 26px; } 
.msw-swa-330{ background-position: -52px -676px; width: 26px; height: 26px; } 
.msw-swa-335{ background-position: -52px -728px; width: 26px; height: 26px; } 
.msw-swa-340{ background-position: -52px -780px; width: 26px; height: 26px; } 
.msw-swa-345{ background-position: -52px -832px; width: 26px; height: 26px; } 
.msw-swa-35{ background-position: -52px -884px; width: 26px; height: 26px; } 
.msw-swa-350{ background-position: -52px -936px; width: 26px; height: 26px; } 
.msw-swa-355{ background-position: -52px -988px; width: 26px; height: 26px; } 
.msw-swa-360{ background-position: -52px -1040px; width: 26px; height: 26px; } 
.msw-swa-40{ background-position: -52px -1092px; width: 26px; height: 26px; } 
.msw-swa-45{ background-position: -52px -1144px; width: 26px; height: 26px; } 
.msw-swa-5{ background-position: -52px -1196px; width: 26px; height: 26px; } 
.msw-swa-50{ background-position: -52px -1248px; width: 26px; height: 26px; } 
.msw-swa-55{ background-position: -52px -1300px; width: 26px; height: 26px; } 
.msw-swa-60{ background-position: -52px -1352px; width: 26px; height: 26px; } 
.msw-swa-65{ background-position: -52px -1404px; width: 26px; height: 26px; } 
.msw-swa-70{ background-position: -52px -1456px; width: 26px; height: 26px; } 
.msw-swa-75{ background-position: -52px -1508px; width: 26px; height: 26px; } 
.msw-swa-80{ background-position: -52px -1560px; width: 26px; height: 26px; } 
.msw-swa-85{ background-position: -52px -1612px; width: 26px; height: 26px; } 
.msw-swa-90{ background-position: -52px -1664px; width: 26px; height: 26px; } 
.msw-swa-95{ background-position: -52px -1716px; width: 26px; height: 26px; }

.msw-ssa,
.msw-swa /* Wind arrows */
{
    display:            inline-block;
    width:              26px;
    height:             26px;
    background:         url("${path}/wa-sprite.png") no-repeat top left;
}
.msw-ssa-10{ background-position: 0 0; width: 26px; height: 26px; } 
.msw-ssa-100{ background-position: 0 -52px; width: 26px; height: 26px; } 
.msw-ssa-105{ background-position: 0 -104px; width: 26px; height: 26px; } 
.msw-ssa-110{ background-position: 0 -156px; width: 26px; height: 26px; } 
.msw-ssa-115{ background-position: 0 -208px; width: 26px; height: 26px; } 
.msw-ssa-120{ background-position: 0 -260px; width: 26px; height: 26px; } 
.msw-ssa-125{ background-position: 0 -312px; width: 26px; height: 26px; } 
.msw-ssa-130{ background-position: 0 -364px; width: 26px; height: 26px; } 
.msw-ssa-135{ background-position: 0 -416px; width: 26px; height: 26px; } 
.msw-ssa-140{ background-position: 0 -468px; width: 26px; height: 26px; } 
.msw-ssa-145{ background-position: 0 -520px; width: 26px; height: 26px; } 
.msw-ssa-15{ background-position: 0 -572px; width: 26px; height: 26px; } 
.msw-ssa-150{ background-position: 0 -624px; width: 26px; height: 26px; } 
.msw-ssa-155{ background-position: 0 -676px; width: 26px; height: 26px; } 
.msw-ssa-160{ background-position: 0 -728px; width: 26px; height: 26px; } 
.msw-ssa-165{ background-position: 0 -780px; width: 26px; height: 26px; } 
.msw-ssa-170{ background-position: 0 -832px; width: 26px; height: 26px; } 
.msw-ssa-175{ background-position: 0 -884px; width: 26px; height: 26px; } 
.msw-ssa-180{ background-position: 0 -936px; width: 26px; height: 26px; } 
.msw-ssa-185{ background-position: 0 -988px; width: 26px; height: 26px; } 
.msw-ssa-190{ background-position: 0 -1040px; width: 26px; height: 26px; } 
.msw-ssa-195{ background-position: 0 -1092px; width: 26px; height: 26px; } 
.msw-ssa-20{ background-position: 0 -1144px; width: 26px; height: 26px; } 
.msw-ssa-200{ background-position: 0 -1196px; width: 26px; height: 26px; } 
.msw-ssa-205{ background-position: 0 -1248px; width: 26px; height: 26px; } 
.msw-ssa-210{ background-position: 0 -1300px; width: 26px; height: 26px; } 
.msw-ssa-215{ background-position: 0 -1352px; width: 26px; height: 26px; } 
.msw-ssa-220{ background-position: 0 -1404px; width: 26px; height: 26px; } 
.msw-ssa-225{ background-position: 0 -1456px; width: 26px; height: 26px; } 
.msw-ssa-230{ background-position: 0 -1508px; width: 26px; height: 26px; } 
.msw-ssa-235{ background-position: 0 -1560px; width: 26px; height: 26px; } 
.msw-ssa-240{ background-position: 0 -1612px; width: 26px; height: 26px; } 
.msw-ssa-245{ background-position: 0 -1664px; width: 26px; height: 26px; } 
.msw-ssa-25{ background-position: 0 -1716px; width: 26px; height: 26px; } 
.msw-ssa-250{ background-position: 0 -1768px; width: 26px; height: 26px; } 
.msw-ssa-255{ background-position: 0 -1820px; width: 26px; height: 26px; } 
.msw-ssa-260{ background-position: 0 -1872px; width: 26px; height: 26px; } 
.msw-ssa-265{ background-position: 0 -1924px; width: 26px; height: 26px; } 
.msw-ssa-270{ background-position: -52px 0; width: 26px; height: 26px; } 
.msw-ssa-275{ background-position: -52px -52px; width: 26px; height: 26px; } 
.msw-ssa-280{ background-position: -52px -104px; width: 26px; height: 26px; } 
.msw-ssa-285{ background-position: -52px -156px; width: 26px; height: 26px; } 
.msw-ssa-290{ background-position: -52px -208px; width: 26px; height: 26px; } 
.msw-ssa-295{ background-position: -52px -260px; width: 26px; height: 26px; } 
.msw-ssa-30{ background-position: -52px -312px; width: 26px; height: 26px; } 
.msw-ssa-300{ background-position: -52px -364px; width: 26px; height: 26px; } 
.msw-ssa-305{ background-position: -52px -416px; width: 26px; height: 26px; } 
.msw-ssa-310{ background-position: -52px -468px; width: 26px; height: 26px; } 
.msw-ssa-315{ background-position: -52px -520px; width: 26px; height: 26px; } 
.msw-ssa-320{ background-position: -52px -572px; width: 26px; height: 26px; } 
.msw-ssa-325{ background-position: -52px -624px; width: 26px; height: 26px; } 
.msw-ssa-330{ background-position: -52px -676px; width: 26px; height: 26px; } 
.msw-ssa-335{ background-position: -52px -728px; width: 26px; height: 26px; } 
.msw-ssa-340{ background-position: -52px -780px; width: 26px; height: 26px; } 
.msw-ssa-345{ background-position: -52px -832px; width: 26px; height: 26px; } 
.msw-ssa-35{ background-position: -52px -884px; width: 26px; height: 26px; } 
.msw-ssa-350{ background-position: -52px -936px; width: 26px; height: 26px; } 
.msw-ssa-355{ background-position: -52px -988px; width: 26px; height: 26px; } 
.msw-ssa-40{ background-position: -52px -1040px; width: 26px; height: 26px; } 
.msw-ssa-45{ background-position: -52px -1092px; width: 26px; height: 26px; } 
.msw-ssa-5{ background-position: -52px -1144px; width: 26px; height: 26px; } 
.msw-ssa-50{ background-position: -52px -1196px; width: 26px; height: 26px; } 
.msw-ssa-55{ background-position: -52px -1248px; width: 26px; height: 26px; } 
.msw-ssa-60{ background-position: -52px -1300px; width: 26px; height: 26px; } 
.msw-ssa-65{ background-position: -52px -1352px; width: 26px; height: 26px; } 
.msw-ssa-70{ background-position: -52px -1404px; width: 26px; height: 26px; } 
.msw-ssa-75{ background-position: -52px -1456px; width: 26px; height: 26px; } 
.msw-ssa-80{ background-position: -52px -1508px; width: 26px; height: 26px; } 
.msw-ssa-85{ background-position: -52px -1560px; width: 26px; height: 26px; } 
.msw-ssa-90{ background-position: -52px -1612px; width: 26px; height: 26px; } 
.msw-ssa-95{ background-position: -52px -1664px; width: 26px; height: 26px; }

.list-group-content {
    display: inline-block;
    vertical-align: middle;
}

.inline-block {
    display: inline-block;
    *display: inline;
    zoom: 1;
}

.svg {
    display: none
}

.svg-icon-container {
    display: inline-block;
    vertical-align: middle;
    margin-left: 5px
}

.svg {
    display: none!important
}

.svg-icon {
    display: inline-block;
    vertical-align: middle
}



.svg-wind-icon {
    width: 20px;
    height: 27px;
    background-size: auto 100%;
    background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iMjguODc0cHgiIGhlaWdodD0iMTkuOTAxcHgiIHZpZXdCb3g9IjAgMCAyOC44NzQgMTkuOTAxIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAyOC44NzQgMTkuOTAxIiB4bWw6c3BhY2U9InByZXNlcnZlIj48cGF0aCBkPSJNNy42MTYgOS43NTVjMCAwIDAuMjA3LTIuMjI3IDAuNjQ1LTQuNjY3QzguNDY4IDMuOSA5IDAgOSAwSDYuNTkxSDQuMTQ4YzAgMCAwLjYgMy45IDAuOCA1LjEgQzUuMzYgNy41IDUuNiA5LjggNS42IDkuNzU1TDAgNy40MzlsNi41OTEgMTIuMzM0bDYuNTkxLTEyLjMzNEw3LjYxNiA5Ljc1NXoiLz48cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNMjMuMTg4IDkuNzU1YzAgMCAwLjIwNy0yLjIyNyAwLjY0NS00LjY2N0MyNC4wNCAzLjkgMjQuNiAwIDI0LjYgMGgtMi40NDNoLTIuNDQzIGMwIDAgMC42IDMuOSAwLjggNS4wODhjMC40MzggMi40IDAuNiA0LjcgMC42IDQuNjY3bC01LjU2Ny0yLjMxNmw2LjU5MSAxMi4zMzRsNi41OTEtMTIuMzM0TDIzLjE4OCA5Ljc1NXoiLz48L3N2Zz4=")
}

.svg-wind-icon.svg-icon-white {
    background-position: 100% 0
}

.svg-wind-icon.svg-icon-sm {
    width: 13px;
    height: 20px
}

.svg-wind-icon-dark {
    width: 27px;
    height: 27px;
    background-size: 100%;
    background-image: url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPjxzdmcgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjMwcHgiIGhlaWdodD0iMzBweCIgdmlld0JveD0iMCAwIDMwIDMwIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAzMCAzMCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+PGcgaWQ9IkxheWVyXzIiPjxjaXJjbGUgZmlsbD0ibm9uZSIgY3g9IjE1IiBjeT0iMTUiIHI9IjE1Ii8+PC9nPjxnIGlkPSJMYXllcl8xIj48cGF0aCBmaWxsPSIjMUExQTFBIiBkPSJNMTYuNTU0LDE1LjA0MWMwLDAsMC4zMDktMy4zMjUsMC45NjMtNi45NjhjMC4zMDktMS43MTUsMS4xNTQtNy41OTcsMS4xNTQtNy41OTdoLTMuNjQ3aC0zLjY0NmMwLDAsMC44NDYsNS44ODIsMS4xNTQsNy41OTdjMC42NTQsMy42NDMsMC45NjMsNi45NjgsMC45NjMsNi45NjhsLTguMzEyLTMuNDU3TDE1LjAyMywzMGw5Ljg0Mi0xOC40MTZMMTYuNTU0LDE1LjA0MXoiLz48L2c+PC9zdmc+")
}

.svg-wind-icon-danger {
    width: 27px;
    height: 27px;
    background-position: top;
    background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iMzBweCIgaGVpZ2h0PSIzMHB4IiB2aWV3Qm94PSIwIDAgMzAgMzAiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDMwIDMwOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+PHN0eWxlIHR5cGU9InRleHQvY3NzIj4uc3Qwe2ZpbGw6bm9uZTt9LnN0MXtmaWxsOiNFNzRDM0M7fTwvc3R5bGU+PGcgaWQ9IkxheWVyXzIiPjxjaXJjbGUgY2xhc3M9InN0MCIgY3g9IjE1IiBjeT0iMTUiIHI9IjE1Ii8+PC9nPjxnIGlkPSJMYXllcl8xXzFfIj48cGF0aCBjbGFzcz0ic3QxIiBkPSJNMTYuNiwxNWMwLDAsMC4zLTMuMywxLTdjMC4zLTEuNywxLjItNy42LDEuMi03LjZIMTVoLTMuNmMwLDAsMC44LDUuOSwxLjIsNy42YzAuNywzLjYsMSw3LDEsN2wtOC4zLTMuNUwxNSwzMGw5LjgtMTguNEwxNi42LDE1eiIvPjwvZz48L3N2Zz4=)
}

.svg-wind-icon-gray {
    width: 27px;
    height: 27px;
    background-position: top;
    background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgNC41IDcuMSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNC41IDcuMTsiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+LnN0MHtmaWxsOiM1NTU1NTU7fTwvc3R5bGU+PHBhdGggY2xhc3M9InN0MCIgZD0iTTQuNCwzSDNWMEgxLjZ2M0gwLjJDMCwzLDAsMy4yLDAsMy4zTDIuMSw3YzAuMSwwLjEsMC4zLDAuMSwwLjMsMGwyLjEtMy42QzQuNiwzLjIsNC41LDMsNC40LDN6Ii8+PC9zdmc+)
}

.svg-wind-icon-light {
    width: 30px;
    height: 30px;
    background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMjgzLjUgMjgzLjUiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDI4My41IDI4My41OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+PHN0eWxlIHR5cGU9InRleHQvY3NzIj4uc3Qwe2ZpbGw6I0ZGRkZGRjt9PC9zdHlsZT48cGF0aCBjbGFzcz0ic3QwIiBkPSJNMTU1LjMsMTQyLjFjMCwwLDIuMi0yMy43LDYuOS00OS42YzIuMi0xMi4yLDguMi01NC4xLDguMi01NC4xaC0yNmgtMjZjMCwwLDYsNDEuOSw4LjIsNTQuMWM0LjcsMjUuOSw2LjksNDkuNiw2LjksNDkuNmwtNTkuMi0yNC42bDcwLjEsMTMxLjJsNzAuMS0xMzEuMkwxNTUuMywxNDIuMXoiLz48L3N2Zz4=)
}

// ----
.svg-swell-icon {
    width: 21px;
    height: 21px
}
.svg-swell-icon {
    text-indent: -9999px
}

.svg-swell-icon,.svg .svg-wind-icon {
    background-repeat: no-repeat;
    background-position: 0 0;
    display: inline-block;
    text-align: center
}

.svg-swell-icon {
    width: 17px;
    height: 23px;
    background-size: auto 100%;
    background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iNDMuOTU4cHgiIGhlaWdodD0iMTkuOTAxcHgiIHZpZXdCb3g9IjAgMCA0My45NTggMTkuOTAxIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCA0My45NTggMTkuOTAxIiB4bWw6c3BhY2U9InByZXNlcnZlIj48c3R5bGU+LnN0eWxlMHtmaWxsOgkjRkZGRkZGO30uc3R5bGUxe2ZpbGw6CSMzQ0JCRTg7fTwvc3R5bGU+PHBvbHlnb24gcG9pbnRzPSI2LjIsMTkuOSAxMi40LDAuNCA2LjIsNCAwLDAuNCIvPjxwb2x5Z29uIHBvaW50cz0iMjIsMTkuOSAyOC4yLDAuNCAyMiw0IDE1LjgsMC40IiBjbGFzcz0ic3R5bGUwIi8+PHBvbHlnb24gcG9pbnRzPSIzNy44LDE5LjkgNDQsMC40IDM3LjgsNCAzMS42LDAuNCIgY2xhc3M9InN0eWxlMSIvPjwvc3ZnPg==")
}

.svg-swell-icon.svg-icon-white {
    background-position: 60% 0
}

.svg-swell-icon-dark {
    width: 23px;
    height: 23px;
    background-size: 100%;
    background-position: 0 0;
    background-image: url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiIHdpZHRoPSI1MHB4IiBoZWlnaHQ9IjUwcHgiIHZpZXdCb3g9IjAgMCA1MCA1MCIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgNTAgNTAiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxnIGlkPSJMYXllcl8yIj48Y2lyY2xlIGZpbGwtb3BhY2l0eT0iMCIgY3g9IjI0Ljk5IiBjeT0iMjQuOTQ2IiByPSIyNC45NDYiLz48L2c+PGcgaWQ9IkxheWVyXzFfMV8iPjxwb2x5Z29uIGZpbGw9IiMxQTFBMUEiIHBvaW50cz0iMzkuOTYxLDUuMDA4IDI0Ljk2OSw0OS44OTMgMTAuMDM3LDUuMDA4IDI1LjAzOCwxMS4yNDIgIi8+PC9nPjwvc3ZnPg==")
}
`;
    };

    const cwcClimacellDayIcons = {
        freezing_rain_heavy: "rainy-3",
        "heavy freezing rain": "rainy-3",
        freezing_rain: "rainy-2",
        "freezing rain": "rainy-2",
        freezing_rain_light: "rainy-1",
        "light freezing rain": "rainy-1",
        freezing_drizzle: "rain-and-sleet-mix",
        "freezing drizzle": "rain-and-sleet-mix",
        ice_pellets_heavy: "rain-and-snow-mix",
        "heavy ice pellets": "rain-and-snow-mix",
        ice_pellets: "rain-and-snow-mix",
        "ice pellets": "rain-and-snow-mix",
        ice_pellets_light: "rain-and-snow-mix",
        "light ice pellets": "rain-and-snow-mix",
        snow_heavy: "snowy-3",
        "heavy snow": "snowy-3",
        snow: "snowy-2",
        snow_light: "snowy-1",
        "light snow": "snowy-1",
        flurries: "wind",
        tstorm: "tropical-storm",
        rain_heavy: "rainy-3",
        "heavy rain": "rainy-3",
        rain_light: "rainy-1",
        "light rain": "rainy-1",
        rain: "rainy-2",
        drizzle: "rainy-1",
        fog_light: "haze",
        "light fog": "haze",
        fog: "fog",
        cloudy: "cloudy-original",
        mostly_cloudy: "cloudy-day-3",
        "mostly cloudy": "cloudy-day-3",
        partly_cloudy: "cloudy-day-2",
        "partly cloudy": "cloudy-day-2",
        mostly_clear: "cloudy-day-1",
        "mostly clear": "cloudy-day-1",
        clear: "day",
    };
    const cwcClimacellNightIcons = Object.assign(Object.assign({}, cwcClimacellDayIcons), { freezing_rain_heavy: "rainy-6", "heavy freezing rain": "rainy-6", freezing_rain: "rainy-5", "freezing rain": "rainy-5", freezing_rain_light: "rainy-4", "light freezing rain": "rainy-4", 
        // freezing_drizzle: "rain-and-sleet-mix",
        // ice_pellets_heavy: "rain-and-snow-mix",
        // ice_pellets: "rain-and-snow-mix",
        // ice_pellets_light: "rain-and-snow-mix",
        snow_heavy: "snowy-6", "heavy snow": "snowy-6", snow: "snowy-5", snow_light: "snowy-4", "light snow": "snowy-4", 
        // flurries: "wind",
        // tstorm: "tropical-storm",
        rain_heavy: "rainy-6", "heavy rain": "rainy-6", rain_light: "rainy-4", "light rain": "rainy-4", rain: "rainy-5", drizzle: "rainy-4", 
        // fog_light: "haze",
        // fog: "fog",
        // cloudy: "cloudy",
        mostly_cloudy: "cloudy-night-3", "mostly cloudy": "cloudy-night-3", partly_cloudy: "cloudy-night-2", "partly cloudy": "cloudy-night-2", mostly_clear: "cloudy-night-1", "mostly clear": "cloudy-night-1", clear: "night", sunny: "night" });

    const cwcDarkskyDayIcons = {
        "clear": "day",
        "clear-day": "day",
        "rain": "rainy-2",
        "snow": "snowy-2",
        "sleet": "rain-and-sleet-mix",
        "wind": "cloudy-day-1",
        "fog": "fog",
        "cloudy": "cloudy-original",
        "partly-cloudy-day": "cloudy-day-2",
    };
    const cwcDarkskyNightIcons = Object.assign(Object.assign({}, cwcDarkskyDayIcons), { "clear": "night", "clear-night": "night", "wind": "cloudy-night-1", "partly-cloudy-day": "cloudy-night-2", "partly-cloudy-night": "cloudy-night-2" });

    const cwcOpenWeatherMapDayIcons = {
        "clear sky": "day",
        "few clouds": "cloudy-day-1",
        "scattered clouds": "cloudy-day-2",
        "broken clouds": "cloudy-day-3",
        "shower rain": "rainy-3",
        "rain": "rainy-2",
        "thunderstorm": "tropical-storm",
        "snow": "snowy-2",
        "mist": "fog",
    };
    const cwcOpenWeatherMapNightIcons = Object.assign(Object.assign({}, cwcOpenWeatherMapDayIcons), { "clear sky": "day-night", "few clouds": "cloudy-night-1", "scattered clouds": "cloudy-night-2", "broken clouds": "cloudy-night-3" });

    //clear=ok, partlycloudy=ok, cloudy=ok, partlycloudy-fog=ok, partlycloudy-light-rain=ok, partlycloudy-rain=ok,
    // light-rain=ok, rainy=ok, snowy-rainy=ok, partlycloudy-light-snow=ok, partlycloudy-snow=ok, light-snow=ok, snowy=ok,
    // partlycloudy-lightning=ok or lightning
    const cwcBuienradarDayIcons = {
        // freezing_rain_heavy: "rainy-3",
        // freezing_rain: "rainy-2",
        // freezing_rain_light: "rainy-1",
        // freezing_drizzle: "rain-and-sleet-mix",
        // ice_pellets_heavy: "rain-and-snow-mix",
        // ice_pellets: "rain-and-snow-mix",
        // ice_pellets_light: "rain-and-snow-mix",
        snowy: "snowy-3",
        "light-snow": "snowy-2",
        "snowy-rainy": "snowy-1",
        "partlycloudy-light-snow": "snowy-1",
        "partlycloudy-snow": "snowy-1",
        // flurries: "wind",
        // tstorm: "tropical-storm",
        // rain_heavy: "rainy-3",
        "partlycloudy-light-rain": "rainy-1",
        "light-rain": "rainy-1",
        "rainy": "rainy-2",
        "partlycloudy-rain": "rainy-1",
        // fog_light: "haze",
        "partlycloudy-fog": "fog",
        cloudy: "cloudy-original",
        // mostly_cloudy: "cloudy-day-3",
        partlycloudy: "cloudy-day-2",
        "partlycloudy-lightning": "cloudy-day-1",
        lightning: "cloudy-day-1",
        // mostly_clear: "cloudy-day-1",
        clear: "day",
    };
    const cwcBuienradarNightIcons = Object.assign({}, cwcBuienradarDayIcons);

    const cwcDefaultHassDayIcons = {
        cloudy: "cloudy-day-3",
        exceptional: "severe-thunderstorm",
        fog: "fog",
        hail: "snow-and-sleet-mix",
        lightning: "severe-thunderstorm",
        "lightning-rainy": "scattered-thunderstorms",
        partlycloudy: "cloudy-day-3",
        pouring: "rainy-6",
        rainy: "rainy-5",
        snowy: "snowy-6",
        "snowy-rainy": "snow-and-sleet-mix",
        sunny: "clear-day",
        windy: "wind",
        "windy-variant": "wind",
    };
    const cwcDefaultHassNightIcons = Object.assign(Object.assign({}, cwcDefaultHassDayIcons), { "clear-night": "clear-night" });

    let cwcLocale = { en: 0, it: 1, nl: 2, es: 3, de: 4, fr: 5, "sr-latn": 6, pt: 7, da: 8, "no-no": 9 };
    // export let cwcLocWindDirections = {
    //   'N': ['N', 'N', 'N', 'N', 'N', 'N', 'S'],
    //   'NNE': ['NNE', 'NNE', 'NNO', 'NNE', 'NNO', 'NNE', 'SSI'],
    //   'NE': ['NE', 'NE', 'NO', 'NE', 'NO', 'NE', 'SI'],
    //   'ENE': ['ENE', 'ENE', 'ONO', 'ENE', 'ONO', 'ENE', 'ISI'],
    //   'E': ['E', 'E', 'O', 'E', 'O', 'E', 'I'],
    //   'ESE': ['ESE', 'ESE', 'OZO', 'ESE', 'OSO', 'ESE', 'IJI'],
    //   'SE': ['SE', 'SE', 'ZO', 'SE', 'SO', 'SE', 'JI'],
    //   'SSE': ['SSE', 'SSE', 'ZZO', 'SSE', 'SSO', 'SSE', 'JJI'],
    //   'S': ['S', 'S', 'Z', 'S', 'S', 'S', 'J'],
    //   'SSW': ['SSW', 'SSO', 'ZZW', 'SSO', 'SSW', 'SSO', 'JJZ'],
    //   'SW': ['SW', 'SO', 'ZW', 'SO', 'SW', 'SO', 'JZ'],
    //   'WSW': ['WSW', 'OSO', 'WZW', 'OSO', 'WSW', 'OSO', 'ZSZ'],
    //   'W': ['W', 'O', 'W', 'O', 'W', 'O', 'Z'],
    //   'WNW': ['WNW', 'ONO', 'WNW', 'ONO', 'WNW', 'ONO', 'ZSZ'],
    //   'NW': ['NW', 'NO', 'NW', 'NO', 'NW', 'NO', 'SZ'],
    //   'NNW': ['NNW', 'NNO', 'NNW', 'NNO', 'NNW', 'NNO', 'SSZ'],
    // };
    // export let cwcTerms = {
    //   'Feels Like' : ['Feels Like', 'Percepita', 'Voelt Als', 'Parece que', 'Gef&uuml;hlt',
    //     'Ressentie', 'Subjektivni osećaj'],
    //   'new_moon': [ 'New moon', 'Novilunio', 'Nieuwe maan', 'Luna nueva', 'Neumond',
    //     'Nouvelle lune', 'Mlad mesec'],
    //   'new': [ 'New moon', 'Novilunio', 'Nieuwe maan', 'Luna nueva', 'Neumond',
    //     'Nouvelle lune', 'Mlad mesec'],
    //   'waxing_crescent': ['Waxing crescent', 'Luna crescente', 'Wassende sikkel', 'Media luna de cera', 'Zunehmende Sichel',
    //     'Premier croissant', 'Prva osmina'],
    //   'first_quarter': ['First quarter', 'Primo Quarto', 'Eerste kwartaal', 'Primer trimestre', 'Erstes Viertel',
    //     'Premier quartier', 'Prva četvrt'],
    //   'waxing_gibbous': ['Waxing Gibbous', 'Gibbosa crescente', 'Wassen Gibbous', 'Encerado Gibbous', 'Zunehmender Halbmond',
    //     'Gibbeuse croissante', 'Treća osmina'],
    //   'full': ['Full', 'Luna piena', 'Volledig', 'Completo', 'Vollmond',
    //     'Pleine lune', 'Pun mesec'],
    //   'waning_gibbous': ['Waning Gibbous', 'Gibbosa calante', 'Zwemmende Gibbous', 'Waning Gibbous', 'Abnehmender Halbmond',
    //     'Gibbeuse décroissante', 'Peta osmina'],
    //   'third_quarter': ['Third Quarter', 'Ultimo quarto', 'Derde Kwartier', 'Tercer cuarto', 'Drittes Viertel',
    //     'Dernier quartier', 'Treća četvrtina'],
    //   'last_quarter': ['Last Quarter', 'Ultimo quarto', 'Laatste Kwartier', 'Último cuarto', 'Letztes Viertel',
    //     'Dernier quartier', 'Zadnja četvrtina'],
    //   'waning_crescent': ['Waning Crescent', 'Luna calante', 'Zwemmende sikkel', 'Waning Crescent', 'Abnehmende Sichel',
    //     'Lune décroissante', 'Sedma osmina'],
    // } ;
    // 🌑 🌒 🌓 🌔 🌕 🌖 🌗 🌘 🌑
    let cwcMoonPhaseIcons = {
        new_moon: "🌑",
        new: "🌑",
        waxing_crescent: "🌒",
        first_quarter: "🌓",
        waxing_gibbous: "🌔",
        full: "🌕",
        full_moon: "🌕",
        waning_gibbous: "🌖",
        third_quarter: "🌗",
        last_quarter: "🌗",
        waning_crescent: "🌘"
    };

    function pad(n, width, z = undefined) {
        z = z || '0';
        n = n + '';
        return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
    }
    /**
     *
     * @param imageSrc
     */
    function imageExist(imageSrc) {
        return new Promise((resolve) => {
            setTimeout(() => {
                let img = new Image();
                img.onload = () => { resolve(true); };
                img.onerror = () => { resolve(false); };
                img.src = imageSrc;
            }, 100);
        });
    }
    /**
     *
     * @param term
     * @param terms
     */
    const translate = (term, terms) => {
        // console.info(">>>>loc:" + lang + "" + cwcLocale[lang] ) ;
        return terms[Object.keys(terms).find(key => key.toLowerCase() === term.toLowerCase())]
            ? terms[Object.keys(terms).find(key => key.toLowerCase() === term.toLowerCase())]
            : term;
    };
    /**
     *
     * @param condition
     * @param iconsConfig
     * @param sunState
     */
    const getWeatherIcon = (condition, iconsConfig, sunState) => {
        let isNight = sunState && sunState == "below_horizon";
        let iconName = isNight ? iconsConfig.iconsNight[condition] : iconsConfig.iconsDay[condition];
        if (iconsConfig.path == null) {
            console.info("Image path not found. (hacsImagePathExist=" + exports.hacsImagePathExist
                + ")(manImagePathExist=" + exports.manImagePathExist);
        }
        if (undefined === iconName)
            console.info("Icons issue. States: icons_model=" + iconsConfig.icons_model
                + " - isDay=" + (!isNight) + " - condition: " + condition + ".");
        //console.info(this._config.weather.icons_model + ' - ' + condition + ' - ' + this._weatherIconsDay[condition]) ;
        return `${iconsConfig.path}/${iconsConfig.iconType}/${iconName}.svg`;
    };
    /**
     *
     * @param measure
     * @param hass
     */
    const getUnit = (hass, measure) => {
        const lengthUnit = hass.config.unit_system.length;
        switch (measure) {
            case "air_pressure":
                return lengthUnit === "km" ? "hPa" : "inHg";
            case "length":
                return lengthUnit;
            case "precipitation":
                return lengthUnit === "km" ? "mm" : "in";
            default:
                return hass.config.unit_system[measure] || "";
        }
    };
    const getWindDirections = (wd, cwcLocWindDirections) => {
        if (wd < 0 || wd > 360) {
            console.log("Enter a degree between 0 and 360 degrees.");
            return null;
        }
        if (wd >= 0 && wd <= 11.25)
            return cwcLocWindDirections['N'];
        if (wd > 348.75 && wd <= 360)
            return cwcLocWindDirections['N'];
        if (wd > 11.25 && wd <= 33.75)
            return cwcLocWindDirections['NNE'];
        if (wd > 33.75 && wd <= 56.25)
            return cwcLocWindDirections['NE'];
        if (wd > 56.25 && wd <= 78.75)
            return cwcLocWindDirections['ENE'];
        if (wd > 78.75 && wd <= 101.25)
            return cwcLocWindDirections['E'];
        if (wd > 101.25 && wd <= 123.75)
            return cwcLocWindDirections['ESE'];
        if (wd > 123.75 && wd <= 146.25)
            return cwcLocWindDirections['SE'];
        if (wd > 146.25 && wd <= 168.75)
            return cwcLocWindDirections['SSE'];
        if (wd > 168.75 && wd <= 191.25)
            return cwcLocWindDirections['S'];
        if (wd > 191.25 && wd <= 213.75)
            return cwcLocWindDirections['SSW'];
        if (wd > 213.75 && wd <= 236.25)
            return cwcLocWindDirections['SW'];
        if (wd > 236.25 && wd <= 258.75)
            return cwcLocWindDirections['WSW'];
        if (wd > 258.75 && wd <= 281.25)
            return cwcLocWindDirections['W'];
        if (wd > 281.25 && wd <= 303.75)
            return cwcLocWindDirections['WNW'];
        if (wd > 303.75 && wd <= 326.25)
            return cwcLocWindDirections['NW'];
        if (wd > 326.25 && wd <= 348.75)
            return cwcLocWindDirections['NNW'];
        return null;
    };
    function getMoonIcon(phase) {
        return (cwcMoonPhaseIcons[phase.toLowerCase()]);
    }
    function loadJSON(full_path_file) {
        return new Promise((resolve) => {
            setTimeout(() => {
                let xobj = new XMLHttpRequest();
                xobj.overrideMimeType("application/json");
                xobj.open('GET', full_path_file, true);
                // Replace 'my_data' with the path to your file
                xobj.onreadystatechange = () => {
                    if (xobj.readyState === 4 && xobj.status === 200) {
                        // Required use of an anonymous callback
                        // as .open() will NOT return a value but simply returns undefined in asynchronous mode
                        resolve(xobj.responseText);
                    }
                    else if (xobj.status !== 200) {
                        let err = "ERROR during json file retrieve: '" + full_path_file
                            + "', readyState: " + xobj.readyState
                            + ", status: " + xobj.status
                            + ", statusText: " + xobj.statusText
                            + ", responseText: " + xobj.responseText;
                        console.info(err);
                    }
                };
                xobj.send(null);
            }, 100);
        });
    }
    function numFormat(stringNumber, fractionDigits = 1) {
        switch (fractionDigits) {
            case 0:
                return exports.numberFormat_0dec.format(parseFloat(stringNumber));
            case 1:
                return exports.numberFormat_1dec.format(parseFloat(stringNumber));
        }
        // return parseFloat(stringNumber).toFixed(fractionDigits) ;
    }
    // export function circadianRhythm( hass: HomeAssistant, sunId: string ) {
    //   let lightRatio;
    //   // let nextUpdate;
    //
    //   let sun = hass.states[sunId] ;
    //
    //   const now = (new Date()).getTime();
    //
    //   let times = {
    //     sunrise: (new Date(sun.attributes.next_dawn)).getTime(),
    //     sunriseEnd: (new Date(sun.attributes.next_rising)).getTime(),
    //
    //     sunsetStart: (new Date(sun.attributes.next_setting)).getTime(),
    //     sunset: (new Date(sun.attributes.next_dusk)).getTime(),
    //   };
    //
    //   console.info( JSON.stringify(times));
    //   if (now > times.sunrise && now < times.sunriseEnd) {
    //     lightRatio = (now - times.sunrise) / (times.sunriseEnd - times.sunrise);
    //     // nextUpdate = now + UPDATE_FREQUENCY;
    //   } else if(now > times.sunriseEnd && now < times.sunsetStart) {
    //     lightRatio = 1;
    //     // nextUpdate = times.sunsetStart;
    //   } else if (now > times.sunsetStart && now < times.sunset) {
    //     lightRatio = (times.sunset - now) / (times.sunset - times.sunsetStart);
    //     // nextUpdate = now + UPDATE_FREQUENCY;
    //   } else {
    //     lightRatio = 0;
    //     // nextUpdate = times.sunrise;
    //   }
    //
    // // Range (in lux) from 0.0001 to 100000 in increments of 0.0001.
    //   const lightLevel = Math.round(1 + lightRatio * 999999999) / 10000;
    //
    //   console.info( "lightLevel=" + lightLevel + " - lightRatio: " + lightRatio ) ;
    //   return lightLevel ;
    // }

    /**
     *
     * @param hass
     * @param currentCfg
     * @param name
     * @param iconsConfig
     */
    const renderSummary = (hass, currentCfg, name, iconsConfig, terms) => {
        let temperature, feels_like;
        let sun = currentCfg.sun && hass.states[currentCfg.sun] ? hass.states[currentCfg.sun].state : undefined;
        let moon = currentCfg.moon_phase && hass.states[currentCfg.moon_phase]
            ? hass.states[currentCfg.moon_phase].state : undefined;
        let moonIcon = moon ? getMoonIcon(moon) : undefined;
        let current_conditions = currentCfg.current_conditions && hass.states[currentCfg.current_conditions]
            ? hass.states[currentCfg.current_conditions].state : "Na";
        if (currentCfg.temperature && hass.states[currentCfg.temperature]) {
            // if(getUnit(hass, "temperature") == "°F")
            //   temperature = Math.round(parseFloat(hass.states[currentCfg.temperature].state)) ;
            // else temperature = numFormat(hass.states[currentCfg.temperature].state) ;
            temperature = numFormat(hass.states[currentCfg.temperature].state);
        }
        else {
            temperature = "Na";
        }
        if (currentCfg.feels_like && hass.states[currentCfg.feels_like]) {
            // if( hass.states[currentCfg.feels_like].attributes.unit_of_measurement == "F" )
            //   feels_like = Math.round(parseFloat(hass.states[currentCfg.feels_like].state)) ;
            // else feels_like = parseFloat(hass.states[currentCfg.feels_like].state) ;
            feels_like = numFormat(hass.states[currentCfg.feels_like].state);
        }
        else
            feels_like = "Na";
        return litElement.html `
      <div class="current">
        <span class="icon bigger" style="background: none,
            url('${getWeatherIcon(current_conditions.toLowerCase(), iconsConfig, sun)}') no-repeat ; 
            background-size: contain;">${current_conditions}</span>
        ${name ? litElement.html `<span class="title"> ${name} </span>` : ""}
        ${moon ? litElement.html `<span class="moon"> ${moonIcon} <span style="font-size: 70%">${translate(moon, terms.words)}</span></spa>` : ""}
        ${temperature !== "Na" ? litElement.html `
          <span class="temp">${temperature}</span>
          <span class="tempc"> ${getUnit(hass, "temperature")}</span>
        ` : ""}
      </div>
      ${feels_like !== "Na" ? litElement.html `
        <ul class="variations polles" style="border: 0;margin-top: 4px;">
          <li><ha-icon icon="none"></ha-icon><span class="unit"></span></li>
          <li>
            <ha-icon icon="${hass.states[currentCfg.feels_like].attributes.icon}"></ha-icon>${translate('Feels Like', terms.words)} ${feels_like}
            <span class="unit"> ${getUnit(hass, "temperature")}</span>
          </li>
        </ul>      
      ` : ""}
   `;
    };

    /**
     *
     * @param entity_min
     * @param entity_unit_min
     * @param entity_max
     * @param entity_unit_max
     * @param icon
     * @private
     */
    const _renderPresentDouble = (entity_min, entity_unit_min, entity_max, entity_unit_max, icon) => {
        return ((undefined !== entity_min) || (undefined !== entity_max) ? litElement.html `
    <li>
      <ha-icon icon="${icon}"></ha-icon>${undefined !== entity_min ? entity_min : "Na"} ${entity_unit_min} /
          <b>${undefined !== entity_max ? entity_max : "Na"} ${entity_unit_max}</b>
    </li>
  ` : "");
    };
    const _renderPresentSingle = (entity, entity_unit, icon) => {
        return (litElement.html `
    <li>
      <ha-icon icon="${icon}"></ha-icon>${undefined !== entity ? entity : "Na"} ${entity_unit}
    </li>
  `);
    };
    /**
     *
     * @param hass
     * @param currentCfg
     * @param forecastCfg
     * @param language
     * @param terms
     * @param border
     */
    const renderPresent = (hass, currentCfg, forecastCfg, language, terms, border) => {
        let temperature_high, temperature_low, precipitation_probability, precipitation_intensity;
        let next_rising, next_setting;
        language || hass.selectedLanguage || hass.language;
        let sun = currentCfg.sun ? hass.states[currentCfg.sun] : undefined;
        if (sun) {
            next_rising = new Date(sun.attributes.next_rising);
            next_setting = new Date(sun.attributes.next_setting);
            //console.log( "now:" + (new Date()).toLocaleTimeString() + " next_rising:" + next_rising.toLocaleTimeString() ) ;
        }
        if (currentCfg.forecast) {
            let temp_high = forecastCfg.temperature_high
                ? Object.entries(forecastCfg.temperature_high) : undefined;
            let temp_low = forecastCfg.temperature_low
                ? Object.entries(forecastCfg.temperature_low) : undefined;
            let prec_probability = forecastCfg.precipitation_probability
                ? Object.entries(forecastCfg.precipitation_probability) : undefined;
            let prec_intensity = forecastCfg.precipitation_intensity
                ? Object.entries(forecastCfg.precipitation_intensity) : undefined;
            // @ts-ignore
            temperature_high = Object.isSet(temp_high) && Object.isSet(hass.states[temp_high[0][1]])
                ? numFormat(hass.states[temp_high[0][1]].state, 0) : undefined;
            // @ts-ignore
            temperature_low = Object.isSet(temp_low) && Object.isSet(hass.states[temp_low[0][1]])
                ? numFormat(hass.states[temp_low[0][1]].state, 0) : undefined;
            // @ts-ignore
            precipitation_probability = Object.isSet(prec_probability) && Object.isSet(hass.states[prec_probability[0][1]])
                ? numFormat(hass.states[prec_probability[0][1]].state, 0) : undefined;
            // @ts-ignore
            precipitation_intensity = Object.isSet(prec_intensity) && Object.isSet(hass.states[prec_intensity[0][1]])
                ? numFormat(hass.states[prec_intensity[0][1]].state, 0) : undefined;
        }
        // @ts-ignore
        let precipitation = Object.isSet(currentCfg.precipitation) && Object.isSet(hass.states[currentCfg.precipitation])
            ? numFormat(hass.states[currentCfg.precipitation].state, 0) : undefined;
        // @ts-ignore
        let humidity = Object.isSet(currentCfg.humidity) && Object.isSet(hass.states[currentCfg.humidity])
            ? numFormat(hass.states[currentCfg.humidity].state, 0) : undefined;
        // @ts-ignore
        let wind_bearing = Object.isSet(currentCfg.wind_bearing) && Object.isSet(hass.states[currentCfg.wind_bearing])
            ? numFormat(hass.states[currentCfg.wind_bearing].state) : undefined;
        // @ts-ignore
        let wind_speed = Object.isSet(currentCfg.wind_speed) && Object.isSet(hass.states[currentCfg.wind_speed])
            ? numFormat(hass.states[currentCfg.wind_speed].state) : undefined;
        // @ts-ignore
        let pressure = Object.isSet(currentCfg.pressure) && Object.isSet(hass.states[currentCfg.pressure])
            ? numFormat(hass.states[currentCfg.pressure].state, 0) : undefined;
        // @ts-ignore
        let visibility = Object.isSet(currentCfg.visibility) && Object.isSet(hass.states[currentCfg.visibility])
            ? numFormat(hass.states[currentCfg.visibility].state, 0) : undefined;
        return litElement.html `
    <ul class="variations ${border ? "spacer" : ""}">
        ${void 0 !== typeof precipitation_probability || void 0 !== typeof precipitation_intensity
        ? _renderPresentDouble(precipitation_probability, '%', precipitation_intensity, getUnit(hass, "precipitation") + '/h', 'mdi:weather-rainy') : ""}
        ${currentCfg.forecast && (undefined !== temperature_low || undefined !== temperature_high)
        ? _renderPresentDouble(temperature_low, '', temperature_high, getUnit(hass, "temperature"), 'mdi:thermometer') : ""}
        ${undefined !== precipitation && precipitation > 0 ? litElement.html `
          <li>
            <ha-icon icon="mdi:weather-rainy"></ha-icon>${precipitation}
            <span class="unit"> ${getUnit(hass, "precipitation")}/h</span>
          </li>
          <li><ha-icon icon="none"></ha-icon><span class="unit"></span></li>
        ` : ""}            
        ${undefined !== pressure ? _renderPresentSingle(pressure, getUnit(hass, "air_pressure"), 'mdi:gauge') : ""}
        ${undefined !== humidity ? _renderPresentSingle(humidity, '%', 'mdi:water-percent') : ""}
        ${undefined !== visibility ? _renderPresentSingle(visibility, getUnit(hass, "length"), 'mdi:weather-fog') : ""}
        ${(!!wind_speed) || (!!wind_bearing) ? litElement.html `
          <li>
            <ha-icon icon="mdi:weather-windy"></ha-icon> ${getWindDirections(wind_bearing, terms.windDirections)} ${wind_speed}
            <span class="unit">${getUnit(hass, "length")}/h</span>
          </li>
        ` : ""}        
        ${undefined !== next_rising ? _renderPresentSingle(next_rising.toLocaleTimeString(language), '', 'mdi:weather-sunset-up') : ""}               
        ${undefined !== next_setting ? _renderPresentSingle(next_setting.toLocaleTimeString(language), '', 'mdi:weather-sunset-down') : ""}           
    </ul>
  `;
    };

    /**
     *
     * @param entity_low
     * @param entity_unit_low
     * @param entity_high
     * @param entity_unit_high
     * @private
     */
    const _renderForecast = (entity_low, entity_unit_low, entity_high, entity_unit_high) => {
        if (undefined == entity_low && undefined == entity_high) {
            return litElement.html ``;
        }
        else if (undefined == entity_low) {
            return litElement.html `
            <div class="highTemp">
              <b>${entity_high}</b> ${entity_unit_high}
            </div>   
      `;
        }
        else if (undefined == entity_high) {
            return litElement.html `
            <div class="lowTemp">
              ${entity_low} ${entity_unit_low}
            </div>  
      `;
        }
        else {
            return litElement.html `
            <div class="highTemp">
              ${entity_low} ${entity_unit_low} / <b>${entity_high} ${entity_unit_high}</b>
            </div>
      `;
        }
    };
    const renderForecasts = (hass, currentCfg, forecastCfg, iconsConfig, lang, border) => {
        let forecastDate = new Date();
        // @ts-ignore
        let sun = Object.isSet(currentCfg) && Object.isSet(currentCfg.sun) && Object.isSet(hass.states[currentCfg.sun])
            ? hass.states[currentCfg.sun].state : undefined;
        let icons = forecastCfg.icons
            ? Object.entries(forecastCfg.icons) : undefined;
        let temperature_high = forecastCfg.temperature_high
            ? Object.entries(forecastCfg.temperature_high) : undefined;
        let temperature_low = forecastCfg.temperature_low
            ? Object.entries(forecastCfg.temperature_low) : undefined;
        let precipitation_probability = forecastCfg.precipitation_probability
            ? Object.entries(forecastCfg.precipitation_probability) : undefined;
        let precipitation_intensity = forecastCfg.precipitation_intensity
            ? Object.entries(forecastCfg.precipitation_intensity) : undefined;
        let maxDays = Math.max(icons ? icons.length : 0, temperature_high ? temperature_high.length : 0, temperature_low ? temperature_low.length : 0, precipitation_probability ? precipitation_probability.length : 0, precipitation_intensity ? precipitation_intensity.length : 0);
        let startDay = 1;
        let days = maxDays > 0 ?
            Array(maxDays - startDay).fill(1, 0, maxDays - startDay).map(() => startDay++)
            : Array();
        return maxDays > 1 ? litElement.html `
      <div class="forecast clear ${border ? "spacer" : ""}">
        ${days.map(day => {
        let icon, day_temp_low, day_temp_high, day_prec_probab, day_prec_intensity;
        let date = new Date(forecastDate.setDate(forecastDate.getDate() + 1))
            .toLocaleDateString(lang, { weekday: "short" });
        if (icons && icons[day] && hass.states[icons[day][1]])
            icon = hass.states[icons[day][1]].state.toLowerCase();
        if (temperature_low && temperature_low[day] && hass.states[temperature_low[day][1]])
            day_temp_low = numFormat(hass.states[temperature_low[day][1]].state, 0);
        if (temperature_high && temperature_high[day] && hass.states[temperature_high[day][1]])
            day_temp_high = numFormat(hass.states[temperature_high[day][1]].state, 0);
        if (precipitation_probability && precipitation_probability[day] && hass.states[precipitation_probability[day][1]])
            day_prec_probab = numFormat(hass.states[precipitation_probability[day][1]].state, 0);
        if (precipitation_intensity && precipitation_intensity[day] && hass.states[precipitation_intensity[day][1]])
            day_prec_intensity = numFormat(hass.states[precipitation_intensity[day][1]].state, 0);
        return litElement.html `
          <div class="day ${day}">
              <div class="dayname">${date}</div>
              ${icon ? litElement.html `
              <i class="icon" style="background: none, url('${getWeatherIcon(icon, iconsConfig, sun)}') no-repeat; 
                    background-size: contain"></i>                
              ` : ""}
              ${_renderForecast(day_temp_low, '', day_temp_high, getUnit(hass, "temperature"))} 
              ${_renderForecast(day_prec_probab, '%', day_prec_intensity, getUnit(hass, "precipitation") + '/h')}                       
          </div>
          `;
    })}
      </div>
    ` : litElement.html ``;
    };

    const _renderPollen = (hass, item) => {
        let entity = hass.states[item.entity];
        let icon = item.icon || entity.attributes.icon;
        let min = undefined !== item.min ? item.min : 0;
        let max = undefined !== item.max ? item.max : 5;
        let low = undefined !== item.low ? item.low : min;
        let high = undefined !== item.high ? item.high : max;
        let d = min == 0 ? 1 : 0;
        return (entity ? litElement.html `
     <li>
       <ha-icon icon="${icon}"></ha-icon>
       <meter class="meter" value="${parseInt(entity.state) + d}" optimum="${(high - low) / 2}"
            min="${min}" max="${max + d}" low="${low + d}" high="${high + d}">${entity.state}/${max}</meter>
     </li>
  ` : "");
    };
    /**
     <li>
     <ha-icon icon="${entity.attributes.icon}"></ha-icon>
     0<meter class="meter" value="${0 + d}"
     min="${min}" max="${max + d}" low="${low + d}" high="${high + d}" optimum="${(high-low)/2}">
     <div class="meter-gauge"><span style="width: 46.42%;">${entity.state}/${max}</span></div>
     </meter>
     </li>
     <li>
     <ha-icon icon="${entity.attributes.icon}"></ha-icon>
     1<meter class="meter" value="${1 + d}"
     min="${min}" max="${max + d}" low="${low + d}" high="${high + d}" optimum="${(high-low)/2}">
     <div class="meter-gauge"><span style="width: 46.42%;">${entity.state}/${max}</span></div>
     </meter>
     </li>
     <li>
     <ha-icon icon="${entity.attributes.icon}"></ha-icon>
     2<meter class="meter" value="${2 + d}"
     min="${min}" max="${max + d}" low="${low + d}" high="${high + d}" optimum="${(high-low)/2}">
     <div class="meter-gauge"><span style="width: 46.42%;">${entity.state}/${max}</span></div>
     </meter>
     </li>
     <li>
     <ha-icon icon="${entity.attributes.icon}"></ha-icon>
     3<meter class="meter" value="${3 + d}"
     min="${min}" max="${max + d}" low="${low + d}" high="${high + d}" optimum="${(high-low)/2}">
     ${entity.state}/${max}
     </meter>
     </li>
     <li>
     <ha-icon icon="${entity.attributes.icon}"></ha-icon>
     4<meter class="meter" value="${4 + d}"
     min="${min}" max="${max + d}" low="${low + d}" high="${high + d}" optimum="${(high-low)/2}">
     <div class="meter-gauge"><span style="width: 46.42%;">${entity.state}/${max}</span></div>
     </meter>
     </li>
     <li>
     <ha-icon icon="${entity.attributes.icon}"></ha-icon>
     5<meter class="meter" value="${5 + d}"
     min="${min}" max="${max + d}" low="${low + d}" high="${high + d}" optimum="${(high-low)/2}">
     <div class="meter-gauge"><span style="width: 46.42%;">${entity.state}/${max}</span></div>
     </meter>
     </li>
     */
    function renderPollens(hass, pollen, border) {
        let tree = pollen.tree && pollen.tree.entity ? _renderPollen(hass, pollen.tree) : undefined;
        let weed = pollen.weed && pollen.weed.entity ? _renderPollen(hass, pollen.weed) : undefined;
        let grass = pollen.grass && pollen.grass.entity ? _renderPollen(hass, pollen.grass) : undefined;
        return litElement.html `
    <ul class="variations polles ${border ? "spacer" : ""}">
        ${tree ? tree : ""}${weed ? weed : ""}${grass ? grass : ""}
    </ul>
  `;
    }

    /**
     *
     * @param state
     * @param attributes
     * @param icon
     * @private
     */
    const _renderAirQuality = (state, attributes, icon) => {
        return (state ? litElement.html `
    <li>
      <svg viewBox="0 0 24 15" width="24" height="15" xmlns="http://www.w3.org/2000/svg">
        <style>.small {font: 8px sans-serif;}</style>
        <text x="0" y="14" class="small">${icon}</text>
      </svg>${state} ${attributes.unit_of_measurement ? attributes.unit_of_measurement : ""}
    </li>    
  ` : "");
    };
    /**
     *
     * @param hass
     * @param airquality
     */
    const renderAirQualities = (hass, airquality, border) => {
        let pm25 = undefined !== airquality.pm25 && undefined !== hass.states[airquality.pm25]
            ? _renderAirQuality(numFormat(hass.states[airquality.pm25].state), hass.states[airquality.pm25].attributes, 'pm25') : undefined;
        let pm10 = undefined !== airquality.pm10 && undefined !== hass.states[airquality.pm10]
            ? _renderAirQuality(numFormat(hass.states[airquality.pm10].state), hass.states[airquality.pm10].attributes, 'pm10') : undefined;
        let o3 = undefined !== airquality.o3 && undefined !== hass.states[airquality.o3]
            ? _renderAirQuality(numFormat(hass.states[airquality.o3].state), hass.states[airquality.o3].attributes, 'o3') : undefined;
        let no2 = undefined !== airquality.no2 && undefined !== hass.states[airquality.no2]
            ? _renderAirQuality(numFormat(hass.states[airquality.no2].state), hass.states[airquality.no2].attributes, 'no2') : undefined;
        let co = undefined !== airquality.co && undefined !== hass.states[airquality.co]
            ? _renderAirQuality(numFormat(hass.states[airquality.co].state), hass.states[airquality.co].attributes, 'co') : undefined;
        let so2 = undefined !== airquality.so2 && undefined !== hass.states[airquality.so2]
            ? _renderAirQuality(numFormat(hass.states[airquality.so2].state), hass.states[airquality.so2].attributes, 'so2') : undefined;
        let epa_aqi = undefined !== airquality.epa_aqi && undefined !== hass.states[airquality.epa_aqi]
            ? _renderAirQuality(numFormat(hass.states[airquality.epa_aqi].state), hass.states[airquality.epa_aqi].attributes, 'aqi') : undefined;
        let epa_health_concern = undefined !== airquality.epa_health_concern && undefined !== hass.states[airquality.epa_health_concern]
            ? _renderAirQuality(hass.states[airquality.epa_health_concern].state, hass.states[airquality.epa_health_concern].attributes, 'aqi') : undefined;
        return litElement.html `
    <ul class="variations ${border ? "spacer" : ""}">
        ${epa_aqi ? epa_aqi : ""}${epa_health_concern ? epa_health_concern : ""}
        ${pm25 ? pm25 : ""}${pm10 ? pm10 : ""}${o3 ? o3 : ""}${no2 ? no2 : ""}${co ? co : ""}${so2 ? so2 : ""}
    </ul>
  `;
    };

    const num = ['I', 'II', 'III', 'IV', 'V', 'VI'];
    const colors = ['#F1D1B1', '#E4B590', '#CF9F7D', '#B67851', '#A15E2D', '#513938'];
    /**
     *
     * @param entity
     * @param icon
     * @private
     */
    const _renderUvSingle = (entity, icon, round) => {
        let value = round ? numFormat(entity.state, 0) : entity.state;
        return (entity ? litHtml.html `
    <li>
        <ha-icon icon="${icon}"></ha-icon>${value} ${entity.attributes.unit_of_measurement ? entity.attributes.unit_of_measurement : ""}
    </li>    
  ` : "");
    };
    /**
     *
     * @param entity1
     * @param entity2
     * @param icon
     * @private
     */
    const _renderUvDouble = (entity1, entity2, icon) => {
        let value1 = undefined !== entity1 ? numFormat(entity1.state) : "--";
        let value2 = undefined !== entity2 ? numFormat(entity2.state) : "--";
        return (entity1 || entity2 ? litHtml.html `
    <li>
        <ha-icon icon="${icon}"></ha-icon>${value1} / <b>${value2}</b>
        ${entity1.attributes.unit_of_measurement ? entity1.attributes.unit_of_measurement : ""}
    </li>    
  ` : "");
    };
    /**
     *
     * @param state
     * @private
     */
    const _getTime = (state) => {
        let result = "- -";
        if (state && "unknown" !== state) {
            let stateValueRounded = Math.round(state);
            let hours = Math.floor(stateValueRounded / 60);
            let minutes = stateValueRounded % 60;
            if (hours > 0)
                result = `${hours}h${minutes}m`;
            else {
                result = `${minutes}m`;
            }
        }
        return result;
    };
    /**
     *
     * @param hass
     * @param uv
     * @param border
     */
    const renderUv = (hass, uv, border) => {
        let protection_window = undefined !== uv.protection_window && hass.states[uv.protection_window]
            ? _renderUvSingle(hass.states[uv.protection_window], 'mdi:sunglasses', false) : undefined;
        let uv_level = undefined !== uv.uv_level && hass.states[uv.uv_level]
            ? _renderUvSingle(hass.states[uv.uv_level], 'mdi:weather-sunny', false) : undefined;
        let uv_index = undefined !== uv.uv_index && undefined !== uv.max_uv_index
            ? _renderUvDouble(hass.states[uv.uv_index], hass.states[uv.max_uv_index], 'mdi:weather-sunny') : "";
        let ozone_level = undefined !== uv.ozone_level && hass.states[uv.ozone_level]
            ? _renderUvSingle(hass.states[uv.ozone_level], 'mdi:vector-triangle', true) : undefined;
        return litHtml.html `
    <ul class="variations ${border ? "spacer" : ""}">
        ${uv_level ? uv_level : ""}${protection_window ? protection_window : ""}
        ${uv_index ? uv_index : ""}${ozone_level ? ozone_level : ""}
    </ul>
    <div class="forecast clear" style="margin-top:  4px; margin-bottom: 4px;">
    ${[1, 2, 3, 4, 5, 6].map(stypen => {
        let stype = 'set_skin_type_' + stypen;
        let sensorId = uv[stype];
        let sstate = undefined !== typeof sensorId && undefined !== typeof hass.states[sensorId] ? hass.states[sensorId] : undefined;
        return sstate ? litHtml.html `
        <div class="day ${stypen}">
            <div id="rectangle" style="color: black; background: ${colors[stypen - 1]};width:32px;height:32px;display: table;margin: 0 auto;">${num[stypen - 1]}</div>
            <div class="lowTemp">
              ${_getTime(sstate.state)}
            </div>  
        </div>
      ` : "";
    })}
    </div>
  `;
    };

    // @ts-ignore
    const renderAlert = (hass, alert_sensor, border) => {
        let alerts = Object.entries(alert_sensor);
        // console.info( alert_sensor ) ;
        // console.info( alerts) ;
        return litHtml.html `
    <div class="forecast clear" style="margin-top:  4px; margin-bottom: 4px;">
    ${alerts.map(alert => {
        alert[0]; let value = alert[1], show = true;
        let sensor = hass.states[value.entity];
        if (undefined !== sensor) {
            let state = "- -", risk = 0, icon;
            if (sensor.state && "unknown" !== sensor.state) {
                icon = undefined !== value.icon ? value.icon : sensor.attributes.icon;
                if (undefined !== value['min'] && undefined !== value['max']) {
                    state = numFormat(sensor.state);
                    risk = Math.abs(((parseFloat(state) - value.min) * 100) / (value.max - value.min)) / 100;
                    if (undefined !== value.show_if_ge && parseFloat(state) < value.show_if_ge)
                        show = false;
                }
                else {
                    state = sensor.state;
                    risk = 'on' == state.toLowerCase() ? 1 : 0;
                    if (value.show_if_on && 'off' == state.toLowerCase())
                        show = false;
                }
            }
            let styleColors = colorByPercent(risk);
            return show ? litHtml.html `
        <div class="day">
            <div id="rectangle" style="color: ${styleColors.color};background: ${styleColors.bgcolor};width:32px;height:32px;display: table;margin: 0 auto;"><ha-icon icon="${icon}"></ha-icon></div>
            <div class="lowTemp">${state}</div>  
        </div>
        ` : "";
        }
        else
            return "";
    })}
    </div>
  `;
        // return maxDays > 1 ? html`
        //     <div class="forecast clear ${border ? "spacer" : ""}">
        //       ${days.map(day => {
        //   let icon: string, day_temp_low: number, day_temp_high: number, day_prec_probab: number, day_prec_intensity: number;
        //   let date = new Date(forecastDate.setDate(forecastDate.getDate() + 1))
        //     .toLocaleDateString(lang, {weekday: "short"});
        //
        //   if( icons && icons[day] && hass.states[icons[day][1]] )
        //     icon = hass.states[icons[day][1]].state.toLowerCase() ;
        //
        //   if( temperature_low && temperature_low[day] && hass.states[temperature_low[day][1]] )
        //     day_temp_low = numFormat(hass.states[temperature_low[day][1]].state, 0) ;
        //   if( temperature_high && temperature_high[day] && hass.states[temperature_high[day][1]] )
        //     day_temp_high = numFormat(hass.states[temperature_high[day][1]].state, 0) ;
        //
        //   if( precipitation_probability && precipitation_probability[day] && hass.states[precipitation_probability[day][1]] )
        //     day_prec_probab = numFormat(hass.states[precipitation_probability[day][1]].state, 0) ;
        //   if( precipitation_intensity && precipitation_intensity[day] && hass.states[precipitation_intensity[day][1]] )
        //     day_prec_intensity = numFormat(hass.states[precipitation_intensity[day][1]].state, 0) ;
        //
        //   return html`
        //         <div class="day ${day}">
        //             <div class="dayname">${date}</div>
        //             ${icon ? html`
        //             <i class="icon" style="background: none, url('${getWeatherIcon(icon, iconsConfig, sun)}') no-repeat;
        //                   background-size: contain"></i>
        //             ` : ""}
        //             ${_renderForecast(day_temp_low, '', day_temp_high, getUnit(hass,"temperature"))}
        //             ${_renderForecast(day_prec_probab, '%', day_prec_intensity,
        //     getUnit(hass,"precipitation") + '/h')}
        //         </div>
        //         `;
        // })}
        //     </div>
        //   ` : html``;
    };
    function colorByPercent(value) {
        //value from 0 to 1
        let hue = ((1 - value) * 120).toString(10);
        let tcolor = getContrastYIQ(HSLToHex(hue, 100, 50));
        return { "color": tcolor, "bgcolor": ["hsl(", hue, ",100%,50%)"].join("") };
    }
    function getContrastYIQ(hexcolor) {
        hexcolor = hexcolor.replace("#", "");
        let r = parseInt(hexcolor.substr(0, 2), 16);
        let g = parseInt(hexcolor.substr(2, 2), 16);
        let b = parseInt(hexcolor.substr(4, 2), 16);
        let yiq = ((r * 299) + (g * 587) + (b * 114)) / 1000;
        return (yiq >= 128) ? 'black' : 'white';
    }
    function HSLToHex(h, s, l) {
        s /= 100;
        l /= 100;
        let c = (1 - Math.abs(2 * l - 1)) * s, x = c * (1 - Math.abs((h / 60) % 2 - 1)), m = l - c / 2, r = 0, g = 0, b = 0;
        if (0 <= h && h < 60) {
            r = c;
            g = x;
            b = 0;
        }
        else if (60 <= h && h < 120) {
            r = x;
            g = c;
            b = 0;
        }
        else if (120 <= h && h < 180) {
            r = 0;
            g = c;
            b = x;
        }
        else if (180 <= h && h < 240) {
            r = 0;
            g = x;
            b = c;
        }
        else if (240 <= h && h < 300) {
            r = x;
            g = 0;
            b = c;
        }
        else if (300 <= h && h < 360) {
            r = c;
            g = 0;
            b = x;
        }
        // Having obtained RGB, convert channels to hex
        let rs = Math.round((r + m) * 255).toString(16);
        let gs = Math.round((g + m) * 255).toString(16);
        let bs = Math.round((b + m) * 255).toString(16);
        // Prepend 0s, if necessary
        if (rs.length == 1)
            rs = "0" + rs;
        if (gs.length == 1)
            gs = "0" + gs;
        if (bs.length == 1)
            bs = "0" + bs;
        return "#" + rs + gs + bs;
    }

    // @ts-ignore
    const renderSeaForecast = (hass, seaCfg, iconsConfig, lang, border) => {
        let swell_directions = seaCfg.swell_direction
            ? Object.entries(seaCfg.swell_direction) : undefined;
        let swell_heights = seaCfg.swell_height
            ? Object.entries(seaCfg.swell_height) : undefined;
        let swell_periods = seaCfg.swell_period
            ? Object.entries(seaCfg.swell_period) : undefined;
        let wind_directions = seaCfg.wind_direction
            ? Object.entries(seaCfg.wind_direction) : undefined;
        let wind_speeds = seaCfg.wind_speed
            ? Object.entries(seaCfg.wind_speed) : undefined;
        let air_temperatures = seaCfg.air_temperature
            ? Object.entries(seaCfg.air_temperature) : undefined;
        let water_temperatures = seaCfg.water_temperature
            ? Object.entries(seaCfg.water_temperature) : undefined;
        let maxHours = Math.max(swell_directions ? swell_directions.length : 0, swell_heights ? swell_heights.length : 0, swell_periods ? swell_periods.length : 0);
        let startHour = 0;
        let hours = maxHours > 0 ?
            Array(maxHours - startHour).fill(1, 0, maxHours - startHour).map(() => startHour++)
            : Array();
        return litElement.html `
    <div class="forecast clear ${border ? "spacer" : ""}">
      <div class="day">
        <div class="highTemp">
            <table class="synoptic">
                <thead>
                    <tr>
                        <th>Time</th><th>Swell</th><th>Wind</th><th>Temperature</th>
                    </tr>
                </thead>
                <tbody>
        ${hours.map(hour => {
        let swell_dir_name = swell_directions[hour.toString()][1], swell_dir_sensor = hass.states[swell_dir_name];
        let swell_height_name = swell_heights[hour.toString()][1], swell_height_sensor = hass.states[swell_height_name];
        let swell_periods_name = swell_periods[hour.toString()][1], swell_periods_sensor = hass.states[swell_periods_name];
        let wind_dir_name = wind_directions[hour.toString()][1], wind_dir_sensor = hass.states[wind_dir_name];
        let wind_speed_name = wind_speeds[hour.toString()][1], wind_speed_sensor = hass.states[wind_speed_name];
        let air_temperatures_name = air_temperatures[hour.toString()][1], air_temperatures_sensor = hass.states[air_temperatures_name];
        let water_temperatures_name = water_temperatures[hour.toString()][1], water_temperatures_sensor = hass.states[water_temperatures_name];
        let swell_degree = parseFloat(swell_dir_sensor.state) + "deg"; // , cssclass = (degree % 10==0) ? degree : degree-degree%5 +5 ;
        let height = numFormat(swell_height_sensor.state), height_unit = swell_height_sensor.attributes.unit_of_measurement;
        let period = numFormat(swell_periods_sensor.state, 0), period_unit = swell_periods_sensor.attributes.unit_of_measurement;
        let wind_degree = parseFloat(wind_dir_sensor.state) + "deg"; // , cssclass = (degree % 10==0) ? degree : degree-degree%5 +5 ;
        let wind_speed = numFormat(wind_speed_sensor.state, 0), wind_speed_unit = wind_speed_sensor.attributes.unit_of_measurement;
        let air_temperature = numFormat(air_temperatures_sensor.state, 0); air_temperatures_sensor.attributes.unit_of_measurement;
        let water_temperature = numFormat(water_temperatures_sensor.state, 1), water_temperature_unit = water_temperatures_sensor.attributes.unit_of_measurement;
        return litElement.html `
            <tr>
            <td>${pad((new Date(swell_dir_sensor.attributes.observation_time)).getHours(), 2)}:00</td>
            <td>${height}${height_unit} / ${period}${period_unit}
                <span class="svg-icon svg-swell-icon svg-swell-icon-dark" style="transform: rotate(${swell_degree});
                    -ms-transform: rotate(${swell_degree}); -webkit-transform: rotate(${swell_degree});"></span>
            </td>
            <td>${wind_speed} ${wind_speed_unit}
                <span class="svg-icon svg-wind-icon svg-wind-icon-light" style="transform: rotate(${wind_degree});
                    -ms-transform: rotate(${wind_degree}); -webkit-transform: rotate(${wind_degree});"></span>
            </td>
            <td>${water_temperature} - ${air_temperature} ${water_temperature_unit}</td>
            </tr> 
                `;
    })}
                               </tbody>
                    </table>      
                </div>
      </div>           
    </div>
  `;
    };

    const hacsImagePath = "/local/community/ha-card-weather-conditions/icons";
    const manImagePath = "/local/ha-card-weather-conditions/icons";
    exports.hacsImagePathExist = false;
    exports.manImagePathExist = false;
    let logo = "%c WEATHER-CONDITION-CARD %c 1.9.9";
    let optConsoleParam1 = "color: white; background: green; font-weight: 700;";
    let optConsoleParam2 = "color: green; background: white; font-weight: 700;";
    let optConsoleParam3 = "color: black; background: white; font-weight: 700;";
    exports.numberFormat_0dec = null;
    exports.numberFormat_1dec = null;
    let globalImagePath;
    const UNDEFINED = "undefined";
    Object.defineProperty(Object.prototype, 'isSet', {
        value: function (object, testIsBlank) {
            let t1 = !(typeof object === UNDEFINED || null === object);
            return (testIsBlank ? t1 && object.length > 0 : t1);
        },
        writable: true,
        configurable: true,
        enumerable: false
    });
    console.info(logo, optConsoleParam1, optConsoleParam2);
    let findImagePath = [imageExist(hacsImagePath + "/static/cloudy.svg"),
        imageExist(manImagePath + "/static/cloudy.svg"),];
    Promise.all(findImagePath).then((testResults) => {
        let hacsImages, manImages;
        hacsImages = exports.hacsImagePathExist = testResults[0];
        manImages = exports.manImagePathExist = testResults[1];
        globalImagePath = (hacsImages ? hacsImagePath : manImages ? manImagePath : null);
        let translPath = globalImagePath + '/../transl/';
        let findTranslation = [
            loadJSON(translPath + 'en.json'),
            loadJSON(translPath + 'it.json'),
            loadJSON(translPath + 'nl.json'),
            loadJSON(translPath + 'es.json'),
            loadJSON(translPath + 'de.json'),
            loadJSON(translPath + 'fr.json'),
            loadJSON(translPath + 'sr-latn.json'),
            loadJSON(translPath + 'pt.json'),
            loadJSON(translPath + 'da.json'),
            loadJSON(translPath + 'no-NO.json')
        ];
        if (hacsImages)
            console.info(logo + "%c use HACS path to retrieve icons.", optConsoleParam1, optConsoleParam2, optConsoleParam3);
        else if (manImages)
            console.info(logo + "%c use www root path to retrieve icons.", optConsoleParam1, optConsoleParam2, optConsoleParam3);
        else
            console.info(logo + "%c error setting right icons path.", optConsoleParam1, optConsoleParam2, optConsoleParam3);
        Promise.all(findTranslation).then((translations) => {
            let HaCardWeatherConditions = class HaCardWeatherConditions extends litElement.LitElement {
                constructor() {
                    super(...arguments);
                    this._iconsConfig = new class {
                    };
                    this._terms = new class {
                    };
                    this.invalidConfig = false;
                    this.numberElements = 0;
                    this._header = true;
                    this._name = '';
                    this._hasCurrent = false;
                    this._hasForecast = false;
                    this._hasMeteogram = false;
                    this._hasAirQuality = false;
                    this._hasPollen = false;
                    this._hasUv = false;
                    this._hasAlert = false;
                    this._hasSea = false;
                    this._displayTop = true;
                    this._displayCurrent = true;
                    this._displayForecast = true;
                    this._showSummary = true;
                    this._showPresent = true;
                    this._showUv = true;
                    this._showAirQuality = true;
                    this._showPollen = true;
                    this._showForecast = true;
                    this._showAlert = true;
                    this._showSea = true;
                }
                /**
                 *
                 * @param {CardConfig} config
                 */
                setConfig(config) {
                    console.log({ card_config: config });
                    if (!config) {
                        this.invalidConfig = true;
                        throw new Error("Invalid configuration");
                    }
                    if (config.name && config.name.length > 0) {
                        this._name = config.name;
                    }
                    if (config.language && config.language.length > 0) {
                        this._language = config.language.toLowerCase();
                    }
                    else
                        this._language = 'en';
                    let transls;
                    try {
                        transls = JSON.parse(translations[cwcLocale[this._language]]);
                        this._terms.windDirections = transls.cwcLocWindDirections;
                        this._terms.words = transls.cwcTerms;
                        console.info(logo + "%c card \"" + this._name + "\", locale is '" + this._language + "'.", optConsoleParam1, optConsoleParam2, optConsoleParam3);
                    }
                    catch (e) {
                        transls = JSON.parse(translations[cwcLocale['en']]);
                        this._terms.windDirections = transls.cwcLocWindDirections;
                        this._terms.words = transls.cwcTerms;
                        console.info(logo + "%c card \"" + this._name + "\" unable to use '" + this._language + "' locale, set as default 'en'.", optConsoleParam1, optConsoleParam2, optConsoleParam3);
                    }
                    exports.numberFormat_0dec = new Intl.NumberFormat(this._language, { maximumFractionDigits: 0 });
                    exports.numberFormat_1dec = new Intl.NumberFormat(this._language, { maximumFractionDigits: 1 });
                    if (undefined !== config.display) {
                        this._displayTop = config.display.findIndex(item => 'top' === item.toLowerCase()) >= 0;
                        this._displayCurrent = config.display.findIndex(item => 'current' === item.toLowerCase()) >= 0;
                        this._displayForecast = config.display.findIndex(item => 'forecast' === item.toLowerCase()) >= 0;
                    }
                    this._hasCurrent = (!!config.weather) && (!!config.weather.current);
                    this._hasForecast = (!!config.weather) && (!!config.weather.forecast);
                    this._hasMeteogram = this._hasForecast && (!!config.weather.forecast.meteogram);
                    this._hasAirQuality = !!config.air_quality;
                    this._hasPollen = !!config.pollen && (!!config.pollen.tree || !!config.pollen.weed || !!config.pollen.grass);
                    this._hasUv = !!config.uv;
                    this._hasAlert = !!config.alert;
                    this._hasSea = !!config.sea;
                    this._iconsConfig.path = hacsImages ? hacsImagePath : manImages ? manImagePath : null;
                    // this._iconsConfig.iconType = config.animation ? "animated" : "static";
                    this._iconsConfig.iconType = config.animation ? "animated" : "static";
                    this._iconsConfig.iconsDay = cwcClimacellDayIcons;
                    this._iconsConfig.iconsNight = cwcClimacellNightIcons;
                    this._iconsConfig.icons_model = "climacell";
                    if ((!!config.weather) && (!!config.weather.icons_model))
                        switch (config.weather.icons_model.toLowerCase()) {
                            case 'darksky':
                                this._iconsConfig.iconsDay = cwcDarkskyDayIcons;
                                this._iconsConfig.iconsNight = cwcDarkskyNightIcons;
                                this._iconsConfig.icons_model = "darksky";
                                break;
                            case 'openweathermap':
                                this._iconsConfig.iconsDay = cwcOpenWeatherMapDayIcons;
                                this._iconsConfig.iconsNight = cwcOpenWeatherMapNightIcons;
                                this._iconsConfig.icons_model = "openweathermap";
                                break;
                            case 'buienradar':
                                this._iconsConfig.iconsDay = cwcBuienradarDayIcons;
                                this._iconsConfig.iconsNight = cwcBuienradarNightIcons;
                                this._iconsConfig.icons_model = "buienradar";
                                break;
                            case 'defaulthass':
                                this._iconsConfig.iconsDay = cwcDefaultHassDayIcons;
                                this._iconsConfig.iconsNight = cwcDefaultHassNightIcons;
                                this._iconsConfig.icons_model = "defaulthass";
                                break;
                        }
                    this._config = config;
                }
                /**
                 * get the current size of the card
                 * @return {Number}
                 */
                getCardSize() {
                    return 1;
                }
                /**
                 *
                 * @returns {CSSResult}
                 */
                static get styles() {
                    return litElement.css `${style}${styleSummary}${styleForecast}${styleMeter}${styleCamera}${styleNightAndDay}${cssTag_js.unsafeCSS(getSeaStyle(globalImagePath))}`;
                }
                /**
                 * generates the card HTML
                 * @return {TemplateResult}
                 */
                render() {
                    if (this.invalidConfig)
                        return litElement.html `
            <ha-card class="ha-card-weather-conditions">
                <div class='banner'>
                    <div class="header">ha-card-weather-conditions</div>
                </div>
                <div class='content'>
                    Configuration ERROR!
                </div>
            </ha-card>
        `;
                    else {
                        return this._render();
                    }
                }
                /**
                 *
                 * @returns {TemplateResult}
                 * @private
                 */
                _render() {
                    let _renderedSummary, _renderedPresent, _renderedUv, _renderedAirQuality, _renderedPollen, _renderedForecast, _renderedAlert, _renderedSea;
                    // let _renderSummury: boolean = false ;
                    let posix = 0;
                    let states = this.hass.states;
                    if (this._showSummary && this._hasCurrent) {
                        let current = this._config.weather.current;
                        if ((current.current_conditions && typeof states[current.current_conditions] !== undefined)
                            || (current.temperature && typeof states[current.temperature] !== undefined)) {
                            _renderedSummary = renderSummary(this.hass, this._config.weather.current, this._config.name, this._iconsConfig, this._terms);
                            posix++;
                        }
                        else
                            _renderedSummary = "";
                    }
                    else
                        _renderedSummary = "";
                    // Test if render >Present<
                    if (this._showPresent && this._hasCurrent) {
                        let current = this._config.weather.current;
                        if ((current.sun && typeof states[current.sun] !== undefined)
                            || (current.humidity && typeof states[current.humidity] !== undefined)
                            || (current.pressure && typeof states[current.pressure] !== undefined)
                            || (current.visibility && typeof states[current.visibility] !== undefined)
                            || (current.wind_bearing && typeof states[current.wind_bearing] !== undefined)
                            || (current.wind_speed && typeof states[current.wind_speed] !== undefined)) {
                            _renderedPresent = renderPresent(this.hass, this._config.weather.current, this._config.weather.forecast, this._language, this._terms, posix > 0);
                            posix++;
                        }
                        else {
                            if (current.forecast && this._hasForecast) {
                                let forecast = this._config.weather.forecast;
                                if ((forecast.temperature_low && forecast.temperature_low.day_1 && typeof states[forecast.temperature_low.day_1] !== undefined)
                                    || (forecast.temperature_high && forecast.temperature_high.day_1 && typeof states[forecast.temperature_high.day_1] !== undefined)
                                    || (forecast.precipitation_intensity && forecast.precipitation_intensity.day_1 && typeof states[forecast.precipitation_intensity.day_1] !== undefined)
                                    || (forecast.precipitation_probability && forecast.precipitation_probability.day_1 && typeof states[forecast.precipitation_probability.day_1] !== undefined)) {
                                    _renderedPresent = renderPresent(this.hass, this._config.weather.current, this._config.weather.forecast, this._language, this._terms, posix > 0);
                                    posix++;
                                }
                                else
                                    _renderedPresent = "";
                            }
                            else
                                _renderedPresent = "";
                        }
                    }
                    else
                        _renderedPresent = "";
                    // Test AirQuality
                    if (this._showAirQuality && this._hasAirQuality) {
                        let airQuality = this._config.air_quality;
                        if ((airQuality.co && typeof states[airQuality.co] !== undefined)
                            || (airQuality.epa_aqi && typeof states[airQuality.epa_aqi] !== undefined)
                            || (airQuality.epa_health_concern && typeof states[airQuality.epa_health_concern] !== undefined)
                            || (airQuality.no2 && typeof states[airQuality.no2] !== undefined)
                            || (airQuality.o3 && typeof states[airQuality.o3] !== undefined)
                            || (airQuality.pm10 && typeof states[airQuality.pm10] !== undefined)
                            || (airQuality.pm25 && typeof states[airQuality.pm25] !== undefined)
                            || (airQuality.so2 && typeof states[airQuality.so2] !== undefined)) {
                            _renderedAirQuality = renderAirQualities(this.hass, this._config.air_quality, posix > 0);
                            posix++;
                        }
                        else
                            _renderedAirQuality = "";
                    }
                    else
                        _renderedAirQuality = "";
                    // Test uv
                    if (this._showUv && this._hasUv) {
                        let uv = this._config.uv;
                        if ((uv.protection_window && typeof states[uv.protection_window] !== undefined)
                            || (uv.ozone_level && typeof states[uv.ozone_level] !== undefined)
                            || (uv.uv_index && typeof states[uv.uv_index] !== undefined)
                            || (uv.uv_level && typeof states[uv.uv_level] !== undefined)
                            || (uv.max_uv_index && typeof states[uv.max_uv_index] !== undefined)) {
                            _renderedUv = renderUv(this.hass, this._config.uv, posix > 0);
                            posix++;
                        }
                        else
                            _renderedUv = "";
                    }
                    else
                        _renderedUv = "";
                    if (this._showPollen && this._hasPollen) {
                        let pollen = this._config.pollen;
                        if ((pollen.grass && pollen.grass.entity && typeof states[pollen.grass.entity] !== undefined)
                            || (pollen.tree && pollen.tree.entity && typeof states[pollen.tree.entity] !== undefined)
                            || (pollen.weed && pollen.weed.entity && typeof states[pollen.weed.entity] !== undefined)) {
                            _renderedPollen = renderPollens(this.hass, this._config.pollen, posix > 0);
                            posix++;
                        }
                        else
                            _renderedPollen = "";
                    }
                    else
                        _renderedPollen = "";
                    if (this._showForecast && this._hasForecast) {
                        let forecast = this._config.weather.forecast;
                        _renderedForecast = renderForecasts(this.hass, this._config.weather.current, forecast, this._iconsConfig, this._language, posix > 0);
                        posix++;
                    }
                    else
                        _renderedForecast = "";
                    // Test Alert
                    if (this._showAlert && this._hasAlert) {
                        let alert = this._config.alert;
                        _renderedAlert = renderAlert(this.hass, alert);
                        posix++;
                    }
                    else
                        _renderedAlert = "";
                    // Test Sea
                    if (this._showSea && this._hasSea) {
                        let sea = this._config.sea;
                        _renderedSea = renderSeaForecast(this.hass, sea, this._iconsConfig, this._language, posix > 0);
                        posix++;
                    }
                    else
                        _renderedSea = "";
                    return litElement.html `
      ${""}
      
      <ha-card class="ha-card-weather-conditions ">
        <div class="nd-container ${''}">
        ${this._header ? litElement.html `
            ${_renderedSummary}
            ${_renderedAlert}
            ${_renderedPresent}
            ${_renderedUv}
            ${_renderedAirQuality}
            ${_renderedPollen}
            ${_renderedForecast}
            ${_renderedSea}
            ${this._hasMeteogram ? this.renderCamera(this.hass, this._config.weather.forecast.meteogram) : ""}
            ${this._config.camera ? this.renderCamera(this.hass, this._config.camera) : ""}
        ` : litElement.html ``}
        </div>
      </ha-card>
    `;
                }
                /**
                 *
                 * @param hass
                 * @param camId
                 */
                renderCamera(hass, camId) {
                    let camera = hass.states[camId];
                    let entity_picture = camera ? camera.attributes.entity_picture : undefined;
                    return entity_picture ? litElement.html `
        <div @click=${e => this.handlePopup(e, camId)} class="camera-container">
          <div class="camera-image">
            <img src="${entity_picture}" alt="${camera.attributes.friendly_name}"/>
          </div>
        </div>
      ` : litElement.html ``;
                }
                /**
                 *
                 * @param e
                 * @param entityId
                 */
                handlePopup(e, entityId) {
                    e.stopPropagation();
                    let ne = new Event('hass-more-info', { composed: true });
                    // @ts-ignore
                    ne.detail = { entityId };
                    this.dispatchEvent(ne);
                }
            };
            __decorate([
                litElement.property()
            ], HaCardWeatherConditions.prototype, "hass", void 0);
            __decorate([
                litElement.property()
            ], HaCardWeatherConditions.prototype, "_config", void 0);
            HaCardWeatherConditions = __decorate([
                litElement.customElement("ha-card-weather-conditions")
            ], HaCardWeatherConditions);
        });
    });

    return exports;

})({}, litElement, cssTag_js, litHtml);
