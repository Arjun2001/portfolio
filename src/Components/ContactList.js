import React from "react";
import { Button, ListGroup, OverlayTrigger, Tooltip } from "react-bootstrap";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { IoMdDocument } from "react-icons/io";
import { MdEmail } from "react-icons/md";

import "../css/Components/ContactList.css";

export function ContactList(props) {
  const tooltip = (name) => {
    return <Tooltip id={`tooltip-${name}`}>{name}</Tooltip>;
  };

  return (
    <ListGroup
      horizontal={props.isHorizontal}
      className="list-group list-group-sidebar"
    >
      <ListGroup.Item>
        <OverlayTrigger
          trigger="hover"
          placement="right"
          overlay={tooltip("Github")}
          delay="750"
        >
          <Button
            href="https://github.com/Arjun2001"
            target="_blank"
            variant="secondary"
            className="list-group-item"
          >
            <FaGithub size="1.25em" />
          </Button>
        </OverlayTrigger>
      </ListGroup.Item>

      <ListGroup.Item>
        <OverlayTrigger
          trigger="hover"
          placement="right"
          overlay={tooltip("LinkedIn")}
          delay="750"
        >
          <Button
            href="https://www.linkedin.com/in/arjun2001/"
            target="_blank"
            variant="secondary"
            className="list-group-item"
          >
            <FaLinkedin size="1.25em" />
          </Button>
        </OverlayTrigger>
      </ListGroup.Item>
      <ListGroup.Item>
        <OverlayTrigger
          trigger="hover"
          placement="right"
          overlay={tooltip("Twitter")}
          delay="750"
        >
          <Button
            href="https://twitter.com/arjundevpk"
            target="_blank"
            variant="secondary"
            className="list-group-item"
          >
            <FaTwitter size="1.25em" />
          </Button>
        </OverlayTrigger>
      </ListGroup.Item>
      <ListGroup.Item>
        <OverlayTrigger
          trigger="hover"
          placement="right"
          overlay={tooltip("Resume")}
          delay="750"
        >
          <Button
            href={require("../data/resume.pdf")}
            target="_blank"
            variant="secondary"
            className="list-group-item"
          >
            <IoMdDocument size="1.25em" />
          </Button>
        </OverlayTrigger>
      </ListGroup.Item>
      <ListGroup.Item>
        <OverlayTrigger
          trigger="hover"
          placement="right"
          overlay={tooltip("Email")}
          delay="750"
        >
          <Button
            href="mailto:arjundevpk2001@gmail.com"
            target="_blank"
            variant="secondary"
            className="list-group-item"
          >
            <MdEmail size="1.25em" />
          </Button>
        </OverlayTrigger>
      </ListGroup.Item>
    </ListGroup>
  );
}

export default ContactList;
