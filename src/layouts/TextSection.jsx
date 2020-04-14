import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import prism from '../styles/prism';
import './textSection.css'

const Wrapper = styled.div`
  ${prism};
  p,
  li {
    letter-spacing: -0.003em;
    --baseline-multiplier: 0.179;
    --x-height-multiplier: 0.35;
    font-size: 1.15rem;
    line-height: 2;
    code {
      padding: 0.2rem 0.5rem;
      margin: 0.5rem 0;
    }
  }
  a:not(.gatsby-resp-image-link):not(.anchor) {
    color: black;
    box-shadow: inset 0 -2px 0 ${props => props.theme.colors.primary.base};
    border-bottom: 1px solid ${props => props.theme.colors.primary.base};
    transition: ${props => props.theme.transitions.default.transition};
    text-decoration: none;
    &:hover,
    &:focus {
      background: ${props => props.theme.colors.primary.base};
      color: black;
    }
  }
  h1 {
    margin-top: 3rem;
  }
  h2 {
    margin-top: 1rem;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    display: inline-block;
    position: relative;
    a {
      box-shadow: none;
      border-bottom: none;
      &:hover,
      &:focus {
        background: none;
      }
    }
    &:hover {
      .anchor svg {
        opacity: 0.8;
      }
    }
  }
`;
function ttdeToggleVisibility(self, id, idInner) {
    self.parentNode.removeChild(self);
    var e = document.getElementById(id);
    e.classList.add("auto");
  }

const TextSection = ({ title, text, image1, image2, image3 }) => (
    <div className="container" id="2">
        <div className="row">
            <div className="col-sm-9">
            <section className="site-block">
                <h2><Wrapper dangerouslySetInnerHTML={{ __html: title }} /> </h2>
                <div className="row">
                    <div className="col-sm-3">
                        <div className="smallery">
                            <div className="smallery-item-wrp ttdegalleryitem" data-pswp-uid="1">
                                <figure className="smallery-item-psn"> <a className="smallery-item-uri" data-cat="1" title="FILLINALT" data-size="FILLINSIZE" data-pid="FILLINPICS" data-index="FILLINNUMBER">
                                    <img className="smallery-item-img loaded" data-src={image1} alt="FILLINALT" src={image1} data-was-processed="true" />
                                </a> </figure>
                            </div>
                            <div className="smallery-item-wrp ttdegalleryitem" data-pswp-uid="1">
                                <figure className="smallery-item-psn"> <a className="smallery-item-uri" data-cat="1" title="FILLINALT" data-size="FILLINSIZE" data-pid="FILLINPICS" data-index="FILLINNUMBER">
                                    <img className="smallery-item-img loaded" data-src={image2} alt="FILLINALT" src={image2} data-was-processed="true" />
                                </a> </figure>
                            </div>
                            <div className="smallery-item-wrp ttdegalleryitem" data-pswp-uid="1">
                                <figure className="smallery-item-psn"> <a className="smallery-item-uri" title="FILLINALT" data-size="FILLINSIZE" data-cat="1" data-pid="FILLINPICS" data-index="FILLINNUMBER">
                                    <img className="smallery-item-img loaded" data-src={image3} alt="FILLINALT" src={image3} data-was-processed="true" />
                                </a> </figure>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-9">
                        <div class="site-text">
                        <div class="site-text-less" id="view-content-1">
                          <div id="view-content-height-1">
                            <Wrapper dangerouslySetInnerHTML={{ __html: text }} />
                          </div>
                        </div>
                        {/* <div class="site-text-more"> <a class="btn btn-outline" onclick="ttdeToggleVisibility(this, &#39;view-content-1&#39;, &#39;view-content-height-1&#39)">Expand
                            to read more</a> </div> */}
                      </div>
                    </div>
                </div>
            </section>
            </div>
        </div>
    </div>
);

export default TextSection
  
  TextSection.propTypes = {
    title: PropTypes.any.isRequired,
    text: PropTypes.any.isRequired,
  };