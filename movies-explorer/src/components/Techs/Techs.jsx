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
      <ul className='techs__table'>
        <li className='techs__table-cell'>HTML</li>
        <li className='techs__table-cell'>CSS</li>
        <li className='techs__table-cell'>JS</li>
        <li className='techs__table-cell'>React</li>
        <li className='techs__table-cell'>Git</li>
        <li className='techs__table-cell'>Express.js</li>
        <li className='techs__table-cell'>mongoDB</li>
      </ul>
    </article>
  );
}

export default Techs;
