import React from 'react';
import FetchInformation from './fetchInformation.js'

class Popup extends React.Component {
  constructor() {
    super();
    this.state = {
      hidePopup: false
    }

    this.closeModal = this.closeModal.bind(this);
    this.popupInstance = (<div className='modal' id='popup'>
        <div className='modal-content'>
        <h2 className='headline'>GDPR consent</h2>
        <FetchInformation close={this.closeModal}></FetchInformation>
        </div>
    </div>)

  }

  closeModal() {
    this.setState({hidePopup: true});
    this.enableScroll()
  }

  enableScroll() {
    document.body.style.overflow = 'auto'
  }

  render() {
    const style = this.state.hidePopup ? {display: 'none'} : {};
    return (<div style={style}>
      {this.popupInstance}
    </div>)

  }
}

export default Popup;
