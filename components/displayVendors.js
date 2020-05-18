import React from 'react';

class DisplayVendors extends React.Component {
  constructor() {
    super();
    this.state = {
      text: [],
      list: []
    };
  }

  componentDidMount() {
    const URL = 'https://gist.githubusercontent.com/MartaAG/7b7573c8e0fc063180d2d7451b4353fa/raw/21bc65a5892ab4762aa1faa7bd15d7e94f52a07b/vendors.json';
    fetch(URL).then(response => {
      return response.json();
    }).then(response => {
      let txt = response.purposes.map((purpose) => {
        return (<div>
          <h3>{purpose.name}</h3>
          <p>
            {purpose.description}
          </p>
        </div>
        )
      })
      this.setState({text:txt});
      console.log('state', this.state.text)
    })
  }

  render() {
    return (<div>
      <div id='legal'>
      {this.state.text}</div>
      <div id='listOfVendors'></div>
    </div>)
  }
}

export default DisplayVendors
