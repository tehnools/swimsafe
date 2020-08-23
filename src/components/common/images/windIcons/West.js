import React, {Component} from "react";

class West extends Component {
    render() {

        return (
            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 150 150">
                <defs>
                    <style>{`
                      .w-cls-1, .w-cls-4 {
                        fill: #fff;
                    }

                        .w-cls-1 {
                        stroke: #707070;
                    }

                        .w-cls-2 {
                        clip - path: url(#clip-path);
                    }


                        .${this.props.customClass} {
                        fill: ${this.props.backgroundColor};
                    }

                        .w-cls-5 {
                        filter: url(#Union_265);
                    }`}

                    </style>
                    <clipPath id="clip-path">
                        <rect id="Rectangle_10295" data-name="Rectangle 10295" className="w-cls-1" width="150"
                              height="150" transform="translate(4160 1654)"/>
                    </clipPath>
                    <filter id="Union_265" x="1" y="19" width="133" height="118" filterUnits="userSpaceOnUse">
                        <feOffset dy="3" input="SourceAlpha"/>
                        <feGaussianBlur stdDeviation="3" result="blur"/>
                        <feFlood floodOpacity="0.161"/>
                        <feComposite operator="in" in2="blur"/>
                        <feComposite in="SourceGraphic"/>
                    </filter>
                </defs>
                <g id="wind_icon_w" className="w-cls-2" transform="translate(-4160 -1654)">
                    <g id="Group_17763" data-name="Group 17763" transform="translate(548 2342)">
                        <g id="Group_17762" data-name="Group 17762" transform="translate(-80 -4)">
                            <g className="w-cls-5" transform="matrix(1, 0, 0, 1, 3692, -684)">
                                <path id="Union_265-2" data-name="Union 265" className={this.props.customClass}
                                      d="M0,65A50.015,50.015,0,0,1,41.38,15.74L49.7,0l8.262,15.631A50,50,0,1,1,0,65Z"
                                      transform="translate(10 125) rotate(-90)"/>
                            </g>
                            <g id="Group_17761" data-name="Group 17761" transform="translate(57.851 0)">
                                <path id="Let_s_Swim" data-name="Let’s Swim" className="w-cls-4"
                                      d="M2.13-18.57q.36,1.23.8,2.775t.93,3.2q.495,1.65,1,3.3t.99,3.06q.39-1.53.795-3.33t.765-3.72q.36-1.92.7-3.825T8.76-20.79h4.86q-1.05,5.22-2.415,10.59T8.25,0H3.96Q2.91-2.88,1.92-6.045T-.03-12.39Q-.99-9.21-1.95-6.045T-3.96,0H-8.25Q-9.84-4.83-11.2-10.2T-13.62-20.79h5.07q.3,1.77.66,3.675t.75,3.825q.39,1.92.795,3.72t.825,3.33q.54-1.47,1.05-3.12t.99-3.3q.48-1.65.885-3.18t.735-2.73Z"
                                      transform="translate(3709.496 -597.995)"/>
                            </g>
                        </g>
                    </g>
                </g>
            </svg>


        );
    }
}

export default West;