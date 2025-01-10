import { createBrowserRouter } from 'react-router-dom';
import PostList from './pages/PostList';
import PostForm from './pages/PostForm';

const routes = [
  {
    path: '/',
    element: <PostList />
  },
  {
    path: '/new',
    element: <PostForm />
  },
  {
    path: '/edit/:id',
    element: <PostForm />
  }
]

const router = createBrowserRouter(routes);

export default router;
