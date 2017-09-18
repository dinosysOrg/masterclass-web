import React from 'react';

export default () => {
  return (
    <section className="howItWork py-5">
      <div className="container">
        <div className="row">
          <div className="col">
            <h2 className="howItWork__title text-uppercase">How does <br/> Masterclass Work?</h2>
            <p className="howItWork__text mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.Ut pretium turpis lacus, in imperdiet nisl lobortis eu. Ut ut justo ante. In sit amet elit a ex malesuada rutrum in non enim</p>
          </div>
          <div className="col">
            <div className="video">
              <iframe title="iframe-video" allowFullScreen="allowFullScreen" frameBorder="0" className="iframe-video" src="https://www.youtube.com/embed/gyWUazuJBak?rel=0&amp;showinfo=0"></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
