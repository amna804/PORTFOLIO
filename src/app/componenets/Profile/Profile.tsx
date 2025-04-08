'use client';
/** @jsxImportSource @emotion/react */
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { css } from '@emotion/react';
import Intro from '../Intro/Intro';

const Profile = () => {
  const [audio, setAudio] = useState(false);
  const [isLocked, setIsLocked] = useState(true);
  const lockSoundRef = useRef<HTMLAudioElement>(null);
  const profileImgWrapperRef = useRef<HTMLDivElement>(null);

  // Emotion styles
  const containerStyles = css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    gap: 100px;
    margin-top: 4rem;
    position: relative;
  `;

  const clickMeStyles = (isActive: boolean) => css`
    position: absolute;
    top: ${isActive ? '427px' : '397px'};
    z-index: 1;
    left: 312px;
    transition: 0.4s ease;
    background: var(--click-color);
    padding: 0.3rem;
    border-radius: 5px;
    width: 180px;
    text-align: center;
    white-space: nowrap;
    &:hover {
      opacity: 0.6;
    }
  `;

  useEffect(() => {
    const handleHover = () => {
      if (profileImgWrapperRef.current) {
        profileImgWrapperRef.current.style.transform = 'scale(1.05)';
      }
    };

    const wrapper = profileImgWrapperRef.current;
    wrapper?.addEventListener('mouseover', handleHover);

    return () => wrapper?.removeEventListener('mouseover', handleHover);
  }, []);

  return (
    <div css={containerStyles}>
      <button
        css={clickMeStyles(audio)}
        onClick={() => {
          setAudio(!audio);
          setIsLocked(!isLocked);
          lockSoundRef.current?.play();
        }}
      >
        {audio ? 'kuch toh bolo 😼' : 'Kyu nehi bol rahe ho 😒'}
      </button>

      <div 
        ref={profileImgWrapperRef} 
        css={css`
          z-index: 2;
          transition: transform 0.3s ease;
        `}
      >
        <Image 
          src="/images/MLSA-removebg-preview.png"  // Direct public path
          height={500} 
          width={500} 
          alt="ProfilePic"
          css={css`
            max-width: 100%;
            height: auto;
          `}
        />
      </div>

      <Intro 
        isLocked={isLocked} 
        setIsLocked={setIsLocked} 
        lockSoundRef={lockSoundRef as React.RefObject<HTMLAudioElement>}
      />
    </div>
  );
};

export default Profile;