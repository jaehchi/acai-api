import React, { Component } from 'react';
import { Mutation } from 'react-apollo';

import CREATE_RELATION_MUTATION from '../../../graphQL/mutations/CreateRelation.graphql';
import FRIEND_LIST_QUERY from '../../../graphQL/queries/FriendList.graphql';

import './createRelationModal.sass';

class CreateRelation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: null
    };

    this.onChange = this.onChange.bind(this);
    this.toggleRelationModal = this.toggleRelationModal.bind(this);
  }

  onChange (e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  toggleRelationModal () {
    this.props.toggleModal();
  }


  render() {

    return (
      <div id="create__relation">
        <div className="cr-header">
          <h1>Add Friend</h1>
          <p>You can add a friend with their username.</p>
        </div>
        <div className="cr-input">
          <input name="username" type="text" placeholder="Enter an Username" onChange={this.onChange}/>
        </div>
        <div className="cr-footer">
          <button className="cr-cancel" onClick={this.toggleRelationModal}>
            <span>Cancel</span>
          </button>
          <Mutation 
            mutation={CREATE_RELATION_MUTATION} 
            variables={{ friend_username: this.state.username, action: 0 }}
            update={(store, { data: { createRelation } }) => {
              const data = store.readQuery({
                query: FRIEND_LIST_QUERY,
                variables: { filter: 'Pending' },
              })

              console.log('hey', data, createRelation, data.relations.count.length + 1,)
              
              store.writeQuery({
                query: FRIEND_LIST_QUERY,
                data: {
                  relations: {
                    relations: [...data.relations.relations, createRelation],
                    count: data.relations.count + 1,
                    __typename: "RelationPayload" 
                  },
                },
                variables: { filter: 'Pending' }    
              });

              this.toggleRelationModal();

            }}
          >
            { createRelationMutation => ( <button onClick={createRelationMutation} className='cr-create'>Send Request</button> )}
          </Mutation>
        </div>
      </div>
    );
  }
}

export default CreateRelation;