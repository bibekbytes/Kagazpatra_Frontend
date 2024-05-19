import React from "react";

export const CrescentMoon = ({ width, height }) => {
    return (
        <>
            <svg fill="#30455E" version="1.1" id="Capa_1"
                width={width} height={height} viewBox="0 0 292.299 292.299"
                xmlSpace="preserve">
                <g>
                    <g>
                        <path d="M153.699,292.138C68.95,292.138,0,223.185,0,138.439C0,79.742,32.675,27.002,85.28,0.807
			c2.369-1.174,5.215-0.718,7.077,1.144c1.864,1.864,2.345,4.711,1.183,7.074C83.941,28.527,79.077,49.496,79.077,71.33
			c0,77.972,63.432,141.407,141.395,141.407c22.08,0,43.247-4.978,62.942-14.777c2.366-1.177,5.213-0.721,7.074,1.141
			c1.873,1.867,2.342,4.714,1.177,7.073C265.61,259.195,212.738,292.138,153.699,292.138z"/>
                    </g>
                </g>
            </svg>
        </>
    );
}

export const Cross = ({ height, width }) => {
    return (
        <>
            <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.99486 7.00636C6.60433 7.39689 6.60433 8.03005 6.99486 8.42058L10.58 12.0057L6.99486 15.5909C6.60433 15.9814 6.60433 16.6146 6.99486 17.0051C7.38538 17.3956 8.01855 17.3956 8.40907 17.0051L11.9942 13.4199L15.5794 17.0051C15.9699 17.3956 16.6031 17.3956 16.9936 17.0051C17.3841 16.6146 17.3841 15.9814 16.9936 15.5909L13.4084 12.0057L16.9936 8.42059C17.3841 8.03007 17.3841 7.3969 16.9936 7.00638C16.603 6.61585 15.9699 6.61585 15.5794 7.00638L11.9942 10.5915L8.40907 7.00636C8.01855 6.61584 7.38538 6.61584 6.99486 7.00636Z" fill="#0F0F0F" />
            </svg>
        </>
    );
}

export const Pen = ({ color }) => {
    return (
        <>
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.3048 0.694923C13.8565 0.24981 13.2503 0 12.6185 0C11.9866 0 11.3804 0.24981 10.9321 0.694923L0.627608 10.9958C0.530953 11.0956 0.46738 11.2227 0.445534 11.3598L0.00768983 14.2503C-0.0066841 14.3429 -0.000859584 14.4375 0.0247641 14.5276C0.0503879 14.6178 0.0952049 14.7013 0.156144 14.7725C0.217083 14.8437 0.292702 14.9009 0.37782 14.9402C0.462938 14.9795 0.555542 14.9999 0.649284 15H0.748991L3.63616 14.5666C3.77337 14.5448 3.90051 14.4813 4.00031 14.3846L14.3048 4.06643C14.7501 3.6183 15 3.0123 15 2.38068C15 1.74905 14.7501 1.14306 14.3048 0.694923ZM3.233 13.2969L1.42527 13.5699L1.69838 11.7628L10.1605 3.30806L11.6908 4.8378L3.233 13.2969ZM13.3858 3.14772L12.3064 4.22677L10.7717 2.69269L11.8512 1.61364C12.0547 1.41021 12.3307 1.29592 12.6185 1.29592C12.9063 1.29592 13.1823 1.41021 13.3858 1.61364C13.5893 1.81707 13.7036 2.09298 13.7036 2.38068C13.7036 2.66837 13.5893 2.94429 13.3858 3.14772Z" fill={color} />
            </svg>

        </>
    );
}

