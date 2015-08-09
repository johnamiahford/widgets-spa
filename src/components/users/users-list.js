'use strict';

import React from 'react';

class UsersList extends React.Component {

  render() {
    return (
      <div className={this.props.gridClassName}>
        <div className="widget">
          <div className="widget-header">Users
            <div className="pull-right"><input type="text" className="form-control input-sm" /></div>
          </div>
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th className="text-center">ID</th>
                  <th>Name</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="text-center">1</td>
                  <td>Joe Bloggs</td>
                </tr>
                <tr>
                  <td className="text-center">2</td>
                  <td>Timothy Hernandez</td>
                </tr>
                <tr>
                  <td className="text-center">3</td>
                  <td>Joe Bickham</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }

}

UsersList.defaultProps = {
  gridClassName: 'col-lg-6'
};

export default UsersList;
