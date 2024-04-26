import React, { Component } from 'react';
import { project } from '@alilc/lowcode-engine';
import { IPublicEnumTransformStage } from '@alilc/lowcode-types';
import _ from 'lodash'
// import classNames from 'classnames';

class ArticlesSetter extends Component<any, any> {
  render() {
    const { defaultValue, value, onChange, field } = this.props;

    const id = field.node._id
 
    const docSchema = project.exportSchema(IPublicEnumTransformStage.Save);
    const dataSource: any = _.get(docSchema, 'componentsTree[0].dataSource', { list: [] });
    const list = _.filter(dataSource.list,  (item: any) => {
      return item.id != id
    } )

    const api: any = {
      "type": "editor",
      "isInit": true,
      "options": {
        "params": {},
        "method": "GET",
        "isCors": true,
        "timeout": 5000,
        "headers": {},
        "uri": "/api/category/1"
      },
      "id": "node_oclvg4zg833"
    }

    list.push(api);

    dataSource.list = list;

    _.set(docSchema, 'componentsTree[0].dataSource', dataSource);

   project.importSchema(docSchema);

    // 自动创建数据源
    // 先判断是否存在旧数据源
    return <div>hello world</div>;
  }
}

export default ArticlesSetter;