export const Peoples = ({ color }) => {
    return (
        <>
            <svg width="15" height="15" viewBox="0 0 20 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.8073 9.94085V9.51157C18.8073 8.68081 18.1135 8.0056 17.2572 8.0056H16.9672C16.1109 8.0056 15.4148 8.68081 15.4148 9.51157C15.4152 9.64225 15.4136 10.0166 15.4166 10.0745C15.3451 10.8978 16.1461 11.9611 17.1111 11.9611C17.9276 11.9611 18.8073 11.2047 18.8073 9.94085ZM17.1111 11.497C16.463 11.497 15.8528 10.7324 15.8769 10.1461C15.9689 10.0349 16.2093 9.7684 16.5078 9.63925C16.6215 9.59053 16.7584 9.6253 16.8442 9.72047C17.1913 10.1078 17.8895 10.1755 18.3402 10.1773C18.3 10.8246 17.7509 11.497 17.1111 11.497ZM4.68969 1.62206C4.68969 0.791304 3.99587 0.116089 3.13965 0.116089H2.84961C1.99335 0.116089 1.29723 0.791304 1.29723 1.62206V2.17433C1.29723 3.26288 2.17796 4.07156 2.99354 4.07156C3.97566 4.07156 4.76009 3.03077 4.68317 2.08537C4.69495 2.00719 4.68699 1.87777 4.68969 1.62206ZM2.99354 3.60746C2.34619 3.60746 1.73542 2.84372 1.75928 2.25681C1.85137 2.14547 2.09217 1.87764 2.39012 1.74965C2.50381 1.70324 2.64071 1.7357 2.72658 1.83088C3.07368 2.21827 3.77189 2.28593 4.22255 2.28767C4.18287 2.92773 3.63925 3.60746 2.99354 3.60746ZM10.1984 4.06086H9.90841C9.05214 4.06086 8.35837 4.73608 8.35837 5.56683V6.1191C8.57853 7.49018 9.3102 8.01633 10.053 8.01633C10.8751 8.01633 11.7509 7.25415 11.7509 5.99612V5.56683C11.7508 4.73608 11.0547 4.06086 10.1984 4.06086ZM10.053 7.55224C9.40468 7.55224 8.79548 6.7878 8.81873 6.20228C8.9093 6.09142 9.15079 5.82267 9.45127 5.69447C9.56265 5.64575 9.70189 5.68052 9.78772 5.77569C10.1331 6.16326 10.8315 6.23079 11.282 6.23249C11.2419 6.87993 10.6928 7.55224 10.053 7.55224ZM20 14.7094C20 14.7508 19.8828 17.2281 19.8817 17.2526C19.8654 17.5821 19.6241 17.8489 19.3108 17.9092V14.7209C19.3108 14.5933 19.2064 14.4889 19.0788 14.4889C18.9512 14.4889 18.8468 14.5933 18.8468 14.7209V17.842L18.5034 21.615C18.4755 22.035 18.1182 22.3669 17.6935 22.3669C17.5682 22.3669 17.4476 22.339 17.3431 22.288V18.0717C17.3431 17.9441 17.2387 17.8397 17.1111 17.8397C16.9835 17.8397 16.8791 17.9441 16.8791 18.0717V22.288C16.7746 22.3391 16.6563 22.3669 16.531 22.3669C16.104 22.3669 15.749 22.035 15.7189 21.6104L15.3754 17.8397V14.7233C15.3754 14.5933 15.271 14.4913 15.1434 14.4913C15.0157 14.4913 14.9114 14.5934 14.9114 14.7233V17.9093C14.6028 17.8443 14.3707 17.5914 14.3452 17.2758C14.3452 17.2745 14.2741 15.8051 14.2222 14.721C14.2222 13.3404 15.336 12.2265 16.7051 12.2265H17.5149C18.8839 12.2265 20 13.3403 20 14.7094ZM12.9412 10.7653C12.9412 10.8068 12.824 13.284 12.8229 13.3085C12.8066 13.638 12.5653 13.9048 12.252 13.9652V10.7769C12.252 10.6493 12.1476 10.5448 12.02 10.5448C11.8924 10.5448 11.788 10.6493 11.788 10.7769V13.8979L11.4446 17.6709C11.4167 18.0909 11.0594 18.4228 10.6347 18.4228C10.5094 18.4228 10.3888 18.3949 10.2843 18.3439V14.1276C10.2843 14.0001 10.1799 13.8956 10.0523 13.8956C9.9247 13.8956 9.82027 14.0001 9.82027 14.1276V18.3439C9.71584 18.3949 9.59751 18.4228 9.47221 18.4228C9.04523 18.4228 8.69022 18.0909 8.66006 17.6663L8.31661 13.8956V10.7792C8.31661 10.6493 8.21222 10.5472 8.08458 10.5472C7.95695 10.5472 7.85256 10.6493 7.85256 10.7792V13.9652C7.54396 13.9002 7.31189 13.6473 7.28638 13.3317C7.28638 13.3304 7.21533 11.8609 7.16339 10.7769C7.16339 9.39627 8.27719 8.28243 9.64627 8.28243H10.4561C11.8251 8.28238 12.9412 9.39623 12.9412 10.7653ZM5.88176 6.82052C5.88176 6.86198 5.76455 9.33921 5.76342 9.36372C5.74717 9.69322 5.50584 9.96006 5.19259 10.0204V6.83209C5.19259 6.70449 5.08816 6.60006 4.96057 6.60006C4.83297 6.60006 4.72854 6.70449 4.72854 6.83209V9.9531L4.38513 13.7262C4.35727 14.1462 3.99991 14.478 3.57528 14.478C3.44995 14.478 3.32931 14.4502 3.22487 14.3991V10.1829C3.22487 10.0553 3.12044 9.95084 2.99285 9.95084C2.86521 9.95084 2.76082 10.0553 2.76082 10.1829V14.3991C2.65639 14.4502 2.53806 14.478 2.41277 14.478C1.98578 14.478 1.63077 14.1462 1.60061 13.7215L1.25716 9.9508V6.83443C1.25716 6.70449 1.15277 6.60241 1.02513 6.60241C0.897496 6.60241 0.793109 6.70453 0.793109 6.83443V10.0204C0.484509 9.95545 0.252441 9.70257 0.226931 9.38693C0.226931 9.37763 0.226931 9.37072 0.224627 9.36372V9.35212C0.224627 9.35212 0.224627 9.35212 0.224627 9.34981L0.103943 6.83209C0.103943 5.45145 1.21774 4.33761 2.58682 4.33761H3.39667C4.76561 4.33761 5.88176 5.45145 5.88176 6.82052Z" fill={color} />
            </svg>

        </>
    );
}

