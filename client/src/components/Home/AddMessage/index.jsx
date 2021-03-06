import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { propType } from 'graphql-anywhere';
import PropTypes from 'prop-types';

import MESSAGE_LIST_QUERY from '../../../graphQL/queries/MessageList.graphql';
import CREATE_MESSAGE_MUTATION from '../../../graphql/mutations/CreateMessage.graphql';

import './addMessage.sass';

class AddMessage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: ''
    }

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange (e) {
    this.setState({
      [e.target.name]: e.target.value
    });

  }

  async onSubmit (e) {
    e.preventDefault();

    const variables = {
      id: this.props.channel_id,
      content: this.state.content
    };
    

    try {
      await this.props.mutate({
        variables,
        optimisiticResponse: {
          __typename: 'Mutation',
          createMessage: {
            id: Math.round(Math.random() * -1000000),
            author: {
              id: localStorage._id,
              username: localStorage.username,
              __typename: 'User'
            },
            createdAt: new Date(),
            content: variables.comment,
            __typename: "Message",
          }
        },
        update: (store, { data: { createMessage }}) => {
          // reads all messages in this specific channel from cache
          const data = store.readQuery({
            query: MESSAGE_LIST_QUERY,
            variables: {
              id: this.props.channel_id
            } 
          });
          
          createMessage.__typename = "Message";
          const node = {
            cursor: createMessage.id,
            node: createMessage,
            __typename: "MessageEdge"
          }

          // pushes newly created messages in all messages array
          data.messages.edges.push(node);

          // updates the all messages back in the cache
          store.writeQuery({ 
            query: MESSAGE_LIST_QUERY,
            data,
            variables: {
              id: this.props.channel_id,
            }
          });
          
          this.setState({ content: '' });
        }
      });
    } catch (err) {
      console.log(err);
    } 
  }

  render() {  
    const to = this.props.channel_name ? `#${this.props.channel_name}` : `@${this.props.username}`;
    
    return (
      <div className="add__message">
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            name="content"
            value={this.state.content}
            placeholder={`Message ${to}`}
            onChange={this.onChange}
          />
        </form>
      </div>
    );
  }
};

AddMessage.propType = {
  mutate: PropTypes.func.isRequired,
  channel_id: PropTypes.string.isRequired,
};

export default graphql(CREATE_MESSAGE_MUTATION)(AddMessage);