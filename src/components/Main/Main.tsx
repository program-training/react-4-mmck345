import React, {useContext, useState} from "react";
import { UserContext } from "../../Context/UserContext";

const Main = () => {
    const [showMore, setShowMore] = useState<boolean>(false)
    const userContext = useContext(UserContext);
    if (!userContext) return;

  return (
    <div>
        <button type="button" onClick={() => setShowMore(!showMore)}>Show More Details</button>
        <h3>{userContext.user?.name}</h3>
        {
            showMore && (
                <div>
                    <h3>{userContext.user?.email}</h3>
                    <h3>{userContext.user?.phone}</h3>
                    <h3>{userContext.user?.company.name}</h3>
                </div>
                
            )
        }
    </div>
  );
};

export default Main;
