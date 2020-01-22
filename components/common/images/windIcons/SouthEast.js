import React, {Component} from "react";

class SouthEast extends Component {
    render() {

        return (
            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 150 150">
                <defs>
                    <style>{`
                     .se-cls-1, .se-cls-3 {
                        fill: #fff;
                    }

                        .se-cls-1 {
                        stroke: #707070;
                    }

                        .se-cls-2 {
                        clip - path: url(#clip-path);
                    }

                        .${this.props.customClass} {
                        fill: ${this.props.backgroundColor};
                    }


                        .se-cls-5 {
                        filter: url(#Ellipse_1243);
                    }

                        .se-cls-6 {
                        filter: url(#Path_13590);
                    }`}

                    </style>
                    <clipPath id="clip-path">
                        <rect id="Rectangle_10297" data-name="Rectangle 10297" className="se-cls-1" width="150"
                              height="150" transform="translate(4760 1654)"/>
                    </clipPath>
                    <filter id="Path_13590" x="93.366" y="96.943" width="36.292" height="36.292"
                            filterUnits="userSpaceOnUse">
                        <feOffset dy="3" input="SourceAlpha"/>
                        <feGaussianBlur stdDeviation="3" result="blur"/>
                        <feFlood floodOpacity="0.161"/>
                        <feComposite operator="in" in2="blur"/>
                        <feComposite in="SourceGraphic"/>
                    </filter>
                    <filter id="Ellipse_1243" x="16" y="19" width="118" height="118" filterUnits="userSpaceOnUse">
                        <feOffset dy="3" input="SourceAlpha"/>
                        <feGaussianBlur stdDeviation="3" result="blur-2"/>
                        <feFlood floodOpacity="0.161"/>
                        <feComposite operator="in" in2="blur-2"/>
                        <feComposite in="SourceGraphic"/>
                    </filter>
                </defs>
                <g id="wind_icon_se" className="se-cls-2" transform="translate(-4760 -1654)">
                    <g id="Group_17780" data-name="Group 17780" transform="translate(923 2333)">
                        <g id="Group_17779" data-name="Group 17779" transform="translate(-121 29)">
                            <g className="se-cls-6" transform="matrix(1, 0, 0, 1, 3958, -708)">
                                <path id="Path_13590-2" data-name="Path 13590" className="se-cls-3"
                                      d="M0,0,18.292,5.641l-6.325,6.325L5.641,18.292Z"
                                      transform="translate(120.66 121.23) rotate(180)"/>
                            </g>
                            <g id="Group_17778" data-name="Group 17778" transform="translate(60.412 -1.099)">
                                <g id="Group_17777" data-name="Group 17777"
                                   transform="translate(4053.39 -620.81) rotate(135)">
                                    <g id="Group_17897" data-name="Group 17897">
                                        <path id="Path_13594" data-name="Path 13594" className={this.props.customClass}
                                              d="M0,0,18.292,5.641l-6.325,6.325L5.641,18.292Z"
                                              transform="translate(49.701 0) rotate(45)"/>
                                        <g className="se-cls-5"
                                           transform="matrix(-0.71, -0.71, 0.71, -0.71, 49.29, 171.04)">
                                            <circle id="Ellipse_1243-2" data-name="Ellipse 1243" className={this.props.customClass}
                                                    cx="50" cy="50" r="50" transform="translate(25 25)"/>
                                        </g>
                                    </g>
                                </g>
                                <path id="Let_s_Swim" data-name="Let’s Swim" className="se-cls-3"
                                      d="M-9.75-3.57a6.75,6.75,0,0,0,1.635-.165,3.014,3.014,0,0,0,1.035-.45,1.506,1.506,0,0,0,.54-.675,2.407,2.407,0,0,0,.15-.87,2.01,2.01,0,0,0-.96-1.7,13.717,13.717,0,0,0-3.3-1.455q-1.02-.36-2.04-.825a7.519,7.519,0,0,1-1.83-1.17,5.6,5.6,0,0,1-1.32-1.71,5.356,5.356,0,0,1-.51-2.445,6.054,6.054,0,0,1,.54-2.6,5.54,5.54,0,0,1,1.53-1.965,7,7,0,0,1,2.4-1.245A10.773,10.773,0,0,1-8.7-21.27a12.949,12.949,0,0,1,3.63.45,12.971,12.971,0,0,1,2.52.99L-3.9-16.14a12.786,12.786,0,0,0-1.935-.8A8.379,8.379,0,0,0-8.4-17.28a4.706,4.706,0,0,0-2.415.465,1.569,1.569,0,0,0-.735,1.425,1.646,1.646,0,0,0,.27.96,2.624,2.624,0,0,0,.765.7,6.73,6.73,0,0,0,1.14.57q.645.255,1.425.525,1.62.6,2.82,1.185A7.531,7.531,0,0,1-3.135-10.08,4.944,4.944,0,0,1-1.95-8.25,7.352,7.352,0,0,1-1.56-5.7,5.416,5.416,0,0,1-3.6-1.185Q-5.64.42-9.75.42A17.039,17.039,0,0,1-12.24.255,16.071,16.071,0,0,1-14.2-.15a11.271,11.271,0,0,1-1.47-.51,11.162,11.162,0,0,1-1.035-.51l1.32-3.72a11.769,11.769,0,0,0,2.3.915A11.9,11.9,0,0,0-9.75-3.57ZM2.04,0V-20.79H16.08v3.93H6.72v4.08h8.31v3.84H6.72v5.01H16.77V0Z"
                                      transform="translate(3971.496 -620.995)"/>
                            </g>
                        </g>
                    </g>
                </g>
            </svg>

        );
    }
}

export default SouthEast;