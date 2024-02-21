import React from 'react';
import ReactDOM from 'react-dom';
import { init, plugins } from '@alilc/lowcode-engine';
import { createFetchHandler } from '@alilc/lowcode-datasource-fetch-handler';
import EditorInitPlugin from './plugins/plugin-editor-init';
import UndoRedoPlugin from '@alilc/lowcode-plugin-undo-redo';
import ZhEnPlugin from '@alilc/lowcode-plugin-zh-en';
// import CodeGenPlugin from '@alilc/lowcode-plugin-code-generator'; // 出码
import DataSourcePanePlugin from '@alilc/lowcode-plugin-datasource-pane';
import SchemaPlugin from '@alilc/lowcode-plugin-schema';
import CodeEditorPlugin from '@alilc/lowcode-plugin-code-editor';
import ManualPlugin from '@alilc/lowcode-plugin-manual';
import InjectPlugin from '@alilc/lowcode-plugin-inject';
import SimulatorResizerPlugin from '@alilc/lowcode-plugin-simulator-select';
import ComponentPanelPlugin from './plugins/plugin-component-panel';
import BlockPanelPlugin from './plugins/plugin-block-panel';
import DefaultSettersRegistryPlugin from './plugins/plugin-default-setters-registry';
// import LoadIncrementalAssetsWidgetPlugin from './plugins/plugin-load-incremental-assets-widget';
import SaveSamplePlugin from './plugins/plugin-save-sample';
import PreviewSamplePlugin from './plugins/plugin-preview-sample';
import CustomSetterSamplePlugin from './plugins/plugin-custom-setter-sample';
import SetRefPropPlugin from '@alilc/lowcode-plugin-set-ref-prop';
import LogoSamplePlugin from './plugins/plugin-logo-sample';
import SimulatorLocalePlugin from './plugins/plugin-simulator-locale';
import lowcodePlugin from './plugins/plugin-lowcode-component';
import AddPagePanelPlugin from './plugins/plugin-add-page-panel'
import Home from 'src/page/home';
import appHelper from './appHelper';
import './global.scss';
import { getSearchParams } from './utils/util';

const id = getSearchParams('id')

async function registerPlugins() {
  await plugins.register(InjectPlugin);

  await plugins.register(EditorInitPlugin, {
    scenarioName: '',
    displayName: '',
    info: {
      urls: [],
    },
  });

  // 设置内置 setter 和事件绑定、插件绑定面板
  await plugins.register(DefaultSettersRegistryPlugin);

  await plugins.register(LogoSamplePlugin);

  await plugins.register(AddPagePanelPlugin);

  await plugins.register(ComponentPanelPlugin);

  await plugins.register(BlockPanelPlugin);

  await plugins.register(SchemaPlugin, { isProjectSchema: true });

  await plugins.register(ManualPlugin);

  // 注册回退/前进
  await plugins.register(UndoRedoPlugin);

  // 注册中英文切换
  await plugins.register(ZhEnPlugin);

  await plugins.register(SetRefPropPlugin);

  await plugins.register(SimulatorResizerPlugin);

  // 注册异步加载资源
  // await plugins.register(LoadIncrementalAssetsWidgetPlugin);

  // 插件参数声明 & 传递，参考：https://lowcode-engine.cn/site/docs/api/plugins#%E8%AE%BE%E7%BD%AE%E6%8F%92%E4%BB%B6%E5%8F%82%E6%95%B0%E7%89%88%E6%9C%AC%E7%A4%BA%E4%BE%8B
  await plugins.register(DataSourcePanePlugin, {
    importPlugins: [],
    dataSourceTypes: [
      {
        type: 'fetch',
      },
      {
        type: 'jsonp',
      },
    ],
  });

  await plugins.register(CodeEditorPlugin);

  // 注册出码插件
  // await plugins.register(CodeGenPlugin);

  await plugins.register(SaveSamplePlugin);

  await plugins.register(PreviewSamplePlugin);

  await plugins.register(CustomSetterSamplePlugin);

  // 设计器区域多语言切换
  await plugins.register(SimulatorLocalePlugin);

  // await plugins.register(lowcodePlugin);
}

async function lowcode() {
  await registerPlugins();

  init(document.getElementById('lce-container')!, {
    locale: 'zh-CN',
    enableCondition: true,
    enableCanvasLock: true,
    // 默认绑定变量
    supportVariableGlobally: true,
    requestHandlersMap: {
      fetch: createFetchHandler(),
    },
    appHelper,
  });
}

(async function main() {
  // 校验用户是否登录
  const div = document.createElement('div');
/*   div.style.position = 'fixed';
  div.style.background = '#fff';
  div.style.zIndex = '999';
  div.style.width = '100%';
  div.style.height = '100%';
  div.style.top = '0';
  div.style.left = '0'; */
  document.body.appendChild(div);
  ReactDOM.render(React.createElement(Home, { id, lowcode }), div);

})();
