import React, {Component} from "react";

class EastSouthEast extends Component {
    render() {

        return (
            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 150 150">
                <defs>
                    <style>{`     .ese-cls-1, .ese-cls-4 {
                        fill: #fff;
                    }

                        .ese-cls-1 {
                        stroke: #707070;
                    }

                        .ese-cls-2 {
                        clip - path: url(#clip-path);
                    }

                        .${this.props.customClass} {
                        fill: ${this.props.backgroundColor};
                    }

                        .ese-cls-5 {
                        filter: url(#Union_292);
                    }`}

                    </style>
                    <clipPath id="clip-path">
                        <rect id="Rectangle_10304" data-name="Rectangle 10304" className="ese-cls-1" width="150"
                              height="150" transform="translate(6860 1654)"/>
                    </clipPath>
                    <filter id="Union_292" x="1" y="4" width="162.219" height="154.274" filterUnits="userSpaceOnUse">
                        <feOffset dy="3" input="SourceAlpha"/>
                        <feGaussianBlur stdDeviation="3" result="blur"/>
                        <feFlood floodOpacity="0.161"/>
                        <feComposite operator="in" in2="blur"/>
                        <feComposite in="SourceGraphic"/>
                    </filter>
                </defs>
                <g id="wind_icon_ese" className="ese-cls-2" transform="translate(-6860 -1654)">
                    <g id="Group_17830" data-name="Group 17830" transform="translate(2249 2084)">
                        <g className="ese-cls-5" transform="matrix(1, 0, 0, 1, 4611, -430)">
                            <path id="Union_292-2" data-name="Union 292" className={this.props.customClass}
                                  d="M0,64.875A49.826,49.826,0,0,1,41.343,15.812L49.7,0,58,15.7A49.826,49.826,0,1,1,0,64.875Z"
                                  transform="translate(154.22 53.89) rotate(112.5)"/>
                        </g>
                        <g id="Group_17829" data-name="Group 17829" transform="translate(61.62 -2.863)">
                            <path id="Let_s_Swim" data-name="Let’s Swim" className="ese-cls-4"
                                  d="M-24.51,0V-20.79h14.04v3.93h-9.36v4.08h8.31v3.84h-8.31v5.01H-9.78V0ZM-.66-3.57A6.75,6.75,0,0,0,.975-3.735a3.014,3.014,0,0,0,1.035-.45,1.506,1.506,0,0,0,.54-.675,2.407,2.407,0,0,0,.15-.87,2.01,2.01,0,0,0-.96-1.7A13.717,13.717,0,0,0-1.56-8.88Q-2.58-9.24-3.6-9.7a7.519,7.519,0,0,1-1.83-1.17,5.6,5.6,0,0,1-1.32-1.71,5.356,5.356,0,0,1-.51-2.445,6.054,6.054,0,0,1,.54-2.6A5.54,5.54,0,0,1-5.19-19.59a7,7,0,0,1,2.4-1.245A10.773,10.773,0,0,1,.39-21.27a12.949,12.949,0,0,1,3.63.45,12.971,12.971,0,0,1,2.52.99L5.19-16.14a12.786,12.786,0,0,0-1.935-.8A8.379,8.379,0,0,0,.69-17.28a4.706,4.706,0,0,0-2.415.465A1.569,1.569,0,0,0-2.46-15.39a1.646,1.646,0,0,0,.27.96,2.624,2.624,0,0,0,.765.7,6.73,6.73,0,0,0,1.14.57q.645.255,1.425.525,1.62.6,2.82,1.185A7.531,7.531,0,0,1,5.955-10.08,4.944,4.944,0,0,1,7.14-8.25,7.352,7.352,0,0,1,7.53-5.7,5.416,5.416,0,0,1,5.49-1.185Q3.45.42-.66.42A17.039,17.039,0,0,1-3.15.255,16.071,16.071,0,0,1-5.115-.15a11.271,11.271,0,0,1-1.47-.51A11.162,11.162,0,0,1-7.62-1.17L-6.3-4.89A11.769,11.769,0,0,0-4-3.975,11.9,11.9,0,0,0-.66-3.57ZM11.13,0V-20.79H25.17v3.93H15.81v4.08h8.31v3.84H15.81v5.01H25.86V0Z"
                                  transform="translate(4623.496 -341.995)"/>
                        </g>
                    </g>
                </g>
            </svg>

        );
    }
}

export default EastSouthEast;