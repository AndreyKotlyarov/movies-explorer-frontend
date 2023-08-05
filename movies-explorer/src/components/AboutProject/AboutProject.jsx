import './AboutProject.css';
function AboutProject() {
  return (
    <article className='about-project'>
      <div className='about-project__title-container'>
        <h2 className='about-project__title'>О проекте</h2>
      </div>
      <div className='about-project__grid-container'>
        <div className='about-project__paragraph-container'>
          <h3 className='about-project__paragraph-title'>Дипломный проект включал 5 этапов</h3>
          <p className='about-project__paragraph'>
            Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.
          </p>
        </div>
        <div className='about-project__paragraph-container'>
          <h3 className='about-project__paragraph-title'>На выполнение диплома ушло 5 недель</h3>
          <p className='about-project__paragraph'>
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.
          </p>
        </div>
      </div>
      <div className='about-project__table'>
        <span className='about-project__table-cell about-project__table-cell_green'>1 неделя</span>
        <span className='about-project__table-cell about-project__table-cell_grey'>4 недели</span>
        <span className='about-project__table-cell'>Back-end</span>
        <span className='about-project__table-cell'>Front-end</span>
      </div>
    </article>
  );
}

export default AboutProject;