export const Pointer = ({ color }) => {
    return (
        <>
            <svg width="15" height="15" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.0117 0.708945C14.0044 0.644547 13.9903 0.581102 13.9696 0.519671V0.45658C13.936 0.378563 13.8885 0.307304 13.8294 0.246276C13.7699 0.190381 13.7011 0.145306 13.6261 0.113083H13.563C13.4984 0.0637391 13.4245 0.0279713 13.3457 0.00793128H13.3107C13.241 -0.00264376 13.1701 -0.00264376 13.1004 0.00793128L0.482122 4.21402C0.341872 4.26011 0.219755 4.34931 0.133182 4.4689C0.046609 4.58848 0 4.73235 0 4.87998C0 5.02761 0.046609 5.17147 0.133182 5.29106C0.219755 5.41064 0.341872 5.49984 0.482122 5.54594L6.46177 7.53682L8.45265 13.5165C8.49875 13.6567 8.58795 13.7788 8.70753 13.8654C8.82712 13.952 8.97098 13.9986 9.11862 13.9986C9.26625 13.9986 9.41011 13.952 9.5297 13.8654C9.64928 13.7788 9.73848 13.6567 9.78458 13.5165L13.9907 0.898219C14.0062 0.836378 14.0133 0.772699 14.0117 0.708945ZM10.7169 2.31427L6.81228 6.21892L2.90763 4.91503L10.7169 2.31427ZM9.1046 11.112L7.80071 7.20735L11.7054 3.3027L9.1046 11.112Z" fill={color} />
            </svg>

        </>
    );
}

