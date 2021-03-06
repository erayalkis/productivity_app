import ListItem from './ListItem';
import NewListButton from './NewListButton';

const Lists = (props) => {
  const { lists } = props;


  return(
    <div className="mt-4">
      <h1 className=''>View your lists:</h1>
      <div>
        {lists.map(item => <ListItem key={item.id} item={item} setUserLists={props.setUserLists} />)}
      </div>
      <NewListButton onClick={props.handleOpen} />
    </div>
  )
};

export default Lists;