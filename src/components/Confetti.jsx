import React from 'react';
import Confetti from 'react-dom-confetti';

const ConfettiComponent = ({ active }) => {
    const config = {
        angle: 30,
        spread: 360,
        startVelocity: 40,
        elementCount: 470,
        dragFriction: 0.12,
        duration: 3000,
        stagger: 3,
        width: "7px",
        height: "7px",
        perspective: "205px",
        colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"]
    };

    return (
        <Confetti active={active} config={config} />
    );
};

export default ConfettiComponent;
