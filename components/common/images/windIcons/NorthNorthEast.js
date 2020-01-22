import React, {Component} from "react";

class NorthNorthEast extends Component {
    render() {

        return (
            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 150 150">
                <defs>
                    <style>{`
                    .nne-cls-1, .nne-cls-5 {
                        fill: #fff;
                    }

                        .nne-cls-1 {
                        stroke: #707070;
                    }

                        .nne-cls-2 {
                        clip - path: url(#clip-path);
                    }

                        .${this.props.customClass} {
                        fill: ${this.props.backgroundColor};
                    }

                        .nne-cls-4 {
                        fill: none;
                    }

                        .nne-cls-6 {
                        filter: url(#Ellipse_1229);
                    }

                        .nne-cls-7 {
                        filter: url(#Union_295);
                    }`}

                    </style>
                    <clipPath id="clip-path">
                        <rect id="Rectangle_10305" data-name="Rectangle 10305" className="nne-cls-1" width="150"
                              height="150" transform="translate(7160 1654)"/>
                    </clipPath>
                    <filter id="Union_295" x="1" y="-10" width="154.274" height="162.219" filterUnits="userSpaceOnUse">
                        <feOffset dy="3" input="SourceAlpha"/>
                        <feGaussianBlur stdDeviation="3" result="blur"/>
                        <feFlood floodOpacity="0.161"/>
                        <feComposite operator="in" in2="blur"/>
                        <feComposite in="SourceGraphic"/>
                    </filter>
                    <filter id="Ellipse_1229" x="23.06" y="24.543" width="109.645" height="109.645"
                            filterUnits="userSpaceOnUse">
                        <feOffset dy="3" input="SourceAlpha"/>
                        <feGaussianBlur stdDeviation="3" result="blur-2"/>
                        <feFlood floodOpacity="0.161"/>
                        <feComposite operator="in" in2="blur-2"/>
                        <feComposite in="SourceGraphic"/>
                    </filter>
                </defs>
                <g id="wind_icon_nne" className="nne-cls-2" transform="translate(-7160 -1654)">
                    <g id="Group_17838" data-name="Group 17838" transform="translate(2625 2106)">
                        <g className="nne-cls-7" transform="matrix(1, 0, 0, 1, 4535, -452)">
                            <path id="Union_295-2" data-name="Union 295" className={this.props.customClass}
                                  d="M0,64.875A49.826,49.826,0,0,1,41.343,15.812L49.7,0,58,15.7A49.826,49.826,0,1,1,0,64.875Z"
                                  transform="translate(53.89 -4) rotate(22.5)"/>
                        </g>
                        <g id="Group_17837" data-name="Group 17837" transform="translate(88.648 -2.231)">
                            <g id="Group_17836" data-name="Group 17836" transform="translate(1205 -143.747)">
                                <g className="nne-cls-6" transform="matrix(1, 0, 0, 1, 3241.35, -306.02)">
                                    <ellipse id="Ellipse_1229-2" data-name="Ellipse 1229" className="nne-cls-4" cx="45.823"
                                             cy="45.823" rx="45.823" ry="45.823" transform="translate(32.06 30.54)"/>
                                </g>
                                <path id="Let_s_Swim" data-name="Let’s Swim" className="nne-cls-5"
                                      d="M-15.42,0q-2.01-3.57-4.35-7.05a71.647,71.647,0,0,0-4.98-6.57V0h-4.62V-20.79h3.81q.99.99,2.19,2.43t2.445,3.075q1.245,1.635,2.475,3.39t2.31,3.375V-20.79h4.65V0ZM7.26,0Q5.25-3.57,2.91-7.05a71.647,71.647,0,0,0-4.98-6.57V0H-6.69V-20.79h3.81q.99.99,2.19,2.43t2.445,3.075Q3-13.65,4.23-11.895T6.54-8.52V-20.79h4.65V0Zm8.73,0V-20.79H30.03v3.93H20.67v4.08h8.31v3.84H20.67v5.01H30.72V0Z"
                                      transform="translate(3316.496 -220.248)"/>
                            </g>
                        </g>
                    </g>
                </g>
            </svg>

        );
    }
}

export default NorthNorthEast;