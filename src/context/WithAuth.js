

import React,{useState,useEffect} from 'react'

import UserContext from './UserContext';
import * as data from '../api/db.json';


const WithAuth= (Component) => {
const WithAuth = (props) =>
{
const [signedInUser,setSignedInUser] = useState(null);
useEffect(() => {


},[])
return (
<UserContext.Provider value={signedInUser}>
<Component {...props} />
</UserContext.Provider>
);
}
// return withFirebase(WithAuthentication);
};
export default WithAuth;
  	  	 


