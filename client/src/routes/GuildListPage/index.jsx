import React, { Component }from 'react';
import { graphql, Mutation, Query } from 'react-apollo';
import gql from 'graphql-tag';

import GuildList from '../../components/Home/GuildList';
import Loading from '../../components/globals/Loading';
import GUILDLIST_QUERY from '../../graphQL/GuildListQuery.graphql';

import './guildList.sass';

class GuildListPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="guildList">
        <Query query={GUILDLIST_QUERY}>
          { ({ loading, data }) => (
            <div>
              <GuildList guilds={data.guilds || []} />
              {loading ? <Loading /> : null}
            </div>
          )}
        </Query>
      </div>
    )
  }
}

export default GuildListPage;