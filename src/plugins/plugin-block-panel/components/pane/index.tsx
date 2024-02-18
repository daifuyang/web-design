const Pane = (props: any) => {
  const { editor } = props;
  const { material, common, project, event } = (window as any).AliLowCodeEngine || {};

  const isNewEngineVersion = !!material;

  const registerAdditive = (shell: HTMLDivElement | null) => {
    if (!shell || shell.dataset.registered) {
      return;
    }

    const designer = !isNewEngineVersion ? editor?.get('designer') : null;
    const _dragon = isNewEngineVersion ? common.designerCabin.dragon : designer?.dragon;
    if (!_dragon || (!isNewEngineVersion && !designer)) {
      return;
    }

    // eslint-disable-next-line
    const click = (e: Event) => {};

    shell.addEventListener('click', click);

    _dragon.from(shell, (e: Event) => {
      const doc = isNewEngineVersion ? project.getCurrentDocument() : designer?.currentDocument;
      if (!doc) {
        return false;
      }

      const dragTarget = {
        type: 'nodedata',
        data: {
          componentName: 'Div',
          props: {},
          hidden: false,
          title: '',
          isLocked: true,
          condition: true,
          conditionGroup: '',
          children: [
            {
              componentName: 'Title',
              props: {
                children: 'OUR ADVANTAGE CONDITION',
                level: 3,
                style: {
                  textAlign: 'center',
                  color: '#9b9b9b',
                },
              },
              hidden: false,
              title: '',
              isLocked: false,
              condition: true,
              conditionGroup: '',
            },
            {
              componentName: 'Title',
              props: {
                children: '我们的优势',
                level: 1,
                style: {
                  textAlign: 'center',
                },
              },
              hidden: false,
              title: '',
              isLocked: false,
              condition: true,
              conditionGroup: '',
            },
            {
              componentName: 'Row',
              props: {
                style: {
                  marginTop: '30px',
                },
              },
              hidden: false,
              title: '',
              isLocked: false,
              condition: true,
              conditionGroup: '',
              children: [
                {
                  componentName: 'Col',
                  props: {
                    xs: 6,
                    sm: 6,
                    md: 6,
                    lg: 6,
                    xl: 6,
                    xxl: 3,
                  },
                  hidden: false,
                  title: '',
                  isLocked: false,
                  condition: true,
                  conditionGroup: '',
                  children: [
                    {
                      componentName: 'Div',
                      props: {
                        style: {
                          textAlign: 'center',
                        },
                      },
                      hidden: false,
                      title: '',
                      isLocked: false,
                      condition: true,
                      conditionGroup: '',
                      children: [
                        {
                          componentName: 'Image',
                          props: {
                            src: 'https://aimg8.dlszyht.net.cn/module/simplepic/1436296/991/1980926_1493204705.png?x-oss-process=image/resize,m_fixed,w_49,h_54,limit_0',
                            width: '48',
                            height: '',
                            alt: 'logo',
                          },
                          hidden: false,
                          title: '',
                          isLocked: false,
                          condition: true,
                          conditionGroup: '',
                        },
                        {
                          componentName: 'Title',
                          props: {
                            children: '品质优先',
                            level: 5,
                            style: {
                              marginTop: '8px',
                            },
                          },
                          hidden: false,
                          title: '',
                          isLocked: false,
                          condition: true,
                          conditionGroup: '',
                        },
                        {
                          componentName: 'Paragraph',
                          props: {
                            children: '标准的尺标 ，严谨的态度，匠心手作 ，只为品质与艺术的追求',
                            style: {
                              marginTop: '8px',
                            },
                          },
                          hidden: false,
                          title: '',
                          isLocked: false,
                          condition: true,
                          conditionGroup: '',
                        },
                      ],
                    },
                  ],
                },
                {
                  componentName: 'Col',
                  props: {
                    xs: 6,
                    sm: 6,
                    md: 6,
                    lg: 6,
                    xl: 6,
                    xxl: 3,
                  },
                  hidden: false,
                  title: '',
                  isLocked: false,
                  condition: true,
                  conditionGroup: '',
                  children: [
                    {
                      componentName: 'Div',
                      props: {
                        style: {
                          textAlign: 'center',
                        },
                      },
                      hidden: false,
                      title: '',
                      isLocked: false,
                      condition: true,
                      conditionGroup: '',
                      children: [
                        {
                          componentName: 'Image',
                          props: {
                            src: 'https://aimg8.dlszyht.net.cn/module/simplepic/1436296/991/1980926_1493204705.png?x-oss-process=image/resize,m_fixed,w_49,h_54,limit_0',
                            width: '48',
                            height: '',
                            alt: 'logo',
                          },
                          hidden: false,
                          title: '',
                          isLocked: false,
                          condition: true,
                          conditionGroup: '',
                        },
                        {
                          componentName: 'Title',
                          props: {
                            children: '品质优先',
                            level: 5,
                            style: {
                              marginTop: '8px',
                            },
                          },
                          hidden: false,
                          title: '',
                          isLocked: false,
                          condition: true,
                          conditionGroup: '',
                        },
                        {
                          componentName: 'Paragraph',
                          props: {
                            children: '标准的尺标 ，严谨的态度，匠心手作 ，只为品质与艺术的追求',
                            style: {
                              marginTop: '8px',
                            },
                          },
                          hidden: false,
                          title: '',
                          isLocked: false,
                          condition: true,
                          conditionGroup: '',
                        },
                      ],
                    },
                  ],
                },
                {
                  componentName: 'Col',
                  props: {
                    xs: 6,
                    sm: 6,
                    md: 6,
                    lg: 6,
                    xl: 6,
                    xxl: 3,
                  },
                  hidden: false,
                  title: '',
                  isLocked: false,
                  condition: true,
                  conditionGroup: '',
                  children: [
                    {
                      componentName: 'Div',
                      props: {
                        style: {
                          textAlign: 'center',
                        },
                      },
                      hidden: false,
                      title: '',
                      isLocked: false,
                      condition: true,
                      conditionGroup: '',
                      children: [
                        {
                          componentName: 'Image',
                          props: {
                            src: 'https://aimg8.dlszyht.net.cn/module/simplepic/1436296/991/1980926_1493204705.png?x-oss-process=image/resize,m_fixed,w_49,h_54,limit_0',
                            width: '48',
                            height: '',
                            alt: 'logo',
                          },
                          hidden: false,
                          title: '',
                          isLocked: false,
                          condition: true,
                          conditionGroup: '',
                        },
                        {
                          componentName: 'Title',
                          props: {
                            children: '品质优先',
                            level: 5,
                            style: {
                              marginTop: '8px',
                            },
                          },
                          hidden: false,
                          title: '',
                          isLocked: false,
                          condition: true,
                          conditionGroup: '',
                        },
                        {
                          componentName: 'Paragraph',
                          props: {
                            children: '标准的尺标 ，严谨的态度，匠心手作 ，只为品质与艺术的追求',
                            style: {
                              marginTop: '8px',
                            },
                          },
                          hidden: false,
                          title: '',
                          isLocked: false,
                          condition: true,
                          conditionGroup: '',
                        },
                      ],
                    },
                  ],
                },
                {
                  componentName: 'Col',
                  props: {
                    xs: 6,
                    sm: 6,
                    md: 6,
                    lg: 6,
                    xl: 6,
                    xxl: 3,
                  },
                  hidden: false,
                  title: '',
                  isLocked: false,
                  condition: true,
                  conditionGroup: '',
                  children: [
                    {
                      componentName: 'Div',
                      props: {
                        style: {
                          textAlign: 'center',
                        },
                      },
                      hidden: false,
                      title: '',
                      isLocked: false,
                      condition: true,
                      conditionGroup: '',
                      children: [
                        {
                          componentName: 'Image',
                          props: {
                            src: 'https://aimg8.dlszyht.net.cn/module/simplepic/1436296/991/1980926_1493204705.png?x-oss-process=image/resize,m_fixed,w_49,h_54,limit_0',
                            width: '48',
                            height: '',
                            alt: 'logo',
                          },
                          hidden: false,
                          title: '',
                          isLocked: false,
                          condition: true,
                          conditionGroup: '',
                        },
                        {
                          componentName: 'Title',
                          props: {
                            children: '品质优先',
                            level: 5,
                            style: {
                              marginTop: '8px',
                            },
                          },
                          hidden: false,
                          title: '',
                          isLocked: false,
                          condition: true,
                          conditionGroup: '',
                        },
                        {
                          componentName: 'Paragraph',
                          props: {
                            children: '标准的尺标 ，严谨的态度，匠心手作 ，只为品质与艺术的追求',
                            style: {
                              marginTop: '8px',
                            },
                          },
                          hidden: false,
                          title: '',
                          isLocked: false,
                          condition: true,
                          conditionGroup: '',
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
      };

      return dragTarget;
    });

    shell.dataset.registered = 'true';
  };

  return (
    <div ref={registerAdditive} style={{ width: 50, height: 50, border: '1px solid #999' }}>
      演示区块
    </div>
  );
};

export default Pane;
