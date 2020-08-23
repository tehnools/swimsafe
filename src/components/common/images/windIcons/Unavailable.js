import React, {Component} from "react";

class Unavailable extends Component {
    render() {

        return (
            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 150 150">
                <defs>
                    <style>{`
                        .un-cls-1, .un-cls-4 {
                        fill: #fff;
                    }

                        .un-cls-1 {
                        stroke: #707070;
                    }

                        .un-cls-2 {
                        clip - path: url(#clip-path);
                    }

                        .un-cls-3 {
                        fill: #84909b;
                    }

                        .un-cls-4 {
                        opacity: 0.5;
                    }

                        .un-cls-5 {
                        filter: url(#Union_359);
                    }`}
                    </style>
                    <clipPath id="clip-path">
                        <rect id="Rectangle_11076" data-name="Rectangle 11076" className="un-cls-1" width="150"
                              height="150" transform="translate(5360 1654)"/>
                    </clipPath>
                    <filter id="Union_359" x="-15" y="-12" width="169.802" height="169.802"
                            filterUnits="userSpaceOnUse">
                        <feOffset dy="3" input="SourceAlpha"/>
                        <feGaussianBlur stdDeviation="3" result="blur"/>
                        <feFlood floodOpacity="0.161"/>
                        <feComposite operator="in" in2="blur"/>
                        <feComposite in="SourceGraphic"/>
                    </filter>
                </defs>
                <g id="wind_icon_unavailable" transform="translate(-729 -23)">
                    <g id="wind_icon_nw" className="un-cls-2" transform="translate(-4631 -1631)">
                        <g id="Group_17881" data-name="Group 17881" transform="translate(1285 2333)">
                            <g id="Group_17880" data-name="Group 17880">
                                <g className="un-cls-5" transform="matrix(1, 0, 0, 1, 4075, -679)">
                                    <path id="Union_359-2" data-name="Union 359" className="un-cls-3"
                                          d="M0,64.875A49.826,49.826,0,0,1,41.343,15.812L49.7,0,58,15.7A49.826,49.826,0,1,1,0,64.875Z"
                                          transform="translate(-6 64.71) rotate(-45)"/>
                                </g>
                            </g>
                        </g>
                    </g>
                    <g id="Group_17882" data-name="Group 17882" transform="translate(-0.913 -0.678)">
                        <ellipse id="Ellipse_1236" data-name="Ellipse 1236" className="un-cls-4" cx="27.494" cy="27.494"
                                 rx="27.494" ry="27.494" transform="translate(777.288 70.979)"/>
                        <path id="Path_13691" data-name="Path 13691" className="un-cls-3"
                              d="M91.766,31.78C66.5,21.169,65.075,42.937,64.789,40.422A33.193,33.193,0,0,0,53,65.5c-.171,16.234,10.46,29.838,29.209,30.181h.857c18.863-.343,29.495-13.947,29.266-30.181C112.046,49.033,100.579,38.557,91.766,31.78ZM86.723,77.613a4.46,4.46,0,0,1-8.917,0V77.5a4.46,4.46,0,0,1,8.917,0Zm7.831-18.749c0,5.03-2.915,8.117-8.86,9.432l-.057.4a3.063,3.063,0,0,1-2.972,2.687h-.343A2.974,2.974,0,0,1,79.35,68.7l-.457-3.03a2.979,2.979,0,0,1,.514-2.229,2.818,2.818,0,0,1,2.058-1.086c4.573-.572,5.144-2.058,5.144-3.315v-.114c0-2.229-2.229-2.572-3.544-2.572a7.545,7.545,0,0,0-4.8,1.658,4,4,0,0,1-2.344.8,3.7,3.7,0,0,1-2.344-6.574,14.583,14.583,0,0,1,9.66-3.315c7.031,0,11.375,3.773,11.375,9.775v.171Z"
                              transform="translate(722.917 34.46)"/>
                    </g>
                </g>
            </svg>
        );
    }
}

export default Unavailable;