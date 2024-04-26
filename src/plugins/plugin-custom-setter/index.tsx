import { IPublicModelPluginContext } from '@alilc/lowcode-types';
import TitleSetter from '@alilc/lowcode-setter-title';
import BehaviorSetter from './setters/behavior-setter';
import CustomSetter from './setters/custom-setter';
import ArticlesSetter from './setters/articles-setter';

// 保存功能示例
const CustomSetterPlugin = (ctx: IPublicModelPluginContext) => {
  return {
    async init() {
      const { setters } = ctx;

      setters.registerSetter('TitleSetter', TitleSetter);
      setters.registerSetter('BehaviorSetter', BehaviorSetter);
      setters.registerSetter('CustomSetter', CustomSetter);
      setters.registerSetter('ArticlesSetter', ArticlesSetter);
    },
  };
}
CustomSetterPlugin.pluginName = 'CustomSetterPlugin';
export default CustomSetterPlugin;