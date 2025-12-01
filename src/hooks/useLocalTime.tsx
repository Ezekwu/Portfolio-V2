import { useEffect, useState } from 'react';

const LAGOS_TIME_ZONE = 'Africa/Lagos';

export default function useLocalTime() {
  const [currentTime, setCurrentTime] = useState('');
  const [showSeparator, setShowSeparator] = useState(true);

  const getFormattedTime = () => {
    return new Date().toLocaleTimeString('en-NG', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false, 
      timeZone: LAGOS_TIME_ZONE,
    });
  };

  useEffect(() => {
    setCurrentTime(getFormattedTime());

    const timeInterval = setInterval(() => {
      setCurrentTime(getFormattedTime());
    }, 60000);

    return () => clearInterval(timeInterval);
  }, []);

  useEffect(() => {
    const separatorInterval = setInterval(() => {
      setShowSeparator(prev => !prev);
    }, 1000);

    return () => clearInterval(separatorInterval);
  }, []);

  
  const displayTime = currentTime.replace(':', showSeparator ? ':' : ' ');

  return displayTime;
}
