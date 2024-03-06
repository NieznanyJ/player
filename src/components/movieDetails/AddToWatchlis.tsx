"use client"
import React, {useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

function AddToWatchlis({ includes, addMedia, removeMedia }: { includes: boolean, addMedia:any, removeMedia:any}) {


  const [includesMedia, setIncludesMedia] = useState<boolean>(includes);

  return    (
    
      <div>
        <form action={includesMedia ?   addMedia : removeMedia }>
          <button type="submit" onClick={() => setIncludesMedia(prev => !prev)}>
              <FontAwesomeIcon icon={includesMedia ? faMinus : faPlus} />
              {includesMedia ? "Remove from watchlist" :  "Add to watchlist" }
          </button>
      </form> 
      </div>
          
     
     
  
  );
}

export default AddToWatchlis;
