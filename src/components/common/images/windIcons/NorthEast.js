import React, {Component} from "react";

class NorthEast extends Component {
    render() {

        return (
            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 150 150">
                <defs>
                    <style>{`   .ne-cls-1, .ne-cls-5 {
                        fill: #fff;
                    }

                        .ne-cls-1 {
                        stroke: #707070;
                    }

                        .ne-cls-2 {
                        clip - path: url(#clip-path);
                    }

                        .${this.props.customClass} {
                        fill: ${this.props.backgroundColor};
                    }

                        .ne-cls-4 {
                        fill: none;
                    }

                        .ne-cls-6 {
                        filter: url(#Ellipse_1228);
                    }

                        .ne-cls-7 {
                        filter: url(#Union_268);
                    }`}

                    </style>
                    <clipPath id="clip-path">
                        <rect id="Rectangle_10296" data-name="Rectangle 10296" className="ne-cls-1" width="150"
                              height="150" transform="translate(4460 1654)"/>
                    </clipPath>
                    <filter id="Union_268" x="-4.711" y="-11.901" width="169.611" height="169.611"
                            filterUnits="userSpaceOnUse">
                        <feOffset dy="3" input="SourceAlpha"/>
                        <feGaussianBlur stdDeviation="3" result="blur"/>
                        <feFlood floodOpacity="0.161"/>
                        <feComposite operator="in" in2="blur"/>
                        <feComposite in="SourceGraphic"/>
                    </filter>
                    <filter id="Ellipse_1228" x="24.823" y="26.334" width="109.645" height="109.645"
                            filterUnits="userSpaceOnUse">
                        <feOffset dy="3" input="SourceAlpha"/>
                        <feGaussianBlur stdDeviation="3" result="blur-2"/>
                        <feFlood floodOpacity="0.161"/>
                        <feComposite operator="in" in2="blur-2"/>
                        <feComposite in="SourceGraphic"/>
                    </filter>
                </defs>
                <g id="wind_icon_ne" className="ne-cls-2" transform="translate(-4460 -1654)">
                    <g id="Group_17772" data-name="Group 17772" transform="translate(736 2333)">
                        <g id="Group_17771" data-name="Group 17771" transform="translate(-128 12)">
                            <g className="ne-cls-7" transform="matrix(1, 0, 0, 1, 3852, -691)">
                                <path id="Union_268-2" data-name="Union 268" className={this.props.customClass}
                                      d="M14.785,99.767A50.006,50.006,0,0,1,41.707,15.123L49.7,0l7.912,14.969a50,50,0,1,1-42.828,84.8Z"
                                      transform="translate(85.09 -6) rotate(45)"/>
                            </g>
                            <g id="Group_17770" data-name="Group 17770" transform="translate(-69.588 -4.439)">
                                <g id="Group_17769" data-name="Group 17769" transform="translate(682 -378.747)">
                                    <g className="ne-cls-6" transform="matrix(1, 0, 0, 1, 3239.59, -307.81)">
                                        <ellipse id="Ellipse_1228-2" data-name="Ellipse 1228" className="ne-cls-4"
                                                 cx="45.823" cy="45.823" rx="45.823" ry="45.823"
                                                 transform="translate(33.82 32.33)"/>
                                    </g>
                                    <g id="Group_17768" data-name="Group 17768"
                                       transform="translate(3324.679 -313.814) rotate(45)">
                                        <path id="Path_13587" data-name="Path 13587" className={this.props.customClass}
                                              d="M0,0,18.292,5.641l-6.325,6.325L5.641,18.292Z"
                                              transform="translate(49.701) rotate(45)"/>
                                    </g>
                                    <path id="Let_s_Swim" data-name="Let’s Swim" className="ne-cls-5"
                                          d="M-4.08,0Q-6.09-3.57-8.43-7.05a71.648,71.648,0,0,0-4.98-6.57V0h-4.62V-20.79h3.81q.99.99,2.19,2.43t2.445,3.075q1.245,1.635,2.475,3.39T-4.8-8.52V-20.79H-.15V0ZM4.65,0V-20.79H18.69v3.93H9.33v4.08h8.31v3.84H9.33v5.01H19.38V0Z"
                                          transform="translate(3313.496 -221.248)"/>
                                </g>
                            </g>
                        </g>
                    </g>
                </g>
            </svg>

        );
    }
}

export default NorthEast;