export const Pen2 = ({ height, width }) => {
    return (
        <>
            <svg width={width} height={height} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M27.3394 3.20399L24.789 0.653065C24.3698 0.234856 23.8019 0 23.2098 0C22.6177 0 22.0498 0.234856 21.6305 0.653065L19.102 3.18211L2.41278 19.8703C2.36029 19.9228 2.32091 19.9884 2.29029 20.0584C2.28592 20.0716 2.27717 20.0847 2.27279 20.0978C2.26842 20.1066 2.25967 20.1153 2.25967 20.1241L0.0286073 27.1818C-0.0413868 27.4049 0.019858 27.65 0.181719 27.8119C0.299834 27.9344 0.461696 28 0.623557 28C0.684802 28 0.750421 27.9912 0.811666 27.9694L7.87232 25.7379C7.88107 25.7335 7.88982 25.7291 7.90294 25.7247C7.91607 25.7204 7.92919 25.7116 7.94232 25.7072C8.01231 25.6766 8.07355 25.6372 8.12605 25.5847L24.8153 8.89215L27.3438 6.36311C27.7638 5.93868 28 5.37862 28 4.78355C28 4.18848 27.7638 3.62404 27.3394 3.20399ZM19.5438 4.50789L21.0706 6.03494L5.26942 21.8393L3.74267 20.3122L19.5438 4.50789ZM1.58598 26.4117L3.14334 21.4892L6.50744 24.854L1.58598 26.4117ZM7.67984 24.2546L6.15309 22.7275L21.9586 6.92317L23.4854 8.45022L7.67984 24.2546ZM26.4558 5.47925L24.3734 7.562L20.4363 3.62404L22.5186 1.54129C22.8992 1.16062 23.5204 1.15625 23.9053 1.54129L26.4558 4.09222C26.6395 4.27599 26.7445 4.52539 26.7445 4.78355C26.7445 5.0417 26.6395 5.29111 26.4558 5.47925Z" fill="#30455E" />
            </svg>

        </>
    );
}

export const LogoutIcoon = () => {
    return (
        <>
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.29624 5.50002L4.14597 6.64502C4.0991 6.6915 4.06189 6.7468 4.0365 6.80773C4.01111 6.86866 3.99804 6.93401 3.99804 7.00001C3.99804 7.06602 4.01111 7.13137 4.0365 7.1923C4.06189 7.25323 4.0991 7.30853 4.14597 7.35501C4.19247 7.40188 4.24778 7.43907 4.30872 7.46446C4.36967 7.48984 4.43503 7.50291 4.50106 7.50291C4.56708 7.50291 4.63245 7.48984 4.69339 7.46446C4.75433 7.43907 4.80965 7.40188 4.85614 7.35501L6.85661 5.35502C6.90214 5.30747 6.93783 5.2514 6.96163 5.19002C7.01165 5.06829 7.01165 4.93176 6.96163 4.81003C6.93783 4.74865 6.90214 4.69258 6.85661 4.64503L4.85614 2.64504C4.80951 2.59842 4.75415 2.56144 4.69323 2.53621C4.6323 2.51098 4.567 2.49799 4.50106 2.49799C4.43511 2.49799 4.36981 2.51098 4.30889 2.53621C4.24796 2.56144 4.1926 2.59842 4.14597 2.64504C4.09934 2.69166 4.06235 2.747 4.03712 2.80791C4.01188 2.86882 3.99889 2.93411 3.99889 3.00003C3.99889 3.06596 4.01188 3.13125 4.03712 3.19216C4.06235 3.25307 4.09934 3.30841 4.14597 3.35503L5.29624 4.50003H0.500117C0.367478 4.50003 0.240271 4.55271 0.146481 4.64647C0.0526908 4.74024 0 4.86742 0 5.00002C0 5.13263 0.0526908 5.25981 0.146481 5.35358C0.240271 5.44734 0.367478 5.50002 0.500117 5.50002H5.29624ZM5.00117 4.98466e-05C4.0665 -0.00412203 3.14936 0.253655 2.35379 0.744142C1.55821 1.23463 0.916042 1.93819 0.500117 2.77504C0.44043 2.89438 0.430608 3.03255 0.472814 3.15913C0.51502 3.28572 0.605795 3.39036 0.72517 3.45003C0.844546 3.50971 0.982742 3.51953 1.10936 3.47733C1.23598 3.43513 1.34064 3.34438 1.40033 3.22503C1.7165 2.5867 2.19743 2.04435 2.79343 1.65404C3.38943 1.26372 4.07887 1.0396 4.7905 1.00484C5.50214 0.970078 6.21015 1.12593 6.84136 1.4563C7.47258 1.78666 8.00411 2.27955 8.38102 2.88403C8.75793 3.48851 8.96655 4.18265 8.98531 4.89472C9.00407 5.60678 8.8323 6.31094 8.48775 6.93442C8.1432 7.5579 7.63836 8.07809 7.02542 8.44122C6.41247 8.80435 5.71365 8.99726 5.00117 9C4.25544 9.00323 3.5239 8.79619 2.89052 8.40263C2.25714 8.00908 1.74759 7.44496 1.42033 6.77502C1.36065 6.65567 1.25598 6.56492 1.12936 6.52272C1.00275 6.48052 0.86455 6.49034 0.745175 6.55002C0.625799 6.60969 0.535024 6.71433 0.492819 6.84092C0.450613 6.9675 0.460434 7.10567 0.520122 7.22501C0.916629 8.02276 1.51912 8.70012 2.26527 9.18703C3.01142 9.67393 3.87413 9.9527 4.76418 9.99449C5.65422 10.0363 6.53928 9.83959 7.32779 9.42476C8.11631 9.00992 8.77965 8.392 9.2492 7.63492C9.71876 6.87784 9.97748 6.00909 9.99859 5.11853C10.0197 4.22796 9.80246 3.34793 9.36932 2.56945C8.93618 1.79098 8.30287 1.14233 7.5349 0.690599C6.76694 0.238871 5.8922 0.000468071 5.00117 4.98466e-05Z" fill="#30455E" />
            </svg>
        </>
    );
}

