/* eslint-disable jsx-a11y/alt-text */
import { Col } from "react-bootstrap";
import "../css/ProjectCard.css"
import {FiGithub} from "react-icons/fi"
import {BiLink} from "react-icons/bi"

export function ProjectCard({ title, description, imgUrl, urlgithub, urlLink }) {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img style={{
            width:"100%"
        }} src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
      <div className="d-flex icon-project">
        <a href={urlgithub} >
          <FiGithub size={25} className="icon-h" style={{
            marginRight:'10px'
          }}/>
        </a>
        <a href={urlLink} >
          <BiLink size={25} className="icon-h"/>
        </a>
      </div>
    </Col>
  )
}