'use client';
/** @jsxImportSource @emotion/react */
import React, { useEffect, useRef, useState } from 'react';
import { css } from '@emotion/react';
import { Lock, LockOpen, LinkedIn, GitHub, WhatsApp, Instagram, Email, X } from '@mui/icons-material';
import { Tooltip } from '@mui/material';

interface SocialsProps {
  isLocked: boolean;
  setIsLocked: React.Dispatch<React.SetStateAction<boolean>>;
  lockSoundRef: React.RefObject<HTMLAudioElement>;
}

const Socials = ({ isLocked, setIsLocked, lockSoundRef }: SocialsProps) => {
  const [jsConfetti, setJsConfetti] = useState<any>(null);

  // icon styles using MUI sx syntax
  const iconStyles = {
    fontSize: 35,
    color: 'var(--text)',
    transition: 'opacity 0.3s ease',
    '&:hover': {
      cursor: 'pointer',
      opacity: 0.45,
    },
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      import('js-confetti').then((module) => {
        setJsConfetti(new module.default());
      });
    }
  }, []);

  return (
    <div
      css={css`
        position: relative;
        display: flex;
        align-items: center;
        gap: 1rem;
      `}
    >
      <Tooltip title={isLocked ? 'Find a way to unlock me 😁' : ''}>
        <div
          css={css`
            opacity: ${isLocked ? 0.4 : 1};
            display: flex;
            gap: 1rem;
          `}
        >
          {/* Social links with styled icons */}
          <LinkedIn sx={iconStyles} />
          <GitHub sx={iconStyles} />
          <Instagram sx={iconStyles} />
          <WhatsApp sx={iconStyles} />
          <Email sx={iconStyles} />
          <X sx={iconStyles} />
        </div>
      </Tooltip>

      <Tooltip title={isLocked ? 'Unlock to access Socials 😉' : 'Wooohoooo 🎉'}>
        <button
          onClick={() => {
            setIsLocked(!isLocked);
            lockSoundRef.current?.play();
          }}
          css={css`
            border: none;
            background: transparent;
            cursor: pointer;
          `}
        >
          {isLocked ? <Lock sx={iconStyles} /> : <LockOpen sx={iconStyles} />}
        </button>
      </Tooltip>
    </div>
  );
};

export default Socials;