export const CommandKey = () => {
    return (
        <>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.4 10.8H12.6V7.2H14.4C15.112 7.2 15.808 6.98886 16.4001 6.59329C16.9921 6.19772 17.4535 5.63548 17.726 4.97766C17.9984 4.31985 18.0697 3.59601 17.9308 2.89768C17.7919 2.19934 17.4491 1.55789 16.9456 1.05442C16.4421 0.550948 15.8007 0.208081 15.1023 0.0691746C14.404 -0.0697322 13.6802 0.00155981 13.0223 0.274035C12.3645 0.546511 11.8023 1.00793 11.4067 1.59995C11.0111 2.19197 10.8 2.88799 10.8 3.6V5.4H7.2V3.6C7.2 2.88799 6.98886 2.19197 6.59329 1.59995C6.19772 1.00793 5.63548 0.546511 4.97766 0.274035C4.31985 0.00155981 3.59601 -0.0697322 2.89768 0.0691746C2.19934 0.208081 1.55789 0.550948 1.05442 1.05442C0.550948 1.55789 0.208081 2.19934 0.0691746 2.89768C-0.0697322 3.59601 0.00155981 4.31985 0.274035 4.97766C0.546511 5.63548 1.00793 6.19772 1.59995 6.59329C2.19197 6.98886 2.88799 7.2 3.6 7.2H5.4V10.8H3.6C2.88799 10.8 2.19197 11.0111 1.59995 11.4067C1.00793 11.8023 0.546511 12.3645 0.274035 13.0223C0.00155981 13.6802 -0.0697322 14.404 0.0691746 15.1023C0.208081 15.8007 0.550948 16.4421 1.05442 16.9456C1.55789 17.4491 2.19934 17.7919 2.89768 17.9308C3.59601 18.0697 4.31985 17.9984 4.97766 17.726C5.63548 17.4535 6.19772 16.9921 6.59329 16.4001C6.98886 15.808 7.2 15.112 7.2 14.4V12.6H10.8V14.4C10.8 15.112 11.0111 15.808 11.4067 16.4001C11.8023 16.9921 12.3645 17.4535 13.0223 17.726C13.6802 17.9984 14.404 18.0697 15.1023 17.9308C15.8007 17.7919 16.4421 17.4491 16.9456 16.9456C17.4491 16.4421 17.7919 15.8007 17.9308 15.1023C18.0697 14.404 17.9984 13.6802 17.726 13.0223C17.4535 12.3645 16.9921 11.8023 16.4001 11.4067C15.808 11.0111 15.112 10.8 14.4 10.8ZM12.6 3.6C12.6 3.24399 12.7056 2.89598 12.9034 2.59997C13.1011 2.30397 13.3823 2.07326 13.7112 1.93702C14.0401 1.80078 14.402 1.76513 14.7512 1.83459C15.1003 1.90404 15.4211 2.07547 15.6728 2.32721C15.9245 2.57894 16.096 2.89967 16.1654 3.24884C16.2349 3.598 16.1992 3.95992 16.063 4.28883C15.9267 4.61774 15.696 4.89886 15.4 5.09665C15.104 5.29443 14.756 5.4 14.4 5.4H12.6V3.6ZM1.8 3.6C1.8 3.12261 1.98964 2.66477 2.32721 2.32721C2.66477 1.98964 3.12261 1.8 3.6 1.8C4.07739 1.8 4.53523 1.98964 4.87279 2.32721C5.21036 2.66477 5.4 3.12261 5.4 3.6V5.4H3.6C3.12261 5.4 2.66477 5.21036 2.32721 4.87279C1.98964 4.53523 1.8 4.07739 1.8 3.6ZM5.4 14.4C5.4 14.756 5.29443 15.104 5.09665 15.4C4.89886 15.696 4.61774 15.9267 4.28883 16.063C3.95992 16.1992 3.598 16.2349 3.24884 16.1654C2.89967 16.096 2.57894 15.9245 2.32721 15.6728C2.07547 15.4211 1.90404 15.1003 1.83459 14.7512C1.76513 14.402 1.80078 14.0401 1.93702 13.7112C2.07326 13.3823 2.30397 13.1011 2.59997 12.9034C2.89598 12.7056 3.24399 12.6 3.6 12.6H5.4V14.4ZM7.2 7.2H10.8V10.8H7.2V7.2ZM14.4 16.2C13.9226 16.2 13.4648 16.0104 13.1272 15.6728C12.7896 15.3352 12.6 14.8774 12.6 14.4V12.6H14.4C14.8774 12.6 15.3352 12.7896 15.6728 13.1272C16.0104 13.4648 16.2 13.9226 16.2 14.4C16.2 14.8774 16.0104 15.3352 15.6728 15.6728C15.3352 16.0104 14.8774 16.2 14.4 16.2Z" fill="#30455E" />
            </svg>
        </>
    );
}

