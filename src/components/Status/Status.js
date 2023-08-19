import { List, ListItem, Label, Quantity } from './Status.styled';

export const Status = ({ stat: { likes, views, followers } }) => {
  return (
    <List>
      <ListItem>
        <Label>Followers</Label>
        <Quantity>{followers}</Quantity>
      </ListItem>
      <ListItem>
        <Label>Views</Label>
        <Quantity>{views}</Quantity>
      </ListItem>
      <ListItem>
        <Label>Likes</Label>
        <Quantity>{likes}</Quantity>
      </ListItem>
    </List>
  );
};
