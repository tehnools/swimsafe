import React, {Component} from "react";

class WestNorthWest extends Component {
    render() {

        return (
            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 150 150">
                <defs>
                    <style>{`
                       .wnw-cls-1, .wnw-cls-4 {
                        fill: #fff;
                    }

                        .wnw-cls-1 {
                        stroke: #707070;
                    }

                        .wnw-cls-2 {
                        clip - path: url(#clip-path);
                    }

                        .${this.props.customClass} {
                        fill: ${this.props.backgroundColor};
                    }
                        .wnw-cls-5 {
                        filter: url(#Union_298);
                    }`}

                    </style>
                    <clipPath id="clip-path">
                        <rect id="Rectangle_10306" data-name="Rectangle 10306" className="wnw-cls-1" width="150"
                              height="150" transform="translate(7460 1654)"/>
                    </clipPath>
                    <filter id="Union_298" x="-13" y="-2" width="162.219" height="154.274" filterUnits="userSpaceOnUse">
                        <feOffset dy="3" input="SourceAlpha"/>
                        <feGaussianBlur stdDeviation="3" result="blur"/>
                        <feFlood floodOpacity="0.161"/>
                        <feComposite operator="in" in2="blur"/>
                        <feComposite in="SourceGraphic"/>
                    </filter>
                </defs>
                <g id="wind_icon_wnw" className="wnw-cls-2" transform="translate(-7460 -1654)">
                    <g id="Group_17845" data-name="Group 17845" transform="translate(3042 2149)">
                        <g className="wnw-cls-5" transform="matrix(1, 0, 0, 1, 4418, -495)">
                            <path id="Union_298-2" data-name="Union 298" className={this.props.customClass}
                                  d="M0,64.875A49.826,49.826,0,0,1,41.343,15.812L49.7,0,58,15.7A49.826,49.826,0,1,1,0,64.875Z"
                                  transform="translate(-4 96.39) rotate(-67.5)"/>
                        </g>
                        <g id="Group_17844" data-name="Group 17844" transform="translate(-53.38 -2.863)">
                            <path id="Let_s_Swim" data-name="Let’s Swim" className="wnw-cls-4"
                                  d="M-21.63-18.57q.36,1.23.8,2.775t.93,3.2q.495,1.65,1,3.3t.99,3.06q.39-1.53.795-3.33t.765-3.72q.36-1.92.7-3.825T-15-20.79h4.86q-1.05,5.22-2.415,10.59T-15.51,0H-19.8q-1.05-2.88-2.04-6.045t-1.95-6.345q-.96,3.18-1.92,6.345T-27.72,0h-4.29q-1.59-4.83-2.955-10.2T-37.38-20.79h5.07q.3,1.77.66,3.675t.75,3.825q.39,1.92.8,3.72t.825,3.33q.54-1.47,1.05-3.12t.99-3.3q.48-1.65.885-3.18t.735-2.73ZM5.01,0Q3-3.57.66-7.05a71.647,71.647,0,0,0-4.98-6.57V0H-8.94V-20.79h3.81q.99.99,2.19,2.43t2.445,3.075Q.75-13.65,1.98-11.895T4.29-8.52V-20.79H8.94V0ZM25.89-18.57q.36,1.23.8,2.775t.93,3.2q.495,1.65,1,3.3t.99,3.06q.39-1.53.795-3.33t.765-3.72q.36-1.92.7-3.825t.645-3.675h4.86q-1.05,5.22-2.415,10.59T32.01,0H27.72q-1.05-2.88-2.04-6.045T23.73-12.39q-.96,3.18-1.92,6.345T19.8,0H15.51q-1.59-4.83-2.955-10.2T10.14-20.79h5.07q.3,1.77.66,3.675t.75,3.825q.39,1.92.8,3.72t.825,3.33q.54-1.47,1.05-3.12t.99-3.3q.48-1.65.885-3.18t.735-2.73Z"
                                  transform="translate(4546.496 -405.995)"/>
                        </g>
                    </g>
                </g>
            </svg>

        );
    }
}

export default WestNorthWest;