export const SearchIcon = () => {
    return (
        <>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.71 16.29L14.31 12.9C15.407 11.5025 16.0022 9.77666 16 8C16 6.41775 15.5308 4.87103 14.6518 3.55544C13.7727 2.23985 12.5233 1.21447 11.0615 0.608967C9.59966 0.00346625 7.99113 -0.15496 6.43928 0.153721C4.88743 0.462403 3.46197 1.22433 2.34315 2.34315C1.22433 3.46197 0.462403 4.88743 0.153721 6.43928C-0.15496 7.99113 0.00346625 9.59966 0.608967 11.0615C1.21447 12.5233 2.23985 13.7727 3.55544 14.6518C4.87103 15.5308 6.41775 16 8 16C9.77666 16.0022 11.5025 15.407 12.9 14.31L16.29 17.71C16.383 17.8037 16.4936 17.8781 16.6154 17.9289C16.7373 17.9797 16.868 18.0058 17 18.0058C17.132 18.0058 17.2627 17.9797 17.3846 17.9289C17.5064 17.8781 17.617 17.8037 17.71 17.71C17.8037 17.617 17.8781 17.5064 17.9289 17.3846C17.9797 17.2627 18.0058 17.132 18.0058 17C18.0058 16.868 17.9797 16.7373 17.9289 16.6154C17.8781 16.4936 17.8037 16.383 17.71 16.29ZM2 8C2 6.81332 2.3519 5.65328 3.01119 4.66658C3.67047 3.67989 4.60755 2.91085 5.7039 2.45673C6.80026 2.0026 8.00666 1.88378 9.17055 2.11529C10.3344 2.3468 11.4035 2.91825 12.2426 3.75736C13.0818 4.59648 13.6532 5.66558 13.8847 6.82946C14.1162 7.99335 13.9974 9.19975 13.5433 10.2961C13.0892 11.3925 12.3201 12.3295 11.3334 12.9888C10.3467 13.6481 9.18669 14 8 14C6.4087 14 4.88258 13.3679 3.75736 12.2426C2.63214 11.1174 2 9.5913 2 8Z" fill="#30455E" />
            </svg>
        </>
    );
}

