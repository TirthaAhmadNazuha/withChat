import React from 'react';
import BottomNav from './bottomNav';

class PagesLayout extends React.Component {
  constructor(props) {
    super(props);
    this.state = '';
  }

  render() {
    return (
      <>
        <header><h1>WithChat</h1></header>
        <main><h2>Pages Layout</h2></main>
        <BottomNav />
      </>
    );
  }
}

export default PagesLayout;
