import React, {Component} from 'react';

const styles = {
  footer: {
    padding: '0.5rem',
    fontSize: '1rem',
    backgroundColor: '#26d9de',
    textAlign: 'center'
  }
};

export class Footer extends Component {
  render() {
    return (
      <footer style={styles.footer}>
        Build with ♥ by the&nbsp;
        <a href="https://github.com/orgs/FountainJS/people">
          FountainJS team
        </a>
      </footer>
    );
  }
}
