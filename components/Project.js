import React from "react";

const Project = () => {
  return (
    <div className="project-container">
      <div className="project">
        <div className="project-content">
          <div className="project-label">Game of Thrones</div>
          <h4 className="project-title">A Clash of Kings</h4>
          <div className="project-details">
            <p>
              Lorem ipsum dolor amet you probably haven&apos;t heard of them
              bitters selvage listicle heirloom. Locavore kombucha street art
              ennui 90&apos;s, organic food truck hell of seitan skateboard
              literally hexagon fixie next level. Lomo salvia yuccie hella roof
              party echo park vegan four dollar toast cred.
            </p>
            <ul>
              <li>Shadow</li>
              <li>Demon</li>
              <li>Baby</li>
            </ul>
          </div>
        </div>

        <div className="project-img">
          <img
            src="https://cdn.vox-cdn.com/thumbor/w-IFN0FWpN4BGfhZaV9EYqs4nLo=/51x0:977x617/1200x800/filters:focal(51x0:977x617)/cdn.vox-cdn.com/uploads/chorus_image/image/50017015/Screen_Shot_2016-07-04_at_12.37.15_PM.0.0.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Project;
