import './NotFoundPage.css';
import { Link, useNavigate } from 'react-router-dom';
function NotFoundPage() {
  const navigate = useNavigate();
  return (
    <main className='not-found'>
      <section className='not-found__text-container'>
        <h1 className='not-found__title'>404</h1>
        <p className='not-found__message'>Страница не найдена</p>
      </section>
      <Link className='not-found__link link' onClick={() => navigate(-1)}>
        Назад
      </Link>
    </main>
  );
}
export default NotFoundPage;
