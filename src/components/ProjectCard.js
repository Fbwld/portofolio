/* eslint-disable jsx-a11y/alt-text */
import { Col } from "react-bootstrap";
import "../css/ProjectCard.css"


export function ProjectCard({ title, description, imgUrl }) {
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
    </Col>
  )
}