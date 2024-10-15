import { useEffect, useState } from "react";

const useOnlineStatusCheck = () => {
  let [online, setOnline] = useState(true);

  useEffect(() => {
    window.addEventListener("offline", () => {
      setOnline(navigator.onLine);
    });
    window.addEventListener("online", () => {
        setOnline(navigator.onLine);
      });
  },[]);

  return online;
};

export default useOnlineStatusCheck;
