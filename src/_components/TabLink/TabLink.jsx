import React from 'react';

const TabLink = () => {
  return (
    <div className="tab clearfix" data-aos="fade-down">
      <button className="tablinks active" data-id="company">
        <div className="separator">
          <span className="icon company"></span>
          <h3 className="name">EMPRESAS</h3>
        </div>
      </button>
      <button className="tablinks" data-id="family">
        <div className="separator">
          <span className="icon family"></span>
          <h3 className="name">FAMILIAR</h3>
        </div>
      </button>
      <button className="tablinks" data-id="house">
        <div className="separator">
          <span className="icon house"></span>
          <h3 className="name">IMOBILIÁRIO</h3>
        </div>
    </button>
    </div>
  );
}

export default TabLink;
