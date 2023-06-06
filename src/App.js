import PostsList from './components/postsList';
import AddFormPost from './components/addPostForm';
import './App.css';

function App() {
  return (
    <div className="App">
      <AddFormPost/>
      <PostsList/>
    </div>
  );
}

export default App;
