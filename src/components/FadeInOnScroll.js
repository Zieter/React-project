import React from 'react';
import { useSpring, animated } from 'react-spring';
import { useInView } from 'react-intersection-observer';

const ScrollFadeIn = ({ children }) => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.5,
    });

    const fadeIn = useSpring({
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(20px)',
    });

    return (
        <animated.div style={fadeIn} ref={ref}>
            {children}
        </animated.div>
    );
};

export default ScrollFadeIn;