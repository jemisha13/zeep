import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Layout } from 'antd';

const { Header } = Layout;

class WithoutAuthHeader extends Component {

    state = {}

    render() {
        return (

            <Header className="login-bg cs-header">
                <Link className="cs-logo-link" to="/">
                <svg width="90" height="50" viewBox="0 0 90 50" fill="none" xmlns="http://www.w3.org/2000/svg" className="desktop-logo">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M17.0322 38.955L24.9821 27.8823V27.8003H17.4965V24.1094H30.8556V27.6089L22.8784 38.7088V38.7909H30.8283V42.4818H17.0322V38.955Z" fill="white"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M35.6432 33.9796H39.9051C39.9051 31.9293 39.2219 31.1911 37.856 31.1911C36.8179 31.1911 35.8344 31.7925 35.6432 33.9796ZM30.9443 35.5653V35.21C30.9443 30.8629 33.6488 28.1289 37.856 28.1289C42.5822 28.1289 44.358 30.781 44.358 35.4014V36.6042H35.6705C35.9437 38.819 37.2004 39.4476 39.5771 39.4476C41.2435 39.4476 42.6916 39.0375 43.7842 38.6001V41.4706C42.7188 42.0996 40.9703 42.7284 38.3751 42.7284C33.3756 42.7284 30.9443 40.2132 30.9443 35.5653Z" fill="white"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M49.8116 33.9796H54.0733C54.0733 31.9293 53.3904 31.1911 52.0245 31.1911C50.9865 31.1911 50.0029 31.7925 49.8116 33.9796ZM45.1128 35.5653V35.21C45.1128 30.8629 47.8173 28.1289 52.0245 28.1289C56.7508 28.1289 58.5265 30.781 58.5265 35.4014V36.6042H49.8391C50.1123 38.819 51.3689 39.4476 53.7455 39.4476C55.4122 39.4476 56.8598 39.0375 57.9527 38.6001V41.4706C56.8873 42.0996 55.1388 42.7284 52.5436 42.7284C47.5441 42.7284 45.1128 40.2132 45.1128 35.5653Z" fill="white"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M69.411 35.784V35.3465C69.411 32.4212 68.5093 31.7103 66.9249 31.7103C65.9689 31.7103 65.2312 31.9838 64.8213 32.2572V39.0374C65.2312 39.3109 65.9689 39.5569 66.761 39.5569C68.4276 39.5569 69.411 38.8189 69.411 35.784ZM60.1772 28.4022H64.6575V29.578H64.794C65.7228 28.6756 66.9797 28.1562 68.8646 28.1562C71.5964 28.1562 74.1646 29.7692 74.1646 34.9091V35.2372C74.1646 40.7871 71.5146 42.7282 67.6626 42.7282C66.242 42.7282 65.3404 42.455 64.8213 42.2361V46.5831H60.1772V28.4022Z" fill="white"/>
                    <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="75" y="28" width="12" height="15">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M75.3237 28.1289H86.4154V42.7283H75.3237V28.1289Z" fill="white"/>
                    </mask>
                    <g mask="url(#mask0)">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M75.4059 41.7987V38.6819C76.4984 39.0922 77.6734 39.5024 79.5856 39.5024C81.2793 39.5024 81.9622 39.0922 81.9622 38.3266C81.9622 37.6431 81.5523 37.3972 80.3503 37.2603L79.0666 37.0691C76.6623 36.7138 75.3237 35.4013 75.3237 32.6673C75.3237 29.8514 77.1814 28.1289 81.088 28.1289C83.1095 28.1289 84.4757 28.4023 85.5412 28.8671V31.9564C84.6397 31.6832 83.3556 31.3277 81.6892 31.3277C80.296 31.3277 79.6401 31.6832 79.6401 32.4213C79.6401 33.1047 80.132 33.3509 81.252 33.5149L82.5634 33.6789C85.4044 34.0616 86.4155 35.5927 86.4155 38.0259C86.4155 41.1152 84.4757 42.7283 80.2685 42.7283C78.3836 42.7283 76.5258 42.3728 75.4059 41.7987Z" fill="white"/>
                    </g>
                    <mask id="mask1" mask-type="alpha" maskUnits="userSpaceOnUse" x="2" y="3" width="41" height="40">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M2 3.10156H42.4811V42.4729H2V3.10156Z" fill="white"/>
                    </mask>
                    <g mask="url(#mask1)">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M42.4811 14.5491L22.2486 3.10156L2 14.5491V42.4729H13.6992V36.176H8.02327V18.7701L22.2469 10.8622L27.8278 13.793L36.4579 18.3254V22.0811H42.4811V14.5491Z" fill="white"/>
                    </g>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg"  width="50" height="45" viewBox="0 0 50 45" className="mobile-logo">
                    <defs>
                        <path id="ev9b8ep4na" d="M0 0.035L38.017 0.035 38.017 35.469 0 35.469z"/>
                    </defs>
                    <g fill="none" fill-rule="evenodd">
                        <g>
                            <g>
                                <g>
                                    <g transform="translate(-421 -14) translate(421 14) translate(5.009 3.7) translate(0 .058)">
                                        <mask id="w2iv9u332b" fill="#fff">
                                            <use href="#ev9b8ep4na"/>
                                        </mask>
                                        <path fill="#FFF" d="M38.017 10.337L19.016 0.035 0 10.337 0 35.469 38.017 35.469 38.017 29.802 5.657 29.802 5.657 14.136 19.014 7.019 24.256 9.657 32.36 13.736 32.36 29.802 38.017 29.802z" mask="url(#w2iv9u332b)"/>
                                    </g>
                                </g>
                            </g>
                        </g>
                    </g>

                    </svg>

                </Link>
            </Header>
        );
    }
}

export default WithoutAuthHeader;