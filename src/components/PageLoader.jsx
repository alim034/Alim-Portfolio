import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const PageLoader = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setVisible(false), 2200);
    return () => clearTimeout(timeout);
  }, []);

  if (!visible) return null;

  return (
    <StyledWrapper className="fixed inset-0 z-[100] flex items-center justify-center">
      <div className="relative flex flex-col items-center gap-8">
        <div className="loader">
          <span><span /><span /><span /><span /></span>
          <div className="base">
            <span />
            <div className="face" />
          </div>
        </div>
        <div className="longfazers">
          <span /><span /><span /><span />
        </div>
        <div className="status">
          <span className="status-text">Loading Alim's Portfolio...</span>
        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  position: fixed;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #050505;

  .loader {
    position: absolute;
    top: 50%;
    left: 50%;
    margin-left: -50px;
    animation: speeder 0.6s linear infinite;
    filter: drop-shadow(0 4px 24px rgba(56,189,248,0.35));
  }
  .loader > span {
    height: 5px;
    width: 35px;
    background: linear-gradient(90deg, #5eead4 0%, #60a5fa 45%, #a78bfa 100%);
    position: absolute;
    top: -19px;
    left: 60px;
    border-radius: 2px 10px 1px 0;
  }
  .base span {
    position: absolute;
    width: 0;
    height: 0;
    border-top: 6px solid transparent;
    border-right: 100px solid #60a5fa;
    border-bottom: 6px solid transparent;
  }
  .base span:before {
    content: "";
    height: 22px;
    width: 22px;
    border-radius: 50%;
    background: #5eead4;
    position: absolute;
    right: -110px;
    top: -16px;
    box-shadow: 0 0 18px rgba(94,234,212,0.55);
  }
  .base span:after {
    content: "";
    position: absolute;
    width: 0;
    height: 0;
    border-top: 0 solid transparent;
    border-right: 55px solid #a78bfa;
    border-bottom: 16px solid transparent;
    top: -16px;
    right: -98px;
  }
  .face {
    position: absolute;
    height: 12px;
    width: 20px;
    background: #7c3aed;
    border-radius: 20px 20px 0 0;
    transform: rotate(-40deg);
    right: -125px;
    top: -15px;
    box-shadow: 0 0 12px rgba(124,58,237,0.55);
  }
  .face:after {
    content: "";
    height: 12px;
    width: 12px;
    background: #5eead4;
    right: 4px;
    top: 7px;
    position: absolute;
    transform: rotate(40deg);
    transform-origin: 50% 50%;
    border-radius: 0 0 0 2px;
    box-shadow: 0 0 10px rgba(34,211,238,0.7);
  }
  .loader > span > span:nth-child(1),
  .loader > span > span:nth-child(2),
  .loader > span > span:nth-child(3),
  .loader > span > span:nth-child(4) {
    width: 30px;
    height: 1px;
    background: linear-gradient(90deg, #5eead4, #60a5fa);
    position: absolute;
    animation: fazer1 0.4s linear infinite;
  }
  .loader > span > span:nth-child(2) {
    top: 3px;
    animation: fazer2 0.6s linear infinite;
  }
  .loader > span > span:nth-child(3) {
    top: 1px;
    animation: fazer3 0.6s linear infinite;
    animation-delay: -1s;
  }
  .loader > span > span:nth-child(4) {
    top: 4px;
    animation: fazer4 1.2s linear infinite;
    animation-delay: -1s;
  }
  @keyframes fazer1 {
    0% { left: 0; opacity: 1; }
    100% { left: -80px; opacity: 0; }
  }
  @keyframes fazer2 {
    0% { left: 0; opacity: 1; }
    100% { left: -100px; opacity: 0; }
  }
  @keyframes fazer3 {
    0% { left: 0; opacity: 1; }
    100% { left: -50px; opacity: 0; }
  }
  @keyframes fazer4 {
    0% { left: 0; opacity: 1; }
    100% { left: -150px; opacity: 0; }
  }
  @keyframes speeder {
    0% { transform: translate(2px, 1px) rotate(0deg); }
    10% { transform: translate(-1px, -3px) rotate(-1deg); }
    20% { transform: translate(-2px, 0px) rotate(1deg); }
    30% { transform: translate(1px, 2px) rotate(0deg); }
    40% { transform: translate(1px, -1px) rotate(1deg); }
    50% { transform: translate(-1px, 3px) rotate(-1deg); }
    60% { transform: translate(-1px, 1px) rotate(0deg); }
    70% { transform: translate(3px, 1px) rotate(-1deg); }
    80% { transform: translate(-2px, -1px) rotate(1deg); }
    90% { transform: translate(2px, 1px) rotate(0deg); }
    100% { transform: translate(1px, -2px) rotate(-1deg); }
  }
  .longfazers {
    position: absolute;
    width: 100%;
    height: 100%;
  }
  .longfazers span {
    position: absolute;
    height: 2px;
    width: 20%;
    background: linear-gradient(90deg, #5eead4, #a78bfa);
    box-shadow: 0 0 10px rgba(94,234,212,0.5);
  }
  .longfazers span:nth-child(1) { top: 20%; animation: lf 0.8s linear infinite; animation-delay: -5s; }
  .longfazers span:nth-child(2) { top: 40%; animation: lf2 1s linear infinite; animation-delay: -1s; }
  .longfazers span:nth-child(3) { top: 60%; animation: lf3 0.8s linear infinite; }
  .longfazers span:nth-child(4) { top: 80%; animation: lf4 0.7s linear infinite; animation-delay: -3s; }

  @keyframes lf { 0% { left: 200%; } 100% { left: -200%; opacity: 0; } }
  @keyframes lf2 { 0% { left: 200%; } 100% { left: -200%; opacity: 0; } }
  @keyframes lf3 { 0% { left: 200%; } 100% { left: -100%; opacity: 0; } }
  @keyframes lf4 { 0% { left: 200%; } 100% { left: -100%; opacity: 0; } }

  .status {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 6px;
    text-align: center;
    padding-top: 110px;
  }
  .status-text {
    font-size: 1.05rem;
    font-weight: 700;
    letter-spacing: 0.5px;
    background: linear-gradient(90deg, #38bdf8 0%, #60a5fa 45%, #a855f7 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    filter: drop-shadow(0 0 16px rgba(56,189,248,0.35));
    animation: pulseText 1.6s ease-in-out infinite;
  }

  @keyframes pulseText {
    0% { opacity: 0.75; }
    50% { opacity: 1; }
    100% { opacity: 0.75; }
  }
`;

export default PageLoader;
