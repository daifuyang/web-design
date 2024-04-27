import React, { Component } from 'react';
import { project } from '@alilc/lowcode-engine';
import { IPublicEnumTransformStage } from '@alilc/lowcode-types';
import _ from 'lodash';
// import classNames from 'classnames';

class ArticlesSetter extends Component<any, any> {
  render() {
    const { defaultValue, value, onChange, field } = this.props;

    const { node } = field;

    const id = field.node._id;

    if (node) {
      const oldNodeSchema = { ...node.schema };
      if (oldNodeSchema) {
        oldNodeSchema.loop = {
          type: 'JSExpression',
          value: `this.state.${id}`,
        };
        node.importSchema(oldNodeSchema);
      }
    }

    const docSchema = project.exportSchema(IPublicEnumTransformStage.Save);
    const dataSource: any = _.get(docSchema, 'componentsTree[0].dataSource', { list: [] });

    // 判定是否已经存在
    const oldList: any = _.filter(dataSource.list, (item: any) => {
      return item.id === id;
    });

    let exist: any = {};

    if (oldList?.length > 0) {
      exist = oldList[0];
    }

    const api: any = {
      type: 'editor',
      isInit: true,
      options: {
        params: {},
        method: 'GET',
        isCors: true,
        timeout: 5000,
        headers: {},
        uri: '/api/article',
      },
      id,
      dataHandler: {
        type: 'JSFunction',
        value: 'function(res) { return res.data }',
      },
    };

    if (JSON.stringify(exist?.options) !== JSON.stringify(api?.options)) {
      // 删除旧数据源
      const list = _.filter(dataSource.list, (item: any) => {
        return item.id !== id;
      });

      list.push(api);
      dataSource.list = list;
      _.set(docSchema, 'componentsTree[0].dataSource', dataSource);
      project.importSchema(docSchema);
    }
    // 自动创建数据源
    // 先判断是否存在旧数据源
    return <div>hello world</div>;
  }
}

export default ArticlesSetter;
