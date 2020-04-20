import React from 'react';
import {Button, Card, Title, Paragraph, Text} from 'react-native-paper';
import Strings from '../utils/Strings';

function BlogCard(props) {
  const {
    blog: {id, title, text, user},
    fromHome,
  } = props;
  return (
    <Card elevation={5} style={{margin: 10}}>
      <Card.Content>
        <Title>{title}</Title>
        <Paragraph>{text}</Paragraph>
      </Card.Content>
      <Card.Actions>
        {user ? <Text>{user.firstName + ' ' + user.lastName}</Text> : null}
        {!fromHome ? (
          <Button onPress={() => {}}>{Strings.btns.edit}</Button>
        ) : null}
      </Card.Actions>
    </Card>
  );
}

export default BlogCard;