export const CrescentMoon2 = ({ height, width }) => {
    return (
        <>
            <svg width={width} height={height} viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.6216 10.7028C19.4772 10.5835 19.3023 10.5071 19.1166 10.4823C18.931 10.4576 18.7421 10.4855 18.5716 10.5628C17.5142 11.0467 16.3645 11.2957 15.2016 11.2928C13.0504 11.2902 10.9876 10.4372 9.46272 8.91989C7.93789 7.40255 7.07478 5.3439 7.06158 3.19279C7.06614 2.51862 7.15005 1.84733 7.31158 1.19279C7.34586 1.01833 7.333 0.837881 7.27434 0.670042C7.21567 0.502203 7.11332 0.35304 6.97782 0.23792C6.84233 0.122799 6.67859 0.0458858 6.50348 0.0151026C6.32837 -0.0156807 6.14821 0.000779722 5.98158 0.062788C4.41391 0.767696 3.05115 1.85955 2.02134 3.23577C0.991527 4.61199 0.32846 6.22741 0.0944297 7.93027C-0.139601 9.63313 0.0630863 11.3675 0.68345 12.9706C1.30381 14.5736 2.32149 15.9926 3.64088 17.0943C4.96027 18.1959 6.53806 18.9442 8.22603 19.2686C9.91399 19.593 11.6567 19.4831 13.2905 18.949C14.9243 18.415 16.3955 17.4743 17.566 16.2155C18.7364 14.9567 19.5676 13.4211 19.9816 11.7528C20.032 11.5618 20.0247 11.3601 19.9606 11.1733C19.8966 10.9864 19.7786 10.8227 19.6216 10.7028ZM10.1216 17.3928C8.44334 17.3809 6.80978 16.8507 5.44457 15.8745C4.07936 14.8984 3.04925 13.5241 2.49526 11.9399C1.94128 10.3557 1.89052 8.63897 2.34992 7.02479C2.80932 5.41061 3.75644 3.97789 5.06158 2.92279V3.19279C5.06423 5.88127 6.1334 8.45888 8.03444 10.3599C9.93549 12.261 12.5131 13.3301 15.2016 13.3328C15.9075 13.3354 16.6116 13.2616 17.3016 13.1128C16.6115 14.4183 15.578 15.5106 14.3127 16.2719C13.0474 17.0332 11.5983 17.4346 10.1216 17.4328V17.3928Z" fill="#30455E" />
            </svg>
        </>
    );
}

