import React, {Component} from "react";

class NorthWest extends Component {
    render() {

        return (
            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 150 150">
                <defs>
                    <style>{`  .nw-cls-1, .nw-cls-4 {
                        fill: #fff;
                    }

                        .nw-cls-1 {
                        stroke: #707070;
                    }

                        .nw-cls-2 {
                        clip - path: url(#clip-path);
                    }

                        .${this.props.customClass} {
                        fill: ${this.props.backgroundColor};
                    }


                        .nw-cls-5 {
                        filter: url(#Ellipse_1238);
                    }`}

                    </style>
                    <clipPath id="clip-path">
                        <rect id="Rectangle_10299" data-name="Rectangle 10299" className="nw-cls-1" width="150"
                              height="150" transform="translate(5360 1654)"/>
                    </clipPath>
                    <filter id="Ellipse_1238" x="16" y="19" width="118" height="118" filterUnits="userSpaceOnUse">
                        <feOffset dy="3" input="SourceAlpha"/>
                        <feGaussianBlur stdDeviation="3" result="blur"/>
                        <feFlood floodOpacity="0.161"/>
                        <feComposite operator="in" in2="blur"/>
                        <feComposite in="SourceGraphic"/>
                    </filter>
                </defs>
                <g id="wind_icon_nw" className="nw-cls-2" transform="translate(-5360 -1654)">
                    <g id="Group_17795" data-name="Group 17795" transform="translate(1285 2333)">
                        <g id="Group_17794" data-name="Group 17794">
                            <g id="Group_17793" data-name="Group 17793"
                               transform="translate(4069 -614.289) rotate(-45)">
                                <path id="Path_13608" data-name="Path 13608" className={this.props.customClass}
                                      d="M0,0,18.292,5.641l-6.325,6.325L5.641,18.292Z"
                                      transform="translate(49.701) rotate(45)"/>
                                <g className="nw-cls-5" transform="matrix(0.71, 0.71, -0.71, 0.71, 50, -41.51)">
                                    <circle id="Ellipse_1238-2" data-name="Ellipse 1238" className={this.props.customClass} cx="50"
                                            cy="50" r="50" transform="translate(25 25)"/>
                                </g>
                            </g>
                            <path id="Let_s_Swim" data-name="Let’s Swim" className="nw-cls-4"
                                  d="M-9.21,0q-2.01-3.57-4.35-7.05a71.647,71.647,0,0,0-4.98-6.57V0h-4.62V-20.79h3.81q.99.99,2.19,2.43t2.445,3.075q1.245,1.635,2.475,3.39T-9.93-8.52V-20.79h4.65V0ZM13.47-18.57q.36,1.23.8,2.775t.93,3.2q.495,1.65,1,3.3t.99,3.06q.39-1.53.795-3.33t.765-3.72q.36-1.92.7-3.825T20.1-20.79h4.86q-1.05,5.22-2.415,10.59T19.59,0H15.3q-1.05-2.88-2.04-6.045T11.31-12.39q-.96,3.18-1.92,6.345T7.38,0H3.09Q1.5-4.83.135-10.2T-2.28-20.79H2.79q.3,1.77.66,3.675T4.2-13.29Q4.59-11.37,5-9.57T5.82-6.24q.54-1.47,1.05-3.12t.99-3.3q.48-1.65.885-3.18t.735-2.73Z"
                                  transform="translate(4150 -594)"/>
                        </g>
                    </g>
                </g>
            </svg>


        );
    }
}

export default NorthWest;