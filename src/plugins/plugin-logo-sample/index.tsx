import React, { useState, useEffect } from 'react';
import { IPublicModelPluginContext } from '@alilc/lowcode-types';
import { Drawer, Message, Button, Nav, Overlay } from '@alifd/next';
import { Input, Icon } from '@alifd/next'
import { getPageList } from 'src/services/page';
const { event } = (window as any).AliLowCodeEngine || {};
import classNames from 'classnames';
import styles from './index.module.scss';
import { getSearchParams, redirect } from 'src/utils/util';
import { emitAddPageEventName } from '../plugin-add-page-panel/components/pane';

const { Item, SubNav, PopupItem } = Nav
const { Popup } = Overlay;

export interface IProps {
  logo?: string;
  href?: string;
  scenarioInfo?: any;
  scenarioDisplayName?: string;
}

const Logo: React.FC<IProps> = (props: any): React.ReactElement => {

  const { pageDetail } = props

  const id = getSearchParams('id')

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
    <div className={styles.root}>
      <h1 className={styles.logo}>NextCMS</h1>
      <div
        className={styles.pageList}
        onClick={() => {
          setOpen(true);
        }}
      >
        {pageDetail?.title || '页面列表'}
      </div>

      <Drawer
        className={styles.drawer}
        title="页面列表"
        visible={open}
        bodyStyle={{ padding: 12 }}
        placement={'left'}
        onClose={() => {
          setOpen(false);
        }}
      >
        <div className={styles.searchWrap}>
          <Input
            innerAfter={
              <Icon
                type="search"
                size="xs"
                style={{ margin: 4 }}
              />
            }
            placeholder="搜索"
          />
          <Button onClick={ () => {
            event.emit(emitAddPageEventName,true);
          } } className={styles.add} type="primary" size="large">
            <Icon type="add" />
          </Button>
        </div>

        <Nav
          style={{ width: "100%" }}
          embeddable={true}
          triggerType="hover"
          popupAutoWidth={false}
        >
          {list.map((item: any) => {
            return (
              <PopupItem key={item.id} onClick={() => {
                redirect({ id: item.id })
              }} className={classNames({
                [styles.navPopup]: true,
                [styles.itemActive]: id == item.id
              })} label={`${item.title}`}>
                <div style={{ width: "100px", background: '#fff', color: '#fff' }}>
                  <Nav embeddable={true}>
                    <Item key={`${item.id}-settings`}>设置</Item>
                    <Item key={`${item.id}-home`}>设为首页</Item>
                    <Item key={`${item.id}-copy`}>复制页面</Item>
                    <Item key={`${item.id}-delete`}>删除页面</Item>
                  </Nav>
                </div>
              </PopupItem>
            )
          })}
        </Nav>
      </Drawer>
    </div>
  );
};
// 示例 Logo widget
const LogoSamplePlugin = (ctx: IPublicModelPluginContext) => {
  return {
    async init() {
      const { skeleton, config } = ctx;

      const pageDetail = config.get('pageDetail')

      // 注册 logo widget
      skeleton.add({
        area: 'topArea',
        type: 'Widget',
        name: 'logo',
        content: <Logo />,
        contentProps: {
          pageDetail
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
