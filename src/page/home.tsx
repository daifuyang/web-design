import { useEffect, useState } from 'react';
import { Loading } from '@alifd/next';
import AddPage from '../page/addPage';
import { getPageList } from 'src/services/page';
import { currentUser } from 'src/services/user';
import './home.scss';
import { redirect } from 'src/utils/util';

export default function Home(props: any) {
    const { id, lowcode } = props;

    const [loading, setLoading] = useState<Boolean>(true)
    const [open, setOpen] = useState<Boolean>(false)
    const [user, setUser] = useState<any>({})

    const parsedUrl = new URL(window.location.href);
    let token = parsedUrl.searchParams.get('token');
    const tokenStr = localStorage.getItem('token')

    if (!token) {
        token = tokenStr
    }

    if (token && token != tokenStr) {
        localStorage.setItem('token', token)
    }

    // 验证用户身份

    async function fetchCurrentUser() {
        const res: any = await currentUser()
        if (res?.code === 1) {
            setUser(res.data)
            fetchData()
            lowcode?.()
        } else {
            setLoading(false)
        }
    }

    const [pageList, setPageList] = useState([])
    async function fetchData() {
        const res: any = await getPageList({ pageSize: 0 })
        if (res.code === 1) {
            if(!id && res.data?.length > 0) {
                redirect({id: res.data[0].id})
            }
            setPageList(res.data)
        }
        setLoading(false)
    }
    useEffect(() => {
        fetchCurrentUser()
    }, [])

    if (loading) {
        return <div className="home-page">
            <Loading tip="加载中"></Loading>
        </div>
    }

    if (!user?.id) {
        return <div className="home-page">
            <div className="tips">
                用户身份已失效！
            </div>
        </div>
    }

    if (pageList?.length > 0) {
        return null
    }

    return (
        <>
            <AddPage title="请选择模板" visible={open} style={{ width: '60%' }} height='80%' footerActions={["ok"]} onOk={
                () => {
                    setOpen(false)
                }
            } onClose={() => {
                setOpen(false)
            }} />
            <div className="home-page">
                {pageList?.length === 0 && <div className="tips">
                    当前站点没有页面，请前去
                    <div onClick={() => {
                        setOpen(true)
                    }} className="add-page">+新建页面</div>
                </div>}
            </div>
        </>
    );
}
