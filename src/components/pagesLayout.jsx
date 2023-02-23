import React from 'react';

class PagesLayout extends React.Component {
  constructor(props) {
    super(props);
    this.state = '';
  }

  render() {
    return (
      <>
        <header><nav>Nav</nav></header>
        <main><h2>Pages Layout</h2></main>
      </>
    );
  }
}

export default PagesLayout;
