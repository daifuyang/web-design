import { IPublicModelPluginContext } from '@alilc/lowcode-types';
import AddPage from './components/pane';
const AddPagePanelPlugin = (ctx: IPublicModelPluginContext) => {
  return {
    
    async init() {
      const { skeleton } = ctx;
      // 注册组件面板
      skeleton.add({
        area: 'topArea',
        type: 'Widget',
        name: 'addPage',
        content: <AddPage />,
        contentProps: {},
      });
    },
  };
}
AddPagePanelPlugin.pluginName = 'AddPagePanelPlugin';
export default AddPagePanelPlugin;