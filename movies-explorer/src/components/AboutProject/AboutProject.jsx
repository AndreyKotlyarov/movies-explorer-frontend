import './AboutProject.css';
function AboutProject() {
  return (
    <article className='about'>
      <div className='about__title-container'>
        <h2 className='about__title'>О проекте</h2>
      </div>
      <div className='about__paragraph-container'>
        <h3 className='about__paragraph-title'>Дипломный проект включал 5 этапов</h3>
        <p className='about__paragraph'>Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
      </div>
      <div className='about__paragraph-container'>
        <h3 className='about__paragraph-title'>На выполнение диплома ушло 5 недель</h3>
        <p className='about__paragraph'>У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
      </div>
      <div className='about__table'>
        <div className='about__table-cell about__table-cell_green'>1 неделя</div>
        <div className='about__table-cell about__table-cell_grey'>4 недели</div>
        <div className='about__table-cell'>Back-end</div>
        <div className='about__table-cell'>Front-end</div>
      </div>
    </article>
  );
}

export default AboutProject;
