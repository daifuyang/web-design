import { IPublicModelPluginContext } from '@alilc/lowcode-types';
import { injectAssets } from '@alilc/lowcode-plugin-inject';
import assets from '../../services/assets.json';
import { getProjectSchema } from '../../services/mockService';
import { getPage } from 'src/services/page';
const EditorInitPlugin = (ctx: IPublicModelPluginContext, options: any) => {
  return {
    async init() {
      const { material, project, config } = ctx;
      const scenarioName = options['scenarioName'];
      const scenarioDisplayName = options['displayName'] || scenarioName;
      const params = options['params'] || {};
      // 保存在 config 中用于引擎范围其他插件使用
      config.set('scenarioName', scenarioName);
      config.set('scenarioDisplayName', scenarioDisplayName);
      config.set('params', params);

      // 设置物料描述

      await material.setAssets(await injectAssets(assets));
      const { id } = params;
      const res: any = await getPage(id);
      if (res.code == 1) {
        const { schema } = res.data;
        // 加载 schema
        project.importSchema({
          componentsTree: [schema]
        } as any);
      }
    },
  };
};
EditorInitPlugin.pluginName = 'EditorInitPlugin';
EditorInitPlugin.meta = {
  preferenceDeclaration: {
    title: '保存插件配置',
    properties: [
      {
        key: 'scenarioName',
        type: 'string',
        description: '用于localstorage存储key',
      },
      {
        key: 'displayName',
        type: 'string',
        description: '用于显示的场景名',
      },
      {
        key: 'params',
        type: 'object',
        description: '用于扩展信息',
      },
    ],
  },
};
export default EditorInitPlugin;
