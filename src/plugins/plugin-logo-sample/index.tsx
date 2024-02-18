import React, { useState, useEffect } from 'react';
import { IPublicModelPluginContext } from '@alilc/lowcode-types';
import { Dropdown, Menu, Drawer, Message } from '@alifd/next';
import { getPageList } from 'src/services/page';
import './index.scss';
export interface IProps {
  logo?: string;
  href?: string;
  scenarioInfo?: any;
  scenarioDisplayName?: string;
}

const Logo: React.FC<IProps> = (props): React.ReactElement => {
  const [open, setOpen] = useState(false);
  const [list, setList] = useState([]);

  const fetchList = async () => {
    const res: any = await getPageList({ pageSize: 0 });
    if (res?.code == 1) {
      setList(res.data);
      return;
    }
    Message.error(res.msg);
  };

  useEffect(() => {
    fetchList();
  }, []);

  return (
    <div className="lowcode-plugin-logo">
      <h1 className="title">NextCMS</h1>
      <div
        className="page-manage"
        onClick={() => {
          setOpen(true);
        }}
      >
        页面
      </div>

      <Drawer
        title="页面列表"
        visible={open}
        placement={'left'}
        onClose={() => {
          setOpen(false);
        }}
      >
        {list.map((item: any) => {
          return <a href="">{item.title}</a>;
        })}
      </Drawer>
    </div>
  );
};
// 示例 Logo widget
const LogoSamplePlugin = (ctx: IPublicModelPluginContext) => {
  return {
    async init() {
      const { skeleton, config } = ctx;
      // 注册 logo widget
      skeleton.add({
        area: 'topArea',
        type: 'Widget',
        name: 'logo',
        content: <Logo />,
        contentProps: {
          logo: 'https://img.alicdn.com/imgextra/i4/O1CN013w2bmQ25WAIha4Hx9_!!6000000007533-55-tps-137-26.svg',
          href: 'https://lowcode-engine.cn',
        },
        props: {
          align: 'left',
        },
      });
    },
  };
};
LogoSamplePlugin.pluginName = 'LogoSamplePlugin';
LogoSamplePlugin.meta = {
  dependencies: ['EditorInitPlugin'],
};
export default LogoSamplePlugin;
