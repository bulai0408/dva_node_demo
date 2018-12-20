import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';
import { Upload, Icon, message, Button } from 'antd';
import { routerRedux } from 'dva/router';

import ImageUpload from '../components/ImageUpload';

class AddGoddsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fileList: []
    }
  }

  componentDidMount = () => {
  }

  handleUpload = (fileList) => {
    this.setState({ fileList });
  }

  render() {
    const { fileList } = this.state;
    return (
      <div className={styles.normal} >
        <ImageUpload fileList={fileList} setFileList={this.handleUpload} />
      </div>
    );
  }
}


export default connect()(AddGoddsPage);
