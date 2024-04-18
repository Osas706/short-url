import React, { useEffect, useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const Result = () => {
    const [shortLink, setShortLink] = useState('hi');
    const [copied, setCopied] = useState(false);

    useEffect(() => {
      const timer = setTimeout(() => {
        setCopied(false);
      }, 1000);

      return () => clearTimeout(timer);
    }, [copied])

  return (
    <div className='result'>
      <p>{shortLink}</p>

      <CopyToClipboard text={shortLink} onCopy={() => setCopied(true)}>
        <button className={copied ? "copied" : ""}>Copy</button>
      </CopyToClipboard>
      
    </div>
  )
}

export default Result
