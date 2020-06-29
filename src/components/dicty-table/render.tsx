import * as React from 'react';
import DictyTableItem from "../dicty-table-item/component";

export default function DictyTableRender(props) {
    return (
        <table className="dicty-table">
            <thead>
                <tr>
                    <th>Language</th>
                    <th>Name</th>
                    <th>Category</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {props.loading
                    ? <tr>
                            <th>Loading...</th>
                            <th></th>
                            <th></th>
                            <th></th>
                        </tr>
                    : props.dictys.map(item => <DictyTableItem key={item.lang + item.title}
                                                               lang={item.lang}
                                                               title={item.title}
                                                               category={item.category}/>)}
            </tbody>
        </table>
    )
}
