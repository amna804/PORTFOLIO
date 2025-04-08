'use client';
/** @jsxImportSource @emotion/react */
import React from 'react';
import Typewriter from 'typewriter-effect';
import { Zilla_Slab } from 'next/font/google';
import Socials from '../Socials/Socials';
import { css } from '@emotion/react';

const zilla = Zilla_Slab({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

interface IntroProps {
  isLocked: boolean;
  setIsLocked: React.Dispatch<React.SetStateAction<boolean>>;
  lockSoundRef: React.RefObject<HTMLAudioElement>;
}

const Intro = ({ isLocked, setIsLocked, lockSoundRef }: IntroProps) => {
  const introStyles = css`
    display: flex;
    flex-direction: column;
    width: 100%;
    font-weight: 700;
    margin-top: 40px;
    justify-content: flex-end;
    gap: 2rem;
    color: var(--text);
  `;

  return (
    <div css={introStyles}>
      <h3 css={css`font-size: 3rem;`}>Hello There!</h3>
      <div css={css`font-family: ${zilla.style.fontFamily};`}>
        <Typewriter
          options={{
            strings: ["Your introduction text..."],
            autoStart: true,
            loop: false,
            deleteSpeed: Infinity,
            delay: 30,
          }}
        />
      </div>
      <Socials isLocked={isLocked} setIsLocked={setIsLocked} lockSoundRef={lockSoundRef} />
    </div>
  );
};

export default Intro;