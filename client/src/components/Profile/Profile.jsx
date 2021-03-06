import UserContext from '../Contexts/UserContext';
import { useContext } from 'react';
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Lists from '../Lists/Lists';
import NoLists from '../NoLists/NoLists.jsx';
import ListModal from '../ListModal/ListModal.jsx';


const Profile = () => {
  const params = useParams();
  const [isLoading, setLoading] = useState(true);
  const [userLists, setUserLists] = useState([]);
  const [show, setShow] = useState(false);
  const { user } = useContext(UserContext);
  const handleOpen = () => setShow(true);

  useEffect(() => {
    fetch(`https://taskio-backend.herokuapp.com/api/user_lists/${params.id}`)
      .then(res => res.json())
      .then(userData => {
        setUserLists(userData);
        setLoading(false);
      })
  }, [params]);

  return(
    isLoading ? 
      <div className="spinner-border text-primary d-block mx-auto mt-4" style={{height: 150, width: 150}}></div>
    :
      <div className="container text-center">
        <h1 className="display-3 mt-2">Welcome, {user.username}!</h1>
        <div>
          { userLists.length ? 
            <Lists lists={userLists} handleOpen={handleOpen} setUserLists={setUserLists} />
          :
            <NoLists handleOpen={handleOpen} />
          }
        </div>
        <ListModal show={show} setShow={setShow} handleOpen={handleOpen} setUserLists={setUserLists} />
      </div>
  )
};

export default Profile;