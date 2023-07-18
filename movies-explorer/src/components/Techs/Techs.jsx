import './Techs.css';
function Techs() {
  return (
    <article className='techs'>
      <div className='techs__title-container'>
        <h2 className='techs__title'>Технологии</h2>
      </div>
      <div className='techs__paragraph-container'>
        <h3 className='techs__paragraph-title'>7 технологий</h3>
        <p className='techs__paragraph'>На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
      </div>
      <div className='techs__table'>
        <div className='techs__table-cell'>HTML</div>
        <div className='techs__table-cell'>CSS</div>
        <div className='techs__table-cell'>JS</div>
        <div className='techs__table-cell'>React</div>
        <div className='techs__table-cell'>Git</div>
        <div className='techs__table-cell'>Express.js</div>
        <div className='techs__table-cell'>mongoDB</div>
      </div>
    </article>
  );
}

export default Techs;
