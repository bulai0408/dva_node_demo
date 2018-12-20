import React, { Fragment } from 'react';
import { connect } from 'dva';
import { Upload, Icon, message, Button } from 'antd';
import PropTypes from 'prop-types';
import { routerRedux } from 'dva/router';

class imageUpload extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  handleUpload = (e) => {
    const { fileList } = e;
    const { setFileList } = this.props;
    setFileList(fileList);
  }

  render() {
    const { fileList } = this.props;

    return (
      <Fragment>
        <Upload name="files" action="http://localhost:8888/file/upload" listType="picture"
          headers={{ Authorization: `Bearer ${localStorage.getItem('token')}` }}
          fileList={fileList}
          onChange={this.handleUpload}>
          <Button type="ghost">
            <Icon type="upload" /> 点击上传
          </Button>
        </Upload>
      </Fragment>
    );
  }
}

imageUpload.defaultProps = {
  fileList: [],
  setFileList: () => { }
};
imageUpload.propTypes = {
  fileList: PropTypes.array.isRequired,
  setFileList: PropTypes.func.isRequired,
}

export default connect()(imageUpload);
