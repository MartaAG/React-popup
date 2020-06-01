import React from 'react';


class Vendor extends React.Component {
  constructor(props) {
    super()
    this.handleCheck = this.handleCheck.bind(this);
  };

  handleCheck(e) {
      this.props.onCheckboxChange(this.props.id, e.target.checked)
  };

    render() {
    return (

      <li className='vendorList'
          id={this.props.id}
          key={this.props.id}>
          {this.props.name}

          <a href={this.props.policyUrl}
            className='companyLink'>
             {this.props.policyUrl} </a>

          <label className='switch'>
            <input type='checkbox'
                className='switch-input'
                onChange={this.handleCheck}
                />

        <span className='switch-handle'></span>
        </label>
    </li>)}

}

export default Vendor;
