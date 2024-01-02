import ItemList from './ItemList'

function Content({items,handleCheck,handleDelete}) {
  return (
    <main>
      {items.length ? (
        <ItemList items={items} handleCheck={handleCheck}
        handleDelete={handleDelete}/>
      ) : (
      <p style={{marginTop: '2rem'}}>No More Tasks Remaining</p>
      )}
    </main>
  )
}

        
export default Content

//  true if does not match keep false does match delete out of arr
//function handleDelete(id) {
//store the new filtered arr delete id if match
//   const newBlogs = blogs.filter((blog) => blog.id !== id);
//   setBlogs(newBlogs);
// }