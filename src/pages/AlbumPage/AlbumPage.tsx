import React, { useState } from "react";
import Button from "../../components/Button/Button";
import ButtonGroup from "../../components/ButtonGroup/ButtonGroup";
import Card from "../../components/Card/Card";
import { TextHeading } from "../../components/Text";

import "./Album.css";

const AlbumPage = () => {
  const [collapsed, setCollapsed] = useState(true);
  const handleMenuClick = () => {
    setCollapsed(!collapsed);
  };

  return (
    <>
      <header className="header main">
        <div className={`container ${collapsed ? "collapsed" : "expanded"}`}>
          <div className="about-container">
            <TextHeading asTag="h2" text="About" />
            <p>
              Add some information about the album below, the author, or any
              other background context. Make it a few sentences long so folks
              can pick up some informative tidbits. Then, link them off to some
              social networking sites or contact information.
            </p>
          </div>
          <div className="contacts">
            <h3>Contacts</h3>
            <ul>
              <li>Follow on Twitter</li>
              <li>Like on Faceboock</li>
              <li>Email me</li>
            </ul>
          </div>
        </div>
        <div className="container uncollapsed">
          <div className="logo">
            <TextHeading asTag="h4" text="Album" />
          </div>
          <div className="btn-menu">
            <Button btnLabel="Menu" onClick={handleMenuClick} />
          </div>
        </div>
      </header>
      <main>
        <section className="action-section" style={{ minHeight: "20vh" }}>
          <TextHeading asTag="h1" text="Album example" />
          <p>
            Something short and leading about the collection below—its contents,
            the creator, etc. Make it short and sweet, but not too short so
            folks don't simply skip over it entirely.
          </p>
          <div className="action-call">
            <Button btnStyle="primary" btnLabel="Main Call to Action" />
            <Button btnStyle="secondary" btnLabel="Secondary Action" />
          </div>
        </section>
        <section className="album-examples">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(() => {
            return (
              <Card 
              cardText="This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
              cardControls={<><ButtonGroup><Button btnLabel="View"/><Button btnLabel="Edit"/></ButtonGroup></>} />
            );
          })}
        </section>
      </main>
    </>
  );
};

export default AlbumPage;
