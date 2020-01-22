import React, {Component} from "react";

class WestNorthWest extends Component {
    render() {

        return (
            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 150 150">
                <defs>
                    <style>{`
                                 .wsw-cls-1, .wsw-cls-4 {
                        fill: #fff;
                    }

                        .cwsw-ls-1 {
                        stroke: #707070;
                    }

                        .wsw-cls-2 {
                        clip - path: url(#clip-path);
                    }

                        .${this.props.customClass} {
                        fill: ${this.props.backgroundColor};
                    }
                        .wsw-cls-5 {
                        filter: url(#Union_283);
                    }`}

                    </style>
                    <clipPath id="clip-path">
                        <rect id="Rectangle_10301" data-name="Rectangle 10301" className="wsw-cls-1" width="150"
                              height="150" transform="translate(5960 1654)"/>
                    </clipPath>
                    <filter id="Union_283" x="-11" y="4" width="162.219" height="154.274" filterUnits="userSpaceOnUse">
                        <feOffset dy="3" input="SourceAlpha"/>
                        <feGaussianBlur stdDeviation="3" result="blur"/>
                        <feFlood floodOpacity="0.161"/>
                        <feComposite operator="in" in2="blur"/>
                        <feComposite in="SourceGraphic"/>
                    </filter>
                </defs>
                <g id="wind_icon_wsw" className="wsw-cls-2" transform="translate(-5960 -1654)">
                    <g id="Group_17809" data-name="Group 17809" transform="translate(1635 2326)">
                        <g className="wsw-cls-5" transform="matrix(1, 0, 0, 1, 4325, -672)">
                            <path id="Union_283-2" data-name="Union 283" className={this.props.customClass}
                                  d="M0,64.875A49.826,49.826,0,0,1,41.343,15.812L49.7,0,58,15.7A49.826,49.826,0,1,1,0,64.875Z"
                                  transform="translate(36.27 146.27) rotate(-112.5)"/>
                        </g>
                        <g id="Group_17808" data-name="Group 17808" transform="translate(-21.379 -82.203)">
                            <path id="Let_s_Swim" data-name="Let’s Swim" className="wsw-cls-4"
                                  d="M-20.67-18.57q.36,1.23.8,2.775t.93,3.2q.495,1.65,1,3.3t.99,3.06q.39-1.53.795-3.33t.765-3.72q.36-1.92.7-3.825t.645-3.675h4.86q-1.05,5.22-2.415,10.59T-14.55,0h-4.29q-1.05-2.88-2.04-6.045t-1.95-6.345q-.96,3.18-1.92,6.345T-26.76,0h-4.29q-1.59-4.83-2.955-10.2T-36.42-20.79h5.07q.3,1.77.66,3.675t.75,3.825q.39,1.92.8,3.72t.825,3.33q.54-1.47,1.05-3.12t.99-3.3q.48-1.65.885-3.18t.735-2.73Zm20.16,15a6.75,6.75,0,0,0,1.635-.165,3.014,3.014,0,0,0,1.035-.45A1.506,1.506,0,0,0,2.7-4.86a2.407,2.407,0,0,0,.15-.87,2.01,2.01,0,0,0-.96-1.7A13.717,13.717,0,0,0-1.41-8.88Q-2.43-9.24-3.45-9.7a7.519,7.519,0,0,1-1.83-1.17,5.6,5.6,0,0,1-1.32-1.71,5.356,5.356,0,0,1-.51-2.445,6.054,6.054,0,0,1,.54-2.6A5.54,5.54,0,0,1-5.04-19.59a7,7,0,0,1,2.4-1.245A10.773,10.773,0,0,1,.54-21.27a12.949,12.949,0,0,1,3.63.45,12.971,12.971,0,0,1,2.52.99L5.34-16.14a12.786,12.786,0,0,0-1.935-.8A8.379,8.379,0,0,0,.84-17.28a4.706,4.706,0,0,0-2.415.465A1.569,1.569,0,0,0-2.31-15.39a1.646,1.646,0,0,0,.27.96,2.624,2.624,0,0,0,.765.7,6.73,6.73,0,0,0,1.14.57q.645.255,1.425.525,1.62.6,2.82,1.185A7.531,7.531,0,0,1,6.1-10.08,4.944,4.944,0,0,1,7.29-8.25,7.352,7.352,0,0,1,7.68-5.7,5.416,5.416,0,0,1,5.64-1.185Q3.6.42-.51.42A17.039,17.039,0,0,1-3,.255,16.071,16.071,0,0,1-4.965-.15a11.271,11.271,0,0,1-1.47-.51A11.162,11.162,0,0,1-7.47-1.17l1.32-3.72a11.769,11.769,0,0,0,2.295.915A11.9,11.9,0,0,0-.51-3.57Zm25.44-15q.36,1.23.8,2.775t.93,3.2q.495,1.65,1,3.3t.99,3.06q.39-1.53.795-3.33t.765-3.72q.36-1.92.7-3.825t.645-3.675h4.86Q35.37-15.57,34-10.2T31.05,0H26.76q-1.05-2.88-2.04-6.045T22.77-12.39q-.96,3.18-1.92,6.345T18.84,0H14.55q-1.59-4.83-2.955-10.2T9.18-20.79h5.07q.3,1.77.66,3.675t.75,3.825q.39,1.92.8,3.72t.825,3.33q.54-1.47,1.05-3.12t.99-3.3q.48-1.65.885-3.18t.735-2.73Z"
                                  transform="translate(4422.496 -504.995)"/>
                        </g>
                    </g>
                </g>
            </svg>

        );
    }
}

export default WestNorthWest;