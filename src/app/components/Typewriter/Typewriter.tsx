/**
 * extension of the typewriter component from my other joke project, 'terse' 
 * 
 * Note: either some changes here or how this comp. is placed causing cursor 
 *       to vanish at animation end. This is kind of serendipitous for this site
 *       but not necessarily for other uses of this typewriter component.
 * 
 */
"use client";

interface TypewriterProps {
  final:          string;
  initial:        string;
  resetIndex?:    number;
  textClasses?:   string;
  accentString?:  string;
  cursorClasses?: string;
  accentClasses?: string;
}

interface AccentedTextProps {
  final:          string;
  accentString:   string;
  textClasses?:   string;
  accentClasses?: string;
  invert?:        boolean;
}

import React, { useEffect, useState } from 'react';

import styles from './Typewriter.module.css';


const AccentedText: React.FC<AccentedTextProps> = ({ final, accentString, textClasses="", accentClasses="", invert=false }) => {

  if (final.indexOf(accentString) === -1) throw new Error("Accented text must be a substring of the final string.")

  // substrings 0 and 2 are the text to render in default (for now), the class `primary`
  // and substring 2, the accent text, is, as you may expect, rendered with default 
  // of (for now), the class `accent`
  const [ subStr0, subStr2 ] = final.slice().split(accentString);
  const subStr1 = accentString.slice();

  return (
    <>
      <h1 className={`${styles.typewriter} + ${textClasses}`}>{ subStr0 }<span className={styles['accent-animation']}>{ subStr1 }</span>{ subStr2 }</h1>
    </>
  );
};


const Typewriter: React.FC<TypewriterProps> = ({ final, initial, resetIndex=0, textClasses="", cursorClasses="", accentString="", accentClasses="" }) => {
  const stopChar = initial.charAt(resetIndex);

  if   (stopChar !== final.charAt(resetIndex)) throw new Error("Initial and final strings must share the same first character.");

  const [text, setText] = useState(stopChar);           // the string to render w/ typewriter effect
  const [isTerse, setIsTerse] = useState(false);        // basically, are we done?
  const [isTyping, setIsTyping] = useState(true);       // are we typing to the intermediary?
  const [isTersing, setIsTersing] = useState(false);    // are we typing to the final string?
  const [isDeleting, setIsDeleting] = useState(false);  // are we in the process of deleting the intermediary string?
  const [isAnimated, setIsAnimated] = useState(false);  // have we added the animation class, if there is one, to the accent text

  const deleteSpeed           = 1;
  const baseSpeed             = 22;
  const terserSpeed           = 12;
  const commaPauseSpeed       = 225;
  const questionPauseSpeed    = 135;
  const apostrophePauseSpeed  = 165;

  // thought about reversing the strings to simplify 
  // const dupeFinal = [...final].reverse().join("");
  // const dupeinitial = [...initial].reverse().join("");


  // TODO @mfwolffe cleanup control flow lol;
  // natural typing style not as necessary here
  useEffect(() => {
    const typewriterEffect = () => {
      let timer: NodeJS.Timeout;
      
      let chkIndx = text.length;
      
      if (isTyping) {
        if (text === initial) {
          setTimeout(() => {
            setIsTyping(false);
            setIsDeleting(true);
          }, 1400);
        }
        else if (chkIndx > -1 && initial.charAt(chkIndx) === ',') {          
          setIsTyping(false);
          setTimeout(() => {
            timer = setTimeout(() => { setText(initial.slice(0, chkIndx + 1)); }, baseSpeed);
            setIsTyping(true);
          }, commaPauseSpeed);
        }
        else if (chkIndx < initial.length && initial.charAt(chkIndx) === '\'') {
          setIsTyping(false);
          setTimeout(() => {
            timer = setTimeout(() => { setText(initial.slice(0, chkIndx + 1)); }, baseSpeed);
            setIsTyping(true);
          }, apostrophePauseSpeed);
        }
        else if (chkIndx < initial.length && initial.charAt(chkIndx) === '?') {
          setIsTyping(false);
          setTimeout(() => {
            timer = setTimeout(() => { setText(initial.slice(0, chkIndx + 1)); }, baseSpeed);
            setIsTyping(true);
          }, questionPauseSpeed);
        }
        else
          timer = setTimeout(() => { setText(initial.slice(0, chkIndx + 1)); }, baseSpeed);
      }

      else if (isDeleting) {
        if (text === stopChar) {
          setIsDeleting(false);
          setIsTersing(true);
        }
        else
          timer = setTimeout(() => { setText(text.slice(0, -1)); }, deleteSpeed)  
      }

      else if (isTersing) {
        if (text === final) {
          setIsTersing(false);
          setIsTerse(true);
        }
        if (chkIndx < final.length && final.charAt(chkIndx) === '?') {
          setIsTersing(false);
          setTimeout(() => {
            timer = setTimeout(() => { setText(final.slice(0, text.length + 1)); }, terserSpeed);
            setIsTersing(true);
          }, questionPauseSpeed * 2)
        }
        else
          timer = setTimeout(() => { setText(final.slice(0, text.length + 1)); }, terserSpeed);
      }

      return () => clearTimeout(timer);
    };

    const interval = setInterval(typewriterEffect, 100);
    return () => clearInterval(interval);
  }, [text, isDeleting, isTersing, isTerse, isTyping]);

  useEffect(() => {
    if (!isTerse) return;

    let timer: NodeJS.Timeout;

    timer = setTimeout(() => {
      setIsAnimated(true);
    }, 400);

    return () => clearTimeout(timer);
  }, [isTerse]);

  return (
    <div className='w-fit'>
      { isAnimated ? 
        <AccentedText textClasses={textClasses} final={final} accentString={accentString} accentClasses={accentClasses} />
          :
        <>
          <h1 className={`${styles.typewriter} ${textClasses} `}>{text}<span className={`${styles.cursor} ${cursorClasses}`}></span></h1>
        </>
      }
    </div>
  );
};

export default Typewriter;
