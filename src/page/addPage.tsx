import { Dialog, Grid, Message } from '@alifd/next';
const { Row, Col } = Grid;
import styles from './addPage.module.scss'
import { addPage } from 'src/services/page';
import { redirect } from 'src/utils/util';

export default function AddPage(props) {
    return <Dialog
        v2
        {...props}
    >
        <Row>
            <Col span={6}>
                <div onClick={async () => {
                    // 新建空模板页面

                    const res: any = await addPage({
                        title: "空白页面",
                        description: "默认空白页面"
                    })
                    if (res.code === 1) {
                        Message.success(res.msg)
                        // 跳转到对应的id页面
                        redirect({id:res.data.id})
                    }

                }} className={styles.root}>
                    <div className={styles.card}>
                        空白模板
                    </div>
                </div>
            </Col>
        </Row>
    </Dialog>
}