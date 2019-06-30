import React, { Fragment } from "react";
import { Card, Image } from "semantic-ui-react";

const CourseItem = props => {
  const { images, short_description: shortDescription, title } = props.course;

  return (
    <Fragment>
      <Card>
        <Image src={images[0].url} wrapped ui={false} />
        <Card.Content>
          <Card.Header>{title}</Card.Header>
          <Card.Description>{shortDescription}</Card.Description>
        </Card.Content>
      </Card>
    </Fragment>
  );
};

export default CourseItem;
