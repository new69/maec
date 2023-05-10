import React from 'react';

/* Components */
import TabLink from '../TabLink';
import Companies from '../Companies';
import Families from '../Families';
import Building from '../Building';

const Acting = () => {
  return (
    <div className="background-acting" id="acting-area">
      <section className="acting">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2 className="title line-title center">Áreas de atuação</h2>
              <p>Saiba como a MA&C pode te ajudar</p>
              <div className="box-tab">
                <TabLink />
                <Companies />
                <Families />
                <Building />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Acting;
