import React, {Component} from "react";

class SouthWest extends Component {
    render() {

        return (
            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 150 150">
                <defs>
                    <style>{`.sw-cls-1, .sw-cls-4 {
                        fill: #fff;
                    }

                        .sw-cls-1 {
                        stroke: #707070;
                    }

                        .sw-cls-2 {
                        clip - path: url(#clip-path);
                    }

                        .${this.props.customClass} {
                        fill: ${this.props.backgroundColor};
                    }

                        .sw-cls-5 {
                        filter: url(#Path_13692);
                    }

                        .sw-cls-6 {
                        filter: url(#Union_274);
                    }`}

                    </style>
                    <clipPath id="clip-path">
                        <rect id="Rectangle_10298" data-name="Rectangle 10298" className="sw-cls-1" width="150"
                              height="150" transform="translate(5060 1654)"/>
                    </clipPath>
                    <filter id="Union_274" x="-15" y="-2" width="169.801" height="169.801" filterUnits="userSpaceOnUse">
                        <feOffset dy="3" input="SourceAlpha"/>
                        <feGaussianBlur stdDeviation="3" result="blur"/>
                        <feFlood floodOpacity="0.161"/>
                        <feComposite operator="in" in2="blur"/>
                        <feComposite in="SourceGraphic"/>
                    </filter>
                    <filter id="Path_13692" x="16" y="18.445" width="118" height="118.246" filterUnits="userSpaceOnUse">
                        <feOffset dy="3" input="SourceAlpha"/>
                        <feGaussianBlur stdDeviation="3" result="blur-2"/>
                        <feFlood floodOpacity="0.161"/>
                        <feComposite operator="in" in2="blur-2"/>
                        <feComposite in="SourceGraphic"/>
                    </filter>
                </defs>
                <g id="wind_icon_sw" className="sw-cls-2" transform="translate(-5060 -1654)">
                    <g id="Group_17788" data-name="Group 17788" transform="translate(1108 2332)">
                        <g id="Group_17787" data-name="Group 17787" transform="translate(-91 21)">
                            <g className="sw-cls-6" transform="matrix(1, 0, 0, 1, 4043, -699)">
                                <path id="Union_274-2" data-name="Union 274" className={this.props.customClass}
                                      d="M0,64.875A49.826,49.826,0,0,1,41.343,15.812L49.7,0,58,15.7A49.826,49.826,0,1,1,0,64.875Z"
                                      transform="translate(64.71 155.8) rotate(-135)"/>
                            </g>
                            <g id="Group_17891" data-name="Group 17891">
                                <g className="sw-cls-5" transform="matrix(1, 0, 0, 1, 4043, -699)">
                                    <path id="Path_13692-2" data-name="Path 13692" className={this.props.customClass}
                                          d="M50,0A50.123,50.123,0,1,1,0,50.123,50.062,50.062,0,0,1,50,0Z"
                                          transform="translate(25 24.44)"/>
                                </g>
                            </g>
                            <g id="Group_17786" data-name="Group 17786" transform="translate(-80.588 24.561)">
                                <path id="Let_s_Swim" data-name="Let’s Swim" className="sw-cls-4"
                                      d="M-14.73-3.57a6.75,6.75,0,0,0,1.635-.165,3.014,3.014,0,0,0,1.035-.45,1.506,1.506,0,0,0,.54-.675,2.407,2.407,0,0,0,.15-.87,2.01,2.01,0,0,0-.96-1.7,13.717,13.717,0,0,0-3.3-1.455q-1.02-.36-2.04-.825a7.519,7.519,0,0,1-1.83-1.17,5.6,5.6,0,0,1-1.32-1.71,5.356,5.356,0,0,1-.51-2.445,6.054,6.054,0,0,1,.54-2.6,5.54,5.54,0,0,1,1.53-1.965,7,7,0,0,1,2.4-1.245,10.773,10.773,0,0,1,3.18-.435,12.949,12.949,0,0,1,3.63.45,12.971,12.971,0,0,1,2.52.99l-1.35,3.69a12.786,12.786,0,0,0-1.935-.8,8.379,8.379,0,0,0-2.565-.345,4.706,4.706,0,0,0-2.415.465,1.569,1.569,0,0,0-.735,1.425,1.646,1.646,0,0,0,.27.96,2.624,2.624,0,0,0,.765.7,6.73,6.73,0,0,0,1.14.57q.645.255,1.425.525,1.62.6,2.82,1.185A7.531,7.531,0,0,1-8.115-10.08,4.944,4.944,0,0,1-6.93-8.25,7.352,7.352,0,0,1-6.54-5.7,5.416,5.416,0,0,1-8.58-1.185Q-10.62.42-14.73.42A17.039,17.039,0,0,1-17.22.255,16.071,16.071,0,0,1-19.185-.15a11.271,11.271,0,0,1-1.47-.51,11.162,11.162,0,0,1-1.035-.51l1.32-3.72a11.769,11.769,0,0,0,2.3.915A11.9,11.9,0,0,0-14.73-3.57Zm25.44-15q.36,1.23.8,2.775t.93,3.2q.495,1.65,1,3.3t.99,3.06q.39-1.53.795-3.33t.765-3.72q.36-1.92.7-3.825t.645-3.675H22.2q-1.05,5.22-2.415,10.59T16.83,0H12.54Q11.49-2.88,10.5-6.045T8.55-12.39Q7.59-9.21,6.63-6.045T4.62,0H.33Q-1.26-4.83-2.625-10.2T-5.04-20.79H.03q.3,1.77.66,3.675t.75,3.825q.39,1.92.795,3.72T3.06-6.24Q3.6-7.71,4.11-9.36t.99-3.3q.48-1.65.885-3.18t.735-2.73Z"
                                      transform="translate(4198.496 -638.995)"/>
                            </g>
                        </g>
                    </g>
                </g>
            </svg>

        );
    }
}

export default SouthWest;