import { getPageList } from 'src/services/page';

import './home.scss';
import { useEffect, useState } from 'react';

export default function Home(props: any) {
    const { id } = props;

    const parsedUrl = new URL(window.location.href);
    let token = parsedUrl.searchParams.get('token');
    const tokenStr = localStorage.getItem('token') || ''

    if(!token) {
        token = tokenStr
    }

    if (token && token != tokenStr) {
        localStorage.setItem('token', token)
    }


    if (!token) {
        return <div className="home-page">
            <div className="tips">
                用户身份已失效！
            </div>
        </div>
    }

    const [pageList, setPageList] = useState([])
    async function fetchData() {
        const res: any = await getPageList({ pageSize: 0 })
        if (res.code === 1) {
            setPageList(res.data)
        }
    }
    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div className="home-page">
            {pageList?.length === 0 && <div className="tips">
                当前站点没有页面，请前去
                <div className="add-page">+新建页面</div>
            </div>}
        </div>
    );
}
