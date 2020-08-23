import React, {Component} from "react";

class EastNorthEast extends Component {
    render() {

        return (
            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 150 150">
                <defs>
                    <style>{`   .ene-cls-1, .ene-cls-4 {
                        fill: #fff;
                    }

                        .ene-cls-1 {
                        stroke: #707070;
                    }

                        .ene-cls-2 {
                        clip - path: url(#clip-path);
                    }

                        .${this.props.customClass} {
                        fill: ${this.props.backgroundColor};
                    }

                        .ene-cls-5 {
                        filter: url(#Union_301);
                    }`}

                    </style>
                    <clipPath id="clip-path">
                        <rect id="Rectangle_10307" data-name="Rectangle 10307" className="ene-cls-1" width="150"
                              height="150" transform="translate(7760 1654)"/>
                    </clipPath>
                    <filter id="Union_301" x="1" y="-2" width="162.219" height="154.274" filterUnits="userSpaceOnUse">
                        <feOffset dy="3" input="SourceAlpha"/>
                        <feGaussianBlur stdDeviation="3" result="blur"/>
                        <feFlood floodOpacity="0.161"/>
                        <feComposite operator="in" in2="blur"/>
                        <feComposite in="SourceGraphic"/>
                    </filter>
                </defs>
                <g id="wind_icon_ene" className="ene-cls-2" transform="translate(-7760 -1654)">
                    <g id="Group_17852" data-name="Group 17852" transform="translate(3365 2136)">
                        <g className="ene-cls-5" transform="matrix(1, 0, 0, 1, 4395, -482)">
                            <path id="Union_301-2" data-name="Union 301" className={this.props.customClass}
                                  d="M0,64.875A49.826,49.826,0,0,1,41.343,15.812L49.7,0,58,15.7A49.826,49.826,0,1,1,0,64.875Z"
                                  transform="translate(115.95 4) rotate(67.5)"/>
                        </g>
                        <g id="Group_17851" data-name="Group 17851" transform="translate(1154.62 -176.95)">
                            <path id="Let_s_Swim" data-name="Let’s Swim" className="ene-cls-4"
                                  d="M-27.12,0V-20.79h14.04v3.93h-9.36v4.08h8.31v3.84h-8.31v5.01h10.05V0ZM5.01,0Q3-3.57.66-7.05a71.647,71.647,0,0,0-4.98-6.57V0H-8.94V-20.79h3.81q.99.99,2.19,2.43t2.445,3.075Q.75-13.65,1.98-11.895T4.29-8.52V-20.79H8.94V0Zm8.73,0V-20.79H27.78v3.93H18.42v4.08h8.31v3.84H18.42v5.01H28.47V0Z"
                                  transform="translate(3316.496 -220.248)"/>
                        </g>
                    </g>
                </g>
            </svg>


        );
    }
}

export default EastNorthEast;