import React, {Component} from "react";

class East extends Component {
    render() {

        return (
            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 150 150">
                <defs>
                    <style>{`   .e-cls-1, .e-cls-4 {
                        fill: #fff;
                    }

                        .e-cls-1 {
                        stroke: #707070;
                    }

                        .e-cls-2 {
                        clip - path: url(#clip-path);
                    }

                        .${this.props.customClass} {
                        fill: ${this.props.backgroundColor};
                    }

                        .e-cls-5 {
                        filter: url(#Union_259);
                    }`}

                    </style>
                    <clipPath id="clip-path">
                        <rect id="Rectangle_10293" data-name="Rectangle 10293" className="e-cls-1" width="150"
                              height="150" transform="translate(3560 1654)"/>
                    </clipPath>
                    <filter id="Union_259" x="16" y="19" width="132.68" height="118" filterUnits="userSpaceOnUse">
                        <feOffset dy="3" input="SourceAlpha"/>
                        <feGaussianBlur stdDeviation="3" result="blur"/>
                        <feFlood floodOpacity="0.161"/>
                        <feComposite operator="in" in2="blur"/>
                        <feComposite in="SourceGraphic"/>
                    </filter>
                </defs>
                <g id="wind_icon_e" className="e-cls-2" transform="translate(-3560 -1654)">
                    <g id="Group_17747" data-name="Group 17747" transform="translate(200 2346)">
                        <g id="Group_17893" data-name="Group 17893">
                            <g className="e-cls-5" transform="matrix(1, 0, 0, 1, 3360, -692)">
                                <path id="Union_259-2" data-name="Union 259" className={this.props.customClass}
                                      d="M0,64.679A50.012,50.012,0,0,1,41.567,15.388L49.7,0l8.077,15.281A50,50,0,1,1,0,64.679Z"
                                      transform="translate(139.68 25) rotate(90)"/>
                            </g>
                            <g id="Group_17746" data-name="Group 17746" transform="translate(3499.679 -667) rotate(90)">
                                <path id="Path_13566" data-name="Path 13566" className={this.props.customClass}
                                      d="M0,0,18.292,5.641l-6.325,6.325L5.641,18.292Z"
                                      transform="translate(49.701) rotate(45)"/>
                            </g>
                        </g>
                        <path id="Let_s_Swim" data-name="Let’s Swim" className="e-cls-4"
                              d="M-6.69,0V-20.79H7.35v3.93H-2.01v4.08H6.3v3.84H-2.01v5.01H8.04V0Z"
                              transform="translate(3436 -606)"/>
                    </g>
                </g>
            </svg>

        );
    }
}

export default East;