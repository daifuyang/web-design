import React, { useState, useEffect } from 'react';
import { IPublicModelPluginContext } from '@alilc/lowcode-types';
import { Dropdown, Menu, Drawer, Message } from '@alifd/next';
import { getPage, getPageList } from 'src/services/page';
import './index.scss';
export interface IProps {
  logo?: string;
  href?: string;
  scenarioInfo?: any;
  scenarioDisplayName?: string;
}

const Logo: React.FC<IProps> = (props): React.ReactElement => {
  const parsedUrl = new URL(window.location.href);
  const id = parsedUrl.searchParams.get('id');

  const [open, setOpen] = useState(false);
  const [list, setList] = useState([]);
  const [detail, setDetail] = useState({});

  const fetchDetail = async (id: number) => {
    const res: any = await getPage(id);
    if (res?.code == 1) {
      setDetail(res.data);
      return
    }
    Message.error(res.msg)
  };

  const fetchList = async () => {
    const res: any = await getPageList({ pageSize: 0 });
    if (res?.code == 1) {
      setList(res.data);
      return
    }
    Message.error(res.msg)
  };

  useEffect(() => {
    const numberId = Number(id);
    if (numberId > 0) {
      fetchDetail(numberId);
      fetchList();
    }
  }, [id]);

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
      {/* <a className="logo" target="blank" href={props.href || 'https://lowcode-engine.cn'} style={{ backgroundImage: `url(${props.logo})` }} /> */}
      {/* <div className="scenario-name">{scenarioDisplayName}</div> */}
      {/* {
      urls && (
        <Dropdown
          className="info-dropdown"
          trigger={(
            <img
              style={{
                height: '18px',
                position: 'relative',
                top: '-2px',
              }}
              src="https://img.alicdn.com/imgextra/i4/O1CN013upU1R1yl5wVezP8k_!!6000000006618-2-tps-512-512.png"
            />
          )}
          triggerType="click"
        >
          <Menu onItemClick={(key, item) => window.open(key, '_blank')}>
            {
              urls.map((url: any) => <Menu.Item key={url.value}>{url.key}</Menu.Item>)
            }
          </Menu>
        </Dropdown>
      )
    } */}
    </div>
  );
};
// 示例 Logo widget
const LogoSamplePlugin = (ctx: IPublicModelPluginContext) => {
  return {
    async init() {
      const { skeleton, config } = ctx;
      const scenarioDisplayName = config.get('scenarioDisplayName');
      const scenarioInfo = config.get('scenarioInfo');
      // 注册 logo widget
      skeleton.add({
        area: 'topArea',
        type: 'Widget',
        name: 'logo',
        content: <Logo scenarioDisplayName={scenarioDisplayName} scenarioInfo={scenarioInfo} />,
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
