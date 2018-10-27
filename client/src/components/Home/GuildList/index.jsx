import React, { Component } from 'react';

import { graphql } from 'react-apollo';
import { fetchGuildsQuery } from '../../../graphQL/queries/guildList';

import GuildListItem from './GuildListItem';


class GuildList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { data: { loading, error, user } } = this.props;
    if (loading) {
      return <p>Loading...</p>;
    } else if (error) {
      return <p>Error!</p>;
    } else {
      console.log(user.memberOf)
      return (
        <ul>
          {
            user.memberOf.map(({ id, guildname, avatar }) => {
              return <GuildListItem key={id} guild={{ id, guildname, avatar }}/>
            })
          }
        </ul>
      );
    }
  }
}

export default graphql(fetchGuildsQuery)(GuildList);