export const Police = ({ height, width }) => {
    return (
        <>
            <svg width={width} height={height} viewBox="0 0 28 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.0003 0L2.33366 3.33333L4.00033 6.66667V8.33333C4.00033 9.04 4.66366 9.69333 5.78699 10.2333C5.57963 11.431 5.63647 12.6595 5.95352 13.833C6.27057 15.0064 6.84018 16.0963 7.6225 17.0266C8.40481 17.9569 9.38095 18.705 10.4826 19.2186C11.5843 19.7322 12.7848 19.9989 14.0003 20C15.2158 19.9989 16.4164 19.7322 17.518 19.2186C18.6197 18.705 19.5958 17.9569 20.3782 17.0266C21.1605 16.0963 21.7301 15.0064 22.0471 13.833C22.3642 12.6595 22.421 11.431 22.2137 10.2333C23.337 9.69333 24.0003 9.04 24.0003 8.33333V6.66667L25.667 3.33333L14.0003 0ZM10.667 3.33333H17.3337V6.66667L14.0003 8.33333L10.667 6.66667V3.33333ZM14.0003 16.6667C11.2437 16.6667 9.00033 14.4233 9.00033 11.6667C9.00033 11.5233 9.03199 11.3717 9.04366 11.225C10.5053 11.505 12.1953 11.6667 14.0003 11.6667C15.8053 11.6667 17.4953 11.505 18.957 11.225C18.9687 11.3717 19.0003 11.5233 19.0003 11.6667C19.0003 14.4233 16.757 16.6667 14.0003 16.6667ZM14.0003 21.6667C6.15033 21.6667 0.666992 25.7783 0.666992 31.6667V35H27.3337V31.6667C27.3337 25.7783 21.8503 21.6667 14.0003 21.6667ZM14.0003 33.3333C13.5583 33.3333 13.1344 33.1577 12.8218 32.8452C12.5093 32.5326 12.3337 32.1087 12.3337 31.6667C12.3337 31.2246 12.5093 30.8007 12.8218 30.4882C13.1344 30.1756 13.5583 30 14.0003 30C14.4424 30 14.8663 30.1756 15.1788 30.4882C15.4914 30.8007 15.667 31.2246 15.667 31.6667C15.667 32.1087 15.4914 32.5326 15.1788 32.8452C14.8663 33.1577 14.4424 33.3333 14.0003 33.3333ZM14.0003 28.3333C13.5583 28.3333 13.1344 28.1577 12.8218 27.8452C12.5093 27.5326 12.3337 27.1087 12.3337 26.6667C12.3337 26.2246 12.5093 25.8007 12.8218 25.4882C13.1344 25.1756 13.5583 25 14.0003 25C14.4424 25 14.8663 25.1756 15.1788 25.4882C15.4914 25.8007 15.667 26.2246 15.667 26.6667C15.667 27.1087 15.4914 27.5326 15.1788 27.8452C14.8663 28.1577 14.4424 28.3333 14.0003 28.3333Z" fill="#30455E" />
            </svg>
        </>
    );
}

export const Car = ({ height, width }) => {
    return (
        <>
            <svg width={width} height={height} fill="#30455E" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M16,6l3,4h2c1.11,0,2,0.89,2,2v3h-2c0,1.66-1.34,3-3,3s-3-1.34-3-3H9c0,1.66-1.34,3-3,3s-3-1.34-3-3H1v-3c0-1.11,0.89-2,2-2
		l3-4H16 M10.5,7.5H6.75L4.86,10h5.64V7.5 M12,7.5V10h5.14l-1.89-2.5H12 M6,13.5c-0.83,0-1.5,0.67-1.5,1.5s0.67,1.5,1.5,1.5
		s1.5-0.67,1.5-1.5S6.83,13.5,6,13.5 M18,13.5c-0.83,0-1.5,0.67-1.5,1.5s0.67,1.5,1.5,1.5s1.5-0.67,1.5-1.5S18.83,13.5,18,13.5z"/>
            </svg>

        </>
    );
}

export const Building = ({ height, width }) => {
    return (
        <>
            <svg fill="#30455E" width={width} height={height} viewBox="10 11 30 30" version="1.2" baseProfile="tiny" xmlns="http://www.w3.org/2000/svg" overflow="inherit"><path d="M12.333 22h2.667v16h4v-14h4v14h4v-14h4v14h4v-16h2.666c.736 0 1.334-.736 1.334-1.399 0-.401-.221-.853-.555-1.071l.002-.052-.021-.037.134-.033-12.56-6.469v-1.892c2 1.059 3.951-.765 7 .332v-4.179c-3.051-1.096-5 .727-7-.332v-.268c0-.331-.631-.6-1-.6s-1 .269-1 .6v6.339l-12.559 6.456.271.021.288.011v.002c-1 .218-.776.77-.776 1.171-.001.664.373 1.4 1.109 1.4zm1.667 17l-3 3h28l-3-3zm22-16v15h.885l.391.553 2.666 2.499.943.948h8.115v-19h-13zm6 12h-3v-3h3v3zm0-6h-3v-3h3v3zm4 6h-2v-3h2v3zm0-6h-2v-3h2v3zm-32.886 9h.886v-15h-13v19h8.114l.942-.848 2.667-2.6.391-.552zm-7.114-3h-2v-3h2v3zm0-6h-2v-3h2v3zm5 6h-3v-3h3v3zm0-6h-3v-3h3v3z" /></svg>
        </>
    );
}
