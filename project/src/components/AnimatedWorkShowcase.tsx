import React from 'react';
import { useSpring, animated } from 'react-spring';

const AnimatedWorkShowcase = () => {
  const fadeIn = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 1000 },
  });

  return (
    <div>
      <h1>Work Showcase</h1>
      <animated.div style={fadeIn}>
        <p>
          I have worked on a variety of projects as a copyeditor, focusing on grammar, clarity, and style.
        </p>
      </animated.div>
      <div style={{ marginTop: '20px' }}>
        <h2>Sample 1</h2>
        <p>Here is a sample of my work on editing a technical document for clarity and grammar.</p>
        <AnimatedPdfLink pdfLink="/sample1.pdf" />
      </div>
      <div style={{ marginTop: '20px' }}>
        <h2>Sample 2</h2>
        <p>Here is another sample of my editing work, focusing on SEO-friendly content.</p>
        <AnimatedPdfLink pdfLink="/sample2.pdf" />
      </div>
    </div>
  );
};

const AnimatedPdfLink = ({ pdfLink }) => {
  const linkAnimation = useSpring({
    transform: 'scale(1.1)',
    from: { transform: 'scale(1)' },
    reset: true,
    reverse: true,
    config: { tension: 200, friction: 12 },
  });

  return (
    <animated.a
      href={pdfLink}
      download
      style={{ ...linkAnimation, textDecoration: 'none' }}
    >
      <button>Download Sample</button>
    </animated.a>
  );
};

export default AnimatedWorkShowcase;
