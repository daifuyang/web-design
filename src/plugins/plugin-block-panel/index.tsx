import { IPublicModelPluginContext } from '@alilc/lowcode-types';
import BlocksPane from '../plugin-block-panel/components/pane';
const BlockPanelPlugin = (ctx: IPublicModelPluginContext) => {
  return {
    async init() {
      const { skeleton, project } = ctx;
      // 注册组件面板
      const blocksPane = skeleton.add({
        area: 'leftArea',
        type: 'PanelDock',
        name: 'blocksPane',
        content: BlocksPane,
        contentProps: {},
        props: {
          align: 'top',
          icon: <h1>1</h1>,
          description: '区块',
        },
      });
      blocksPane?.disable?.();
      project.onSimulatorRendererReady(() => {
        blocksPane?.enable?.();
      })
    },
  };
}
BlockPanelPlugin.pluginName = 'BlockPanelPlugin';
export default BlockPanelPlugin;