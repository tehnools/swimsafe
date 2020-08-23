import React, {Component} from "react";

class South extends Component {
    render() {

        return (
            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 150 150">
                <defs>
                    <style>{`
                        .s-cls-1, .s-cls-4 {
                        fill: #fff;
                    }

                        .s-cls-1 {
                        stroke: #707070;
                    }

                        .s-cls-2 {
                        clip - path: url(#clip-path);
                    }

                        .${this.props.customClass} {
                        fill: ${this.props.backgroundColor};
                    }


                        .s-cls-5 {
                        filter: url(#Ellipse_1240);
                    }`}

                    </style>
                    <clipPath id="clip-path">
                        <rect id="Rectangle_10294" data-name="Rectangle 10294" className="s-cls-1" width="150"
                              height="150" transform="translate(3860 1654)"/>
                    </clipPath>
                    <filter id="Ellipse_1240" x="16" y="19" width="118" height="118" filterUnits="userSpaceOnUse">
                        <feOffset dy="3" input="SourceAlpha"/>
                        <feGaussianBlur stdDeviation="3" result="blur"/>
                        <feFlood floodOpacity="0.161"/>
                        <feComposite operator="in" in2="blur"/>
                        <feComposite in="SourceGraphic"/>
                    </filter>
                </defs>
                <g id="wind_icon_s" className="s-cls-2" transform="translate(-3860 -1654)">
                    <g id="Group_17755" data-name="Group 17755" transform="translate(373 2353)">
                        <g id="Group_17754" data-name="Group 17754">
                            <g id="Group_17753" data-name="Group 17753" transform="translate(-194 12.261)">
                                <g id="Group_17752" data-name="Group 17752"
                                   transform="translate(3806 -571.582) rotate(180)">
                                    <g id="Group_17894" data-name="Group 17894">
                                        <path id="Path_13573" data-name="Path 13573" className={this.props.customClass}
                                              d="M0,0,18.292,5.641l-6.325,6.325L5.641,18.292Z"
                                              transform="translate(49.701) rotate(45)"/>
                                        <g className="s-cls-5" transform="matrix(-1, 0, 0, -1, 125, 139.68)">
                                            <circle id="Ellipse_1240-2" data-name="Ellipse 1240" className={this.props.customClass}
                                                    cx="50" cy="50" r="50" transform="translate(25 25)"/>
                                        </g>
                                    </g>
                                </g>
                                <path id="Let_s_Swim" data-name="Let’s Swim" className="s-cls-4"
                                      d="M-.66-3.57A6.75,6.75,0,0,0,.975-3.735a3.014,3.014,0,0,0,1.035-.45,1.506,1.506,0,0,0,.54-.675,2.407,2.407,0,0,0,.15-.87,2.01,2.01,0,0,0-.96-1.7A13.717,13.717,0,0,0-1.56-8.88Q-2.58-9.24-3.6-9.7a7.519,7.519,0,0,1-1.83-1.17,5.6,5.6,0,0,1-1.32-1.71,5.356,5.356,0,0,1-.51-2.445,6.054,6.054,0,0,1,.54-2.6A5.54,5.54,0,0,1-5.19-19.59a7,7,0,0,1,2.4-1.245A10.773,10.773,0,0,1,.39-21.27a12.949,12.949,0,0,1,3.63.45,12.971,12.971,0,0,1,2.52.99L5.19-16.14a12.786,12.786,0,0,0-1.935-.8A8.379,8.379,0,0,0,.69-17.28a4.706,4.706,0,0,0-2.415.465A1.569,1.569,0,0,0-2.46-15.39a1.646,1.646,0,0,0,.27.96,2.624,2.624,0,0,0,.765.7,6.73,6.73,0,0,0,1.14.57q.645.255,1.425.525,1.62.6,2.82,1.185A7.531,7.531,0,0,1,5.955-10.08,4.944,4.944,0,0,1,7.14-8.25,7.352,7.352,0,0,1,7.53-5.7,5.416,5.416,0,0,1,5.49-1.185Q3.45.42-.66.42A17.039,17.039,0,0,1-3.15.255,16.071,16.071,0,0,1-5.115-.15a11.271,11.271,0,0,1-1.47-.51A11.162,11.162,0,0,1-7.62-1.17L-6.3-4.89A11.769,11.769,0,0,0-4-3.975,11.9,11.9,0,0,0-.66-3.57Z"
                                      transform="translate(3756.007 -625.256)"/>
                            </g>
                        </g>
                    </g>
                </g>
            </svg>

        );
    }
}

export default South;