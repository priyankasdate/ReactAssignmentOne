import React from 'react'

useEffect(() => {
  (async () => {
    const result = await axios("https://api.tvmaze.com/search/shows?q=snow");
    setData(result.data);
  })();
}, []);

return (
  <div className="App"></div>
);


export default App;





















// https://avatars.dicebear.com/v2/avataaars/Leanne%20Graham.svg?options[mood][]=happy
// https://avatars.dicebear.com/v2/avataaars/Ervin%20Howell.svg?options[mood][]=happy
// https://avatars.dicebear.com/v2/avataaars/Clementine%20Bauch.svg?options[mood][]=happy
// https://avatars.dicebear.com/v2/avataaars/Patricia%20Lebsack.svg?options[mood][]=happy
// https://avatars.dicebear.com/v2/avataaars/Chelsey%20Dietrich.svg?options[mood][]=happy
// https://avatars.dicebear.com/v2/avataaars/Mrs.%20Dennis%20Schulist.svg?options[mood][]=happy
// https://avatars.dicebear.com/v2/avataaars/Kurtis%20Weissnat%20Schulist.svg?options[mood][]=happy
// https://avatars.dicebear.com/v2/avataaars/Nicholas%20Runolfsdottir%20V%20Schulist.svg?options[mood][]=happy
// https://avatars.dicebear.com/v2/avataaars/Glenna%20Reichert.svg?options[mood][]=happy
// https://avatars.dicebear.com/v2/avataaars/Clementina%20DuBuque.svg?options[mood][]=happy