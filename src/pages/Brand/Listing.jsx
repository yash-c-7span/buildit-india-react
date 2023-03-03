import { TitleBar } from '../../components/Card';
import { AdminLayout } from '../../layout/admin/AdminLayout';
import * as M from '../../components/MaterialTable';
import { useEffect, useState } from 'react';
import { brandlist } from '../../js/brand';
import { Pagination } from '../../components/Pagination';
import { Link } from 'react-router-dom';

export default function Listing() {

    let [brand, setBrand] = useState({
        list: [],
        meta: null
    });

    useEffect((e) => {
        brandlist().then(res => {
            setBrand({ ...brand, list: res.data, meta: res.meta });
        });
    }, []);

    return (<>
        <AdminLayout>
            <div className='w-full'>
                <TitleBar createUrl='/brands/+' title="Brands" />
                <div className='py-8 px-3'>

                    <M.Table>
                        <M.THead>
                            <M.Row>
                                <M.HeadItem>#ID</M.HeadItem>
                                <M.HeadItem>Logo</M.HeadItem>
                                <M.HeadItem>Name</M.HeadItem>
                                <M.HeadItem>Tag</M.HeadItem>
                                <M.HeadItem>Action</M.HeadItem>
                            </M.Row>
                        </M.THead>

                        <M.TBody>
                            {
                                brand.list ?
                                    brand.list.map(({ id, name, tag, logo }, key) => {
                                        return <M.Row key={key}>
                                            <M.Item>{id}</M.Item>
                                            <M.Item>
                                                <div className="flex items-center">
                                                    <div className="flex-shrink-0 h-10 w-10">
                                                        <a target='_blank' href={logo.url}>
                                                            <img className="h-10 w-10 rounded-full" src={logo.url} alt="" />
                                                        </a>
                                                    </div>
                                                </div>
                                            </M.Item>
                                            <M.Item>{name ?? '-'}</M.Item>
                                            <M.Item>{tag ?? '-'}</M.Item>
                                            <M.Item>
                                                <Link className='bg-blue-500 text-white px-2 py-1 rounded'>Edit</Link>
                                            </M.Item>
                                        </M.Row>
                                    })
                                    : null

                            }
                        </M.TBody>
                    </M.Table>

                    {
                        brand.meta ?
                            <Pagination meta={brand.meta} onPageChange={(e) => {
                                brandlist({
                                    page: (e.selected + 1)
                                }).then((res) => {
                                    setBrand({ ...brand, list: res.data, meta: res.meta });
                                })
                            }} />
                            : null
                    }

                </div>
            </div>
        </AdminLayout>
    </>);
}


