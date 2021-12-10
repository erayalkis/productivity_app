import { useEffect } from 'react';
import { BsPencilSquare } from 'react-icons/bs';
import { CgTrashEmpty } from 'react-icons/cg';

const ListItem = (props) => {
  const { item } = props;
  
  useEffect(() => {
    console.log(item.name);
  });

  const handleDelete = () => {

  };

  return(
    <div className="mt-3">
      <div className="card w-50 mx-auto">
        <div className="d-flex justify-content-between align-items-center">
          <div className="ms-3 mt-2">
            <h3>{item.name}</h3>
          </div>
          <div>
            <BsPencilSquare className="text-primary me-3" style={{fontSize: 30}} />
            <CgTrashEmpty className="text-primary me-2" style={{fontSize: 35, cursor:"pointer"}} onClick={handleDelete} />
          </div>
        </div>
      </div>
    </div>
  )
};

export default ListItem;